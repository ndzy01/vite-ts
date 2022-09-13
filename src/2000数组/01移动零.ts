const moveZeroes = (nums: number[]): number[] => {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // 遇到非 0 元素，让 nums[j] = nums[i]，然后 j++
      nums[j] = nums[i];
      j++;
    }
  }

  for (let i = j; i < nums.length; i++) {
    // 剩下的元素全是 0
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
