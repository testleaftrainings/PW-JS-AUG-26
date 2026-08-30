
import { test } from "@playwright/test";

test("Learn Xpath",async ({page}) => {
    
    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.locator('//a[text()="Leads"]').click();

    await page.locator('//a[text()="Create Lead"]').click();

    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf");

    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Ravindran");

    await page.locator('//input[@id="createLeadForm_lastName"]').fill("R");

    await page.locator('//input[@name="submitButton"]').click();

    const status = await page.locator('//span[@id="viewLead_statusId_sp"]').innerText(); // "Assigned"

    console.log(status);
    
    await page.waitForTimeout(3000); // for demo
})