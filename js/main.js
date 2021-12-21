// define timer display
let timer = document.querySelector(".timer span")
// define btns vars
let start_btn = document.querySelector("#start");
let stop_btn = document.querySelector("#stop");
let reset_btn = document.querySelector("#reset");

let interval;
let msec = 0;
let seconds = 0;
let minutes = 0;
let msec_text = 0;
let seconds_text = 0;
let minutes_text = 0;

// Start btn
start_btn.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(() => {
      // increase millisecond
      msec++;
    if(msec / 100 == 1) {
      msec = 0;
      // increase seconds
      seconds++;
      if(seconds / 60 == 1) {
        seconds = 0;
        // increase minutes
        minutes++;
    }
  }
  msec_text = msec < 10 ? `0${msec}` : msec; // add 0 if number less than 10
  seconds_text = seconds < 10 ? `0${seconds}` : seconds;
  minutes_text = minutes < 10 ? `0${minutes}` : minutes;
  timer.textContent = `${minutes_text} : ${seconds_text} : ${msec_text}`;
    }, 10);
});

// stop btn
stop_btn.addEventListener("click" , () => {
  clearInterval(interval);
});

// reset btn
reset_btn.addEventListener("click" , () => {
  clearInterval(interval);
  msec = 0;
  seconds = 0;
  minutes = 0;
  timer.textContent = "00 : 00 : 00";
});
