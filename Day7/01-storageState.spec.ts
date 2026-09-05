
import { test } from "@playwright/test";

test("Learn to use playwrightlocators", async ({ page,context }) => {


    await page.goto("https://login.salesforce.com/?locale=in");

    // await page.getByRole("textbox", { name: "Username" }).fill("dilipkumar.rajendran@testleaf.com");

    await page.getByLabel("Username", { exact: true }).fill("ravindran.ramdas@testleaf.com")

    await page.getByRole("button", { name: "Log In" }).click();

    //  await page.getByRole("textbox", { name: "Password" }).fill("TestLeaf@2025");

    await page.getByLabel("Password", { exact: true }).fill("Ravi@testleaf#123")

    await page.getByRole("button", { name: "Log In" }).click();
 
    await page.getByTitle("App Launcher", { exact: true }).click() // here getByTitle() // title attribute

    /* Session storage : cookies : key-valur pair under the application tab of devtools */

    await context.storageState({path:"Data/salesforcelogin.json"}) 
    
// Here the context is the isolated environment where the testing takes place.
// We are to use that isolated environment (context) to capture the cookies details through session storage present under application in devtools
 
    // const viewAll = page.getByText("View All", { exact: true });

    // console.log("Before:", await viewAll.count());

    // console.log("After:", await viewAll.count());

    // await viewAll.nth(2).click();

    // await page.getByPlaceholder("Search apps or items...", { exact: true }).fill("Leads"); //here getByPlaceholder() // placeholder attribute

    // await page.waitForTimeout(6000) // for demo purpose
})