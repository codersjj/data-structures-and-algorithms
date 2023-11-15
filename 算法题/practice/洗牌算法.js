class Solution {
  constructor(nums) {
    this.nums = nums
    this.original = [...nums]
  }

  shuffle() {
    const len = this.nums.length
    for (let i = 0; i < len; i++) {
      const randomIndex = i + Math.floor(Math.random() * (len - i));
      [this.nums[i], this.nums[randomIndex]] = [this.nums[randomIndex], this.nums[i]]
    }
    return this.nums
  }

  reset() {
    return this.original
  }
}