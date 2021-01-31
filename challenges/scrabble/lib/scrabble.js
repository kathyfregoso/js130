/*
// UNDERSTANDING THE PROBLEM
GOAL: write a program that compute scrabble score for a given word (string)

  // INPUT: string
  // OUTPUT: number (value of word)
  // NOTES:
  - sum all values of the tiles used in each word

  a,e,i,o,u,l,n,r,s,t - 1 point
  d,g - 2 points
  b,c,m,p - 3 points
  f,h,v,w,y - 4 points
  k - 5 pts
  j,x - 8 pts
  q,z - 10 pts

// EXAMPLES/EDGE CASES:
'cabbage' =>
c - 3 points
a - 2 points (1 pt each)
b - 6 points (3 points each)
g - 2 points
e - 1 point
3 + 2 + 6 + 2 + 1 = 14

// DATA STRUCTURE(S):
- object to store letters and their values

// ALGORITHM:
let letters = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
}
score method:
- declare score variable and assign value of 0
- check that input is a string
- loop through input string
 - check that letter is alphabetic
 - if alphabetic letter, look for letter value in object (lowercased)
 - add letter value to score variable
 - continue until all letters counted
 - IGNORE:
  - non alphabetic letters

*/

class Scrabble {
  constructor(word) {
    this.word = word ? word : "";
  }

  static LETTERS = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
  };

  static ALPHA = "abcdefghijklmnopqrstuvwxyz";

  score() {
    let score = 0;
    let word = this.word.toLowerCase();

    for (let index = 0; index < word.length; index += 1) {
      let character = word[index];
      if (Scrabble.ALPHA.includes(character)) {
        score += Scrabble.LETTERS[character];
      }
    }

    return score;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;
