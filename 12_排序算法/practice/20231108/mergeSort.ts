function mergeSort(arr: number[]): number[] {
  const n = arr.length

  if (n <= 1) return arr

  // 1. divide
  const mid = Math.floor(n / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  const sortedLeftArr = mergeSort(leftArr)
  const sortedRightArr = mergeSort(rightArr)

  // 2. merge
  const result: number[] = []

  let i = 0
  let j = 0
  while (i < sortedLeftArr.length && j < sortedRightArr.length) {
    if (sortedLeftArr[i] <= sortedRightArr[j]) {
      result.push(sortedLeftArr[i])
      i++
    } else {
      result.push(sortedRightArr[j])
      j++
    }
  }
  if (i < sortedLeftArr.length) {
    result.push(...sortedLeftArr.slice(i))
  }
  if (j < sortedRightArr.length) {
    result.push(...sortedRightArr.slice(j))
  }

  return result
}
