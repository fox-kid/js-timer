const count = document.getElementById("count");
const resetBtn = document.getElementById("resetBtn");
const pauseBtn = document.getElementById("pauseBtn");
let paused = false;

let minutes = 0;
let seconds = 0;

const bell = new Audio("bell.wav");

count.innerHTML = `${minutes} minutes ${seconds} seconds`;


function timeCounter() {
    setInterval(() => {
        if(!paused) {
            increaseTimer();
        }
    }, 1000);
}

function increaseTimer() {
    seconds++;

    if (seconds == 60) {
        minutes++;
        seconds = 0;
        
        bell.play();
    }

    // Formatting the "minutes" and "seconds" text by their values

    let minutesText = minutes == 1 ? "minute" : "minutes";
    let secondsText = seconds == 1 ? "second" : "seconds";

    count.innerHTML = `${minutes} ${minutesText} ${seconds} ${secondsText}`;
}


function resetTimer() {
    minutes = 0;
    seconds = 0;

    count.innerHTML = `${minutes} minutes ${seconds} seconds`;    
}

window.addEventListener("load", () => {
    !paused && timeCounter();
})

resetBtn.addEventListener("click", () => {
    resetTimer();
})

pauseBtn.addEventListener("click", () => {
    paused = !paused;
})
