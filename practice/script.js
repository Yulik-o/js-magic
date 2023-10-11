//Practice;
let user = {
  name: "Ivan",
  surname: "Smith",
};
user.name = "Petro";
console.log(user.name);
delete user.name;
console.log(user.name);
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
alert(isEmpty(schedule));
let salaries = {
  John: 100,
  Ann: 50,
  Pete: 70,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
  console.log(sum);
}

alert(sum);
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);

// copy of the object:
let userObject = {
  name: "Ivan",
  age: 32,
};
let clone = {};
for (let key in userObject) {
  clone[key] = userObject[key];
}
console.log(clone);
clone.name = "Stas";
console.log(clone);

//Object.assign()
// let user = {
//   name: "Mykola",
// };
// let permission1 = {
//   canView: true,
// };
// let permission2 = {
//   canEdit: true,
// };
// Object.assign(user, permission1, permission2);
// console.log(user.canEdit);
function speak(f) {
  var d = new SpeechSynthesisUtterance();
  var e = speechSynthesis.getVoices();
  d.voice = e[2];
  d.voiceURI = "native";
  d.volume = 1;
  d.rate = 1;
  d.pitch = 1;
  d.text = f;
  d.lang = "en-EN";
  speechSynthesis.speak(d);
}
speak("Hello my master!");
