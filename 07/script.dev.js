"use strict";

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var songListEl = document.querySelector(".songs_list");
var songListButton = document.querySelector(".button_songs_list");
songListButton.addEventListener("click", function () {
  playList.forEach(function (el, index) {
    var songsListItem = document.createElement("li");
    songsListItem.textContent = " Author: ".concat(el.author, ", Song: \"").concat(el.song, "\"");
    songListEl.append(songsListItem);
  });
}); // MODAL WINDOW

var openButtonEl = document.querySelector(".modal_btn");
var modalEl = document.querySelector(".modal");
openButtonEl.addEventListener("click", function () {
  modalEl.classList.add("active");
});
var modalCloseBtn = document.querySelector(".modal_close");
modalCloseBtn.addEventListener("click", function () {
  modalEl.classList.remove("active");
}); //TRAFFIC LIGHTS

var switchColorBtn = document.querySelector(".traffic_switch_btn");
var trafficWrapperEl = document.querySelector(".traffic_wrapper");
var lightsArray = trafficWrapperEl.querySelectorAll(".traffic_circle");
var trafficBtn = document.querySelector(".traffic_button");
var currentLightIndex = 0;
trafficBtn.addEventListener("click", function () {
  trafficWrapperEl.classList.toggle("active_traffic");
});

function switchLight() {
  lightsArray.forEach(function (el, index) {
    if (index === currentLightIndex) {
      el.classList.remove("disabled");
    } else {
      el.classList.add("disabled");
    }
  });
  currentLightIndex = (currentLightIndex + 1) % lightsArray.length;
}

switchColorBtn.addEventListener("click", function () {
  switchLight();
});