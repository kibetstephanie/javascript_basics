//Loops

/*

let myNumber = 0;

//while loop
while(myNumber < 50){
    myNumber += 2;
    console.log(myNumber);

}



// do-while loop
do {

console.log(myNumber);
} while (myNumber < 50) //a do loop would have to execute this block at least once



//for loop
/*

for (let i = 0; i<=10; i++){
    console.log(i); 
}

*/

//example
let myName = "Stephanie";
let counter = 0;
let myLetter;

while (counter <= 8){ 
    myLetter = myName[counter];
    console.log(myLetter);
    if(counter === 1){
        counter +=2;
        continue;
    }

    if (myLetter === "i") break;
    counter++; 
}
console.log(counter);