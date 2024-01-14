// const coding =["js", "ruby", "java", "python","cpp"]
// const myNums =[1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num)=>num > 4)
// console.log(newNums);
// const newNums = myNums.filter((num)=> {
//     return num > 4
// })
// const newNums = []
// myNums.forEach((num) =>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'book one', genre: 'fiction', publish:1981, edition: 2005},
    { title: 'book two', genre: 'non-fiction', publish:1992, edition: 2008},
    { title: 'book three', genre: 'history', publish:1999, edition: 2007},
    { title: 'book four', genre: 'non-fiction', publish:1991, edition: 2005},
    { title: 'book five', genre: 'science', publish:1998, edition: 2009},
    { title: 'book six', genre: 'fiction', publish:1990, edition: 2010},
    { title: 'book seven', genre: 'history', publish:1981, edition: 2007},
    { title: 'book eight', genre: 'science', publish:1981, edition: 2004},
];
// const userBooks = books.filter((bk) =>bk.genre==='history')
// console.log(userBooks);
// const userBooks = books.filter((bk) =>{return bk.publish >= 190})
// console.log(userBooks);



// const myNums =[1,2,3,4,5,6,7,8,9,10]
// const newNums= myNums.map((num)=> num+10)
// const newNums =myNums
//                .map((num)=> num*10)
//                .map((num)=>num+1)
//                .filter((num)=>num>=40)
// console.log(newNums);



//reduce

// const myNums = [1,2,3]
// const myTotal= myNums.reduce(function(acc, curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// },0)
// const myTotal = myNums.reduce((acc, cur)=> acc+cur,0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 6999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay=shoppingCart.reduce((acc, item)=>acc+item.price,0)
console.log(priceToPay);