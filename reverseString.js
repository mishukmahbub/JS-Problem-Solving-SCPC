function reverseString(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    return reversedString;
}

const exampleInput = "hello world";
const result = reverseString(exampleInput);
console.log(result); // Output: "dlrow olleh"
