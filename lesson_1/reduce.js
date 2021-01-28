// 1. Array.prototype.reduce: reducing elements of an array down to a single value based on the
// original array values. result may be primitive, object, or another array. don't include
// thisArg or multiple arguments to callback

function reduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let index = 0; index < array.length; index += 1) {
    if (accumulator === undefined) {
      accumulator = array[0];
      index = 1;
    }

    accumulator = callback(accumulator, array[index]);
  }

  return accumulator;
}

let numbers3 = [1, 2, 3, 4, 5];
console.log(reduce(numbers3, (accum, number) => accum + number)); // => 15
console.log(reduce(numbers3, (prod, number) => prod * number)); // => 120
console.log(reduce(numbers3, (prod, number) => prod * number, 3)); // => 360
console.log(reduce([], (accum, number) => accum + number, 10)); // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(
  reduce(
    stooges,
    (reversedStooges, stooge) => {
      reversedStooges.unshift(stooge);
      return reversedStooges;
    },
    []
  )
);
// => ["Curly", "Larry", "Mo"]

// 2. write a function that works like filter, use Array.prototype.reduce to filter input array.

function filter(array, callback) {
  return array.reduce((filtered, value) => {
    if (callback(value)) {
      filtered.push(value);
    }
    return filtered;
  }, []);
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, (number) => number > 3)); // [4,5]

// 3. write a function that works like map, using Array.prototype.reducee to transform input array

function map(array, callback) {
  return array.reduce((transformed, value) => {
    value = callback(value);
    transformed.push(value);
    return transformed;
  }, []);
}

let numbers2 = [1, 2, 3, 4, 5];
console.log(map(numbers2, (number) => number * 3)); // => [ 3, 6, 9, 12, 15 ]
