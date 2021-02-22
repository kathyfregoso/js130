/*
// UNDERSTANDING THE PROBLEM
 - make a custom set type (data structure)
 - behaves like a set of unique elements that can be
 maniupalted in well defined ways
 - JS has built in Set type
 - ALL elements of a set are numbers
 - only unique values in set
 - values stored in any order
 - look at test cases for custom set behavior info

// EXAMPLES/EDGE CASES:
- sets with elements aren't empty

// DATA STRUCTURE(S):

// ALGORITHM:
isEmpty method:
- checks if set is empty, true if it is, false otherwise

contains method:
- argument is a number value
- checks if arg number is contained arg
- true if contained, false otherwise

subset method:
- pass in CustomSet as argument
- the instance set is subset if all of its elements are
contained in the argument set
- 2 empty sets returns true
- empty set is subset of non-empty set, returns true
- non empty set isn't subset of empty set, returns false
- returns true if set is subset of set with exact same els

disjoint method:
- accepts CustomSet as arg
- sets are disjoing if they share no els
- empty set is disjoint with itself, returns true
- empty set is disjoint with non-empty set, returns true
- non-empty set disjoint w/ empty set, returns true
- sets not disjoint if they share an el, returns false
- sets are disjoint if they share no els, returns true

isSame method:
- sets with same elements are equal, returns true
- sets with different elements aren't equal, returns false
- empty set is not equal to non-empty set, returns false

add method:
- unique elements added to a set
- adds element to empty set
- add to non-empty set
- adding existing element doesn't change the set (no duplicates)

intersection method:
- returns a set of all shared elements
- intersection of 2 empty sets is an empty set
- intersection of an empty set and non-empty set is an empty set
- intersection of 2 sets with no shared elements is an empty set
- intersection of 2 sets with shared elements is a set of the shared elements

difference method:
- different of a set is a set of all elements that're only in the 1st set
  - difference of 2 empty sets is empty set
  - diff. of empty set and non-empty set is an empty set
  - diff. of 2 non-empty sets is a set of elements that're only in the 1st set

union method:
- returns a set of all elements in either set
 - union of empty sets is an empty set
 - union of empty set and non-empty set is the non-empty set
 - union of non-empty sets contains all unique elements
*/

class CustomSet {
  constructor(array = []) {
    this.array = array;
  }

  add(value) {
    if (!this.contains(value)) {
      this.array.push(value);
    }
    return this;
  }

  isEmpty() {
    return this.array.length === 0;
  }

  contains(value) {
    return this.array.includes(value);
  }

  difference(otherSet) {
    let unshared = this.array.filter((value) => !otherSet.contains(value));
    return new CustomSet(unshared);
  }

  isDisjoint(otherSet) {
    return !this.array.some((value) => otherSet.contains(value));
  }

  intersection(otherSet) {
    let shared = [];
    this.array.forEach((value) => {
      if (otherSet.contains(value)) {
        shared.push(value);
      }
    });
    return new CustomSet(shared);
  }

  isSubset(otherSet) {
    return this.array.every((value) => otherSet.contains(value));
  }

  isSame(otherSet) {
    if (this.array.length !== otherSet.array.length) return false;

    return this.isSubset(otherSet);
  }

  union(otherSet) {
    let combined = [...this.array, ...otherSet.array];
    let unique = combined.filter(
      (value, index, arr) => arr.indexOf(value) === index
    );
    return new CustomSet(unique);
  }
}

module.exports = CustomSet;
