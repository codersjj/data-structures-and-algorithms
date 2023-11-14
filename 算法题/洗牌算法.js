class Solution {
  constructor(nums) {
    this.nums = nums
    this.originalNums = nums.slice()
  }

  reset() {
    return this.originalNums
  }

  shuffle() {
    const len = this.nums.length
    for (let i = 0; i < len; i++) {
      const randomIndex = i + Math.floor(Math.random() * (len - i));
      [this.nums[i], this.nums[randomIndex]] = [this.nums[randomIndex], this.nums[i]]
    }
    return this.nums
  }
}

const solution = new Solution([1, 2, 3]);
console.log(solution.shuffle());    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
console.log(solution.reset());      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
console.log(solution.shuffle());    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]