import {
  swap,
  swapByXOR,
  swapByDestructuringAssignment,
  testSort,
  measureSort
} from "./utils"

function bubbleSort(arr: number[]): number[] {
  const n = arr.length
  let lastIndex = n - 1
  let lastSwappedIndex = n - 1
  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    for (let j = 0; j < lastIndex; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swapped = true
        lastSwappedIndex = j
      }
    }
    if (!swapped) break
    lastIndex = lastSwappedIndex
  }
  return arr
}

// 测试代码
testSort(bubbleSort, [2, 1, 3, 4, 5])
// measureSort(bubbleSort)