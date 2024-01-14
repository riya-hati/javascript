const user = {
    username: "riya",
    price: 999,
    welcomeMessage:function() {
        console.log(`${this.username} , welcome to website`);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);


// function one(){
//     let username="riya"
//     console.log(this.username);
// }
// one()


// const chai= function(){
//     let username="riya"
//    console.log(this.username);
// }
// chai()



const chai= () => {
    let username="riya"
   console.log(this);
}
// chai()


// const addTwo = (num1, num2) => {         // arrow function
//     return num1+num2     // explicit return
// }
// console.log(addTwo(3,4));


// const addTwo= (num1,num2) => (num1+num2)      // implicit return
// console.log(addTwo(5,7))


const addTwo= (num1,num2) => ({username:"riya"})
console.log(addTwo(3,4));


// const myArray = [2,3,4,5,6]
// myArray.forEach()


