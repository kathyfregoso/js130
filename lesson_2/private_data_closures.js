// 1. create func makeCounterLogger that takes num as arg and returns a function.
// when we invoke returned func with a 2nd number, it should count up or down from
// first number to the second number, logging each number

function makeCounterLogger(number) {
  return (secondNum) => {
    let final;
    if (secondNum > number) {
      final = number;
      while (final <= secondNum) {
        console.log(final);
        final += 1;
      }
    } else if (number > secondNum) {
      final = number;
      while (final >= secondNum) {
        console.log(final);
        final -= 1;
      }
    }
  };
}

// let countlog = makeCounterLogger(5);
// countlog(8);
// // 5
// // 6
// // 7
// // 8

// countlog(2);
// 5
// 4
// 3
// 2

// 2. Write a makeList function that creates and returns a new function that implements a todo list.
// the returned function should:
// - When called with an arg that is not already on the list, it adds that arg to the list.
// - When called with an arg that is already on the list, it removes the element from the list.
// - When called w/out args, prints all of the items on list. If list empty, it prints a message.

function makeList() {
  let tasks = [];
  return (newTask) => {
    let idx;
    if (newTask) {
      idx = tasks.indexOf(newTask);
      if (idx === -1) {
        tasks.push(newTask);
        console.log(`${newTask} added!`);
      } else {
        tasks.splice(idx, 1);
        console.log(`${newTask} removed!`);
      }
    } else if (tasks.length === 0) {
      console.log(`The list is empty.`);
    } else {
      tasks.forEach((task) => console.log(task));
    }
  };
}

// let list = makeList();
// list(); //The list is empty.
// list("make breakfast"); // make breakfast added!
// list("read book"); // read book added!
// list(); // make breakfast
// // read book
// list("make breakfast");
// // make breakfast removed!
// list();
// // read book

// MORE PRACTICE PROBLEMS

// 1. modify makeList function so it returns an object that provides interface with
// add, list, and remove methods

function makeList2() {
  let tasks = [];
  return {
    add(newTask) {
      if (!tasks.includes(newTask)) {
        tasks.push(newTask);
        console.log(`${newTask} added!`);
      }
    },
    list() {
      if (tasks.length === 0) {
        console.log(`This list is empty.`);
      } else {
        tasks.forEach((task) => console.log(task));
      }
    },
    remove(task) {
      let index = tasks.indexOf(task);
      if (tasks.includes(task)) {
        tasks.splice(index, 1);
        console.log(`${task} removed!`);
      }
    },
  };
}

let list2 = makeList2();
list2.list(); // This list is empty.
list2.add("peas");
// peas added!

list2.list();
// peas

list2.add("corn");
// corn added!

list2.list();
// peas
// corn

list2.remove("peas");
// peas removed!

list2.list();
// corn
