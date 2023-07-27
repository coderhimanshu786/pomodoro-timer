const startEle = document.getElementById("start");
const stopEle = document.getElementById("stop");
const resetEle = document.getElementById("reset");
const timerEle = document.getElementById("timer");

let interval;
let timeLeft = 3600;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTimer = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEle.innerHTML = formattedTimer;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 3600; // Corrected the timer reset value
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 3600;
  updateTimer();
}

startEle.addEventListener("click", startTimer); // Corrected the method name
stopEle.addEventListener("click", stopTimer); // Corrected the method name
resetEle.addEventListener("click", resetTimer); // Corrected the method name
