import { swap, testSort } from "./utils"

function selectionSort(arr: number[]): number[] {
  const n = arr.length

  // 外层循环：经过多少轮的找最小值
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    // 内层循环：找到本轮元素中的最小值
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 每一轮找到（选择出来）最小值后，最多只进行一次交换即可
    // 初始的 minIndex 改变了，才需要交换，否则，不需要交换
    if (i !== minIndex) {
      swap(arr, i, minIndex)
    }
  }

  return arr
}

// 测试代码
testSort(selectionSort)