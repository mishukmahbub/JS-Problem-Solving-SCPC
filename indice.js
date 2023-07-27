function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return []; // Return an empty array if no such pair is found.
}
const exampleInputArray = [1, 3, 6, 8, 11, 15];
const exampleTarget = 9;
const result = findTwoNumbersWithSum(exampleInputArray, exampleTarget);
console.log(result); // Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
