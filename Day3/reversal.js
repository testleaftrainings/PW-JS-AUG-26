
let x = "testleaf" // here index = 0,1,2,3,4,5,6,7
                    // length =1,2,3,4,5,6,7,8

let chars = x.split("")

console.log(chars);

/* [
  't', 'e', 's',
  't', 'l', 'e',
  'a', 'f'
] */

  let rev=""

for(let index=x.length-1; index>=0;index--) {//index= 8-1 = 7

rev=rev+chars[index] // here chars[7] = f
}

console.log(rev);

/* 

rev = ""+f // step1 iteration // f
rev=f+a // step2 iteration // fa
rev=fa+e // step2 iteration // fae
rev=fae+l // step2 iteration // fael


rev+a+e+l+t*/











// for (let index = char.length-1; index >=0; index--) {
//     rev=rev+char[index]
// }

// console.log(rev);



// let arrayVal = [1,2,3,4,5,6]

// arrayVal.splice(3,8,9,7)
// console.log(arrayVal);
