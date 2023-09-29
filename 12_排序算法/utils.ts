/**
 * swapping two values by a temporary variable
 */
export function swap(arr: number[], pos1: number, pos2: number) {
  const temp = arr[pos1]
  arr[pos1] = arr[pos2]
  arr[pos2] = temp
}

/**
 * swapping two numbers by XOR-swap trick（异或交换技巧）
 * x ^ y ^ y = x
 */
export function swapByXOR(arr: number[], pos1: number, pos2: number) {
  arr[pos1] = arr[pos1] ^ arr[pos2]
  arr[pos2] = arr[pos1] ^ arr[pos2]
  arr[pos1] = arr[pos1] ^ arr[pos2]
}

/**
 * swapping two values by destructuring assignment（解构赋值）
 */
export function swapByDestructuringAssignment(arr: number[], pos1: number, pos2: number) {
  [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]]
}

type SortAlgorithmFn = (arr: number[]) => number[]
function isRightOrder(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false
  }
  return true
}
export function testSort(sortFn: SortAlgorithmFn, arr?: number[]) {
  // 1. 使用传入的数组，若没有传，则随机一个长度为 10 的数组（数组中存放多个数字）
  let nums = arr || Array.from({ length: 10 }, () => {
    return Math.floor(Math.random() * 200)
  })
  console.log('排序前：', nums)
  // 2. 使用排序算法对数组进行排序
  const res = sortFn(nums)
  console.log('排序后：', res)
  console.log('排序是否正确：', isRightOrder(res))
}

export function measureSort(sortFn: SortAlgorithmFn, n: number = 100000) {
  const nums = Array.from({ length: n }, () => Math.floor(Math.random() * n))
  const startTime = performance.now()
  const res = sortFn(nums)
  const endTime = performance.now()
  const timeElapsed = (endTime - startTime).toFixed(3)
  console.log(`使用 ${sortFn.name} 算法，对 ${n} 个元素进行排序，耗时 ${timeElapsed} 毫秒`)
  console.log('排序是否正确：', isRightOrder(res))
}