const myArr = [0,1,2,3,4,5]
const myHeros = ["Hitesh", "Coders gyan"]
// console.log(myArr[0]);

// Array methods
// myArr.push(6)       //add element in last
// myArr.pop()       // remove element in last
// myArr.unshift(9)        //add element in 1st
// myArr.shift()           // remove element 1st     
// console.log(myArr.includes(7));
// console.log(myArr.indexOf(7));
const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// console.log(myArr);


//  slice , splice
// console.log("A", myArr);
// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1,3)      // splice = original array - slice array 
// console.log("C", myArr);

// console.log(myn2);



const marvel_heros =["thor", "Ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]
marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);
const another_array = [1,2,3, [4,5,6], 7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("Riya"));
console.log(Array.from("Riya"));
console.log(Array.from({name:"Riya"}));      //interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


