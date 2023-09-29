import { measureSort, swap, testSort } from "./utils"

function insertionSort(arr: number[]): number[] {
  const n = arr.length

  let currNum = arr[1]
  let j = 0
  for (let i = 1; i < n; i++) {
    currNum = arr[i]
    j = i - 1
    while (arr[j] > currNum && j >= 0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currNum
  }

  return arr
}

testSort(insertionSort)
measureSort(insertionSort)