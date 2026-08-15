

/* Datatype in JS:

1. number

2. string

3. boolean 

4. undefined

5. null
*/

//1. number datatype:

var phoneNumber = 98989899; // Initilization
console.log(phoneNumber); // 98989899

console.log(typeof phoneNumber)  // number

//keyword called typeof() => unary operator => it will tell you the datatype of a value that is stored in a variable

/* In Other pgm language like C,C++, Java below is he way declaration :

int x=123 */

/* ***************************************************************************** */

//2. string datatype :

var username = "support@testleaf.com"; // we use "" double quotes,'' single quotes, `` back tick(button that is above the tab button on the keyword)

console.log(username);
console.log(typeof username) //string

//we are using these symbols to make JS Engine inside NodeJS understand that it is dealing with a string datatype

/* ***************************************************************************** */

//3. boolean datatype => only true or false

var isJavaScriptIntresting = true;

console.log(isJavaScriptIntresting);

console.log(typeof isJavaScriptIntresting) // boolean

/* ***************************************************************************** */

// 4. undefined

var accountNumber 
console.log(accountNumber);// accountNumber is assigned as "undefined" because it is yet to be assigned with a value which will be assigned in the later stage during the process

console.log(typeof accountNumber); // the datatype of variable that holds undefined as its value us also "undefined"


/* ***************************************************************************** */

//5. null

var landLine = null // Example : the value is left NA in a bank application form intentionally
console.log(landLine); // null

console.log(typeof landLine); 

//actually the datatype of null should be null but since JS developers created a historical bug during the development stage of JS the datatype of null pointed towards object




/* Notes:

Here inside a browser => JS Engine does the intrepreter job 
When we write code in VS code it is intrepreted by a JavaScript Engine called V8 present inside Nodejs*/