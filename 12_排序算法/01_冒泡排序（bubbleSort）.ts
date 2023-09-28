import {
  swap,
  swapByXOR,
  swapByDestructuringAssignment,
  testSort
} from "./utils"

function bubbleSort(arr: number[]): number[] {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swapped = true
      }
    }
    if (!swapped) break
  }

  return arr
}

// 测试代码
testSort(bubbleSort)