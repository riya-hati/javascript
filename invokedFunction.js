// Immediately Invoked Function Expressions(LIFE)

(function chai(){
    console.log(`DB CONNECTED`);
}
// chai()
)()

(function chai(){
    console.log(`DB CONNECTED`);
})();
( (name) =>{
console.log(`DB CONNECTED TWO ${name}`);
})('riya')
