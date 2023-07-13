//Functions
// different syntaxes

//example 1
function sum (num1, num2){
    console.log(num1);
    console.log(num2);
    if (num2 === undefined){
        return num1 + num2;
    }
    return num1 + num2;
}

console.log(sum(5, 7 ));

//example 2: Getting a username from an email

function getUsernameFromEmail (email){
    return email.slice(0, email.indexOf("@"));
}
console.log(getUsernameFromEmail("player1@random.com"));


//example 3: Anonymous functions

const getUsername =  function (email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUsernameFromEmail("steph@random.com"));


//example 4: changing to proper case
const toProperCase = (myName) => {
    return myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
};
console.log(toProperCase("sTEPHANIE"));

