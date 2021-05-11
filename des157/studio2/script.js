(function () {

    'use strict';
    const openBtns = document.querySelectorAll('.open');
    const closeBtns = document.querySelectorAll('.close');

    for(const eachBtn of openBtns){
        eachBtn.addEventListener("click", function(event){
            event.preventDefault();
            const thisBtn = event.target.id;
            //alert(thisBtn);
            document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
            
        });
    }
    for(const eachBtn of closeBtns){
        eachBtn.addEventListener("click", function(event){
            event.preventDefault();
            const thisBtn = event.target.id;
            //alert(thisBtn);
            document.querySelector('.showing').className = 'overlay hidden';
        });
    }
    document.addEventListener("keydown", function(event){
        if(event.key === 'Escape'){
            document.querySelector('.showing').className = 'overlay hidden';
        }
    });
      const myImages = [
        'benji16.jpg',
        'benji17.jpg',   
        'benji18.jpg'];

        let currentImage = 0;

        const slide = document.getElementById('benjifound');

        // document.getElementById('next').addEventListener('click', nextPhoto);

        function nextPhoto(){
            currentImage++; //increment the counter
            //set the source for the slide to the next image
            if (currentImage > myImages.length-1) {
                //If the user is at the end of the array...
                currentImage = 0;
            }
            slide.src =`images/${myImages[currentImage]}`;
        }

        // document.getElementById('previous').addEventListener('click', previousPhoto);
        const interval = setInterval(function () { nextPhoto() }, 3000);


        var btn = document.querySelector("#finish");
        // var out = document.querySelector('#output');
        btn.addEventListener('click', function(event){
            event.preventDefault();
            // your code here
            
            // var myText = `On one cold night, you decide to go to the ${location} with a group of friends. Once there, 
            // you and ${name1} explore the area until you both hear "${exclamation}"! You both look behind you and see a ${adj} ${noun1}
            // eating your friend ${name2} alive! You and ${name1} scream loudly for help but no one comes. Once the ${adj} ${noun1} hears 
            // you both scream, it charges towards you and ${name1}! You ${verb} for safety and use a gigantic ${items} to defeat the ferocious 
            // ${adj} ${noun1}!`;
    
            document.getElementById("finish").style.display = "none";
            document.getElementById("one").style.display = "none";
            document.getElementById("two").style.display = "none";
            document.getElementById("three").style.display = "none";
            document.getElementById("four").style.display = "none";
            document.getElementById("five").style.display = "none";
            document.getElementById("benjifound").style.display = "block";
            document.getElementById("reset").style.display = "block";
            document.getElementById("intro").style.display = "none";
            document.getElementById("outro").style.display = "block";
            document.getElementById("v1").style.display = "block";
            document.getElementById("v2").style.display = "block";
            document.getElementById("v3").style.display = "block";
            // out.innerHTML = myText;

        });
})();