let player = 0
let comp = 0

function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * choice.length)
    return choice[random]
}
function playRound(playerSelection, computerSelection) {
    // your code here!
    if(player == 5){
        alert("Congrats!! You won")
    }else if(comp == 5){
        alert("You Lose! Better luck next time")
    }

    if(playerSelection == computerSelection){
        // return "It's a Drawwwwww!!"
        message = "draw"
    }else if((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") 
    || (playerSelection == "rock" && computerSelection == "scissors")){
        player++
        // return "You Won! " + playerSelection + " beats " + computerSelection
        message = "player"
    }else{
        comp++
        // return "You Lose! " + computerSelection + " beats " + playerSelection
        message = "computer"
    }

    updateScores(message, player, comp)
} 

function checkWinner(p, c){
    if(p == c){
        console.log("Game Tied !!!")
    }else if(p > c){
        console.log("Congratulations!!!! You won")
    }else{
        console.log("Better luck next time. You lose")
    }
}

var rock = document.getElementById("rock-icon")
var paper = document.getElementById("paper-icon")
var scissor = document.getElementById("scissors-icon")
function getPlayerChoice(){
    var choice;
    rock.addEventListener("click", function(){
        choice = "rock"
    })
    paper.addEventListener("click", function(){
        choice = "paper"
    })
    scissor.addEventListener("click", function(){
        choice = "scissors"
    })
    return choice
}

// const playerSelection = (prompt('Please enter your choice from "{rock/paper/scissors}"')).toLowerCase()
let playerSelection;
var playerSign = document.getElementById("playerSign")
var computerSign = document.getElementById("computerSign")
let computerSelection
function game(){
    computerSelection = getComputerChoice();
    // computerSign.innerText = ""
    rock.addEventListener("click", function(){
        playerSelection = "rock"
        // console.log(playerSelection, computerSelection)
        playRound(playerSelection, computerSelection);
        playerSign.innerText = "✊"
        updateChoice(computerSelection)
    })
    paper.addEventListener("click", function(){
        playerSelection = "paper"
        // console.log(playerSelection, computerSelection)
        playRound(playerSelection, computerSelection);
        playerSign.innerText = "✋"
        updateChoice(computerSelection)
    })
    scissor.addEventListener("click", function(){
        playerSelection = "scissors"
        // console.log(playerSelection)
        playRound(playerSelection, computerSelection);
        playerSign.innerText = "✌️"
        updateChoice(computerSelection)
    })
}

// console.log(playerSelection, computerSelection)
// console.log(playRound(playerSelection, computerSelection));
var scoreInfo = document.getElementById("heading")
var result = document.getElementById("result")
var score = document.getElementById("score")
var playerScore = document.getElementById("player-score")
var computerScore = document.getElementById("comp-score")


function updateScores(message, player, computer){
    playerScore.innerText = "Player : " + player
    computerScore.innerText = "Computer : " + computer

    result.innerText = ""

    if(message = "draw"){
        scoreInfo.innerText = "It's a Draw"
    }else if(message = "player"){
        scoreInfo.innerText = "You Won! " + player + " beats " + computer
    }else{
        scoreInfo.innerText = "You Lose! " + computer + " beats " + player
    }
}

function updateChoice(computer){
    if(computer == "rock"){
        computerSign.innerText = "✊"
    }else if(computer == "paper"){
        computerSign.innerText = "✋"
    }else{
        computerSign.innerText = "✌️"
    }
}

game()