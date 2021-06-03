(function () {
    'use strict';
    //Select hole, score, and pig
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const pigs = document.querySelectorAll('.pig');
    let lastHole;
    let timeUp = false;
    let score = 0;

    // Create new audio objects
    const clicksound = new Audio('media/click-sound.mp3');
    const winsound = new Audio('media/game-win.mp3')
  
    document.getElementById("lets-play").addEventListener("click", function() {
  
      //Displays elements for Next Page
      document.querySelector(".game").style.visibility = "";
      document.querySelector(".score").style.visibility = "";
      document.querySelector(".btn").style.display = "block";
      document.querySelector(".quit").style.display = "block";
      document.querySelector(".menu").style.display = "none";
      document.getElementById("timer").style.visibility = "";
      document.getElementById("lets-play").style.display = "none";
      document.getElementById("v1").style.display = "block";
      document.getElementById("v2").style.display = "block";
      document.getElementById("v3").style.display = "block";
      document.getElementById("s1").style.display = "block";
    })
  
    //Calculates the random time for the pigs to pop out
    function randomTime(min, max) {
      return Math.round(Math.random() * (max-min) + min);
    }
  
    //Calculates randomly which hole the pig will pop out from
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
  
    //Pig pops up for some time then goes back down
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
  
  //Game begins
  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(function(){ timeUp = true,  gameOver(),  winsound.play() }, 30000) //Once timeUp is true, modal and sound are triggered
  
    const startingMinutes = 0.5; //30 seconds
      let time = startingMinutes * 60;
  
      const countdownEl = document.getElementById('timer');
  
      setInterval(updateCountdown, 1000); //counter changes every second
  
      function updateCountdown() {
        const minutes = Math.floor(time/60); // calculates minutes
        let seconds = time % 60; //calculates seconds
  
        seconds = seconds < 10 ? '0' + seconds : seconds; //Adds an extra 0 if needed
  
        countdownEl.innerHTML = `${minutes}: ${seconds}`; //displays time at each second
        time--; //decrements time by one
        time = time < 0 ? 0 : time; //make sures timer doesn't become negative
      }
      
      //Once game finishes, modal is triggered
      function gameOver() {
        var modal = document.getElementById("myModal");
        var out = document.getElementById("output")
        modal.style.display = "block";
        var text = `Your score is ${score}`;
        out.innerHTML = text; //outputs score
      }
  }
  
  function bonk(e) {
    if(!e.isTrusted) return; //cheaters
    score++; //score increments each time we click a pig
    this.classList.remove('up'); //pig goes down
    scoreBoard.textContent = score; //score updates with each click
    clicksound.play(); //click sound is triggered each time we click a pig
  }

  //for each loop to go through all the pigs. If pig is clicked, bonk function is triggered
  pigs.forEach(pig => pig.addEventListener("click", bonk)); 

 
})();