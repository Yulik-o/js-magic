function askUserName() {
  let userName = prompt("Enter your name");
  if (userName.length < 3) {
    alert("Please, enter correct name");
  } else {
    alert(`Hello, ${userName}`);
  }
}
function askBirthday() {
  const currentDay = new Date();
  const currentYear = currentDay.getFullYear();
  const userBirthday = parseInt(prompt("Please, enter your year of birth"));

  if (!isNaN(userBirthday)) {
    if (userBirthday > currentYear) {
      console.log("You are not born yet:)");
    } else {
      console.log(`Your age is ${currentYear - userBirthday}`);
    }
  } else {
    console.log("Please, add valid year!");
  }
}
function askSquareSide() {
  const squareSide = parseInt(prompt("Please, enter square side length"));
  if (!isNaN(squareSide)) {
    alert(`Perimeter of the square is ${squareSide * 4}`);
  } else {
    alert("I`m not a wizard, so, please enter a real square side!");
  }
}
function askCircleRadius() {
  const circleRadius = parseInt(
    prompt("Please enter the radius of the circle")
  );
  if (!isNaN(circleRadius)) {
    alert(`The area of the circle is ${Math.PI * Math.pow(circleRadius, 2)}`);
  } else {
    alert(
      "I see that you know other symbols besides numbers, but please enter the length of the radius of a circle in numbers!"
    );
  }
}

function askDistance() {
  const distance = parseInt(
    prompt(
      "Please, enter the distance in kilometers between cities SwimAllDay and LazyDog"
    )
  );
  const timeToGet = parseInt(
    prompt(
      "Please, enter the time(hours) you want to get from SwimAllDay to LazyDog"
    )
  );
  if (!isNaN(distance) && !isNaN(timeToGet)) {
    alert(
      `Hey, you are almost a rocket! You need to go with a speed ${
        distance / timeToGet
      } km per hour, to get there.`
    );
  } else {
    alert(
      "Ok, I think you've played enough, so please enter the correct data. "
    );
    askDistance();
  }
}

function currencyСonverter() {
  const dollarRate = 37;
  const euroRate = 40;
  const userCurrency = parseInt(
    prompt("How many dollars do you want to convert into euro?")
  );
  if (!isNaN(userCurrency)) {
    alert(
      `O, friend, you are a real Donald Duck! You'll get ${
        (userCurrency * dollarRate) / euroRate
      } euros from ${userCurrency} dollars!`
    );
  } else {
    alert(
      "Really? You are not tired of playing games with me? Let`s enter amount of dollars you want to convert!"
    );
    currencyСonverter();
  }
}
