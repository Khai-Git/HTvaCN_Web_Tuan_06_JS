// const timeDisplay = document.querySelector('timeDisplay');
const startBtn = document.querySelector('startTime');
const stopBtn = document.querySelector('stopTime');
const resetBtn = document.querySelector('resetTime');

startBtn.addEventListener("click", startTime);
stopBtn.addEventListener("click", stopTime);
resetBtn.addEventListener("click", resetTime);

function startTimer() {
    startBtn.classList.add("active")
}

function stopTimer() {
    stopBtn.classList.add("active")
}

function resetTimer() {
    resetBtn.classList.add("active")
}