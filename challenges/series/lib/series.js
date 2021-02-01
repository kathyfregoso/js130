/*
// UNDERSTANDING THE PROBLEM

  // INPUT: string of digits, specified length

  // OUTPUT: all possible consecutive number series of specified length (array)

  // NOTES:
  - error if ask for series longer than string

// EXAMPLES/EDGE CASES:
01234, 1-digit series:
[[0], [1], [2], [3], [4]]

01234, 2-digit series:
[[0, 1], [1, 2], [2, 3], [3, 4]]

01234, 3-digit series:
[[0, 1, 2], [1, 2, 3], [2, 3, 4]]

01234, 4-digit series:
[[0, 1, 2, 3], [1, 2, 3, 4]]

"92834", 1 digit series:
[[9], [2], [8], [3], [4]]

// DATA STRUCTURE(S):

// ALGORITHM:
slices method:
- accepts number (of slices) as argument
- check that argument is <= length of string
 - if longer, throw an error

- else, loop through string as collection:
 - starting from curr index, push number of slices as array to output array
 - continue until all slices extracted
-return output array of arrays
*/

class Series {
  constructor(stringOfDigits) {
    this.stringOfDigits = stringOfDigits;
  }

  validateSlices(amount) {
    if (amount > this.stringOfDigits.length) {
      throw new Error(
        `input: ${amount} is invalid, requested series length can't be longer than string`
      );
    }
  }

  slices(amount) {
    this.validateSlices(amount);

    let output = [];
    let sliceString = this.stringOfDigits
      .split("")
      .map((digit) => Number(digit));
    let maxBegin = this.stringOfDigits.length - amount;

    for (let index = 0; index <= maxBegin; index += 1) {
      let series = sliceString.slice(index, index + amount);
      output.push(series);
    }

    return output;
  }
}

module.exports = Series;
