// Write a func named startCounting that logs a number to the console every second,
// starting with 1. Each output number should be one greater than the previous one.

function startCounting() {
  let number = 0;

  setInterval(() => {
    number += 1;
    console.log(number);
  }, 1000);
}

function stopCounting(counterID) {
  clearInterval(counterID);
}

let counterID = startCounting();
stopCounting(counterID);
