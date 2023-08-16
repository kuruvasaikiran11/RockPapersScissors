let player = 0
let comp = 0

function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * choice.length)
    return choice[random]
}
function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection == computerSelection){
        return "It's a Drawwwwww!!"
    }else if((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") 
    || (playerSelection == "rock" && computerSelection == "scissors")){
        player++
        return "You Won! " + playerSelection + " beats " + computerSelection
    }else{
        comp++
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
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

for(let i = 0; i < 5; i++){
    const playerSelection = (prompt('Please enter your choice from "{rock/paper/scissors}"')).toLowerCase()
    const computerSelection = getComputerChoice();
    // console.log(playerSelection, computerSelection)
    console.log(playRound(playerSelection, computerSelection));
    if(i == 4){
        checkWinner(player, comp)
    }
}