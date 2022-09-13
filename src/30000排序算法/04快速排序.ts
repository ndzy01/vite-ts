// TODO 后面再研究

function quickSort(nums: number[], left: number, right: number) {
  let len = nums.length,
    partitionIndex,
    innerLeft = typeof left != 'number' ? 0 : left,
    innerRight = typeof right != 'number' ? len - 1 : right;

  if (innerLeft < innerRight) {
    partitionIndex = partition(nums, innerLeft, innerRight);

    quickSort(nums, innerLeft, partitionIndex - 1);
    quickSort(nums, partitionIndex + 1, innerRight);
  }

  return nums;
}

function partition(arr: number[], left: number, right: number) {
  // 分区操作
  // 设定基准值位置（pivot）当然也可以选择最右边的元素为基准 也可以随机选择然后和最左或最右元素交换
  let pivot = left,
    index = pivot + 1;

  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }

  swap(arr, pivot, index - 1);

  return index - 1;
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort([10, 1, 2, 5, 3, 9, 8, 6], 1, 8));
