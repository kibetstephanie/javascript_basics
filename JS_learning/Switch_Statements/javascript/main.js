//Conditional: Switch Statements

switch (Math.floor(Math.random() * 4 + 1)){
    case 1:
        console.log (1);
        break;

    case 2:
        console.log (2);
        break;

    case 3:
        console.log (3);
        break;

    default:
       console.log ("No match");
}

//Example two: Rock Paper Scissors game
let playerOne = "scissors"
let computer = "rock"

switch (playerOne){
    case computer:
        console.log("Tie game!");
        break;

    case "rock":
        if (computer === "paper"){
            console.log("computer wins");
        } else {
            console.log("Player one wins");
        }
    break;

    case "paper":
        if (computer === "scissors"){
            console.log("computer wins");
        } else {
            console.log("Player one wins");
        }
    break;

    default:
        if (computer === "rock"){
            console.log("Computer wins");
        } else {
            console.log("player one wins");
        }
}
