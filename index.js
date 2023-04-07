var startBtn = document.getElementById('startTime')
var stopBtn = document.getElementById('stopTime')
var resetBtn = document.getElementById('resetTime')

var msec = document.getElementById('msec')
var sec = document.getElementById('seconds')
var min = document.getElementById('minutes')
var hrs = document.getElementById('hours')

var msecCount = 0
var secCount = 0
var minCount = 0
var hrsCount = 0

var Interval

startBtn.onclick = () => {
    setInterval(() => {
        // MiliSec to Sec
        if (msecCount <= 9) {
            msec.innerText = "0" + msecCount++
        }
        if (msecCount >= 10) {
            msec.innerText = msecCount++
        }
        if (msecCount > 98) {
            msecCount = 0

            // Sec to Min
            if (secCount <= 9) {
                sec.innerText = "0" + secCount++
            }
            if (secCount >= 10) {
                sec.innerText = secCount++
            }
            if (secCount > 59) {
                secCount = 0
                min.innerText = minCount++

            // Min to Hrs
                if (minCount < 10) {
                    min.innerText = "0" + minCount++
                }
                if (minCount >= 10) {
                    min.innerText = minCount++
                }
                if (minCount > 59) {
                    minCount = 0
                    hrs.innerText = hrsCount++
                }
            }
        }
    }, 1)
}

stopBtn.onclick = () => {
    setInterval(() => {
        clearInterval(Interval)
    })
}