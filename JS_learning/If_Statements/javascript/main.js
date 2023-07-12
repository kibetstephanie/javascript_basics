//Conditional: If Statements

let soup = "chicken noodle soup";
let reply;
let customerIsBanned = false;
let crackers = true;

if(customerIsBanned){
    reply = `No ${soup} for you`;
} else if (soup && crackers) {
    reply = `Here's your order of ${soup}`;
}else if (soup){
    reply = `Here's your order of ${soup} and crackers`;
}
else{
    reply = `Sorry we're out of ${soup}`;
}
console.log(reply);



// Example 2: Test Scores

let testScores = 59;
let grade;
let collegeStudent = true;

if (testScores >= 90){
    grade = "A";
} else if (testScores >= 80){
    grade = "B";
} else if (testScores >= 70){
    grade = "C"
} else if (testScores >= 60){
    grade = "D"
} else { 
    if (collegeStudent){
        grade = "Pass"
    } else {
        grade = "Fail"
    }
}

console.log(grade);

// Example 3: Decision Tree Game (Rock paper scissors) Try on my own

/*
if (playerOne === computer){
    //tie game
} else if (playerOne === "rock"){
    if (computer === "paper"){
        //computer wins
    } else {
        //playerOne wins
    }
} else if (playerOne === "paper"){
    if (computer === "scissors"){
        //computer wins
    } else {
        //playerOne wins
    }
} else {
    if (computer === "rock"){
        //computer wins
    }
    else {
        //playerOne wins
    }
}*/

