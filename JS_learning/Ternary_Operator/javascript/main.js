//Conditional: Ternary Operator

//condition ? ifTrue : ifFalse

let soup = "Chicken noodle soup";
let isCustomerBanned = true;
let soupAccess = isCustomerBanned 
    ?  "Get out" 
    : soup 
    ? `we have ${soup} if you'd like` 
    : `sorry no soup today`;

console.log(soupAccess);

//Example 2: Test Scores

let testScores = 50;
let grades = testScores >= 89 ? "A" 
    : testScores >= 79 ? "B"
    : testScores >= 69 ? "C"
    : testScores >= 59 ? "D"
    : "F";

console.log(`My test grade is ${grades}`);

//Example 3: Rock paper scissors
let playerOne = "rock";
let computer = "rock";

let result = playerOne === computer ? "Tie Game" 
    : playerOne === "rock" && computer === "paper" ? "Computer wins"
    : playerOne === "paper" && computer === "scissors" ? "Computer wins"
    : playerOne === "scissors" && computer === "rock" ? "Computer wins" 
    : "Player one wins"

console.log(result);