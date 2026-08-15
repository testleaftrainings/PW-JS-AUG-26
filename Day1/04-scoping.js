

//Scoping 
//function scoped

//var is function scoped :

function greet(){

    var message = "Hello team I am a function scoped statement"

  //  console.log(message); // this message is wothin the function scope
    
}

console.log(message); 
// I have moved the message variable out of function, since var is function scoped it throws => ReferenceError: message is not defined // cause it is out of scope/visibility

greet()




