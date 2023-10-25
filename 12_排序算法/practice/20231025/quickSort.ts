import { swap, testSort, isRightOrder } from "./utils"

function quickSort(arr: number[]): number[] {
  const n = arr.length

  function partition(left: number, right: number): void {
    if (left >= right) return

    const pivot = arr[right]

    let i = 0
    let j = right - 1

    while (i <= j) {
      while (arr[i] < pivot) {
        i++
      }
      while (arr[j] > pivot) {
        j--
      }
      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }

    swap(arr, i, right)

    partition(0, j)
    partition(i + 1, right)
  }

  partition(0, n - 1)

  return arr
}

testSort(quickSort)