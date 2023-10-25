export function swap(arr: number[], pos1: number, pos2: number) {
  [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]]
}

type SortAlgorithmFn = (arr: number[]) => number[]
export function testSort(sortFn: SortAlgorithmFn): void {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  console.log(`排序前：`, arr)
  sortFn(arr)
  console.log(`排序后：`, arr)
}