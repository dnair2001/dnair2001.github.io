(function () {

    'use strict';
  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const pigs = document.querySelectorAll('.pig');
  let lastHole;
  let timeUp = false;
  let score = 0;
  // Create new audio objects
  const clicksound = new Audio('media/click-sound.mp3');

  document.getElementById("v1").style.display = "block";
      document.getElementById("v2").style.display = "block";
      document.getElementById("v3").style.display = "block";

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

document.querySelector('.btn').addEventListener("click", startGame);

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 20000);
}

function bonk(e) {
  if(!e.isTrusted) return; //cheaters
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
  clicksound.play();
}

pigs.forEach(pig => pig.addEventListener("click", bonk));
})();