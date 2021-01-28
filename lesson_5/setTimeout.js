// In what sequence will the JS runtime run the following lines?
// Number them from 1-8 to show the order of execution.

// setTimeout(function () {
//   // 1
//   console.log("Once"); // 5
// }, 1000);

// setTimeout(function () {
//   // 2
//   console.log("upon"); // 7
// }, 3000);

// setTimeout(function () {
//   // 3
//   console.log("a"); // 6
// }, 2000);

// setTimeout(function () {
//   // 4
//   console.log("time"); // 8
// }, 4000);

/* 
Once
a
upon
time
*/

// In what sequence does the JS runtime run the functions q(), d(), n(), z(), s(), f(),
// and g() in the following code?

// setTimeout(function () {
//   setTimeout(function () {
//     q();
//   }, 15);

//   d();

//   setTimeout(function () {
//     n();
//   }, 5);

//   z();
// }, 10);

// setTimeout(function () {
//   s();
// }, 20);

// setTimeout(function () {
//   f();
// });

// g();

// g(), f(), d(), z(), n(), s(), q()

// Write a function named afterNSeconds that takes two arguments:
// a callback and a time duration in seconds. It should wait
// for the indicated period, then invoke the callback function.

function afterNSeconds(callback, duration) {
  setTimeout(callback, duration * 1000);
}
