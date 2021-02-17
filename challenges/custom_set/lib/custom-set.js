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
- empty set is not equal to non-empty set, returns false
- 
*/

class CustomSet {
  constructor(array = []) {
    this.array = array;
  }
  isEmpty() {

  }

  contains() {
  }

  difference();

  isDisjoint() {}

  isSubset() {}

  isSame() {}

  union() {}
}

module.exports = CustomSet;
