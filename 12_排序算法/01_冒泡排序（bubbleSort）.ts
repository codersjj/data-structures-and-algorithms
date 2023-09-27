function bubbleSort(arr: number[]): number[] {
  // n 刚好表示数据量，后续可以用来在大 O 表示法中进行算法复杂度分析
  const n = arr.length
  // 第一轮
  // arr 索引的最大值是 n - 1，所以 j + 1 最大值也是 n - 1，所以 j 的最大值是 n - 2，即 j < n - 1
  for (let j = 0; j < n - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      const temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }

  return arr
}

// 测试代码
const arr = [9, 6, 2, 8, 3, 1, 7, 5, 4]
console.log('before:', arr)
bubbleSort(arr)
console.log('after:', arr)