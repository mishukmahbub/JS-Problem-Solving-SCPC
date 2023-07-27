function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator.";
    }
}
console.log(calculate(5, 2, '+')); // Output: 7
console.log(calculate(10, 4, '-')); // Output: 6
console.log(calculate(3, 5, '*')); // Output: 15
console.log(calculate(10, 2, '/')); // Output: 5
console.log(calculate(5, 0, '/')); // Output: "Error: Division by zero is not allowed."
console.log(calculate(8, 3, '^')); // Output: "Error: Invalid operator."
