import { measureSort, swap, testSort } from "./utils"

function quickSort(arr: number[]): number[] {
  // 分割
  function partition(left: number, right: number): void {
    if (left >= right) return

    // 1. 选择三个数中的中间值（三数取中法）作为基准元素（pivot）
    const mid = left + Math.floor((right - left) / 2)
    const pivotIndex = medianOfThree(arr, left, mid, right)
    // 将选定的基准元素移到数组末尾
    swap(arr, pivotIndex, right)
    const pivot = arr[right]
    // 2. 双指针进行交换操作（实现左边都是比 pivot 小的数字，右边都是比 pivot 大的数字）
    let i = left
    let j = right - 1

    while (i <= j) {
      // 左指针向右移动，直到找到一个大于或者等于基准元素的值
      while (arr[i] < pivot) {
        i++
      }
      // 右指针向左移动，直到找到一个小于或者等于基准元素的值
      // 如果加上等于号，意味着与 pivot 相等的元素将被放在 pivot 的右边。如果数组中存在大量连续相等的元素，那么不断将它们放在 pivot 右边，可能会导致递归深度增加，并最终触发栈溢出错误。
      while (arr[j] > pivot) {
        j--
      }
      // 来到这里时，说明已经找到了（大于或等于 pivot 的元素 arr[i] 和小于或等于 pivot 的元素 arr[j]）
      // 如果不加等于号，当出现等于 pivot 元素的情况时，会导致 while 无限循环
      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }

    // 将基准元素放到中间位置
    swap(arr, i, right)

    // 递归地对左右两个子数组进行快速排序
    partition(left, j)
    partition(i + 1, right)
  }

  function medianOfThree(arr: number[], left: number, mid: number, right: number): number {
    if (arr[left] > arr[mid]) {
      swap(arr, left, mid)
    }
    if (arr[left] > arr[right]) {
      swap(arr, left, right)
    }
    if (arr[mid] > arr[right]) {
      swap(arr, mid, right)
    }

    return mid
  }

  partition(0, arr.length - 1)

  return arr
}

testSort(quickSort)
testSort(quickSort, Array.from({ length: 1000 }, () => 2))
testSort(quickSort, Array.from({ length: 50000 }, () => 2))
testSort(quickSort, Array.from({ length: 100000000 }, () => 2))
testSort(quickSort, [100, 90, 100])
testSort(quickSort, [90, 100, 110, 100])
testSort(quickSort, [90, 100, 20, 10, 100, 110, 100])
testSort(quickSort, [
  114,  58,  13, 190,
  148,  94, 160, 190,
  107, 145
])
measureSort(quickSort, 1000000)
measureSort(quickSort, 0, Array.from({ length: 100000000 }, () => 2))
measureSort(quickSort, 0, Array.from({ length: 1000 }, (v, i) => i))
measureSort(quickSort, 0, Array.from({ length: 100000 }, (v, i) => i))