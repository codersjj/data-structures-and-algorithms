import {
  swap,
  swapByXOR,
  swapByDestructuringAssignment,
  testSort
} from "./utils"

function bubbleSort(arr: number[]): number[] {
  // n 刚好表示数据量，后续可以用来在大 O 表示法中进行算法复杂度分析
  const n = arr.length
  // 外层 for 循环：0~n-2
  for (let i = 0; i < n - 1; i++) {
    // i = 0     => j < n - 1
    // i = 1     => j < n - 1 - 1
    // ...
    // i = n - 2 => j < 1
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
testSort(bubbleSort)