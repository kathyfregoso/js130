// refactor so we don't need to use arguments object:

// function sum() {
//   values = Array.prototype.slice.call(arguments);

//   return values.reduce(function(a, b) {
//     return a + b;
//   });
// }

// sum(1, 4, 5, 6); // 16

// refactored:

function sum(...values) {
  return values.reduce(function (a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16
