// 1. Select elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const countdownEl = document.getElementById("countdown");
const messageEl = document.getElementById("message");

// 2. Set target date (change this to any future date)
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

// 3. Function to update countdown
function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // If countdown is finished
    if (difference <= 0) {
        clearInterval(intervalId);
        countdownEl.classList.add("hidden");
        messageEl.classList.remove("hidden");
        return;
    }

    const secondsInMs = 1000;
    const minutesInMs = secondsInMs * 60;
    const hoursInMs = minutesInMs * 60;
    const daysInMs = hoursInMs * 24;

    const days = Math.floor(difference / daysInMs);
    const hours = Math.floor((difference % daysInMs) / hoursInMs);
    const minutes = Math.floor((difference % hoursInMs) / minutesInMs);
    const seconds = Math.floor((difference % minutesInMs) / secondsInMs);

    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
}

// 4. Start the timer
updateCountdown();
const intervalId = setInterval(updateCountdown, 1000);
