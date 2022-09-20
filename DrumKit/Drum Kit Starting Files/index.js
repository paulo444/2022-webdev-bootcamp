var buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", function(){
        let audio = getSound(this.innerHTML);
        audio.play();
        buttonEffect(this.innerHTML);
    });
});

document.addEventListener("keypress", function(event){
    let audio = getSound(event.key);

    if(audio != null){
        audio.play();
        buttonEffect(event.key);
    }
});

function getSound(letter){
    switch(letter){
        case "w":
            return new Audio("sounds/tom-1.mp3");

        case "a":
            return new Audio("sounds/tom-2.mp3");
        
        case "s":
            return new Audio("sounds/tom-3.mp3");

        case "d":
            return new Audio("sounds/tom-4.mp3");

        case "j":
            return new Audio("sounds/crash.mp3");
        
        case "k":
            return new Audio("sounds/kick-bass.mp3");

        case "l":
            return new Audio("sounds/snare.mp3");

        default:
            return null;
    }
}

function buttonEffect(letter){
    document.querySelector("." + letter).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + letter).classList.remove("pressed");
    }, 300);
}