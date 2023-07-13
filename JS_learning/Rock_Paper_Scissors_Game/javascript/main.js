//Rock Paper Scissors Game
let playGame = confirm("Shall we play Rock, Paper or Scissors?");

if (playGame){
    
    let playerChoice = prompt("Please enter rock, paper, scissors");

    if(playerChoice){

        let playerOne = playerChoice.trim().toLowerCase();

        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){

            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" 
            : computerChoice === 2 ? "paper"
            : "scissors";

            let result = playerOne === computer ? `Player One: ${playerOne}\nComputer: ${computer}\nIt's a tie game` 
            : playerOne === "rock" && computer === "paper" ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer wins`
            : playerOne === "paper" && computer === "scissors" ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer wins`
            : playerOne === "scissors" && computer === "rock" ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer wins` 
            : `Player One: ${playerOne}\nComputer: ${computer}\nPlayer One wins`;

            alert(result);

            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Thank you for playing");

        } else {
            alert("You didn't enter rock, paper or scissors");
        }

    } else {
        alert("I guess you changed your mind, sad to see you go");
    }

} else {
    alert("Sad to see you go");
}
