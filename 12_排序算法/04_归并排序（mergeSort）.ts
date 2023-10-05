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

function mergeSortInPlace(arr: number[]): number[] {
  const n = arr.length

  // 归并排序的内部实现函数，对数组 arr 的 [left, right] 区间进行排序
  function mergeSort(arr: number[], left: number, right: number): void {
    // 如果区间只有一个元素或者为空，直接返回
    if (left >= right) return

    // 1. divide
    // 与 (left + right) / 2 相同，但避免了对大型 left 和 right 的溢出问题。
    const mid = left + Math.floor((right - left) / 2)
    // 递归，对左右两个子区间进行排序
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)

    // 2. merge
    // 用一个临时数组存放合并结果
    const temp: number[] = []
    // 双指针
    let i = left
    let j = mid + 1
    // 比较左右两个子区间的元素，将较小的元素插入到 temp 中
    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        temp.push(arr[i])
        i++
      } else {
        temp.push(arr[j])
        j++
      }
    }
    // 如果左子区间还有元素，将它们全部复制到 temp 中
    while (i <= mid) {
      temp.push(arr[i])
      i++
    }
    // 如果右子区间还有元素，将它们全部复制到 temp 中
    while (j <= right) {
      temp.push(arr[j])
      j++
    }
    // 将 temp 中的元素复制回原数组中
    for (let i = 0; i < temp.length; i++) {
      arr[left + i] = temp[i]
    }
  }

  mergeSort(arr, 0, n - 1)

  return arr
}

testSort(mergeSort)
measureSort(mergeSort)
testSort(mergeSortInPlace)
measureSort(mergeSortInPlace)