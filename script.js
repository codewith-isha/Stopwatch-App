let seconds = 0;
let minutes = 0;
let hours = 0;
let displayTime = document.getElementById("displayTime");
let start = document.getElementById("start");
let stopp = document.getElementById("stop");
let resett = document.getElementById("reset");

let timer = null;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  // for adding two digits
  // in simple words If hours is less than 10 (like 5),
  //then add a "0" in front → it becomes "05"
  //Otherwise, just keep it the same (like "12").
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
start.addEventListener("click", watchStart);
stopp.addEventListener("click", watchStop);
resett.addEventListener("click", watchReset);
