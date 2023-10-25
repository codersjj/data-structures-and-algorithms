type SortAlgorithm = (arr: number[]) => number[]

export function testSort(sortFn: SortAlgorithm): void {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  console.log(`排序前：`, arr)
  const res = sortFn(arr)
  console.log(`排序后：`, res)
  console.log('排序是否正确：', isRightOrder(res))
}

export function swap(arr: number[], pos1: number, pos2: number) {
  [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]]
}

export function isRightOrder(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false
  }
  return true
}