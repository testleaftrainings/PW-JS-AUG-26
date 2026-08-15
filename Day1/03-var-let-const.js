
/* In other pgn language like C,C++, Java redeclaration is not allowed
int x=123
int x=345 */

//Declaration using "var"

var x // Declaration creating a memory space and labelling it to store a value


var x // Redeclaration relabel the existing memory space


/* Layman example : save phone number in your mobile  */

//Redeclaration and Reassignment both is happening in "var" which will lead to conflict

var testleafNumber = 7878799879

var testleafNumber = 7689798899 // redeclation is conflict or duplication should be avoided

testleafNumber = 232323232 //Here a variable is reassigned //editing the phone number(which means we will not have a var keyword in front of the variable)

console.log(testleafNumber);

/* Logically we should not be able to create a contact in the same name in our mobile that Leads to duplication*/

/* The catch is JS allows to do this ==> is this a good practice ? NOO */



/* **************ES6 standardization let was implemented ***************************************** */

//In let redeclaration is not allowed in order to prevent duplication JS throws syntax error / conflict

// let contactPersonTestleaf // declaration

// let contactPersonTestleaf // redeclaration which is not allowed


// let contactPersonTestleaf = 7987999898// declaration

// let contactPersonTestleaf = 789798798// redeclaration which is not allowed

// console.log(contactPersonTestleaf); // SyntaxError: Identifier 'contactPersonTestleaf' has already been declared


// In let reassignment is "allowed" :


// let helplineNumber = 565656565
// helplineNumber = 898989899 // reassignment / updating a phonenumber which is allowed in JS

// console.log(helplineNumber);


/* **************ES6 standardization const was implemented ***************************************** */

//Declaration for const without assigning a value is not allowed 

// const aadharNumberRavi // constant value which is not going to change at all
//                     // error : SyntaxError: Missing initializer in const declaration

// const aadharNumberRavi // redeclaration is not allowed in const variable

// console.log(aadharNumberRavi);

const aadharNumberHari = 778888686876
aadharNumberHari=89898989898 // reassignment is also not allowed using const which means cannot change the aadhar number for life


/* ************************************************************** */

/* COnclusion:

var => redeclartion and reassignment is allowed in JS
let => redeclaration is not allowed just like saving a duplicate phonenumber 
        reassignment is allowed i.e., updating that phonenumber is allowed */
/* 
COnclusion of const :

1. In const you cannot leave a variable without assigning a value to a const variable 
2. Redeclaration is not allowed in const just like "let" 
3. Reassignment is not possible using a const variable*/

