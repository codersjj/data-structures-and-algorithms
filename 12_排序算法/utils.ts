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