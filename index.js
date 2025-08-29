// DOM elements acces 
const heartCountEl = document.getElementById("heart-count");
const pointsCountEl = document.getElementById("points-count");
const copyCountEl = document.getElementById("copy-count");
const callHistoryEl = document.getElementById("call-history");
const clearHistoryBtn = document.getElementById("clear-history");

// Initial values acces
let hearts = parseInt(heartCountEl.textContent);
let points = parseInt(pointsCountEl.textContent);
let copies = parseInt(copyCountEl.textContent);

