"use strict";

function askUserName() {
  var userName = prompt("Enter your name");

  if (userName.length < 3) {
    alert("Please, enter correct name");
  } else {
    alert("Hello, ".concat(userName));
  }
}

function askBirthday() {
  var currentDay = new Date();
  var currentYear = currentDay.getFullYear();
  var userBirthday = parseInt(prompt("Please, enter your year of birth"));

  if (!isNaN(userBirthday)) {
    if (userBirthday > currentYear) {
      console.log("You are not born yet:)");
    } else {
      console.log("Your age is ".concat(currentYear - userBirthday));
    }
  } else {
    console.log("Please, add valid year!");
  }
}

function askSquareSide() {
  var squareSide = parseInt(prompt("Please, enter square side length"));

  if (!isNaN(squareSide)) {
    alert("Perimeter of the square is ".concat(squareSide * 4));
  } else {
    alert("I`m not a wizard, so, please enter a real square side!");
  }
}

function askCircleRadius() {
  var circleRadius = parseInt(prompt("Please enter the radius of the circle"));

  if (!isNaN(circleRadius)) {
    alert("The area of the circle is ".concat(Math.PI * Math.pow(circleRadius, 2)));
  } else {
    alert("I see that you know other symbols besides numbers, but please enter the length of the radius of a circle in numbers!");
  }
}

function askDistance() {
  var distance = parseInt(prompt("Please, enter the distance in kilometers between cities SwimAllDay and LazyDog"));
  var timeToGet = parseInt(prompt("Please, enter the time(hours) you want to get from SwimAllDay to LazyDog"));

  if (!isNaN(distance) && !isNaN(timeToGet)) {
    alert("Hey, you are almost a rocket! You need to go with a speed ".concat(distance / timeToGet, " km per hour, to get there."));
  } else {
    alert("Ok, I think you've played enough, so please enter the correct data. ");
    askDistance();
  }
}

function currencyСonverter() {
  var dollarRate = 37;
  var euroRate = 40;
  var userCurrency = parseInt(prompt("How many dollars do you want to convert into euro?"));

  if (!isNaN(userCurrency)) {
    alert("O, friend, you are a real Donald Duck! You'll get ".concat(userCurrency * dollarRate / euroRate, " euros from ").concat(userCurrency, " dollars!"));
  } else {
    alert("Really? You are not tired of playing games with me? Let`s enter amount of dollars you want to convert!");
    currencyСonverter();
  }
}