let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let playerSelection;

function computerPlay() {
    ranNum = Math.floor(Math.random() * 3)
    switch (ranNum) {
        case 0:
        return "Rock";
        break;
        case 1:
        return "Paper";
        break;
        case 2:
        return "Scissor";
        break;
    }
    
}

// function playRound(playerSelection, computerSelection)  {
//     
//     playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
//     console.log(playerSelection)
//     if (playerSelection === "Rock") {
//         if (computerSelection === "Rock") {
//             return "It's a tie!"
//         } else if (computerSelection === "Paper") {
//             return "You Lose! Paper beats Rock"
//         } else {
//             playerScore += 1
//             return "You Win! Rock beats Scissor"
//         }
//     } else if (playerSelection === "Paper") {
//         if (computerSelection === "Rock") {
//             playerScore += 1
//             return "You Win! Paper beats Rock"
//         } else if (computerSelection === "Paper") {
//             return "It's a tie!"
//         } else {
//             computerScore += 1
//             return "You Lose! Scissor beats Paper"
//         }
//     } else {
//         if (computerSelection === "Rock") {
//             computerScore += 1
//             return "You Lose! Rock beats Scissor"
//         } else if (computerSelection === "Paper") {
//             playerScore += 1
//             return "You Win! Scissor beats Paper"
//         } else {
//             return "It's a tie!"
//         }
//     }
// }
function playRound(playerSelection, computerSelection)  {
    
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log(playerSelection)
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore += 1
        return "You Lose! Rock loses to Paper"
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        playerScore += 1
        return "You Win! Rock beats Scissor"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        computerScore += 1
        return "You Lose! Paper Loses to Scissor"
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        computerScore += 1
        return "You Lose! Paper Loses to Rock"
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        playerScore += 1
        return "You Win! Scissor beats Paper"
    } 
        
    }

for (let i = 0; i < 5; i++) {
    computerSelection = computerPlay()
    playerSelection = (prompt("PLease choose your move: ")).toLowerCase();
    console.log(playRound(playerSelection,computerSelection))
    console.log("player: " + playerSelection + ", computer: " + computerSelection)
    console.log("Player scores: "+ playerScore)
    console.log("computer scores: "+ computerScore)
}
