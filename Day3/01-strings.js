

//1. Escape Sequence : \, \n => newline, \t => tab

let day = 'It\'s a \n Saturday'
console.log(day);

let doubleQuo = "I am \t a \"doublequote\""
console.log(doubleQuo);

//2. Concatenation : 
// "+"=> old JS, 
// concat()=> Next method after +,  
// `$` => Template literal // Modern JS

let testCaseName = "CreateLead"
let testCaseNo = 123

// "+"=> old JS, 

let resultPlus = "The testcase name is "+testCaseName+" with TC number is"+testCaseNo
console.log(resultPlus);

// concat()=> Next method after +,  

let resultConcat = testCaseName.concat(testCaseNo)
console.log(resultConcat);

// template literal => `${}`

//let resultPlus = "The testcase name is "+testCaseName+" with TC number is"+testCaseNo

let templateLiteral = `The testcase name is ${testCaseName} with TC number is ${testCaseNo}`

console.log(templateLiteral);

// 3. length property

let course = "Playwright"

console.log(course.length) // 10

console.log(`The number of letters present in Playwright is ${course.length}`);

// 4. charAt() 
//Using the index value I will be able to get he charater in a string data

//index = 0,1,2,3..

console.log(`The character present at the index 2 is ${course.charAt(2)}`);

//5. indexOf()
//If we need to get the indexOf a charater we willbe using indexOf() method

console.log(course.indexOf("a"));
console.log(`The index of the character "a" is ${course.indexOf('a')} `);

let session = "Playwaright"
console.log(session.indexOf("a")); // 2
console.log(session.indexOf("a",3)); // 5

//6, substring()  // Old JavaScript

let course1 = "Playwright"

console.log(course1.substring(4,10)) //wright

console.log(course1.substring(10,4)); // wright

console.log(course1.substring(10,-5)); //Playwright // -5 is taken as 0

//Here in substring we can not use negative numbers

/* Summarize:
1. start index is included while the end index is not included 
2. start and end index are swappable
3. substring does not allow negative index */


//7. slice() // New JS 

let filename = "Ravi.png"

console.log(filename.slice(4,8)) // postive index which may not work at certain scenatrio

console.log(filename.slice(-4)); 
// advantage of using negative index is even if the filename dynamically changes there will be not impact in the output



console.log(course1.slice(4,10)) //wright

console.log(course1.slice(10,4)); // "" Here in slice start and end indices are not swappable

console.log(course1.slice(-10,-5)); //Playw // Here negative index can be used 

/* Note :
1. start index is included and end index is not included
2. start index and end index are not swppable and start index should not be greater
3. slice can handle negative index */

let sentence = "I love Playwright";

console.log(sentence.split(" "));
// ["I", "love", "Playwright"]

// madam => madam // Palindrome









