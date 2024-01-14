//for of- - - - - array
// for in - - - - - object
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}
const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}

//maps
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United State of America")
// map.set('Fr', "France")
// // console.log(map);
// for (const [key,value] of map) {
//     console.log(key, ':', value);
// }
// const myObject ={
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }
// for (const [key, value] of object) {
//     console.log(key, ':-', value); 
// }

// const myObject ={
//     js: 'javascript',
//     css: 'cascading Style Sheet',
//     html: 'Hyper Text Markup Language'
// }
// for (const key in myObject) {
//     // console.log(`${key} shortcut is for ${myObject[key]}`);
//     }
//     const programming = ["js","css","java","py"]
//     for (const num in programming[key]) {
//         // console.log(programming[key]);
//         }
    
const coding =["js", "ruby", "java", "python","cpp"]
coding.forEach(function (val){
    console.log(val);
})

coding.forEach((item)=>{
    // console.log(item);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]
myCoding.forEach((item)=> {
    console.log(item.languageName);
})