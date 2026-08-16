

//String Declaration : "",'',``

//String Literal declartion

let companyName = "Testleaf" //address 1000 
let firmName = "Testleaf" // address 1000

console.log(companyName===firmName); // true


//Object Literal

let companyNameObj = new String("Testleaf") // address 1001
let firmNameObj =  new String("Testleaf") // address 1002

console.log(companyNameObj===firmNameObj); // false

/* === it looks for value, datatype, address of the value */