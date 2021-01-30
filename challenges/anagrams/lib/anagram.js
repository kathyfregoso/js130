/*
// UNDERSTANDING THE PROBLEM
- create an Anagram type object that accepts a string as a property

- have a match method
 - argument is an array of strings
 - outputs an array of anagram(s)

// EXAMPLES/EDGE CASES:
"listen"
["enlists", "google", "inlets", and "banana"]  => ["inlets"]

'corn'
['corn', 'dark', 'Corn', 'rank', 'CORN', 'cron', 'park'] => ['cron']

- cases have to be the same!
- string can't be the same as input string
- return empty array if no anagram

// DATA STRUCTURE(S):
arrays

// ALGORITHM:
- create a match method:
 - accepts array argument of strings
 - loops through input array
  - if element is an anagram of the word, push into new array
  - continue until all matching anagrams found
 - return array of anagrams

*/

class Anagram {
  constructor(string) {
    this.string = string;
  }

  alphaSort(word) {
    return word
      .split("")
      .sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
      })
      .join("");
  }

  match(wordsArray) {
    let anagrams = [];
    let compareWord = this.alphaSort(this.string);

    wordsArray.forEach((word) => {
      if (word.toLowerCase() !== this.string.toLowerCase()) {
        let sorted = this.alphaSort(word).toLowerCase();
        if (sorted === compareWord.toLowerCase()) {
          anagrams.push(word);
        }
      }
    });
    return anagrams;
  }
}

module.exports = Anagram;
