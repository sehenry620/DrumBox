(function(){
    
    window.onload = function(){
        console.log("hello");


        var snare = new Audio("assets/sounds/snare.wav");
        var highhat = new Audio("assets/sounds/highhat.wav");
        var crashcymbal = new Audio("assets/sounds/crashcymbal.wav");
        var bassdrum = new Audio("assets/sounds/bassdrum.wav");

        let soundbox1element = document.querySelector("#soundbox1");
        let soundbox2element = document.querySelector("#soundbox2");
        let soundbox3element = document.querySelector("#soundbox3");
        let soundbox4element = document.querySelector("#soundbox4");


        
        

        soundbox1element.addEventListener ("click", function playsound (){
            snare.play();
        })

        soundbox2element.addEventListener ("click", function playsound (){
            highhat.play();
        })

        soundbox3element.addEventListener ("click", function playsound (){
            crashcymbal.play();
        })

        soundbox4element.addEventListener ("click", function playsound (){
            bassdrum.play();
        })













    };
})()