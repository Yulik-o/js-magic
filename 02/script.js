function getSum() {
  const a = 0.1;
  const b = 0.2;
  const sum = (0.1 * 10 + 0.2 * 10) / 10;
  console.log(sum);
}
function getOneTwoSum() {
  const a = "1";
  const b = 2;
  const sum = Number(a) + b;
  console.log(sum);
}

function calculateGb() {
  const fileSize = 820;
  let usbStickSize = parseInt(
    prompt("What is the size of the flash drive in gigabytes")
  );
  let fileAmount = null;
  if (!isNaN(usbStickSize)) {
    fileAmount = (usbStickSize * 1000) / fileSize;
    console.log(fileAmount);
  } else {
    alert("Hey, come on! Enter the number!");
  }
}

function getChocolateAmount() {
  let userMoney = Number(prompt("How much money do you have?"));
  let chocolatePrice = Number(prompt("How much does chocolate cost?"));
  let chocolateQuantity = null;
  let rest = null;
  if (!isNaN(userMoney) && !isNaN(chocolatePrice)) {
    chocolateQuantity = parseInt(userMoney / chocolatePrice);
    rest = userMoney - chocolateQuantity * chocolatePrice;
    console.log(
      `You can buy ${chocolateQuantity} chocolates. Your rest will be ${rest}.`
    );
  } else {
    alert("Please enter correct data.");
  }
}

function getRemainderOfDivision() {
  let userNumber = parseInt(prompt("Please enter a three digit number"));
  let firstNumber = parseInt(userNumber / 100);
  console.log(firstNumber);
  let secondNumber = parseInt((userNumber % 100) / 10);
  console.log(secondNumber);
  let thirdNumber = userNumber % 10;
  console.log(thirdNumber);

  if (!isNaN(userNumber)) {
    let invertedStringNumber =
      String(thirdNumber) + String(secondNumber) + String(firstNumber);
    let invertedNumber = Number(invertedStringNumber);
    console.log(`Inverted number is ${invertedNumber}`);
  } else {
    alert(
      "Please, not letter or sign, or one number, etc. Exactly enter a three digit number"
    );
  }
}

function getBankPercentage() {
  const duration = 2;
  const percentage = 5;
  let extraMoney = null;
  let userMoney = parseInt(
    prompt(
      "Please. enter the sum of money in dollars you want to put to the bank"
    )
  );
  if (!isNaN(userMoney)) {
    extraMoney = (userMoney / 100) * percentage * duration;
    console.log(`You'll get extra ${extraMoney}$ for your two month deposit.`);
  } else {
    alert(
      "Hey, bank security is attentively looking at you, so, enter the correct sum in numbers, please!"
    );
  }
}
function logicOperators() {
  2 && 0 && 3; //returns false
  console.log("2 && 0 && 3 returns 0");
  2 || 0 || 3; //returns 2
  console.log("2 || 0 || 3 returns 2");
  (2 && 0) || 3; //returns 3
  console.log("2 && 0 || 3 returns 3");
}
