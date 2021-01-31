/*
// UNDERSTANDING THE PROBLEM
- write a program that says if a num is: perfect, abundant, or deficient
 - perfect numbers: have an Aliquot sum === original number
 - abundant numbers: have an Aliquot sum > original number
 - deficient numbers: have Aliquote sum < original number

 Aliquot sum: sum of positive divisors (numbers that can be evenly divided into
  target number with no remainder, excluding number itself)

  // INPUT: number

  // OUTPUT: string classification ('abundant', 'perfect', or 'deficient')
  // NOTES:

// EXAMPLES/EDGE CASES:

perfect numbers:
6 -> 1 + 2 + 3 = 6
28 -> 1 + 2 + 4 + 7 + 14 = 28

abundant number:
24 -> 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 ( > 24)

deficient numbers:
15 -> 1 + 3 + 5 = 9 ( < 15)
prime numbers (7, 13, etc) are always deficient

// DATA STRUCTURE(S):
array to hold divisors and to sum (find Aliquot sum)

// ALGORITHM:
- check that input number is not negative, if it is, throw error
- declare variable with empty array to hold divisors
- start a loop that begins at 1 and ends before input number
 - each loop, increment by 1
 - check whether current loop number is a divisor of input number
  - if ((input number % current number) === 0), add number to divisor array
- sum numbers in divisor array
- compre sum to input number:
 - if sum === input, return "perfect"
 - if sum > input, return "abundant"
 - if sum < input, return "deficient"
*/

class PerfectNumber {
  static findSum(number) {
    let divisors = [];

    for (let current = 1; current < number; current += 1) {
      if (number % current === 0) {
        divisors.push(current);
      }
    }
    return divisors.reduce((acc, curr) => acc + curr, 0);
  }

  static classify(number) {
    if (number < 0) {
      throw new Error(`input: ${number} - please enter positive number`);
    }
    let aliquotSum = PerfectNumber.findSum(number);

    if (aliquotSum === number) {
      return "perfect";
    } else if (aliquotSum > number) {
      return "abundant";
    }
    return "deficient";
  }
}

module.exports = PerfectNumber;
