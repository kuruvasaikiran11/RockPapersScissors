//To keep track of score
let player = 0
let comp = 0

let rock = document.getElementById("rock-icon")
let paper = document.getElementById("paper-icon")
let scissor = document.getElementById("scissors-icon")


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

//Start the Game
function game(){    
    // computerSign.innerText = ""
    rock.addEventListener("click", function(){
        playerSelection = "rock"
        computerSelection = getComputerChoice();
        // console.log(playerSelection, computerSelection)
        playerSign.innerText = "✊"
        updateChoice(computerSelection)
        playRound(playerSelection, computerSelection);
    });
    paper.addEventListener("click", function(){
        playerSelection = "paper"
        computerSelection = getComputerChoice();
        // console.log(playerSelection, computerSelection)
        playerSign.innerText = "✋"
        updateChoice(computerSelection)
        playRound(playerSelection, computerSelection);
    });
    scissor.addEventListener("click", function(){
        playerSelection = "scissors"
        computerSelection = getComputerChoice();
        // console.log(playerSelection)
        playerSign.innerText = "✌️"
        updateChoice(computerSelection)
        playRound(playerSelection, computerSelection);
    });
}

//Winner Validation
function checkWinner(p, c) {
    if (c === 5) {
        setTimeout(function () {
            alert("Better luck next time. You lose");
            restartGame();
        }, 0);
    } else if (p === 5) {
        setTimeout(function () {
            alert("Congratulations!!!! You won");
            restartGame();
        }, 0);
    }
}


//Update Scores in UI
//To update scores on UI
let scoreInfo = document.getElementById("heading")
let result = document.getElementById("result")
let playerScore = document.getElementById("player-score")
let computerScore = document.getElementById("comp-score")

//update player & computer selection
let playerSelection;
let playerSign = document.getElementById("playerSign")
let computerSign = document.getElementById("computerSign")
let computerSelection

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

    if(player === 5 || computer === 5){
        checkWinner(player, computer)
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

//Restarts Game 
function restartGame(){
    player = 0
    comp = 0
    scoreInfo.innerText = "Choose Your Option"
    result.innerText = "First to score 5 points will win the game"
    playerSign.innerText = "❓"
    computerSign.innerText = "❓"
    playerScore.innerText = "Player : 0"
    computerScore.innerText = "Computer : 0"
}

game()