// Strings
const myVariable = "Mathematics";

//The length property
console.log(myVariable.length); //11
console.log("Every good boy does fine".length); //24

//String Methods
console.log(myVariable.charAt(0)); //checks what character is at which index // M
console.log(myVariable.indexOf("mat")); //checks where the index of the mentioned is // 5
console.log(myVariable.lastIndexOf("at")); //checks where the first letter of the mentioned is // 6
console.log(myVariable.slice(5, 8)); //returns the characters from the starting position to the ending position without the exact ending position // mat
console.log(myVariable.toUpperCase()); //changes to upper case
console.log(myVariable.toLowerCase()); //changes to lower case
console.log(myVariable.includes("div")); //checks if it is included in the string // false
console.log(myVariable.split("e")); //splits the string where the character occurs // ["Math" , "matics"]
console.log("John,Joe,Dave".split(",")); // ["John", "Joe", "Dave"]
console.log(myVariable.split("")); // [ "M", "a", "t", "h", "e", "m", "a", "t", "i", "c", … ]
