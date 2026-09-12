"use strict";
//undefined
let success;
console.log(success);
//null that represent the absence of a value. it's often used to indicate that a 
// variable has no value assigned to it
let data1 = null;
console.log(data1);
//any : it accespts any datatype
let value = 1234;
value = 'welcome';
//value = true
console.log(typeof value);
//unknown: this also accepts all datatype and checks the type before perofrming any
//operation
let info;
info = 'Playwright';
info = 100;
//info=info+20
if (typeof info === 'number') {
    console.log(info + 20);
}
else {
    console.log('info is not a number');
}
//never - it's a type that represent values that never occur. it's used for functions
//that throw execptions or have infinite loops
function infiniteLoop() {
    while (true) {
        console.log('Running..');
    }
}
//infiniteLoop()
//tuple : it's fixed length of array with specified datatype for each element
let courseDetails = ['playwright', 100, true];
console.log(courseDetails[0]);
//console.log(typeof courseDetails);
