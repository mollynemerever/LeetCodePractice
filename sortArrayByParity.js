let A = [3, 2, 1, 4];

// const sortArrayByParity = function(A) {
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] % 2 !== 0) {
//       let element = A.splice(i, 2);
//       A.push(element[0]);
//     }
//   }
//   return A;
// };

function testing(A) {
  let index = 0;
  let i = 0;
  while (i < A.length) {
    if (A[i] % 2 === 0) {
      let temp = A[index];
      A[index] = A[i];

      A[i] = temp;
      index++;
    }
    i++;
  }
  return A;
}

//console.log(sortArrayByParity(A));

console.log(testing(A));
