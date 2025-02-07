const reduceTimer = function() {
  const timer = document.getElementById("timer");
  let number = parseInt(timer.textContent, 10);

  if (number <= 0) {
      clearInterval(timerInterval);
      alert("Вы победили в конкурсе");
  } else {
      number -= 1;
      timer.textContent = number;
  }
}

const timerInterval = setInterval(reduceTimer, 1000);