const timeDisplay = document.querySelector('timeDisplay')
const starTime = document.querySelector('startTime')
const stopTime = document.querySelector('stopTime')
const resetTime = document.querySelector('resetTime')

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true
let intervalid
let hours = 0
let mins = 0
let secs = 0
let msecs = 0

starTime.addEventListener("click", () => {
    if (paused) {
        paused = false
        starTime = Date.now() - elapsedTime
        intervalid = setInterval(updateTime, 10)
    }
})
stopTime.addEventListener("click", () => {})
resetTime.addEventListener("click", () => {})

function updateTime() {
    elapsedTime = Date.now() - starTime

    msecs = Math.floor((elapsedTime / 1000) % 60)
    secs = Math.floor((elapsedTime / (1000 * 60) % 60))
    mins = Math.floor((elapsedTime / (1000 * 60 * 60) % 60))
    hours = Math.floor((elapsedTime / (1000 * 60 * 60 * 60) % 60))

    timeDisplay.textContent = `${hours}: ${mins}: ${secs} : ${msecs}`;

    msecs = pad(secs)
    secs = pad(secs)
    mins = pad(secs)
    hours = pad(secs)

    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit
    }
}