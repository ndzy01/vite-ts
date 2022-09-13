const bubbleSort = (nums: number[]): number[] => {
  if (!nums.length) return [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1])
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
  }

  return nums;
};

console.log(bubbleSort([1, 2, 5, 3, 8, 6]));
