// Start
let spans = document.querySelectorAll(".percentage span");
let section = document.querySelector(".skills");

// End Stats
// Start Events
let countDown = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let diffDate = countDown - dateNow;
  let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor((diffDate % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (days == 0) {
    clearInterval(counter);
  }
}, 1000);
// End Events
// Start Stats,Skills
let numbers = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 50) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
  if (window.scrollY >= statsSection.offsetTop - 100) {
    if (!started) {
      numbers.forEach((number) => startCount(number));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
// End Stats,Skills
