"use strict";

function getArguments() {
  console.log("Argument's quantity is ".concat(arguments.length));
}

function compareNumbers(num1, num2) {
  if (num1 < num2) {
    console.log(-1);
    return -1;
  } else if (num1 > num2) {
    console.log(1);
    return 1;
  } else {
    console.log(0);
    return 0;
  }
}

function getFactorial() {
  var userNumber = parseInt(prompt("Please, enter any number and I'll show you its factorial"));
  var factorial = 1;

  for (var i = userNumber; i >= 1; i--) {
    factorial *= i;
  }

  console.log("Factorial of your number is ".concat(factorial));
  return factorial;
}

function getNumberWithoutComma(num1, num2, num3) {
  var numberArray = Array.from(arguments);
  var convertedStringNumbers = numberArray.join("");
  var convertedNumbers = Number(convertedStringNumbers);
  console.log("Converted number: ".concat(convertedNumbers));
  return convertedNumbers;
}

function getPerfectNumber(number) {
  var dividerSum = 0;

  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      dividerSum += i;
    }
  }

  return number === dividerSum;
}

function getUserNumber() {
  var userNumber = parseInt(prompt("Please, enter any number"));
  console.log(getPerfectNumber(userNumber) ? "Number ".concat(userNumber, "  is perfect") : "Number ".concat(userNumber, " is not perfect"));
}

function getPerfectInRange() {
  var min = parseInt(prompt("Enter minimal number"));
  var max = parseInt(prompt("Enter maximal number"));
  var result = "";

  for (var i = min; i <= max; i++) {
    if (getPerfectNumber(i)) {
      result += i + " ";
    }
  }

  alert(" Number ".concat(result, " - perfect"));
}

function showResult(data) {
  console.log("Your data is ".concat(data));
}

function getSquare(w) {
  var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : w;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  callback(w * h);
} // getSquare(3, 6, showResult);