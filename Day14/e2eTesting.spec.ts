

/* 
end2end testing :
----------------
Step1: Using request fixture create lead through the backend
Step2: Automate the UI by opening the browser and validate if the Lead created using API call is sucessfull */




import { test } from "@playwright/test";
import { createLead, generateToken, retrieveLead } from "./salesforceutility";

test.use({ storageState: "Data/salesforcelogin.json" }); // This is script level handling

//Here test.use is the aanotation used to get all those .json file data and inject it inside this test

test("Learn e2e testing using playwright", async ({ page, request }) => {

    //API lead creation 

    await generateToken(request); // Generation of token using API call
    await createLead(request); // Creation of LEad using API call by calling the named function createLead
    const companyName = await retrieveLead(request);// Fetch the lead details  using API call by calling the named function retrieveLead


    await page.goto("https://testleaf22-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home");


    await page.getByTitle("App Launcher", { exact: true }).click() // here getByTitle() // title attribute

    await page.locator('//button[text()="View All"]').click();

    await page.getByPlaceholder('Search apps or items...', { exact: true }).fill("Leads");

    await page.getByText('Leads', { exact: true }).click();

    await page.getByPlaceholder('Search this list...', { exact: true }).fill(companyName);

    await page.getByPlaceholder('Search this list...', { exact: true }).press('Enter');

    await page.waitForTimeout(6000) // for demo purpose
})


