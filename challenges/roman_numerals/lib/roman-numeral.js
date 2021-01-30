/*
// UNDERSTANDING THE PROBLEM
GOAL: turn input number into a roman numeral

- roman numerals written by expressing each digit separately starting with
leftmost digit and skipping any digit with value of zero

- don't convert numbers larger than 3000

// EXAMPLES/EDGE CASES:
1 = I
10 = X
7 = VII

1990 is MCMXC:
1000 = M
900 = CM
90 = XC

2008 is MMVIII:
2000 = MM
8 = VIII

// DATA STRUCTURE(S):
object to represent numbers in roman form

// ALGORITHM:
create variable to save string output
start looping through collection of romman numerals
- while the input number is greater than or equal to the current key value:
 - concatenate the current string key to the output variable
 - subtract the key value from the input number
return output string
*/

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  static ROMAN = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  toRoman() {
    let output = "";
    let inputNumber = this.number;
    for (let numeral in RomanNumeral.ROMAN) {
      while (inputNumber >= RomanNumeral.ROMAN[numeral]) {
        output += numeral;
        inputNumber -= RomanNumeral.ROMAN[numeral];
      }
    }
    return output;
  }
}

module.exports = RomanNumeral;
