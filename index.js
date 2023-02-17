no_of_drum_button=document.querySelectorAll(".drum").length; /**find the length of button having class drum */

for (var i=0; i<no_of_drum_button; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function (){   /**finds first button in document and add event listener */

    var buttonInnerHtml=this.innerHTML;
    makesound(buttonInnerHtml)
    buttonanimatio(buttonInnerHtml)
})  
}

document.addEventListener("keydown", function(event){
    makesound(event.key)
    buttonanimatio(event.key)
})

function makesound(key){
    switch (key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
        break;
        case "j":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
        break;
        case "k":
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
        break;
        case "l":
            var kickbass = new Audio('sounds/kick-bass.mp3')
            kickbass.play();
        break;

        default: console.log();

    }
}

function buttonanimatio(currentkey){

    var active_button=document.querySelector("."+currentkey);
    active_button.classList.add("pressed");
    setTimeout(function(){                  /**setTimeout(function, milliseconds, param1, param2, ...) */
        active_button.classList.remove("pressed");
    },100)  
    
}


