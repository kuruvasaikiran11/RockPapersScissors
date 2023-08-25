//To keep track of score
let player = 0
let comp = 0

let rock = document.getElementById("rock-icon")
let paper = document.getElementById("paper-icon")
let scissor = document.getElementById("scissors-icon")

let playerSelection;
let playerSign = document.getElementById("playerSign")
let computerSign = document.getElementById("computerSign")
let computerSelection

//To update scores on UI
let scoreInfo = document.getElementById("heading")
let result = document.getElementById("result")
let playerScore = document.getElementById("player-score")
let computerScore = document.getElementById("comp-score")

let messageBox = document.getElementById("message-box")
let messageBoxTitle = document.getElementById("message-box-title");
const playAgainButton = document.getElementById("play-again-button");

//Computer selection
function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * choice.length)
    // console.log(random)
    return choice[random]
}

//Playing Rounds 
function playRound(playerSelection, computerSelection) {
    let message
    let winner
    let loser
    if(playerSelection == computerSelection){
        message = "draw"
        winner = playerSelection
        loser = computerSelection
        // return "It's a Drawwwwww!!"
    }else if((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") 
    || (playerSelection == "rock" && computerSelection == "scissors")){
        player++
        message = "player"
        winner = playerSelection
        loser = computerSelection
        // return "You Won! " + playerSelection + " beats " + computerSelection
    }else{
        comp++
        message = "computer"
        winner = computerSelection
        loser = playerSelection
        // return "You Lose! " + computerSelection + " beats " + playerSelection
    }
    updateScores(message, winner, loser, player, comp)
} 

rock.addEventListener("click", function(){
    clickHandle("rock")
});
paper.addEventListener("click", function(){
    clickHandle("paper")
})
scissor.addEventListener("click", function(){
    clickHandle("scissor")
})

// const iconsContainer = document.querySelector('.icons');
// iconsContainer.addEventListener('click', function(event) {
//     const target = event.target;
//     if (target.matches('.btn')) {
//         const selection = target.id.split('-')[0];
//         clickHandle(selection);
//     }
// });


playAgainButton.addEventListener("click", function () {
    console.log("BUtton Clicked")
    restartGame();
});
messageBox.addEventListener("click", function(){
    closeGame();
})

function isGameOver(){
    return player == 5 || comp == 5;
}

function clickHandle(selection){
    if(isGameOver()){
        endGame();
        return;
    }
    if(selection == "rock"){
        playerSign.innerText = "✊"
    }else if(selection == "paper"){
        playerSign.innerText = "✋"
    }else{
        playerSign.innerText = "✌️"
    }
    computerSelection = getComputerChoice();
    updateChoice(computerSelection)
    playRound(selection, computerSelection);
    if(isGameOver()){
        endGame();
        // setTimeout(showMessage, 300)
        // closeGame();
    }
}

//Update Scores in UI
//update player & computer selection
function updateScores(message, winner, loser, player, computer){
    playerScore.innerText = "Player : " + player
    computerScore.innerText = "Computer : " + computer

    // result.innerText = winner + " beats " + loser

    if(message === "draw"){
        scoreInfo.innerText = "It's a Draw"
        result.innerText = winner + " ties " + loser
    }else if(message === "player"){
        scoreInfo.innerText = "You Won!" 
        result.innerText = winner + " beats " + loser
    }else{
        scoreInfo.innerText = "You Lose!"
        result.innerText = winner + " beats " + loser
    }
}

//Updates Computer Selection
function updateChoice(computer){
    if(computer == "rock"){
        computerSign.innerText = "✊"
    }else if(computer == "paper"){
        computerSign.innerText = "✋"
    }else{
        computerSign.innerText = "✌️"
    }
}

// function endGame(){
//     console.log("End Game")
//     messageBox.classList.add("active");
// }

function endGame() {
    console.log("End Game")
    messageBox.classList.add("active");

    player > comp ? messageBoxTitle.textContent = "You Won!" : messageBoxTitle.textContent = "You Lost..."

    // setTimeout(function () {
    //     restartGame();
    // }, 300);
}


function closeGame(){
    messageBox.classList.remove("active")
}

// function showMessage(){
//     player > comp ? messageBoxTitle.textContent = "You Won!" : messageBoxTitle.textContent = "You Lost..."
// }

//Restarts Game 
function restartGame(){
    console.log("Inside Restart")
    player = 0
    comp = 0
    scoreInfo.innerText = "Choose Your Option"
    result.innerText = "First to score 5 points will win the game"
    playerSign.innerText = "❓"
    computerSign.innerText = "❓"
    playerScore.innerText = "Player : 0"
    computerScore.innerText = "Computer : 0"
    messageBoxTitle.textContent = ""
    messageBox.classList.remove("active")
}