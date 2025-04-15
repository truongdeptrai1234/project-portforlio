"use strict";

const player = document.querySelector(".player");
const progress = document.querySelector(".progress");
const video = document.querySelector(".player__video");
const toggle = document.querySelector(".toggle");
const playerSlider = document.querySelectorAll(".player__slider");
const playerSkip = document.querySelectorAll("[data-skip]");
const progressBar = document.querySelector(".progress__filled");

function togglePlay() {
  video["paused"] ? video.play() : video.pause();
}
function updateBtn() {
  console.log("updateBtn");
  toggle.textContent = video.paused ? "►" : "❚❚";
}
const handleSlider = function (e) {
  video[e.target.name] = e.target.value;
};
const handleSkip = function (e) {
  //console.log(e.target.dataset.skip);

  video.currentTime += +e.target.dataset.skip;
  updateBar();
};
const updateBar = function (e) {
  //console.log(video.currentTime);
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style["flex-basis"] = `${percent}%`;
};
const updateTimeplayer = function (e) {
  //console.log(getComputedStyle(this).width);
  const percent =
    (e.offsetX / Number.parseFloat(getComputedStyle(this).width)) * 100;
  video.currentTime = (percent * video.duration) / 100;
  progressBar.style["flex-basis"] = `${percent}%`;
  //console.log(percent);
};
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
video.addEventListener("timeupdate", updateBar);

toggle.addEventListener("click", togglePlay);

playerSlider.forEach((slider) => {
  slider.addEventListener("input", handleSlider);
});
progress.addEventListener("click", updateTimeplayer);

playerSkip.forEach((skip) => skip.addEventListener("click", handleSkip));

player.addEventListener("dblclick", function (e) {
  //console.log(this);
  video.requestFullscreen();
});
