"use strict";

class Clock {
  constructor(displayElement) {
    this.displayElement = displayElement;
  }

  getFormattedTimeUnit(unit) {
    return unit.toString().padStart(2, "0");
  }

  updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const formattedHours = this.getFormattedTimeUnit(hours);
    const formattedMinutes = this.getFormattedTimeUnit(now.getMinutes());
    const formattedSeconds = this.getFormattedTimeUnit(now.getSeconds());
    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${meridiem}`;
    this.displayElement.innerHTML = timeString;
  }

  start() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const clock = new Clock("clock");
  clock.start();
});
