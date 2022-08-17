const search = (nums: number[], target: number) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = (left + right) >>> 1;

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

const r1 = search([1, 2, 3, 4, 5, 6], 3);
const r2 = search([1, 2, 3, 4, 5, 6], 5);
const r3 = search([1, 2, 3, 4, 5, 6, 7], 4);

console.log(r1, r2, r3);
