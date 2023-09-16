"use strict";

function getAge() {
  var userAge = parseInt(prompt("Please, enter your age"));

  if (!isNaN(userAge && userAge >= 0)) {
    if (userAge >= 0 && userAge <= 11) {
      console.log("You are a child");
    } else if (userAge >= 12 && userAge <= 17) {
      console.log("You are a teenager");
    } else if (userAge >= 18 && userAge <= 59) {
      console.log("You are an adult");
    } else if (userAge >= 60) {
      console.log("You are a super star");
    }
  } else {
    alert("Enter correct age, please!");
  }
}

function displaySpecialCharacter() {
  var userNumber = parseInt(prompt("Enter any number from 0 to 9, and I'll show you a special symbol:)"));

  switch (userNumber) {
    case 0:
      alert(")");
      break;

    case 1:
      alert("!");
      break;

    case 2:
      alert("@");
      break;

    case 3:
      alert("#");
      break;

    case 4:
      alert("$");
      break;

    case 5:
      alert("%");
      break;

    case 6:
      alert("^");
      break;

    case 7:
      alert("&");
      break;

    case 8:
      alert("*");
      break;

    case 9:
      alert("(");
      break;
  }
}

function getPalindrome() {
  var userNumber = prompt("Please enter a five-digit number");

  for (var _i = 0; _i < userNumber.length; _i++) {
    console.log(userNumber[_i]);

    if (userNumber[_i] !== userNumber[userNumber.length - 1 - _i]) {
      console.log("Your number is not a palindrome!");
    } else {
      console.log("Wow, this is a palindrome! ");
    }
  }
}

function getPurchaseSum() {
  var purchaseSum = parseInt(prompt("Enter the sum of your purchase"));

  if (!isNaN(purchaseSum)) {
    if (purchaseSum >= 200 && purchaseSum <= 300) {
      alert("Your discount is 3%, your final sum is ".concat(purchaseSum - purchaseSum / 100 * 3, " "));
    } else if (purchaseSum > 300 && purchaseSum <= 500) {
      alert("Your discount is 5%, your final sum is ".concat(purchaseSum - purchaseSum / 100 * 5, " "));
    } else if (purchaseSum > 500) {
      alert("Your discount is 7%, your final sum is ".concat(purchaseSum - purchaseSum / 100 * 7, " "));
    } else {
      alert("You haven't got a discount yet");
    }
  }
} // function getPlusMinusNumbers() {
//   let userNumbers = parseInt(prompt("Please, enter 10 numbers"));
// }


function getDayOfWeek() {
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  for (i = 1; i < daysOfWeek.length; i++) {
    var userAnswer = confirm("".concat(daysOfWeek[i], ",  do you want to see next day? "));

    if (userAnswer === false) {
      break;
    }
  }
} // function guessUserNumber() {
//   let userNumber = parseInt(prompt("Write any number from 0 to 100"));
//   let start = 0;
//   let mid = 50;
//   let end = 100;
//   let result;
//   while (start <= end) {
//     if ( userNumber)
//   }
// }


function getNextDate() {
  var userDate = prompt("Please, enter any date.");
  var dateArray = userDate.split("."); // make array from string

  var day = +dateArray[0];
  var month = +dateArray[1];
  var year = +dateArray[2];
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
  var nextDay = day + 1;
  var nextMonth = month;
  var nextYear = year;

  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (day === 30) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 2:
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        if (day === 29) {
          nextDay = 1;
          nextMonth++;
        }
      } else {
        if (day >= 28) {
          nextDay = 1;
          nextMonth++;
        }
      }

      break;

      if (nextMonth > 12) {
        nextMonth = 1;
        nextDay = 1;
        nextYear++;
      }

  }

  var addZero = function addZero(n) {
    return n < 10 ? "0".concat(n) : n;
  };

  console.log("Next date - ".concat(addZero(nextDay), ".").concat(addZero(nextMonth), ".").concat(nextYear));
}