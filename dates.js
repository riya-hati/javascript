let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,10)
// let myCreatedDate = new Date("2024-01-10")
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toDateString());
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
newDate.toLocaleString('default', {
    weekday:"long",
})

