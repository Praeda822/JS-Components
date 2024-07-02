"use strict";

const display = document.getElementById("display");

class Stopwatch {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.timer = null;
    this.startTime = 0;
    this.elapsedTime = 0;
    this.isRunning = false;
  }

  start() {
    if (!this.isRunning) {
      this.startTime = Date.now() - this.elapsedTime;
      this.timer = setInterval(() => this.update(), 10);
      this.isRunning = true;
    }
  }

  stop() {
    if (this.isRunning) {
      clearInterval(this.timer);
      this.elapsedTime = Date.now() - this.startTime;
      this.isRunning = false;
    }
  }

  reset() {
    clearInterval(this.timer);
    this.startTime = 0;
    this.elapsedTime = 0;
    this.isRunning = false;
    this.displayElement.innerHTML = "00:00:00:00";
  }

  update() {
    const currentTime = Date.now();
    this.elapsedTime = currentTime - this.startTime;
    const hours = this.formatTime(
      Math.floor(this.elapsedTime / (1000 * 60 * 60))
    );
    const minutes = this.formatTime(
      Math.floor((this.elapsedTime / (1000 * 60)) % 60)
    );
    const seconds = this.formatTime(Math.floor((this.elapsedTime / 1000) % 60));
    const milliseconds = this.formatTime(
      Math.floor((this.elapsedTime % 1000) / 10)
    );

    this.displayElement.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  formatTime(time) {
    return String(time).padStart(2, "0");
  }
}

const stopwatch = new Stopwatch(display);

document
  .getElementById("startBtn")
  .addEventListener("click", () => stopwatch.start());
document
  .getElementById("stopBtn")
  .addEventListener("click", () => stopwatch.stop());
document
  .getElementById("resetBtn")
  .addEventListener("click", () => stopwatch.reset());
