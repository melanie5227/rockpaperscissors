function getComputerChoice(){
    if (Math.random() > .66){
        return "rock"
    }else if(Math.random() > .33){
        return "paper"
    }else {
        return "scissors"
    }
}
console.log (getComputerChoice())
    