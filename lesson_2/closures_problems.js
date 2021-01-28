// 1. What do the 4 console.log statements at the end of this program print?

// let counter = 0;

// function makeCounter() {
//   return function () {
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

/* 
It logs 1, 2, 3, and 4. Counter is declared in the global scope, so it's value is set at 0 once. 
Closure means that the function returned by makeCounter stores an internal 'envelope' with a 
pointer to the original value of counter. Each call of incrementCounter increments
the current value of counter by 1.
*/

// 2.  What do the 4 console.log statements at the end of this program print?
// Try to answer without running the code:

// function makeCounter() {
//   return function () {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

/* 
It logs 1 four times, since each invocation of the function returned by incrementCounter initializes
counter with a value of 0. Closure is not involved here.
*/

// 3.  What do the 4 console.log statements at the end of this program print?
// Try to answer without running the code:

// function makeCounter() {
//   let counter = 0;

//   return function () {
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

/* 
It logs 1,2 and then 1,2 again. Saving the return value of makeCountere to incrementCounter
and then reassigning it on line 67 resets its value to 0. The local variable counter is different in the 
3rd and 4th invocations from the variable accessed by the 1st and 2nd invocations.
*/

// 4. What do the 4 console.log statements at the end of this program print?
// Try to answer without running the code:

// function makeCounter() {
//   let counter = 0;

//   return function () {
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter1 = makeCounter();
// let incrementCounter2 = makeCounter();

// console.log(incrementCounter1());
// console.log(incrementCounter1());

// console.log(incrementCounter2());
// console.log(incrementCounter2());

/* 
Like the previous problem, incrementCounter1 logs 1 then 2 and incrementCounter2 logs 1 then 2.
Each returned function has a unique copy of the counter variable value. They are two separate
variables with the same name. The additions on the variable in incrementCounter1's envelope
do not affect the variable on the counter variable in incrementerCounter2.
*/

// 5. Write a function named makeMultipleLister that you can call with a number as an argument.
// should return a new function that, when invoked, logs every positive integer
// multiple of that number less than 100.

// function makeMultipleLister(number) {
//   return () => {
//     let multiple = number;
//     while (multiple <= 100) {
//       console.log(multiple);
//       multiple += number;
//     }
//   };
// }

// let lister = makeMultipleLister(17);
// lister();

// 6. write 2 functions, add and subtract, to manipulate a running total.
// when you invoke either function with a number argument, it should add or subtract that number
// from the running total and log the new total.

// let total = 0;

// function add(number) {
//   total += number;
//   console.log(total);
// }

// function subtract(number) {
//   total -= number;
//   console.log(total);
// }

// add(1); // 1
// add(42); // 43
// subtract(39); // 4
// add(6); // 10

// 7. determine what value this code logs on the last line. explain how it got that final result.

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// // foo(2) is same as anon function with parameter named factor returned by foo
// let bar = foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result); // 150

/*
The final line of this code logs 150. 
We create a variable named bar that is assigned a function that accepts a single argument,
multiplies it with variable called prod, and returns that product. prod is out of scope when
bar is invoked, but closure lets bar keep access to prod. Then result is assigned the return 
value of bar(3), which accesses the current value of prod (due to closure), which is 2.
the returned function multiples prod by 3, and returns the new value of prod, which is 6.
That return value is assigned to result. Then on the next line, we call returned function with arg
of 4, since prod has a value of 6 (saved from prev. call with closure), it multiplies 6 by 4,
setting prod to 24. That value is returned and added to the previous result, 6, so now the 
value of the result variable is 30. The next line is similar, we multiply prod (value of 24)
by 5, and set prod to 120. We return 120 and add it to the prev result of 30, which is 30, 
resulting in the final value, 150.
*/

// 8. write a func later that takes 2 args: a function and arg for that func. the return value
// should be a new function with the provided argument

function later(callback, argument) {
  // uses partial function application to create a new function that doesn't
  // need a message every time it is called
  return () => callback(argument);
}

const logger = (message) => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

// 9. write a function called later2 that accepts 2 args: a function and arg for that func.
// the return value should be a new function that also takes an argument. the new function
// should call the input function with the argument provided by later2 and the arg
// provided to the returned function

function later2(callback, argument) {
  // the function returned by later2 takes a new argument that it passes to the callback argument
  // of later2 as well as a second new argument
  return (newArg) => callback(argument, newArg);
}

const notify = function (message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

// 10. write a function that emulates the context binding aspect of bind. it should
// call the function with the desired context, don't pass any arguments to the function

("use strict");

function bind(context, callback) {
  return () => callback.call(context);
}

let obj = {};
let boundFunc = bind(obj, function () {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }
