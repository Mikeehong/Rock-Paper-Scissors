let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let counter = 0;

const buttons = document.querySelectorAll('button')
const message = document.querySelector('.message')
const resultContent = document.querySelector('.result')



buttons.forEach(button => {
    button.addEventListener('click', playRound)
});

function playRound(e) {

    
    let computerChoice = document.querySelector('.computer')
    computerSelection = computerPlay()
    computerChoice.innerHTML = computerSelection
    playerSelection = e.target.innerHTML 
    counter += 1

    runGameLogic(playerSelection, computerSelection)

    if (counter !== 5) return;

    const result = document.createElement('p')
    const winner = document.createElement('p')
    result.innerHTML = `Game over! Your Score is ${playerScore} vs Computer Score ${computerScore}`
    winner.innerHTML = (playerScore > computerScore) ? "You are the WINNER 🎉🥳🎉🥳" : "Computer is the WINNER!! 😢😢"
    resultContent.append(result, winner)
        
}



function runGameLogic(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        message.innerHTML = "It's a tie!"
    } else if (playerSelection === "✊🏼" && computerSelection === "✋🏼") {
        computerScore += 1
        message.innerHTML = "You Lose! ✊🏼 loses to ✋🏼"
    } else if (playerSelection === "✊🏼" && computerSelection === "✌🏼") {
        playerScore += 1
        message.innerHTML = "You Win! ✊🏼 beats ✌🏼"
    } else if (playerSelection === "✋🏼" && computerSelection === "✊🏼") {
        playerScore += 1
        message.innerHTML = "You Win! ✋🏼 beats ✊🏼"
    } else if (playerSelection === "✋🏼" && computerSelection === "✌🏼") {
        computerScore += 1
        message.innerHTML = "You Lose! ✋🏼 Loses to ✌🏼"
    } else if (playerSelection === "✌🏼" && computerSelection === "✊🏼") {
        computerScore += 1
        message.innerHTML = "You Lose! ✋🏼 Loses to ✊🏼"
    } else if (playerSelection === "✌🏼" && computerSelection === "✋🏼") {
        playerScore += 1
        message.innerHTML = "You Win! ✌🏼 beats ✋🏼"
    } 
}


function computerPlay() {
    ranNum = Math.floor(Math.random() * 3)
    switch (ranNum) {
        case 0:
        return "✊🏼";
        break;
        case 1:
        return "✋🏼";
        break;
        case 2:
        return "✌🏼";
        break;
    }
    
}




//     if (playerSelection !== "✊🏼" || playerSelection !== "✋🏼" || playerSelection !== "✌🏼") {
//         console.log("Please Enter a valid input")
//     } else {
//         console.log(playRound(playerSelection,computerSelection))
//         console.log("player: " + playerSelection + ", computer: " + computerSelection)
//         console.log("Player scores: "+ playerScore)
//         console.log("computer scores: "+ computerScore)
//      
// 

