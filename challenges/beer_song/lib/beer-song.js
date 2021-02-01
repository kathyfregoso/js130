/*
// UNDERSTANDING THE PROBLEM
- write a program that generates the lyrics for 99 bottles of beer song

// EXAMPLES/EDGE CASES:

// DATA STRUCTURE(S):

// ALGORITHM:
verse (static) method:
- one number argument

verses (static) method:
- two number arguments

lyrics (static) method:
- returns the whole song

*/

class BeerSong {
  static verse(verseNumber) {
    if (verseNumber > 2) {
      return (
        `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer.\n` +
        `Take one down and pass it around, ${
          verseNumber - 1
        } bottles of beer ` +
        `on the wall.\n`
      );
    } else if (verseNumber === 2) {
      return (
        `2 bottles of beer on the wall, 2 bottles of beer.\n` +
        `Take one down and pass it around, 1 bottle of beer ` +
        `on the wall.\n`
      );
    } else if (verseNumber === 1) {
      return (
        `1 bottle of beer on the wall, 1 bottle of beer.\n` +
        `Take it down and pass it around, no more bottles of beer ` +
        `on the wall.\n`
      );
    }
    return (
      `No more bottles of beer on the wall, no more ` +
      `bottles of beer.\nGo to the store and buy some ` +
      `more, 99 bottles of beer on the wall.\n`
    );
  }

  static verses(startVerse, endVerse) {
    let output = [];

    for (let currVerse = startVerse; currVerse >= endVerse; currVerse -= 1) {
      output.push(BeerSong.verse(currVerse));
    }
    return output.join(`\n`);
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;
