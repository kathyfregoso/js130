/*
// UNDERSTANDING THE PROBLEM:
- write a program to determine if a triangle is: equilateral, isosceles, scalene
EQUILATERAL: all 3 sides are same length
ISOSCELES: 2 sides of the same length
SCALENE: all sides of different lengths

VALID TRIANGLE:
- all sides must be length > 0
- sum of lengths of any 2 sides must be >= length of
  the third side

// EXAMPLES/EDGE CASES:
- Triangle class
 - methods:
  1. constructor - 3 arguments for 3 sides (numbers)
   - exception raised if any side length <= 0
   - exception raised if any side lengths taken together
    dont make a valid triangle
  2. kind - returns string representing triangle type
- helper methods optional

// DATA STRUCTURE(S):
- numbers, calculations

// ALGORITHM:
- creation helper methods to check validity
  - find the longest, middle, and shortest side lengths
  - check that middle + shortest length > longest side AND
  - check that all sides are > 0

- determine the type of triangle using kind method
*/

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if (!this.validTriangle()) {
      throw new Error("Invalid triangle lengths");
    } else {
      this.kind();
    }
  }

  kind() {
    if (
      this.side1 === this.side2 &&
      this.side1 === this.side3 &&
      this.side2 === this.side3
    ) {
      return "equilateral";
    } else if (
      this.side1 === this.side2 ||
      this.side2 === this.side3 ||
      this.side1 === this.side3
    ) {
      return "isosceles";
    }
    return "scalene";
  }

  validTriangle() {
    let longest = Math.max(this.side1, this.side2, this.side3);
    let shortest = Math.min(this.side1, this.side2, this.side3);
    let middle = this.side1 + this.side2 + this.side3 - (longest + shortest);
    let sideLengthCheck = middle + shortest >= longest;
    let greaterThanZeroCheck =
      this.side1 > 0 && this.side2 > 0 && this.side3 > 0;
    return sideLengthCheck && greaterThanZeroCheck;
  }
}

module.exports = Triangle;
