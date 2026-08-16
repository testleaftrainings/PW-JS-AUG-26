

//Arithmetic Operator => +,-,/,%

// let a = 4%2 // Here 4%2 means it will return / give output the reminder of the divided value
// console.log(a);

// pre- increment , post- increment, pre-decrement and post- decrement

//post-increment

let x=10
console.log(x++) // this is post increment
console.log(x);

//pre-increment //++x // this is pre increment

let y=20
console.log(++y); // 21 // y=y+1


//post decrement

let a=30;
console.log(a--);//30 
console.log(a);// 29

// pre decrement

let b=40;
console.log(--b); //39
console.log(b); // 39

//Strict equality and loose equality

/* Strict Equality "===" 

1. Compare the value and
2. Compare the datatype. example : 1==="1" // false
*/


/* Loose Equality "=="

1. Compare the value alone not the datatype. example : 1=="1" // true

*/


//strict equality
console.log(1==="1"); // here the values are same "1" but the data types are different // hence o/p false

//loose equality
console.log(1=='1');// true

console.log(1==true); // true // internally true means 1 and the mechanism called as "type coercion"=> converting true boolean to a number datatype




