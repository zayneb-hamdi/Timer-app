let seconds = 0;
let interval = null;
const music=document.getElementById('musicBackground')

function updateDisplay() {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById("timer").textContent = `${mins}:${secs}`;
}

function play() {
  if (interval) return;
  interval = setInterval(() => {
    seconds++;
    updateDisplay();
  }, 1000);
  music.play()
}

function stop (){
  clearInterval(interval);
  interval = null;
  music.pause()
}

function reset() {
  stop();
  seconds = 0;
  updateDisplay();
}

updateDisplay(); // Initialize display
