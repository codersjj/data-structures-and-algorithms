function swap(arr: number[], pos1: number, pos2: number) {
  [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]]
}

function quickSort(arr: number[]): number[] {
  const n = arr.length

  function partition(left: number, right: number) {
    // 递归的结束条件
    if (left >= right) return

    // 基准元素
    const pivot = arr[right]
    // 双指针
    let i = left
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

    // 将基准元素放到中间位置
    swap(arr, i, right)

    partition(left, j)
    partition(i + 1, right)
  }

  partition(0, n - 1)

  return arr
}
