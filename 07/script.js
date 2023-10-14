const playList = [
  {
    author: "LED ZEPPELIN",

    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",

    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",

    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",

    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",

    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",

    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",

    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",

    song: "ENTER SANDMAN",
  },
];

const songListEl = document.querySelector(".songs_list");
const songListButton = document.querySelector(".button_songs_list");

songListButton.addEventListener("click", () => {
  playList.forEach((el, index) => {
    const songsListItem = document.createElement("li");
    songsListItem.textContent = ` Author: ${el.author}, Song: "${el.song}"`;
    songListEl.append(songsListItem);
  });
});

// MODAL WINDOW
const openButtonEl = document.querySelector(".modal_btn");
const modalEl = document.querySelector(".modal");
openButtonEl.addEventListener("click", () => {
  modalEl.classList.add("active");
});

let modalCloseBtn = document.querySelector(".modal_close");
modalCloseBtn.addEventListener("click", () => {
  modalEl.classList.remove("active");
});

//TRAFFIC LIGHTS
const switchColorBtn = document.querySelector(".traffic_switch_btn");
const trafficWrapperEl = document.querySelector(".traffic_wrapper");
const lightsArray = trafficWrapperEl.querySelectorAll(".traffic_circle");
const trafficBtn = document.querySelector(".traffic_button");
let currentLightIndex = 0;

trafficBtn.addEventListener("click", () => {
  trafficWrapperEl.classList.toggle("active_traffic");
});

function switchLight() {
  lightsArray.forEach((el, index) => {
    if (index === currentLightIndex) {
      el.classList.remove("disabled");
    } else {
      el.classList.add("disabled");
    }
  });

  currentLightIndex = (currentLightIndex + 1) % lightsArray.length;
}

switchColorBtn.addEventListener("click", () => {
  switchLight();
});
