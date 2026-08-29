

import {chromium,test, webkit} from "@playwright/test"


test("Launching of browser", async({page})=>{ 

// page fixture is to replace the 3 lines of codes that takes care of launching of the browser abd creation of an isolated environment and a fresh page

//const browser = await chromium.launch({headless:false}) // here we are getting the chromium browser "object" from playwright library
// const browser = await chromium.launch({headless:false,channel:"chrome"}) // here we are getting the chromium browser "object" from playwright library
// const context = await browser.newContext(); // Created an isolated environment with the help of browser reference
// const page = await context.newPage() // Created a new blank page for loading the url

await page.goto("https://www.amazon.in/")

await page.waitForTimeout(5000) // wait for demo purpose

} 
)