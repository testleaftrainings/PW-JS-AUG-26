/* 
let firstName = 'yuva'
let lastName = "s"
let mobNumber = 45678898 */

//object Literal

let user1 = { //user1 is the object
    firstName : "Yuvarani", //firstName -->key and "yuvarani" is value
    lastName : "s",
    mobNumber : 4567809876
}

console.log(user1.firstName); //dot notation
console.log(user1.lastName);
console.log(user1.mobNumber);

//explicit inference in object

let user2 : {
    firstName : string,
    lastName : string,
    mobNumber : number
}={
    firstName : "Yuva",
    lastName : "s",
    mobNumber : 809768999
}

console.log(user2.firstName);

let userDetails : {
    firstName : string,
    lastName : string,
    "#mobNumber" : number
}={
    firstName : "Yuva",
    lastName : "s",
    "#mobNumber" : 809768999
}

console.log(userDetails["#mobNumber"]); //square bracket notation



