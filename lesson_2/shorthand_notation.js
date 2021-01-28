// 1. rewrite this code using classic JS syntax

// function foo(bar, qux, baz) {
//   return {
//     bar,
//     baz,
//     qux,
//   };
// }

// rewritten:
// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// }

// 2. Rewrite the following code using classic JavaScript syntax:

// function foo() {
//   return {
//     bar() {
//       console.log("bar");
//     },
//     qux(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// rewritten:
// function foo() {
//   return {
//     bar: function () {
//       console.log("bar");
//     },
//     qux: function (arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function (arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// 3. Rewrite the following code using classic JavaScript syntax:

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// the order of names btw braces doesn't matter:
// let { baz, qux, bar } = foo(1, 2, 3);

// rewritten:
// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let obj = foo(1, 2, 3);

// let baz = obj.baz;
// let qux = obj.qux;
// let bar = obj.bar;

// 4. Rewrite the following code using classic JavaScript syntax:

// function foo([one, , three]) {
//   return [three, 5, one];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let [bar, qux, baz] = result;
// console.log(result); // [3,5,1]
// console.log(bar); // 3
// console.log(qux); // 5
// console.log(baz); // 1

// rewritten
// function foo(arr) {
//   return [arr[2], 5, arr[0]];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let bar = array[0];
// let qux = array[1];
// let baz = array[2];

// 5. Rewrite the following code using classic JavaScript syntax:

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(...array); // 30

// rewritten:

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// console.log(product(array[0], array[1], array[2])); // 30

// 6. Rewrite the following code using classic JavaScript syntax:

// function product(...numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

// rewritten:
// function product() {
//   let args = Array.from(arguments);
//   return args.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);
// console.log(result);

// 7. optional. Using shorthand notation, what is the missing code?

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

// rewritten:
// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code
//   return {
//     type: animalType,
//     age,
//     colors,
//   };
// }

// let { type, age, colors } = qux();
// console.log(type); // cat
// console.log(age); // 9
// console.log(colors); // [ 'black', 'white' ]

// 8. optional. Write a func that takes 5 str args, and returns an object with 3 properties:
// - first: the first argument
// - last: the last argument
// - middle: the middle 3 arguments as a sorted array

// After writing the function, write some code to call the function.
// The args you provide should come from an array.
// create local variables named first, last, and middle from the return value.
// Use shorthand syntax wherever you can.

function strObj(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3].sort(),
  };
}

let array = ["str1", "str2", "str3", "str4", "str5"];
let { first, last, middle } = strObj(...array);
console.log({ first, last, middle });
