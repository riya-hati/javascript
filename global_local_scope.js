// var c =300
let a =300
if(true){
    let a=10
    const b=20
    // var c=30
    // console.log("inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="riya"
    function two(){
        const website="Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()