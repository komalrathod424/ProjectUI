let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function startTimer() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
    }
}

function stopTimer() {
    if (running) {
        running = false;
        clearInterval(tInterval);
    }
}

function resetTimer() {
    if (running) {
        stopTimer();
    }
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.innerHTML = "00:00:00";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((difference / (1000 * 60)) % 60);
    seconds = Math.floor((difference / 1000) % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
