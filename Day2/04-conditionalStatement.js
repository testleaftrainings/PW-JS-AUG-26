

/*  Control statement:
1. Conditional statement ( if, if-else , switch) 
2. Looping statment (for, while) */


//if - else conditional statement

function getBrowser(){

    const browserName = "chrome";

    if(browserName==="chrome"){ // true

        console.log("This is a chrome browser");
        
    } else {

        console.log("This is an unsupported browser");
        
    }

}

getBrowser()

//if - else if conditional statement

function getBrowser(){

    const browserName = "chrome";

    if(browserName==="chrome"){ // true

        console.log("This is a chrome browser");
        
    } else if(browserName==="msedge") {  // if we assign the browserName as "msedge" this block will be true

        console.log("This is an msedge browser");
        
    } else {
        console.log("This is a unsupported browser");
        
    }

}

getBrowser()


/* Steps to debug a JS file:

Method 1:
1. First put the breakpoints
2. CLick on the bug+play symbol from the left panel and click on "Run and Debug" then choose node.js for first time
3. Notice the theme of VS code changes to orange colour which means debug has started
4. To add a variable to watch list right click on that variables and choose "Add to Watch" */



//switch case statement :

function getBrowserVersion(browser){ // browser="chrome" is a local variable gets assgined with the value "chrome" while passing it through the argument of a funtion

/* Notes: 
=> When we use the local variable in a named function to capture the value passed by the function name
 at the time calling is called as a parameter  */

//  const browser = "chrome"; 

    switch(browser){

        case "chrome":
            console.log("The version of chrome is 131");
            break;
        
        case "msedge":
            console.log("The version of msedge is 132");
            break;

        default:
            console.log("Unsupported browser");
            break;      
        
  }

}

getBrowserVersion("firefox") // here the finction is being called and the value of browser is assigned by passing the argument 