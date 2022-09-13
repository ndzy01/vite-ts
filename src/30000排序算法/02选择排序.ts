const selectionSort = (nums: number[]): number[] => {
  const len = nums.length;
  let minIndex;

  for (let i = 0; i < len - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[minIndex]) {
        // 寻找最小的数
        minIndex = j; // 将最小数的索引保存
      }
    }

    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }

  return nums;
};

console.log(selectionSort([10, 1, 2, 5, 3, 9, 8, 6]));
