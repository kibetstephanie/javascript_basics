//Numbers

//An integer is a whole number
const myNumber = 42;
const myFloat = 42.01;
const myString = "42abc";

console.log(Number(myString) + 3); //changes a string to a number
console.log(Number.isInteger(myNumber)); //checks if it is an integer //true
console.log(Number.parseFloat(myString)); //removes non integers and changes it to a number// 42
console.log(myFloat.toFixed(2)); //returns 2 dp and is a string //42.01
console.log(Number.parseInt(myString)); // removes non integers and changes it to a number //42
console.log(Number.isInteger(myNumber)); //checks if it is integer // true
console.log(myFloat.toString()); // changes to a string typeof checks if it is a string // string
console.log(Number.isInteger(myNumber)); //checks if it is an Integer
console.log(Number.parseFloat("42.325abc").toFixed(2).toString());
console.log(Number.isNaN("Dave")); //checks is a value is a number // false
console.log(isNaN("Dave")); //checks if the value is NaN (not a number) //true
