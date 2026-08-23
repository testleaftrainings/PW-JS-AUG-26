

/* THings we need to have to automate a web application using playwright
1. Browser => Chromium, fireox,webkit
2. Context => create a fresh isolated environment like (incognito mode) for testing purpose 
3. page => page1(tab), page2... // create an empty page/ space where we load the url*/

import {chromium,test, webkit} from "@playwright/test"

//test("title",execution body)

test("Launching of browser", async()=>{

//const browser = await chromium.launch({headless:false}) // here we are getting the chromium browser "object" from playwright library
const browser = await chromium.launch({headless:false,channel:"chrome"}) // here we are getting the chromium browser "object" from playwright library
const context = await browser.newContext(); // Created an isolated environment with the help of browser reference
const page = await context.newPage() // Created a new blank page for loading the url

await page.goto("https://www.amazon.in/")

await page.waitForTimeout(5000) // wait for demo purpose

} 
)


/* JavaScript FUndamentals:

1. JS is asynchronous pgm language

step1
step2
step3

//We use "await" keyword to see that a particular line in JS is completed before proceeding with the next line so tha the process happens in a sequential way
For implementing the above strategy JS came up with a concept called as "PROMISE"
Three stages :
1. Pending // The process is yet to start
2. Resolve // The process has sucessfully completed
3. Reject // the process has failed to implement

*/