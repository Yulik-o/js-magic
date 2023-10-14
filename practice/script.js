// const EMAIL_MIN_LENGHT = 5;
const mediumRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
);

function testPasswordRegex(value) {
  return mediumRegex.test(value);
}

function checkEmailLenght() {
  const valueLenght = window.inputEmail.value.length;
  const diff =
    valueLenght < EMAIL_MIN_LENGHT ? EMAIL_MIN_LENGHT - valueLenght : 0;

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

  const email = window.inputEmail.value;
  const password = window.inputPassword.value;

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
  }

  // console.log(email, password);
}

function formSubmit(event) {
  event.preventDefault();

  let apiToken = "6349577279:AAHjS79gNUqk3QS5-ipyiMGhXxtOkqTyRL0";
  let chatId = "-1001961252000";
  let text = "Hello world!";

  let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;

  let request = new XMLHttpRequest();
  request.open("GET", urlString);
  request.send();

  let response = request.response;

  // Do what you want with response
}

// window.inputEmail.addEventListener('input', checkEmailLenght);
window.loginForm.addEventListener("submit", formSubmit);
// document.addEventListener('DOMContentLoaded', checkEmailLenght);
