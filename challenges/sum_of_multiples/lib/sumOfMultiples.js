/*
// UNDERSTANDING THE PROBLEM
- given a natural number and a set of 1+ other numbers, find the sum of
all the multiples of the numbers in the set that're less than the first number

- if a set of nums not given, default set of 3 and 5

  // INPUT:

  // OUTPUT:

  // NOTES:

// EXAMPLES/EDGE CASES:
three methods:
1. constructor - accepts list of numbers for which we find the multiples
 -> if no argument, find multiples of 3 and 5
2. instance `to` method: computes sum of all multiples of the list numbers 
 that are less than arg passed to `to`
3. class (or static) method named `to`: does the same as above, always defaults 
to 3 and 5 (invoked if no args provided to constructor)

20 => all numbers up to it that are multiple of 3 and 5 =>
3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 = 78

// DATA STRUCTURE(S):
numbers, calculations

// ALGORITHM:
constructor:
 - if one (or more) args provided, save list as an array to get multiples
 - if none given, the array list uses 3 and 5

to (instance) method:
- create an empty array for output
- accepts 1 argument number
- start looping from 1 to less than input number
 - check if curr number is a multiple of one of the numbers listed
 - if yes, add to output array
- loop through array of multiples to get the sum
- return the sum

to (static/class) method:
- accepts number argument
- create new object with default list of 3 and 5
- call new object with limiting value as argument of to instance method
- return the result
*/

class SumOfMultiples {
  constructor(...setOfNums) {
    this.list = [...setOfNums];
  }

  static to(number) {
    return new SumOfMultiples(3, 5).to(number);
  }

  checkIfMultiple(currentNumber) {
    let result = this.list.filter((number) => currentNumber % number === 0);
    return result.length > 0;
  }

  to(number) {
    let multiples = [];

    for (let current = 1; current < number; current += 1) {
      if (this.checkIfMultiple(current)) {
        multiples.push(current);
      }
    }

    return multiples.reduce((acc, curr) => acc + curr, 0);
  }
}

module.exports = SumOfMultiples;
