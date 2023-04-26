function rollDice() {
    var image1 = document.getElementsByClassName("img1")[0];
    var image2 = document.getElementsByClassName("img2")[0];

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    image1.src = "./images/dice-" + randomNumber1 + ".svg";
    image2.src = "./images/dice-" + randomNumber2 + "-fill.svg";

    image1.alt = "Player one's dice is " + randomNumber1;
    image2.alt = "Player two's dice is " + randomNumber2;

    if (randomNumber1 > randomNumber2){
        document.getElementsByClassName("output")[0].textContent = "Player 1 is the Winner!";
    }else if (randomNumber1 < randomNumber2){
        document.getElementsByClassName("output")[0].textContent = "Player 2 is the Winner!";
    }else{
        document.getElementsByClassName("output")[0].textContent = "Its a Draw. Try again."
    }
}
