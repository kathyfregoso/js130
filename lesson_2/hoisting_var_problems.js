// 1. without running this code, what will it display? explain.

// var foo = function () {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }

// foo();

/* 
This code logs 'Bye'. Function declarations get hoisted above var variables, so foo 
ends up with first function as its value.
*/

// 2. without running code, what does it print?

// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);

/* 
It logs:
undefined
Hello
Bye
2

var is used to declare foo inside if statement block, which is within the for loop block. this
variable has function scope, and is available before its declaration and in the code after the
for loop. When the 2nd l ine is executed, foo is defined cause of hoisting with a value of 
undefined (it hasn't been initialized). One 2nd execution of line 2, foo is set to 'Hello',
and when the loop finishes foo resolves to 'Bye'. Since we use var to define index variable,
it also has function scope, so the final line logs 2.
*/

// 3. update this code so it works w.out changing order of invocation and function
// definition:

// bar();

// // var bar = function () {
// //   console.log("foo!");
// // };

// function bar() {
//   console.log("foo!");
// }

/* 
I changed the function expression to a function declaration, since they can be hoisted.
*/

// 4. Without running the following code, determine what it logs to the console:

// var bar = 82;
// function foo() {
//   var bar = bar - 42;
//   console.log(bar);
// }

// foo();

/* 
It logs NaN. bar is undefined when we attempt to subtract 42 from it, which results in NaN.
*/

// 5. Rewrite the code below using let instead of var. Change way variables are declared
// without altering the output:

// function foo(condition) {
//   console.log(bar);

//   qux = 0.5772;

//   if (condition) {
//     var qux = 3.1415;
//     console.log(qux);
//   } else {
//     var bar = 24;

//     var xyzzy = function() {
//       var qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);

function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function () {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);

/* 
Before edits it logs: 
undefined
3.1415
42
undefined
0.5772
2.7183
undefined
42
*/

// 6. Rewrite the following code in a way that shows what the code would look like if hoisting
// were a real process that actually reorganized your code. The intent here is to clearly show
// how and when the various identifiers in this program are defined with respect to the code
// that actually gets executed.

// Pet.prototype.walk = function () {
//   console.log(`${this.name} is walking.`);
// };

// function Pet(name, image) {
//   this.name = name;
//   this.image = image;
// }

// class Image {
//   constructor(file) {
//     this.file = file;
//   }
// }

// var catImage = new Image("cat.png");
// var pudding = new Pet("Pudding", catImage);

function Pet(name, image) {
  this.name = name;
  this.image = image;
}

var Image;
var catImage;
var pudding;

Pet.prototype.walk = function () {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);

/* 
When it comes to classes, only the class's name gets hoisted, and doesn't get defined until
the definition is called. 
*/
