function getArguments() {
  console.log(`Argument's quantity is ${arguments.length}`);
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
  let userNumber = parseInt(
    prompt("Please, enter any number and I'll show you its factorial")
  );
  let factorial = 1;
  for (let i = userNumber; i >= 1; i--) {
    factorial *= i;
  }
  console.log(`Factorial of your number is ${factorial}`);
  return factorial;
}
function getNumberWithoutComma(num1, num2, num3) {
  const numberArray = Array.from(arguments);
  const convertedStringNumbers = numberArray.join("");
  const convertedNumbers = Number(convertedStringNumbers);
  console.log(`Converted number: ${convertedNumbers}`);
  return convertedNumbers;
}
function getPerfectNumber(number) {
  let dividerSum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      dividerSum += i;
    }
  }
  return number === dividerSum;
}
function getUserNumber() {
  const userNumber = parseInt(prompt("Please, enter any number"));
  console.log(
    getPerfectNumber(userNumber)
      ? `Number ${userNumber}  is perfect`
      : `Number ${userNumber} is not perfect`
  );
}
function getPerfectInRange() {
  let min = parseInt(prompt("Enter minimal number"));
  let max = parseInt(prompt("Enter maximal number"));
  let result = "";
  for (let i = min; i <= max; i++) {
    if (getPerfectNumber(i)) {
      result += i + " ";
    }
  }
  alert(` Number ${result} - perfect`);
}

function showResult(data) {
  console.log(`Your data is ${data}`);
}
function getSquare(w, h = w, callback) {
  callback(w * h);
}
// getSquare(3, 6, showResult);
