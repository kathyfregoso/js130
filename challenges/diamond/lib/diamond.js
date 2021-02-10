/*
// UNDERSTANDING THE PROBLEM
given a letter, prints a diamond starting with 'A', and input letter at
widest point

  // INPUT: letter (string)

  // OUTPUT: diamond shape (string)

  // NOTES:
  - first row has 'A'
  - last row has 'A'
  - all rows, except first and last, have exactly 2 identical letters
  - diamond is horizontally symmetric
  - diamond is vertically symmetric
  - diamond has a square shape (width equals height)
  - letters form a diamond
  - top half has letters in ascending order
  - bottom half has letters in descending order
  - four corners (containing spaces) are triangles

// EXAMPLES/EDGE CASES:
'A':

A

'C':

  A
 B B
C   C
 B B
  A

"E":

    A
   B B
  C   C
 D     D
E       E
 D     D
  C   C
   B B
    A

// DATA STRUCTURE(S):
strings, arrays?

// ALGORITHM:
- create a collection of uppercase alphabetical letters and assign to variable
- makeDiamond method (static):
 - accepts one argument (string letter)
 - if letter input is A, return A as is
 - get the index of the input letter
 - save index of input letter to start variable
 - multiply start by 2 and add 1, save to variable
 - save bottom and top line of diamond (A) to variable
 - save middle line to variable
 - create rows variable with empty array reference
 - start a loop trhough alphabet array from idx one:
  - save the current element value to variable
  - get sides total as start - index
  - get number of middle spaces
  - push sides + letter + middle spaces + letter + sides to array
- when loop is down, combine rows into array collection
- join array as string with \n delimiter
- return diamond
*/

class Diamond {
  static ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  static makeDiamond(letter) {
    if (letter === "A") return "A\n";
    let letterIdx = Diamond.ALPHABET.indexOf(letter);
    let start = letterIdx;
    let totalLength = start * 2 + 1;
    let topBottom = " ".repeat(start) + "A" + " ".repeat(start);
    let middle = letter + " ".repeat(totalLength - 2) + letter;
    let rows = [];

    for (let index = 1; index < letterIdx; index += 1) {
      let current = Diamond.ALPHABET[index];
      let sides = start - index;
      let middleSpaces = totalLength - 2 - sides * 2;
      rows.push(
        " ".repeat(sides) +
          current +
          " ".repeat(middleSpaces) +
          current +
          " ".repeat(sides)
      );
    }

    return [
      topBottom,
      ...rows,
      middle,
      ...rows.reverse(),
      topBottom + "\n",
    ].join("\n");
  }
}

module.exports = Diamond;

console.log(Diamond.makeDiamond("B"));
