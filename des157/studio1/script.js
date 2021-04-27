(function () {
    "use strict";
    console.log("reading js");
    // your code starts here

/*     const newP1 = document.createElement('p');
    const newP2 = document.createElement('p');
    const newP3 = document.createElement('p');

    const newT1 = document.createTextNode(storyText1);
    const newT2 = document.createTextNode(storyText2);
    const newT3 = document.createTextNode(storyText3);

    newP1.appendChild(newT1);
    newP2.appendChild(newT2);
    newP3.appendChild(newT3);

    theStory.appendChild(newP1);
    theStory.appendChild(newP2);
    theStory.appendChild(newP3); */

    //remember to add this
    // inputPanel.className = "displayNone";
    // outputPanel.className = "displayBlock"

    var form = document.querySelector("#myform");
    var out = document.querySelector('#output');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        // your code here
        const name1 = document.getElementById('name1').value;
        const noun1 = document.getElementById('noun1').value;
        const adj = document.getElementById('adj1').value;
        const location = document.getElementById('location1').value;
        const verb = document.getElementById('verb').value;
        const exclamation = document.getElementById('exclamation').value;
        const name2 = document.getElementById('name2').value;
        const items = document.getElementById('items').value;
        
        var myText = `On one cold night, you decide to go to the ${location} with a group of friends. Once there, 
        you and ${name1} explore the area until you both hear "${exclamation}"! You both look behind you and see a ${adj} ${noun1}
        eating your friend ${name2} alive! You and ${name1} scream loudly for help but no one comes. Once the ${adj} ${noun1} hears 
        you both scream, it charges towards you and ${name1}! You ${verb} for safety and use a gigantic ${items} to defeat the ferocious 
        ${adj} ${noun1}!`;

        document.getElementById("myform").style.display = "none";
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "none";
        document.getElementById("output").style.display = "block";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("validity1").style.display = "none";
        document.getElementById("validity2").style.display = "none";
        document.getElementById("validity3").style.display = "none";
        document.getElementById("img3").style.display = "block";
        document.getElementById("img4").style.display = "inline";
        out.innerHTML = myText;
    });
})();