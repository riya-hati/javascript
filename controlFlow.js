// if
// if(2===2){
//     console.log("executed");
// }
// const isUserLoggedIn = true
// const temperature = 41
// if(temperature<9){
//     console.log("less than 9");
// }
// console.log("temparature is greater than 9");

// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log((`user power:${power}`));
// }
// console.log((`user power:${power}`));

const balance = 10000
// if(balance>5000) console.log("test"),console.log("test2");        // not readable
// if(balance>5000){
//     console.log("less than 5000");
// }
// else if(balance<750){
//     console.log("less than 7500");
// }
// else if(balance<9000){
//     console.log("less than 9000");
// }
// else{
//     console.log("less than 12000");
// }



// const isUserLoggedIn = true
// const debitCard = true
// const loggedInGoogle = false
// const loggedInFromEmail = true 
// if(isUserLoggedIn && debitCard && 2==2){
//     console.log("Allow to buy course");
// }
// if(loggedInFromEmail || loggedInGoogle){
//     console.log("user logged in");
// }


// switch syntax
// switch(key){
//     case value:
//         break;
//         default:
//             break;
// }


const month = 3
switch(month) {
    case 1:
        // console.log("January");
        break;
    case 2:
        // console.log("February");
        break;
    case 3:
        // console.log("March");
        break;
    case 4:
        // console.log("April");
        break;
    default:
        // console.log("default case match");
        break;
}




// truthy or false     // truthy means assumtion

const userEmail = "h@hitesh.ai"
if(userEmail){
    // console.log("Got user email");
}
else{
    // console.log("Don't have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values
// "0", "false", " ", [],{}, function(){}
// if(userEmail.length===0){
//     console.log("Array is empty");
// }

const emptyObj ={}
if(Object.keys(emptyObj).length ===0){
    // console.log("Object is empty");
}

// Nullish Coalescing Operator(??): null undefined     
let val1;
// val1= 5 ?? 10             [nullish coalescing and ternary operator those are different]
// val1= null ?? 10
// val1= undefined ?? 15
// val1= null ?? 10 ?? 20
// console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");;




