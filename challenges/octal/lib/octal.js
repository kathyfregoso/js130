/*
// UNDERSTANDING THE PROBLEM

- implement octal to decimal conversion

  // INPUT: octal string

  // OUTPUT: decimal number (base-10)

  // NOTES:
  - don't use built-in methods that perform conversions for you
  - octal (base-8)
  - octal numbers don't use any digits above 8!

// EXAMPLES/EDGE CASES:
233 (base-10):
(2*10^2) + (3*10^1) + (3*10^0) = (2*100) + (3*10) + (3+1) = 200 + 30 + 3

233 (to octal) is 155:
(2*8^2) + (3*8^1) + (3*8^0) = (2*64) + (3*8) + (3*1) = 128 + 24 + 3 = 155

// DATA STRUCTURE(S):
numbers

// ALGORITHM:
- check that input doesn't use any digit above 7 (8, 9) or letters
- split input string into an array of string digits and assign to variable
- get the length of the array, subtract by 1, and assign to variable
- create output variable and assign it an empty array
- loop through the array, on each loop:
 - turn digit into number
 - multiply number by (8 ^ length)
 - push result into output array
 - subtract length variable by 1 on each loop
 - continue loop until length variable equals 0
- loop through output variable array to get the sum the numbers (octal result)
- return output variable value
*/

class Octal {
  constructor(decimal) {
    this.decimal = decimal;
  }

  invalidOctal() {
    return (
      this.decimal.includes("8") ||
      this.decimal.includes("9") ||
      /[a-zA-z]/g.test(this.decimal)
    );
  }

  toDecimal() {
    if (this.invalidOctal()) {
      return 0;
    }
    let digits = this.decimal.split("");
    let exponent = digits.length - 1;
    let octalNumber = [];

    for (let index = 0; index < digits.length; index += 1) {
      let digit = Number(digits[index]);
      digit *= Math.pow(8, exponent);
      octalNumber.push(digit);
      exponent -= 1;
    }

    return octalNumber.reduce((acc, curr) => acc + curr, 0);
  }
}

module.exports = Octal;
