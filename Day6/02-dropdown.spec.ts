
import { expect, test } from "@playwright/test";

test("Learn to Interact with Select tag dropdown", async ({ page }) => {

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

    //Select tag dropdown
    //Step1 : Identify the drop from DOM using relative Xpath.
    //Step2 : Pass the 2nd argument using label,  value or index
    //Note : What is the priority : 1. value is conneted to the backend hence more stable, 2. label, 3. index

    // await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { label: "Direct Mail" });//option1 using label // {key:value} here the key => label is the visibile text in the DOM

    //  await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { value: "LEAD_DIRECTMAIL" }); //Option2: using value 

    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { index: 3 }); //Option3: using index 

    //Get the dropdown values using innerText()

    let dropDownValues = page.locator('//select[@id="createLeadForm_dataSourceId"]/option') //dropDownValues// It creates a Locator object representing all 13 <option> elements matching that XPath.

    //To retreive 3rd value from the dropdown

    const thirdDropDownValue = await page.locator('//select[@id="createLeadForm_dataSourceId"]/option').nth(3).innerText(); // DIRECT MAIL
    console.log(thirdDropDownValue);

    //{
    //dropDown1:value1,
    //dropDown2:value1
    //}

    const dropDownCount = await dropDownValues.count() // This line is extract the number of dropdown locator objects present in the DOM

    for (let i = 0; i < dropDownCount; i++) {

        let dropDownValues = await page.locator('//select[@id="createLeadForm_dataSourceId"]/option').nth(i).innerText();
        console.log(dropDownValues);

    }



    await page.waitForTimeout(3000); // for demo

    await page.locator('//input[@name="submitButton"]').click();

    const status = await page.locator('//span[@id="viewLead_statusId_sp"]').innerText(); // "Assigned"

    //  console.log(status);

   // expect(status).toBe("UnAssigned")

    await page.waitForTimeout(3000); // for demo
})

/* Classroom Activity:
Retreive all the values for industry dropdpwn from the createlead page:
https://leaftaps.com/crmsfa/control/createLeadForm
 */