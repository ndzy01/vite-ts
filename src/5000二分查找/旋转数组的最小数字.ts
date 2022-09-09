function minArray(numbers: number[]): number {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const middle = (left + right) >>> 1;

    if (numbers[middle] < numbers[right]) {
      right = middle;
    } else if (numbers[middle] > numbers[right]) {
      left = middle + 1;
    } else {
      right--;
    }
  }

  return numbers[left];
}
