function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("H");
    console.log("A");
    console.log("T");
    console.log("I");

}
// sayMyName()
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){
    let result = number1+ number2
    // return result
    // console.log("riya");
    return number1+number2

}
// addTwoNumbers(3,"a")
const result =  addTwoNumbers(3,5)  
// console.log(result);
function loginUserMessage(username){
    if(username=== undefined){
        console.log("plz enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())
