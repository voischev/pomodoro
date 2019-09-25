var timerId = null
var globalCount = null
var mode = 'start'

function reset() {
    console.log('reset')
    mode = 'start'
    document.getElementById('test').value = 25
    document.getElementById('start').disabled = false
    document.getElementById('break').disabled = true
}

function start(t) {
    console.log(mode)
    document.getElementById(mode).disabled = true
    globalCount = t
    timerId = setInterval(timer, 1000/* * 60*/)
}

function stop(isReset) {
    console.log('stop')
    clearInterval(timerId)
    if (isReset) {
        reset()
    }
}

function timer() {
    var elem = document.getElementById('test')
    globalCount = globalCount - 1

    console.log('timer', globalCount)

    elem.value = globalCount

    if (globalCount <= 0) {
        if (mode === 'start') {
            mode = 'break'
        } else {
            mode = 'start'
        }
        document.getElementById(mode).disabled = false
        stop()
    }
}

function main() {
    console.log('main')
    reset()
}

// document.addEventListener('DOMContentLoaded', main)
