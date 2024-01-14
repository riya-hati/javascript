// {} -> Global execution Context - this
// Function execution context
// Eval execution context
// 1st phase- memory/ creation phase  undefined
// 2nd phase - execution phase

function one(){
    console.log(one);

}
function two(){
    console.log(two);
}
function three(){
    console.log(three);
}
one()
two()
three()