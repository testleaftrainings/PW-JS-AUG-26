



import { test } from "@playwright/test";

test.use({storageState:"Data/salesforcelogin.json"}); // This is script level handling

//Here test.use is the aanotation used to get all those .json file data and inject it inside this test

test("Learn to use playwrightlocators", async ({ page }) => {

    await page.goto("https://testleaf22-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home");

    
    await page.getByTitle("App Launcher", { exact: true }).click() // here getByTitle() // title attribute


    // const viewAll = page.getByText("View All", { exact: true });

    // console.log("Before:", await viewAll.count());


    // console.log("After:", await viewAll.count());

    // await viewAll.nth(2).click();

    // await page.getByPlaceholder("Search apps or items...", { exact: true }).fill("Leads"); //here getByPlaceholder() // placeholder attribute

    await page.waitForTimeout(6000) // for demo purpose
})

