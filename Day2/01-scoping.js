

//Scoping 
//function scoped

//var is function scoped :

function greet() {

  var message = "Hello team I am a function scoped statement"

 // console.log(message); // this message is wothin the function scope

}

//console.log(message);
//ReferenceError: message is not defined
// I have moved the message variable out of function, since var is function scoped it throws => ReferenceError: message is not defined // cause it is out of scope/visibility
greet()


/* ***************************let variable declaration inside the function bock*********************************** */

//let is function scoped :

function greet() {

  let message = "Hello team I am a function scoped statement"

 // console.log(message); // this message is wothin the function scope

}

console.log(message);
//ReferenceError: message is not defined
// I have moved the message variable out of function, since var is function scoped it throws => ReferenceError: message is not defined // cause it is out of scope/visibility
greet()


// /* ***************************const variable declaration inside the function bock*********************************** */

//const is function scoped :

function greet() {

  const message = "Hello team I am a function scoped statement"

 // console.log(message); // this message is wothin the function scope

}

console.log(message);
//ReferenceError: message is not defined
// I have moved the message variable out of function, since var is function scoped it throws => ReferenceError: message is not defined // cause it is out of scope/visibility
greet()


/* Conclusion on function scope:

1. When we declare a varible using var,let or const it is always function scoped (within the function braces)*/


//Block scoped :

/*  Control statement:
1. Conditional statement ( if, if-else , switch) 
2. Looping statment (for, while) */



//Behaviour of "var" inside a if block :

if(true){

  var message = "I am within the if block"
 
}
 console.log(message);

 //Output :
 //In a block scope when we declare a variable using "var" keyword the data is leaked out of the block scope hence it is available outside of the if condition

 /* ********************let variable declaration in block scope*********************** */

 //Behaviour of "let" inside a if block :

if(true){

  let message = "I am within the if block"
 
}
 console.log(message); // 

 //Output :
 //In a block scope when we declare a variable using "let" keyword we get a reference error :ReferenceError: message is not defined

 /* ********************const variable declaration in block scope*********************** */

 //Behaviour of "const" inside a if block :

if(true){

  const message = "I am within the if block"
 
}
 console.log(message); // 

 //Output :
 //In a block scope when we declare a variable using "const" keyword we get a reference error :ReferenceError: message is not defined


 /* Conclusion :
 
 1. Here in block scoped var leaks data
 2. let and const behaves as block scoped which means data does not leak out of the particular block*/