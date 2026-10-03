
import credentials from "../../Data/LFlogin.json";

//Actual execution of test using JSON parameterization 

import { test } from "@playwright/test";

let data :any // global declaration

test.describe.serial("Hooks",async () => {    

test.beforeAll(async () => {
    console.log("This is before all test execution coonecting with DB"); // db.open
    data = credentials

})

test.beforeEach(async ({ page }) => {
    console.log("This is before Each test execution happens each time before test gets executed");

    await page.goto(data[0].URL);

    await page.locator('//input[@id="username"]').fill(data[0].Username);

    await page.locator('//input[@id="password"]').fill(data[0].Password);

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator("//a[contains(text(),'CRM')]").click();

})

//Actual test execution => CReate lead , create account

test("Create Lead", async ({ page }) => {
    console.log("Lead Creation");
    
    await page.locator('//a[text()="Create Lead"]').click();

    await page.waitForTimeout(3000)
})

test("Create Account", async ({ page }) => {
    console.log("Account Creation");
    
    await page.locator('//a[text()="Create Account"]').click();

     await page.waitForTimeout(3000)
})


test.afterEach("Fetch output of each test",async ({},testInfo) => {
    console.log("This is after Each test execution happens each time after test gets executed to collect result");

    console.log(testInfo.status); // result of test
    

})

test.afterAll(async () => { // cleanUp proces

     console.log("This is after all test execution disconneting with DB"); // db.close
    console.log("This is after all test execution collecting all the reports and pushing to JIRA");


})


})







