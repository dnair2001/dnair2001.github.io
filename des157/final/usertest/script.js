(function () {
    'use strict';
    alert("Hello! Welcome to Catch-A-Pig. There are three tasks that I would like you to complete: 1) Find the game rules and read them. 2) Play the game and try to catch as many pigs as you can in 30 seconds. 3) Keep track of how many pigs you have caught.");
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    let lastHole;
    let timeUp = false;
    let score = 0;
    // Create new audio objects
    const rollsound = new Audio('media/rolling-dice.mp3');
    const winsound = new Audio('media/win-sound.mp3');
    const awsound = new Audio('media/aw-sound.mp3');
    const clicksound = new Audio('media/click-sound.mp3');
  
    document.getElementById("lets-play").addEventListener("click", function() {
  
      document.querySelector(".game").style.visibility = "";
      document.querySelector(".score").style.visibility = "";
      document.querySelector(".btn").style.display = "block";
      document.querySelector(".menu").style.display = "none";
      document.getElementById("timer").style.visibility = "";
      document.getElementById("lets-play").style.display = "none";
      document.getElementById("v1").style.display = "block";
      document.getElementById("v2").style.display = "block";
      document.getElementById("v3").style.display = "block";
    })
  
    function randomTime(min, max) {
      return Math.round(Math.random() * (max-min) + min);
    }
  
    function randomHole(holes){
      const idx = Math.floor(Math.random() * holes.length);
      const hole = holes[idx];
      if(hole === lastHole) {
        console.log("Ah nah that's the same one bud");
        return randomHole(holes);
      }
      lastHole = hole;
      return hole;
    }
  
    function peep(){
      const time = randomTime(500, 1500);
      const hole = randomHole(holes);
      hole.classList.add("up");
  
      setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) peep();
      }, time)
  }

  document.querySelector(".btn").addEventListener("click", startGame);
  
  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 30000);
  
    const startingMinutes = 0.5;
      let time = startingMinutes * 60;
  
      const countdownEl = document.getElementById('timer');
  
      setInterval(updateCountdown, 1000);
  
      function updateCountdown() {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
  
        seconds = seconds < 10 ? '0' + seconds : seconds;
  
        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
        time = time < 0 ? 0 : time; 
      }
  }
  
  function bonk(e) {
    if(!e.isTrusted) return; //cheaters
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
    clicksound.play();
  }
  
  moles.forEach(mole => mole.addEventListener("click", bonk));
})();