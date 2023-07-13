//Scope


//global scope
var x =2;
let y = 3;
const z = 4;

//block scope
{
    let y = 4;
    const r = 2;
}

//local scope : block or function scope
function myFunc(){
    const z = 5;
}

myFunc();

