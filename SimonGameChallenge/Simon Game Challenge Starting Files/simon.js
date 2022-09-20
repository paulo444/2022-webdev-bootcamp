const COLOR_NUMBERS = 4;

var currentPatternPosition = 0;
var currentLevel = 1;
var gamePattern = [];
var gameStarted = false;

function startGame() {
    gamePattern.push(getRandomColor());
    $("h1").text("Level " + currentLevel);

    setTimeout(() => {
        showColors(0);
    }, 1500);
}

function showColors(position) {
    $("#" + gamePattern[position]).addClass("pressed");
    playButtonSound(gamePattern[position]);

    setTimeout(function () {
        $("#" + gamePattern[position]).removeClass("pressed");

        if(position+1 < gamePattern.length){
            showColors(position + 1);
        }
    }, 1000);
}

function playButtonSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function getRandomColor() {
    var color = Math.floor(Math.random() * COLOR_NUMBERS);

    switch (color) {
        case 0:
            return "green";

        case 1:
            return "red";

        case 2:
            return "yellow";
        
        case 3:
            return "blue";

        default:
            console.log("Color error");
    }
}

function setNext(color){
    if(gamePattern[currentPatternPosition] === color){
        currentPatternPosition++;

        if(currentPatternPosition >= currentLevel){
            currentLevel++;
            currentPatternPosition = 0;
            startGame();
        }
    }else{
        gameOver();
    }
}

function gameOver(){
    gamePattern = [];
    currentLevel = 1;
    currentPatternPosition = 0;

    $("body").addClass("game-over");

    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

    setTimeout(function(){
        $("body").removeClass("game-over");
        gameStarted = false;
        startGame();
    }, 1500);
}

function configureButton(color){
    $("#" + color).addClass("pressed");
    playButtonSound(color);
    setNext(color);

    setTimeout(function(){
        $("#" + color).removeClass("pressed");
    }, 300);
}

//Buttons setting
$("#green").click(function () {
    configureButton("green");
});

$("#red").click(function () {
    configureButton("red");
});

$("#yellow").click(function () {
    configureButton("yellow");
});

$("#blue").click(function () {
    configureButton("blue");
});

//Start Game on key down
$(document).keydown(function(){
    if(!gameStarted){
        gameStarted = true;
        startGame();
    }
});