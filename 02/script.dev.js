"use strict";

function getSum() {
  var a = 0.1;
  var b = 0.2;
  var sum = (0.1 * 10 + 0.2 * 10) / 10;
  console.log(sum);
}

function getOneTwoSum() {
  var a = "1";
  var b = 2;
  var sum = Number(a) + b;
  console.log(sum);
}

function calculateGb() {
  var fileSize = 820;
  var usbStickSize = parseInt(prompt("What is the size of the flash drive in gigabytes"));
  var fileAmount = null;

  if (!isNaN(usbStickSize)) {
    fileAmount = usbStickSize * 1000 / fileSize;
    console.log(fileAmount);
  } else {
    alert("Hey, come on! Enter the number!");
  }
}

function getChocolateAmount() {
  var userMoney = Number(prompt("How much money do you have?"));
  var chocolatePrice = Number(prompt("How much does chocolate cost?"));
  var chocolateQuantity = null;
  var rest = null;

  if (!isNaN(userMoney) && !isNaN(chocolatePrice)) {
    chocolateQuantity = parseInt(userMoney / chocolatePrice);
    rest = userMoney - chocolateQuantity * chocolatePrice;
    console.log("You can buy ".concat(chocolateQuantity, " chocolates. Your rest will be ").concat(rest, "."));
  } else {
    alert("Please enter correct data.");
  }
}

function getRemainderOfDivision() {
  var userNumber = parseInt(prompt("Please enter a three digit number"));
  var firstNumber = parseInt(userNumber / 100);
  console.log(firstNumber);
  var secondNumber = parseInt(userNumber % 100 / 10);
  console.log(secondNumber);
  var thirdNumber = userNumber % 10;
  console.log(thirdNumber);

  if (!isNaN(userNumber)) {
    var invertedStringNumber = String(thirdNumber) + String(secondNumber) + String(firstNumber);
    var invertedNumber = Number(invertedStringNumber);
    console.log("Inverted number is ".concat(invertedNumber));
  } else {
    alert("Please, not letter or sign, or one number, etc. Exactly enter a three digit number");
  }
}

function getBankPercentage() {
  var duration = 2;
  var percentage = 5;
  var extraMoney = null;
  var userMoney = parseInt(prompt("Please. enter the sum of money in dollars you want to put to the bank"));

  if (!isNaN(userMoney)) {
    extraMoney = userMoney / 100 * percentage * duration;
    console.log("You'll get extra ".concat(extraMoney, "$ for your two month deposit."));
  } else {
    alert("Hey, bank security is attentively looking at you, so, enter the correct sum in numbers, please!");
  }
}

function logicOperators() {
  2 && 0 && 3; //returns false

  console.log("2 && 0 && 3 returns 0");
  2 || 0 || 3; //returns 2

  console.log("2 || 0 || 3 returns 2");
  2 && 0 || 3; //returns 3

  console.log("2 && 0 || 3 returns 3");
}