const name1 = "Riya"
const repoCount = 20
// console.log(`${name1} ${repoCount}`);
const gameName = new String('Pubg-free-fire')
// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName[0]);
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('b'));
const newString = gameName.substring(0,3)
console.log(newString);
const anotherString = gameName.slice(1,4)
console.log(anotherString);
const newStringOne = "      riya     "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "htt[s://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));
