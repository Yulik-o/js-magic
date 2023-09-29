"use strict";

Practice;
var user = {
  name: "Ivan",
  surname: "Smith"
};
user.name = "Petro";
console.log(user.name);
delete user.name;
console.log(user.name);

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }

  return true;
}

var schedule = {};
alert(isEmpty(schedule));
var salaries = {
  John: 100,
  Ann: 50,
  Pete: 70
};
var sum = 0;

for (var key in salaries) {
  sum += salaries[key];
  console.log(sum);
}

alert(sum);
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (var _key in obj) {
    if (typeof obj[_key] == "number") {
      obj[_key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu); // copy of the object:

var userObject = {
  name: "Ivan",
  age: 32
};
var clone = {};

for (var _key2 in userObject) {
  clone[_key2] = userObject[_key2];
}

console.log(clone);
clone.name = "Stas";
console.log(clone); //Object.assign()
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