import { measureSort, swap, testSort } from "./utils"

function insertionSort(arr: number[]): number[] {

  // 8 6 3 20 2 => 6 8 3 20 2
  // 第一轮：实现前两个数有序
  let currNum = arr[1]
  let j = 0
  // 存在前面的数比当前的数大时，进入循环
  while (arr[j] > currNum && j >= 0) {
    // 往后移一位
    arr[j + 1] = arr[j]
    // 继续往前找
    j--
  }
  // 将当前的数插入到已找到的比其小（或相等）的数的后一个位置，或者 j 已经等于 -1 时，插入到第一个位置（索引为 0）
  arr[j + 1] = currNum

  // 8 6 3 20 2 => 6 8 3 20 2 => 3 6 8 20 2
  // 第二轮：实现前三个数有序
  currNum = arr[2]
  j = 1
  while (arr[j] > currNum && j >= 0) {
    arr[j + 1] = arr[j]
    j--
  }
  arr[j + 1] = currNum

  return arr
}

testSort(insertionSort)
measureSort(insertionSort)