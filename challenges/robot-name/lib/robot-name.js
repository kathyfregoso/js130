/*
// UNDERSTANDING THE PROBLEM
- write a program that manages robot factory settings
- new robotos have no name, random name is given

- reset a robot to factory settings, so name gets wiped
- then next time, responds with new random name
- names must be random, shouldn't follow predictable sequence
- random names prevent risk of collisions
- solution shouldn't allow use of same name 2x (when avoidable)
- no input needed, we return a random string

// EXAMPLES/EDGE CASES:
random robot names:
 - RX837
 - BC811

 - length: 5 chars
 - first 2 chars uppercase letters
 - last 3 digits are numbers

// DATA STRUCTURE(S):
strings
track instances of names that have already been assigned to robots with array

// ALGORITHM:
name method:
- returns randomly generated name (string) - 2 uppercase letters, 3 digits
- if robot name exists, return that name
- if robot doesn't have a name:
 - create random name
 - make sure that random name is not in the class-level array that tracks
 names of existing robots
- save new name in class-level array allNames
- return the name

reset method:
- restores robot to factory settings
- any existing names are deleted and new one made
- remove current value of robot name from allNames array
- remove value of robot's name from object
 - placeholder falsy value instead

generate name helper method:
- start with empty name string
- create 2 random uppercase alphabetic characters
- then add them to the name string
- then get 3 random numbers (0-9) and add them to name string
- return name string

*/

class Robot {
  static allNames = [];

  name() {
    if (this.robotName) return this.robotName;

    while (Robot.allNames.includes(this.robotName) || !this.robotName) {
      this.robotName = this.getName();
    }

    Robot.allNames.push(this.robotName);
    return this.robotName;
  }

  getName() {
    let name = "";

    for (let start = 1; start <= 2; start += 1) {
      name += this.randomLetter();
    }

    for (let begin = 1; begin <= 3; begin += 1) {
      name += this.randomNumber();
    }

    return name;
  }

  randomLetter() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let index = Math.floor(Math.random() * 25);
    return alphabet[index];
  }

  randomNumber() {
    return String(Math.floor(Math.random() * 10));
  }

  reset() {
    Robot.allNames = Robot.allNames.filter((name) => name !== this.robotName);
    this.robotName = null;
  }
}

module.exports = Robot;
