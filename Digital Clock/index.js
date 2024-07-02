"use strict";

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString();
  const minutes = now.getMinutes().toString();
  const seconds = now.getSeconds().toString();
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").innerHTML = timeString;
}

updateClock();
