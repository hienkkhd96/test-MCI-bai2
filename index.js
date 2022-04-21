let result = [];

function bracketCombinations(num, numStart = 0, str = "") {
  // Check input is Integer and greater than 0
  if (num < 0 || !Number.isInteger(num)) {
    console.error("INPUT ERROR");
  } else {
    // If we have a right bracket. Add the left bracket
    if (num > 0) {
      bracketCombinations(num - 1, numStart + 1, str + "(");
    }
    // If we have a left bracket. Add the right bracket
    if (numStart > 0) {
      bracketCombinations(num, numStart - 1, str + ")");
    }
    // If no more brackets can be added
    if (num === 0 && numStart === 0) {
      result.push(str);
      console.log(num, numStart);
    }
  }
  return result.length;
}
console.log(bracketCombinations(3, 0));
console.log(result);
