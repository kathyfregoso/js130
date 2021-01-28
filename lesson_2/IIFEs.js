// 1. Will the following code execute without error? Try to answer without running it.

// function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }();

/* 
No, without the parens. around the func. definition, we may get a syntax error when we try to
invoke it. You must turn a func declaration to an expression before it can be immediately invoked.
*/

// 2. Rewrite the example from the previous so that it executes without error.

// (function () {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();

// 3. Why does this code produce an error? Correct the problem by using an IIFE.

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

let add = (function (arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

sum += add; // ?
// console.log(sum);
/* 
I think it throws an error because the function named sum clashes with the variable named sum.
To fix this, I used IIFE syntax to turn the function def into a func expression and assigned it
to a new variable add. Then I sum together the values of the sum variable and the function assigned
to the add variable to get an output of 49.
*/

// 4. Replace the invocation of countdown with an IIFE that produces the same results.

(function (number) {
  for (let start = number; start >= 0; start -= 1) {
    console.log(start);
  }
})(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// 5. Is the named function inside in this IIFE accessible in the global scope?

// (function foo() {
//   console.log("Bar");
// })();

// foo(); // ?

/* 
No, the scope of the function is local to the scope created by the IIFE.
*/

// 6. Rewrite this code using an IIFE. Your solution should no longer need the name foo.

let bar = (function (start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

// 7. refactor the solution to problem 4 using recursion.
// Bear in mind that named functions created as IIFEs can be referenced by those same functions.
// That is, you can call use a function's name in the body of the IIFE.

(function countdown(number) {
  console.log(number);
  if (number > 0) {
    countdown(number - 1);
  }
})(7);
