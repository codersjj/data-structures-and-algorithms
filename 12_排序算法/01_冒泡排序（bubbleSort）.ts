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
  // let round = 0
  // let compareCount = 0
  // let swapCount = 0
  for (let i = 0; i < n - 1; i++) {
    // round++
    let swapped = false
    for (let j = 0; j < lastIndex; j++) {
      // compareCount++
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swapped = true
        lastSwappedIndex = j
        // swapCount++
      }
    }
    if (!swapped) break
    lastIndex = lastSwappedIndex
  }

  // console.log(`总共进行了 ${round} 轮冒泡`)
  // console.log(`总共比较了 ${compareCount} 次，交换了 ${swapCount} 次`)
  return arr
}

// 测试代码
testSort(bubbleSort, [2, 1, 3, 4, 5])
// measureSort(bubbleSort)