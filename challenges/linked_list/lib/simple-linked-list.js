/*
// UNDERSTANDING THE PROBLEM
 - implement a singly linked list data structure:
  - often represents sequences or push-down stacks
  - also calld Last In, First Out (LIFO) stack
  - each element doesn't need to have info about any other
   element in list except for `next` element
  - each element contains data (value) and a `next` field
   pointing to next element in list of elements
  - elements may have any data value type (ie numbers 1-10)
  - make functions to:
   - reverse linked list
   - convert linked list to and from array

// EXAMPLES/EDGE CASES:
class Element:
- constructor method:
 - at least 1 argument
 - first arg is data value to be stored in newly created
 element
 - second (optional) arg is another `Element` obj that will
 be the `next` element after the newly created element
  - use default value
 - the most recently added (pushed) elements are the ones
 that get removed (popped) first (LIFO stacks)
- method that returns data value of `Element`
- method that returns a boolean showing whether current
 element is the tail (last one) in list. tail element
 doesn't have another `Element` instance stored in `next`
- method that returns next `Element` in linked list. if
 current element is tail, return a value showing absence of
 next element (ie null)

class SimpleLinkedList:
- class/static method - creates new SimpleLinkedList
 instance from a given array arg.
- class/static method - converts a SimpleLinkedList instance
 into an array. datum from each link in our list should be
 an element in the returned array. doesn't mutate linked list
 used to call it
- method - adds its arg to the list.
- method - removes head of list (most recently added item).
- method - returns the Element at the head of the list.
- method - returns the size of the list.
- method - returns a boolean showing if the list is empty.
- method - returns the data value of the head element.
- method - reverses and returns list; doesn't mutate linked
 list used to call it (returns NEW list instead)

// DATA STRUCTURE(S):
- data values are any type
- each Element object encapsulates a value

// ALGORITHM:
Element class:
- constructor:
 - save first arg as new Element's constructor
 - save 2nd arg as next Element (default value provided)

- datum method:
  - return Element's value

- isTail method
  - checks if element is tail
  - if Element doesn't have a next Element, return true
  - else return false

- next method:
  - return next Element object

SimpleLinkedList class:
- constructor:
 - set object's head prop/instance variable to initial value
  to indicate empty list

- fromArray class/static method:
 - convert array to linked list
 - if array arg not given, use empty array
 - create new instance of SimpleLinkedList
 - for each el in array, push el's value to new linked list
 - return new list

- toArray method:
 - convert linked list to array
 - create empty result array
 - set curr el to head Element
 - while curr el is a valid Element:
  - append datum val of curr el to result array
  - reassign curr el var to next Element
 - return result array

push method:
- create new Element object with value and next Element
 passed to push as its two args
- save new Element obj to list as its new head Element

pop method:
- save current head Element (temp)
- set list head to value of old head Element's next
 property/instance variable
- return datum value of old head Element

head method:
- return first Element in the list
- if list empty, return appropriate value to show this

size method:
- set size to 0
- set curr el to head Element
- while curr el is a valid Element
 - increment size by 1
 - reassign curr element variable to next Element
- return size

isEmpty method:
- checks if list is empty
- return true if head of list is valid Element
- else return false

peek method:
- returns datum val of Element at head of the list
- if list empty, return value showing this

reverse method:
- create new empty linked list for output
- set curr el to head Element
- while curr el is a valid Element:
 - Create new Element obj using datum of the current Element.
 - Push the new Element object to the result list.
 - Reassign current element variable to the next Element.
- return output list
*/

class Element {
  constructor(datumVal, nextEl = null) {
    this.datumVal = datumVal;
    this.nextEl = nextEl;
  }

  datum() {
    return this.datumVal;
  }

  isTail() {
    return !this.nextEl;
  }

  next() {
    return this.nextEl;
  }
}

class SimpleLinkedList {
  constructor() {
    this.headEl = null;
  }

  static fromArray(array) {
    array = array || [];
    let linkedList = new SimpleLinkedList(array);
    [...array].reverse().forEach((el) => linkedList.push(el));
    return linkedList;
  }

  toArray() {
    let result = [];
    let currentEl = this.head();

    while (currentEl !== null) {
      result.push(currentEl.datum());
      currentEl = currentEl.next();
    }
    return result;
  }

  head() {
    return this.headEl;
  }

  isEmpty() {
    return !this.head();
  }

  peek() {
    let head = this.head();
    return head ? head.datum() : head;
  }

  pop() {
    let popHead = this.head();
    this.headEl = popHead.next();
    return popHead.datum();
  }

  push(datum) {
    let element = new Element(datum, this.head());
    this.headEl = element;
  }

  reverse() {
    let linkedList = new SimpleLinkedList();
    let currentEl = this.head();

    while (currentEl !== null) {
      linkedList.push(currentEl.datum());
      currentEl = currentEl.next();
    }
    return linkedList;
  }

  size() {
    let size = 0;
    let currentEl = this.head();

    while (currentEl !== null) {
      size += 1;
      currentEl = currentEl.next();
    }
    return size;
  }
}

module.exports = { SimpleLinkedList, Element };
