let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    if (Math.random() > .66){
        return "rock"
    }else if(Math.random() > .33){
        return "paper"
    }else {
        return "scissors"
    }
}
// console.log (getComputerChoice())
    
function getHumanChoice(){
    let userInput = prompt("Rock, Paper, or Scissors?")
    return userInput
}
// console.log(getHumanChoice())