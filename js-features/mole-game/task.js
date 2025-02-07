(() => {
    let playing = true,
        score = 0,
        misses = 0,
        winScores = 10,
        maxMisses = 5;

    getHole = index => document.getElementById(`hole${index}`)
    
    for (let i = 1; i <= 9; i++) {
      getHole(i).onclick = () => {
        if (getHole(i).className.includes('hole_has-mole')) {
          score++;
          document.getElementById("dead").textContent = `${score}`;

          if (score >= winScores) {
            alert("Поздравляем! Вы победили!");
            resetGame();
          }
        } else {
            ++misses;
            document.getElementById("lost").textContent = `${misses}`;

          if (misses >= maxMisses) {
            alert("Игра окончена! Вы проиграли.");
            resetGame();
          }
        }
      };

    }

    const resetGame = () => {
        playing = false; 
        score = 0;
        misses = 0; 
        document.getElementById("dead").textContent = `${score}`;
        document.getElementById("lost").textContent = `${misses}`;
        
        setTimeout(() => {
          playing = true;
          next();
        }, 1000);
      };
    
      next();
})();


