

//Internal mechanism of JS
//var x //only declaration part is hoisted to the top undefined // interanlly the memory allocation process is taken to the top by default

console.log(x); // here the value of x will be printed => undefined

var x =10; // initilaization happening

console.log(x);


/* Normal pgm lang. java, c, c++

sysout.println(x)
int x=10 // we get an error 

*/

/* Hoisting for let */

console.log(y); // here the value of x will be printed => undefined

let y =10; // initilaization happening

//After ES6 JS was used as a programming that follows rules like any other programming langugae

//Here let will get hoisted but it will point towards a reference error (TDZ-Temporal Dead Zone)  unike var which will point to undefined


/* Hoisting for const */

console.log(z); // here the value of x will be printed => undefined

const z =10; // initilaization happening

//After ES6 JS was used as a programming that follows rules like any other programming langugae

//Here let will get hoisted but it will point towards a reference error (TDZ-Temporal Dead Zone)  unike var which will point to undefined



/* Hoistig :

1. var, let and const gets hoisted to the top but var points toward undefined inorder to minimize error in the early 
but let and const throws erro cause it is behaving like normal programming language */