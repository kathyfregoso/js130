// 1. Array.prototype.filter: filtering elements of arr by examining arr values,
// don't include thisArg or support multiple args to the callback

function filter(array, callback) {
  let newArr = [];
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index])) {
      newArr.push(array[index]);
    }
  }
  return newArr;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, (number) => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, (number) => number < 0)); // => []
console.log(filter(numbers, () => true)); // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, (value) => typeof value === "string"));
// => [ 'abc', 'xyz' ]

// 2. Array.prototype.map: transforming elements of an array by using array values
// don't include thisArg or support multiple args to callback

function map(arr, callback) {
  let newArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    let value = callback(arr[index]);
    newArr.push(value);
  }
  return newArr;
}

let numbers2 = [1, 2, 3, 4, 5];
console.log(map(numbers2, (number) => number * 3)); // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers2, (number) => number + 1)); // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers2, () => false));
// => [ false, false, false, false, false ]

let values2 = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values2, (value) => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
