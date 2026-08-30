
import { test } from "@playwright/test";

test("Learn to use playwrightlocators", async ({ page }) => {


    await page.goto("https://login.salesforce.com/?locale=in");

    // await page.locator("") // for xpath and css

    // await page.getByRole("textbox", { name: "Username" }).fill("dilipkumar.rajendran@testleaf.com");

    await page.getByLabel("Username", { exact: true }).fill("dilipkumar.rajendran@testleaf.com")

    await page.getByRole("button", { name: "Log In" }).click();

    //  await page.getByRole("textbox", { name: "Password" }).fill("TestLeaf@2025");

    await page.getByLabel("Password", { exact: true }).fill("TestLeaf@2025")

    await page.getByRole("button", { name: "Log In" }).click();;

    const viewAll = page.getByText("View All", { exact: true });

    console.log("Before:", await viewAll.count());

    await page.getByTitle("App Launcher", { exact: true }).click() // here getByTitle() // title attribute

    console.log("After:", await viewAll.count());

    await viewAll.nth(2).click();

    await page.getByPlaceholder("Search apps or items...", { exact: true }).fill("Leads"); //here getByPlaceholder() // placeholder attribute

    await page.waitForTimeout(6000) // for demo purpose
})