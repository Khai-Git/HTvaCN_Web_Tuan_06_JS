var startBtn = document.getElementById('startTime')
var stopBtn = document.getElementById('stopTime')
var resetBtn = document.getElementById('resetTime')

var msec = document.getElementById('msecs')
var sec = document.getElementById('seconds')
var min = document.getElementById('minutes')
var hrs = document.getElementById('hours')

var msecCount = 0
var secCount = 0
var minCount = 0
var hrsCount = 0

var Interval

function start() {
    // MiliSec to Sec
    msecCount++
    if (msecCount < 10) {
        msec.innerText = "0" + msecCount
    }
    if (msecCount >= 10) {
        msec.innerText = msecCount
    }
    if (msecCount > 99) {
        msecCount = 0
        msec.innerText = "0" + msecCount

        // Sec to Min
        secCount++
        if (secCount < 10) { 
            sec.innerText = "0" + secCount
        }
        if (secCount >= 10 && secCount <= 59) {
            sec.innerText = secCount
        }
        if (secCount > 59) {
            secCount = 0
            sec.innerText = "0" + secCount

            // Min to Hrs
            minCount++ 
            if (minCount < 10) {
                min.innerText = "0" + minCount
            }
            if (minCount >= 10) {
                min.innerText = minCount
            }
            if (minCount > 59) {
                minCount = 0
                min.innerText = "0" + minCount

                //Hrs count
                hrsCount
                if (hrsCount < 10) {
                    hrs.innerText = "0" + hrsCount
                }
                if (hrsCount >= 10) {
                    hrs.innerText = hrsCount
                }
                if (hrsCount > 23) {
                    hrsCount=0
                    hrs.innerText = "0" + hrsCount
                }
            }
        }
    }
}

startBtn.onclick =  function () {
    clearInterval(Interval)
    Interval = setInterval(start,10)
}

stopBtn.onclick = function () {
    clearInterval(Interval)
}

resetBtn.onclick = function () {
    clearInterval(Interval)
    msec.innerHTML = "00"
    sec.innerHTML = "00"
    min.innerHTML = "00"
    hrs.innerHTML = "00"
}