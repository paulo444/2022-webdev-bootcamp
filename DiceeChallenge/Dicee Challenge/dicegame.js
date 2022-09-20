const FIRST_DICE = 0;
const SECOND_DICE = 1;
const DICE_NUMBER = 6;

var diceImages = [];

function setImages(){
    for(var i=1; i<=6; i++){
        let imageName = "images/dice" + i + ".png";
        diceImages.push(imageName);
    }
}

function getRandomDice(){
    return Math.floor(Math.random() * DICE_NUMBER) + 1;
}

function startGame(){
    setImages();

    var player1 = getRandomDice();
    var player2 = getRandomDice();

    document.querySelectorAll(".dice")[FIRST_DICE].querySelector("img").setAttribute("src", diceImages[player1-1]);
    document.querySelectorAll(".dice")[SECOND_DICE].querySelector("img").setAttribute("src", diceImages[player2-1]);

    setWinner(player1, player2);
}

function setWinner(player1, player2){
    if(player1 > player2){
        document.getElementsByTagName("h1")[0].innerText = "Player 1 Won";
    }else if (player2 > player1){
        document.getElementsByTagName("h1")[0].innerText = "Player 2 Won";
    }else{
        document.getElementsByTagName("h1")[0].innerText = "Draw";
    }
}

startGame();