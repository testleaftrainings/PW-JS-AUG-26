

// 1. Named function

function add(a,b){ 

// here i dont want to print the value inside the function block instead in need to assign the value to function add(a,b)=c for that reason I will be using return keyword// 30

// let a=10
// let b=20

let c=a+b
//console.log(c);
return c // here c value is returned whiel calling the function // like while calling add(10,20) it holds the value 30 on using return keyword

}

console.log(add(10,20)===30)

//2. Function expression : storing a function in a variable and caling that function using that variable

// const func = function (){

// let a=10
// let b=20

// let c=a+b
// console.log(c);

// }

// func() // here we are calling the function block using the variable that was assigned 

//3 arrow function => as part of evolution in JS the function name got replaced with fat arrow

// const func = (a,b) => { // fat arrow // parameters a and b assigned with values 10 and 20

// // let a=10
// // let b=20

// let c=a+b
// //console.log(c);

// }

// func(10,20)

//arrow function in a single line

// const arrowFunc = (a,b)=>{
    
//     c=a+b;
//     return c

// }

const arrowFunc = (a,b)=> a+b;

console.log(arrowFunc(10,20))

