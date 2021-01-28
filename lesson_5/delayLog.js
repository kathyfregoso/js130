function delayLog() {
  for (var number = 1; number <= 10; number += 1) {
    setTimeout(function () {
      console.log(number);
    }, number * 1000);
  }
}

delayLog();

/* 
what do you think would happen if you replaced let delay with var delay?

It would log 11 ten times. var has function scope, so the loop uses the same number variable
on each iteration. due to closure, each invocation of the cb func see the curr state of the
number variable. since the cb doesn't get called until long after the loop terminates, it 
gets the final value of number, whwich is 11.

let has block scope, each iteration forms a closure with a diff variable. so each cb's closure
encloses a unique number variable.
*/
