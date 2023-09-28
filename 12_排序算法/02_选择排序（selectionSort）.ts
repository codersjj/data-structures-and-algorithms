import { swap, testSort } from "./utils"

function selectionSort(arr: number[]): number[] {
  const n = arr.length

  // 第一轮
  let minIndex = 0
  // 从索引 1 开始找
  for (let j = 1; j < n; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j
    }
  }
  // 每一轮找到最小值后，只进行一次交换即可
  swap(arr, 0, minIndex)

  return arr
}

// 测试代码
testSort(selectionSort)