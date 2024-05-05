let timer;
let isRunning = false;
let seconds = 0;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateDisplay, 1000);
  }
}

function stopTimer() {
  isRunning = false;
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  updateDisplay();
}

function updateDisplay() {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  document.querySelector('.display').textContent =
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  seconds++;
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);