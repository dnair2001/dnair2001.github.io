(function () {

    'use strict';
        const startGame = document.getElementById('startgame');
        let gameControl = document.getElementById('gamecontrol');
        let game = document.getElementById('game');
        let score = document.getElementById('score');
        let actionArea = document.getElementById('actions');
        const rollsound = new Audio('media/rolling-dice.mp3');
        const winsound = new Audio('media/win-sound.mp3');
        const awsound = new Audio('media/aw-sound.mp3');
        
        let gameData = {
            dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 
                'images/4die.png', 'images/5die.png', 'images/6die.png'],
            players: ['Hamlet', 'Piglet'],
            score: [0, 0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0,
            gameEnd: 29
        };

        startGame.addEventListener("click", function(){
           gameData.index = Math.round(Math.random());
        //    gameControl.innerHTML = '<h2 class="center">The Game has started</h2>';
           gameControl.innerHTML = '<button id="quit">Wanna Quit?</button>';
        //    gameControl.innerHTML += '<img id="img1" src="1die.jpg">';
        //    gameControl.innerHTML += '<img id="img2" src="2die.jpg">';
           document.getElementById('quit').addEventListener('click', function(){
               location.reload();
           });
           document.getElementById("validity1").style.display = "none";
           document.getElementById("validity2").style.display = "none";
           document.getElementById("validity3").style.display = "none";
           console.log(gameData.index);
           setUpTurn();
        });

            function setUpTurn() {
               game.innerHTML = `<p class="center">Roll the dice for ${gameData.players[gameData.index]}</p>`;
               actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
               game.innerHTML += '<h3 class="piggy1-title">Hamlet</h3>';
               game.innerHTML += '<h3 class="piggy2-title2">Piglet</h3>';
               game.innerHTML += '<img class ="img1" src="images/pig.png" alt="pig1">'; 
               game.innerHTML += '<img class ="img2" src="images/pig.png" alt="pig2">'; 
               game.innerHTML += '<img class="center1" src="images/1die.png" alt="dice1">'; 
               game.innerHTML += '<img class="center2" src="images/2die.png" alt="dice2">';
               showCurrentScore(); 
               document.getElementById('roll').addEventListener("click", function(){
                  throwDice();
                  rollsound.play(); 
               });
            }

            function throwDice(){
                actionArea.innerHTML = '';
                gameData.roll1 = Math.floor(Math.random() * 6) + 1;
                gameData.roll2 = Math.floor(Math.random() * 6) + 1;
                game.innerHTML = `<p class="center">Roll the dice for the ${gameData.players[gameData.index]}</p>`;
                game.innerHTML += '<h3 class="piggy1-title">Hamlet</h3>';
                game.innerHTML += '<h3 class="piggy2-title2">Piglet</h3>';
                game.innerHTML += '<img class ="img1" src="images/pig.png" alt="pig1">'; 
                game.innerHTML += '<img class ="img2" src="images/pig.png" alt="pig2">'; 
                game.innerHTML += `<img class="center1" src="${gameData.dice[gameData.roll1 - 1]}">
                                    <img class="center2" src="${gameData.dice[gameData.roll2-1]}">`;

                gameData.rollSum = gameData.roll1 + gameData.roll2;
                console.log(gameData);

                if(gameData.rollSum === 2) {
                    console.log("Snake Eyes!");
                    game.innerHTML += '<p class="center">Oh snap! Snake eyes! <p>';
                    gameData.score[gameData.index] = 0;
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    showCurrentScore();
                    setTimeout(setUpTurn, 2000);
                }
                else if (gameData.roll1 === 1 || gameData.roll2 === 1)
                {
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    game.innerHTML += `<p class="center">Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
                    setTimeout(setUpTurn, 2000);
                    showCurrentScore();
                }
                else {
                    gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                    actionArea.innerHTML = '<button id="roll-again">Roll Again</button><button id="pass">Pass</button>';
                    document.getElementById('roll-again').addEventListener('click', function(){
                        throwDice();
                        rollsound.play(); 
                    });
                    document.getElementById('pass').addEventListener('click', function(){
                        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                        setUpTurn();
                        awsound.play(); 
                    });

                    //check to see if the player won
                    checkWinningCondition();
                }
            }

            function checkWinningCondition(){
              if (gameData.score[gameData.index] > gameData.gameEnd) {
                  winsound.play();
                  score.innerHTML = `<h2 style="text-align:center;">${gameData.players[gameData.index]}
                  wins with ${gameData.score[gameData.index]} points!</h2>`;
                  
                  actionArea.innerHTML = "";
                  document.getElementById("quit").innerHTML = "Start a New Game";
                  showCurrentScore();
                  document.getElementById("gamecontrol").style.backgroundColor = 'LightCyan';
                  document.getElementById("score").style.backgroundColor = 'LightCyan';
                  document.getElementById("game").style.backgroundColor = 'LightCyan';
                  document.getElementById("actions").style.backgroundColor = 'LightCyan';
                  document.getElementById("rules").style.backgroundColor = 'MediumTurquoise';
                  document.getElementById("quit").style.backgroundColor = 'MediumTurquoise';
              }
              else {
                  //update score
                  showCurrentScore();
                }
            }

            function showCurrentScore(){
                game.innerHTML += '<div id="block1"></div>'
                game.innerHTML += '<div id="block2"></div>'
                game.innerHTML += `<p id="score-show1"><strong>Score:
                  ${gameData.score[0]}</strong></p>`
                  game.innerHTML += `<p id="score-show2"><strong>Score:
                  ${gameData.score[1]}</strong></p>`;
            }
        })();