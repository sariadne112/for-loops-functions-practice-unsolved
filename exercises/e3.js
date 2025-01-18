// EXERCISE 3
// Make sure to solve two parts beneath

/**
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

//console.log(getAverage([22, 45, 4, 65]));

/**
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */

export function getStringSum(str) {
  // Your code goes here...
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (!isNaN(currentChar) && currentChar !== " ") {
      sum += parseInt(currentChar);
    }
  }
  return sum;
}

// Example usage
console.log(getStringSum("GH2U87A")); // Outputs: 17
console.log(getStringSum("GHIUJUHSG")); // Outputs: 0

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
