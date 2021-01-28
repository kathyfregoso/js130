// function myBind(callback, context) {
//   return (...args) => callback.appl(context, args);
// }

// alternative using arguments array (doesn't work w/ arrow functions):

// function myBind(callback, context) {
//   return function () {
//     return callback.apply(context, arguments);
//   };
// }

// with partial function application behavior:
function myBind(callback, context) {
  // when myBind is called, it creates the someArgs array
  // this array contains the pre-specified initial args
  let someArgs = [].slice.apply(arguments, [2]);

  // when bound func is called, rest of args are concatenated with someArgs
  // this works cause we cache the initial set of args and have it accessible via closure
  // formed by myBind
  return function () {
    let restOfArgs = [].slice.apply(arguments);
    let allArgs = someArgs.concat(restOfArgs);

    return callback.apply(context, allArgs);
  };
}

// solution with arrow function:

// const myBind = (func, ctx, ...args) => {
//   let partialArgs = args;

//   return (...restArgs) => {
//     let remainingArgs = restArgs;
//     let fullArgs = partialArgs.concat(remainingArgs);

//     return func.apply(ctx, fullArgs);
//   }
// }

// solution using Array, call and spread syntax:

// function myBind(func, context) {
//   let partialArgs = Array(...arguments).slice(2);

//   return function() {
//     return func.call(context, ...partialArgs, ...arguments);
//   };
// }

// solution using spread syntax, arrow functions, and call:

// function myBind(func, context, ...initialArgs) {
//   return (...remainingArgs) => {
//     return func.call(context, ...initialArgs, ...remainingArgs);
//   };
// }

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

addFive(10); // 15
