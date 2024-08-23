let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let randomValue = Math.random()
    if (randomValue > .66){
        return "rock"
    }else if(randomValue > .33){
        return "paper"
    }else {
        return "scissors"
    }
}
// console.log (getComputerChoice())
    
function getHumanChoice(){
    let userInput = prompt("Rock, Paper, or Scissors?")
    return userInput.toLowerCase()
}
// // console.log(getHumanChoice())


function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win!")
        humanScore++
    }else if(humanChoice===computerChoice){
        console.log("Tie!")
    }else{
        console.log("You lose!")
        computerScore++
    }
}

function playGame(numrounds){
    for(let i=1; i<=numrounds; i++){
            const humanSelection = getHumanChoice()
            const computerSelection =getComputerChoice()
            playRound(humanSelection, computerSelection)
            console.log(`Round ${i}: Human score: ${humanScore} Computer score: ${computerScore}`)
        }
        
    }
    playGame(5)
    
    