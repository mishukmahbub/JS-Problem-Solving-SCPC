function romanToInteger(roman) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentRoman = roman[i];
        const currentValue = romanNumerals[currentRoman];

        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}
console.log(romanToInteger("III")); // Output: 3
console.log(romanToInteger("IV")); // Output: 4
console.log(romanToInteger("IX")); // Output: 9
console.log(romanToInteger("LVIII")); // Output: 58
console.log(romanToInteger("MCMXCIV")); // Output: 1994
