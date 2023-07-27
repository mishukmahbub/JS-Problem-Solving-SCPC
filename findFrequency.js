function findMostFrequentElement(arr) {
    let frequencyMap = {};
    let mostFrequentElement;
    let highestFrequency = 0;
  
    for (let num of arr) {
      if (frequencyMap[num]) {
        frequencyMap[num]++;
      } else {
        frequencyMap[num] = 1;
      }
  
      if (frequencyMap[num] > highestFrequency) {
        highestFrequency = frequencyMap[num];
        mostFrequentElement = num;
      }
    }
  
    return mostFrequentElement;
  }
  
  const exampleInput = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = findMostFrequentElement(exampleInput);
console.log(result); // Output: 3
