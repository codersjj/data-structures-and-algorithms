import { measureSort, testSort } from "./utils"

function mergeSort(arr: number[]): number[] {
  const n = arr.length
  // 递归的结束条件
  if (n <= 1) return arr
  // 1. 分解（divide）：对数组进行分解（分解成两个小数组）
  // 1.1. 切割数组
  const mid = Math.floor(n / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  // 1.2. 递归地切割 leftArr 和 rightArr
  const sortedLeftArr = mergeSort(leftArr)
  const sortedRightArr = mergeSort(rightArr)

  // 直到切割成一个个只有一个元素的数组时，才会第一次来到这里
  // 2. 合并（merge）：将两个子数组进行合并（双指针）
  const newArr: number[] = []
  // 2.1. 定义双指针
  let i = 0
  let j = 0

  while (i < sortedLeftArr.length && j < sortedRightArr.length) {
    if (sortedLeftArr[i] <= sortedRightArr[j]) {
      newArr.push(sortedLeftArr[i])
      i++
    } else {
      newArr.push(sortedRightArr[j])
      j++
    }
  }

  // 2.2. 判断是否某一个数组中还有剩余的元素
  // 循环完，左边的数组还有剩余
  if (i < sortedLeftArr.length) {
    newArr.push(...sortedLeftArr.slice(i))
  }
  // 循环完，右边的数组还有剩余
  if (j < sortedRightArr.length) {
    newArr.push(...sortedRightArr.slice(j))
  }

  // 3. 将合并后的数组返回
  return newArr
}

testSort(mergeSort)
measureSort(mergeSort)