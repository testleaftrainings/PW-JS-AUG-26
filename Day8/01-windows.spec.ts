

import { test } from "@playwright/test";


test("Learn to handle windows using playwright",async ({page,context}) => {
    
await page.goto("https://www.flipkart.com/");

const searchBox = page.getByPlaceholder("Search for Products, Brands and More",{exact:true}).first()

await searchBox.fill("iPhone");

await searchBox.press("Enter");

//Window Handling in playwright has 2 methods of handling
//1. Sequential Method
//2. Concurrent Method

/* **************SEQUENTIAL METHOD ************** */

// const pagePromise = context.waitForEvent("page"); //Listerner is ready to capture the newTab// Here the context is the bridge that is to capture the new tab that gets poped up after a click action

// await page.getByText("Apple iPhone 16 (Black, 128 GB)",{exact:true}).first().click(); // Only after click action the listner will be able capture the newTab

// //await context.waitForEvent("page"); // Now since the action is completed and a new tab is captured the work/jon of waitForEvent() is complete

// const childPage = await pagePromise // Ones after the listner is resolved the reference of the childPage is obtained

/* **************CONCURRENT METHOD ************** */

//await Promise.all([ACTION1(LISTERNING),ACTION2(CLICK)]) => Array of actions

const childPage = await Promise.all([context.waitForEvent("page"), page.getByText("Apple iPhone 16 (Black, 128 GB)",{exact:true}).first().click()])

//childPage = [newPage(returns Page),click (void)]

await childPage[0].waitForLoadState("domcontentloaded"); // Here we are adding a specific wait which is to wait until the complete DOM of the web page is loaded

console.log(await childPage[0].title()); // We can get the title of the new Tab using the reference of the resolved promise of the listner

/* 1. We need to have listner before an action we wrote => context.waitForEvent("page"); for the first time
2, We are writing => context.waitForEvent("page") second time ?? so that only after the click action is performed the context will be able to capture the newTab  */

await page.bringToFront();

await page.locator('//span[text()="Electronics"]').click(); 

//Here in playwright we can switch between tabs using the reference of the parent page which is "page" and reference of the childPage

await childPage[0].bringToFront();

await page.waitForTimeout(3000)


})

/* ***********MUTIPLE PAGE HANDLING*************** */


test.only("Learn to handle multiple windows using playwright",async ({page,context}) => {
    
await page.goto("https://www.flipkart.com/");

const searchBox = page.getByPlaceholder("Search for Products, Brands and More",{exact:true}).first()

await searchBox.fill("iPhone");

await searchBox.press("Enter");

/* **************CONCURRENT METHOD ************** */


//const childPage1 = await Promise.all([context.waitForEvent("page"), page.getByText("Apple iPhone 16 (Black, 128 GB)",{exact:true}).first().click()])

//Array destructuring method : we dont need to use index


const [childPage1] = await Promise.all([context.waitForEvent("page"), page.getByText("Apple iPhone 16 (Black, 128 GB)",{exact:true}).first().click()])

//childPage = [newPage(returns Page),click (void)]

await childPage1.waitForLoadState("domcontentloaded"); // Here we are adding a specific wait which is to wait until the complete DOM of the web page is loaded

console.log(await childPage1.title()); // We can get the title of the new Tab using the reference of the resolved promise of the listner


const childPage2 = await Promise.all([context.waitForEvent("page"), page.getByText("Apple iPhone 15 (Black, 128 GB)",{exact:true}).first().click()])

//childPage = [newPage(returns Page),click (void)]

await childPage2[0].waitForLoadState("domcontentloaded"); // Here we are adding a specific wait which is to wait until the complete DOM of the web page is loaded

console.log(await childPage2[0].title());

await page.waitForTimeout(3000)


})

/* Here 
page => reference of the parent page
childPage1 => ref of the first child page
childPage2 => ref of the second child page

 */






















/* Classroom :

1. Search for iPhone in flipkart
2. Click on product from product list
3. Move playwright focus / control from parent pafe(list page) to product page
4. Retreive the title of the child page
5. Bring the focus back to parent page click "Men"
6. Comeback to childpage retreive the product name*/




















