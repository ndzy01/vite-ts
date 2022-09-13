function mergeSort(nums: number[]): number[] {
  // 采用自上而下的递归方法
  const len = nums.length;

  if (len < 2) {
    return nums;
  }

  const middle = Math.floor(len / 2),
    left = nums.slice(0, middle),
    right = nums.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
  const result: number[] = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift() as number);
    } else {
      result.push(right.shift() as number);
    }
  }

  while (left.length) result.push(left.shift() as number);

  while (right.length) result.push(right.shift() as number);

  return result;
}

console.log(mergeSort([10, 1, 2, 5, 3, 9, 8, 6]));
