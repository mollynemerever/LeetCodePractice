// console.log(defined); //prints undefined
// var defined = true;
// //only var defined is hoisted
// //defined = true is not hoisted
// console.log(defined); //prints true

letExample();

function letExample() {
  console.log(defined); //throws error `defined` not defined
  let defined; //initialized with value undefined
  console.log(defined); //prints undefined
  defined = true; //reassigned value of true
  console.log(defined); //prints true
}

varExample();

function varExample() {
  console.log(defined); //prints 'undefined'
  var defined; //hoisted & initialized w/ `undefined`
  console.log(defined); //prints 'undefined'
  defined = true; //reassigned value of true
  console.log(defined); //prints true
}

// expression();
// //error: expression is not a function
//
// var expression = function() {
//   console.log("function is not hoisted, just declaration");
// };
//
// expression();
// //works! logs as expected

// declaration();
//
// function declaration() {
//   console.log("I'm hoisted to top of global scope");
// }
//works! logs as expected
