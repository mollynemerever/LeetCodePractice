function multiplier(factor) {
  return number => {
    return number * factor;
  };
}

let triple = multiplier(3);
//binds factor = 3

let quadruple = multiplier(4);
//binds factor = 4

console.log(triple(5)); // 15
console.log(triple(3)); // 9

console.log(quadruple(3)); // 12
console.log(quadruple(4)); // 16

// let double = num => {
//   let local = num;
//   return () => local * 2;
// };
//
// let var1 = double(2);
// //local binding created with num=2
// let var2 = double(4);
// //local binding created with num=4
//
// console.log(var1()); //4
// //accesses local binding of line 18
//
// console.log(var2()); //8
// //accesses local binding of line 20
