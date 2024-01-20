// singleton

// object literals

const mySym = Symbol("key1")
const jsUser = {
    name: "Hitesh",
    [mySym]: "mykey1",
    age: 18,
    location: "Burswan",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log( typeof jsUser [mySym]);
jsUser.email="hitesh.chatgpt.com"
//  console.log(jsUser.email);
// Object.freeze(jsUser)



jsUser.greeting = function(){
    console.log(`hello jsUser`);
}
jsUser.greetingTwo = function(){
    console.log(`hello jsUser, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());






