"use strict";
const runClock = function (timer = 0) {
  setInterval(() => {
    //console.log(Date.now());

    console.log(
      new Intl.DateTimeFormat(navigator.language, {
        minute: "2-digit",
        second: "2-digit",
      }).format(dateTime)
    );
  }, 1000);
};
const testDate = new Date(2025, 1, 12, 12, 35);
console.log(testDate);
const test2 = Date.now();
console.log(Math.round(Math.abs(test2 - testDate) / (1000 * 60 * 60 * 24)));

const curDate = new Intl.DateTimeFormat(navigator.language, {
  minute: "2-digit",
  second: "2-digit",
}).format(new Date(Date.now()));
let minDl;
let secDl;
let totalSec;
const [min, sec] = curDate.split(":");
minDl = Number.parseInt(min);
secDl = Number.parseInt(sec);
totalSec = 10;
const timeDown = setInterval(() => {
  console.log(minDl, secDl);

  document.querySelector(".display__time-left").textContent = `${Math.trunc(
    totalSec / 60
  )}:${totalSec % 60}`;

  if (totalSec < 0) {
    clearInterval(timeDown);
    document.body.style.opacity = 0;
  }
  totalSec--;
}, 1000);
