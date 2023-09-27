import { swap, swapByXOR, swapByDestructuringAssignment } from "./utils"

function bubbleSort(arr: number[]): number[] {
  // n 刚好表示数据量，后续可以用来在大 O 表示法中进行算法复杂度分析
  const n = arr.length
  // 外层 for 循环：0~n-1
  for (let i = 0; i < n; i++) {
    // i = 0     => j < n - 1
    // i = 1     => j < n - 1 - 1
    // ...
    // i = n - 1 => j < 0
    // 内层 for 循环：找到（本轮循环中的）最大值
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }

  return arr
}

// 测试代码
const arr = [9, 6, 2, 8, 3, 1, 7, 5, 4]
console.log('before:', arr)
bubbleSort(arr)
console.log('after:', arr)