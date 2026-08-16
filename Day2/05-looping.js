

//for loop : we will be using loop when we know the exact count of iteration


//print numbers from 1 to 10

// console.log(1);
// console.log(2);


// let index = 1
// index =2
// index =3

function looping(){

for(let index=1;index<=10;++index){

console.log(index)

}


}

looping()

/* Steps to debug a JS file:

Method 1:
1. First put the breakpoints
2. CLick on the bug+play symbol from the left panel and click on "Run and Debug" then choose node.js for first time
3. Notice the theme of VS code changes to orange colour which means debug has started
4. To add a variable to watch list right click on that variables and choose "Add to Watch" */




/* while loop */

while(false){

    console.log("This is an infinite loop");   
    
}

/* Scenario of pagination

1. Here we exactly dont know the number of pages present in an application.
2. We use while loop to click the button
3. When the button get disabled the while loop stops*/

/* 

let nextButton = page.locator(",nextButon")


while(nextButton.isEnabled()){ //  // true until the button is enabled and when i disabled it will stop iterattng

nextButton.click()

}       





*/