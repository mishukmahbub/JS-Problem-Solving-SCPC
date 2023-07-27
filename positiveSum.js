function sumPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}
const exampleInput = [2, -5, 10, -3, 7];
const result = sumPositiveNumbers(exampleInput);
console.log(result); // Output: 19
