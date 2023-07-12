//If Statements

let soup = "chicken noodle soup"
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

