//Given a 32-bit signed integer, reverse digits of an integer.
//https://www.quora.com/What-is-32-bit-signed-integer
// Input: 123
// Output: 321

// Input: -123
// Output: -321

let integer = 321;

let reverseInteger = integer => {
  if (integer === 0) {
    return 0;
  }
  let string = integer.toString();
  let array = string.split("");
  let outputString = "";

  if (array[array.length - 1] === "0") {
    array.pop();
  }

  if (array[0] === "-") {
    let negativeSign = array.shift();
    array.push(negativeSign);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    outputString += array[i];
  }

  let outputInteger = parseInt(outputString);
  if (
    (outputInteger > 2147483647 && outputInteger > 0) ||
    (outputInteger < -2147483647 && outputInteger < 0)
  ) {
    return 0;
  }
  return outputInteger;
};

console.log(reverseInteger(integer));
