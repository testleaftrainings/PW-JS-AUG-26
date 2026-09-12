//type assertion - is a TS feature that tells compiler to treat a value as a
//specific type without changing the actual value

let response : any = 'success'
//response.
let responseValue = response as string
console.log(responseValue.length);


let responseval = <string> response
console.log(responseval.toUpperCase());
