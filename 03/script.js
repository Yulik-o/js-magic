function getAge() {
  const userAge = parseInt(prompt("Please, enter your age"));

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
  let userNumber = parseInt(
    prompt("Enter any number from 0 to 9, and I'll show you a special symbol:)")
  );
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

// function getPalindrome() {
//   const userNumber = prompt("Please enter a five-digit number");
//   for (let i = 0; i < userNumber.length; i++) {
//     console.log(userNumber[i]);
//     for (let j = 5; j < userNumber.length; j--) {
//       console.log(userNumber[j]);
//       if (userNumber[i] === userNumber[j]) {
//         console.log("Wow, this is a palindrome!");
//       } else {
//         console.log("Your number is not a palindrome!");
//       }
//     }
//   }
// }
function getPurchaseSum() {
  const purchaseSum = parseInt(prompt("Enter the sum of your purchase"));
  if (!isNaN(purchaseSum)) {
    if (purchaseSum >= 200 && purchaseSum <= 300) {
      alert(
        `Your discount is 3%, your final sum is ${
          purchaseSum - (purchaseSum / 100) * 3
        } `
      );
    } else if (purchaseSum > 300 && purchaseSum <= 500) {
      alert(
        `Your discount is 5%, your final sum is ${
          purchaseSum - (purchaseSum / 100) * 5
        } `
      );
    } else if (purchaseSum > 500) {
      alert(
        `Your discount is 7%, your final sum is ${
          purchaseSum - (purchaseSum / 100) * 7
        } `
      );
    } else {
      alert("You haven't got a discount yet");
    }
  }
}

// function getPlusMinusNumbers() {
//   let userNumbers = parseInt(prompt("Please, enter 10 numbers"));
// }

function getDayOfWeek() {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  for (i = 1; i < daysOfWeek.length; i++) {
    let userAnswer = confirm(
      `${daysOfWeek[i]},  do you want to see next day? `
    );
    if (userAnswer === false) {
      break;
    }
  }
}

// function guessUserNumber() {
//   let userNumber = parseInt(prompt("Write any number from 0 to 100"));
//   let start = 0;
//   let mid = 50;
//   let end = 100;
//   let result;
//   while (start <= end) {
//     if ( userNumber)
//   }
// }
