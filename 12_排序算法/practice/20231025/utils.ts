type SortAlgorithm = (arr: number[]) => number[]

export function testSort(sortFn: SortAlgorithm): void {
  const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  console.log(`排序前：`, arr)
  const res = sortFn(arr)
  console.log(`排序后：`, res)
}