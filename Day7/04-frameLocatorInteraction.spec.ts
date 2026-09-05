

import { test } from "@playwright/test";

test("Learn to interact with web elements inside a frame", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml");

    //await page.locator("").click()  => normal web element interaction

    /* Step 1 : Identify the frame where you have the element to be inbteracted
Step2 : Using the reference of the identified frame we will click the button */

    const frameRef = page.frameLocator('//iframe[@src="default.xhtml"]')// Step1 frame located

    await frameRef.locator("#Click").click();

    await page.waitForTimeout(3000) // for demo

})


//Nested frame

//test.only("Learn to Handle nested frames @", async ({ page }) => { 

test("Learn to Handle nested frames @smoke", async ({ page }) => { 
    
// Here test.only annotation helps to execute only that test which is annotated with only other test are not executed


    await page.goto("https://leafground.com/frame.xhtml");

    const outerFrame_ref = page.frameLocator('//iframe[@src="page.xhtml"]'); // Store the reference od the outerframe

    const innerFrame_ref = outerFrame_ref.frameLocator('//iframe[@id="frame2"]');

    await innerFrame_ref.locator("#Click").click();

    await page.waitForTimeout(3000) // for demo

})
