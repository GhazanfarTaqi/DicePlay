function rollTheDices(){
    // Generate Random Number 1
randomNumber1 = Math.floor(Math.random() * 6) + 1;
// Generating random number 2
randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Getting dice 1 element
dice1 = document.querySelector("#dice1");
// Chaging Dice 1 based on random number
if (randomNumber1 == 1) {
    dice1.src = "./images/dice1.png"
}
else if (randomNumber1 == 2) {
    dice1.src = "./images/dice2.png"
}
else if (randomNumber1 == 3) {
    dice1.src = "./images/dice3.png"
}
else if (randomNumber1 == 4) {
    dice1.src = "./images/dice4.png"
}
else if (randomNumber1 == 5) {
    dice1.src = "./images/dice5.png"
}
else {
    dice1.src = "./images/dice6.png"
}

// Getting dice 2 element
dice2 = document.querySelector("#dice2")

// Chaging Dice 2 based on random number
if (randomNumber2 == 1) {
    dice2.src = "./images/dice1.png"
}
else if (randomNumber2 == 2) {
    dice2.src = "./images/dice2.png"
}
else if (randomNumber2 == 3) {
    dice2.src = "./images/dice3.png"
}
else if (randomNumber2 == 4) {
    dice2.src = "./images/dice4.png"
}
else if (randomNumber2 == 5) {
    dice2.src = "./images/dice5.png"
}
else {
    dice2.src = "./images/dice6.png"
}
// Declaring Winner
title = document.querySelector("#title");
if (randomNumber1 > randomNumber2){
    title.textContent="Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    title.textContent="Player 2 wins!";
}
else{
    title.textContent="Its a Draw";
}
}
function reset(){
    location.reload();
}

