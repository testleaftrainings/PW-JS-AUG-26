

//What is JSON?
/* JavaScript Object Notation  i structure as ti how we write a set of data
{
"TCNo":"TC001",
"Username":"democsr",
"Password":"crmsfa"
} */


import credentials from "../../Data/LFlogin.json";

//[JSON1, JSON2]

// //First set of data from JSON
// console.log("This is the username data from JSON file",credentials[0].Username);
// console.log("This is the password data from JSON file",credentials[0].Password);

// //Second set of data from JSON
// console.log("This is the username data from JSON file",credentials[1].Username);
// console.log("This is the password data from JSON file",credentials[1].Password);


for (let index = 0; index < credentials.length; index++) {
    console.log("This is the username data from JSON file", credentials[index].Username);
    console.log("This is the password data from JSON file", credentials[index].Password);
}



//Actual execution of test using JSON parameterization 

import { test } from "@playwright/test";

for (let index = 0; index < credentials.length; index++) {
   
    test(`Learn to read JSON ${credentials[index].TCNo}`, async ({ page }) => {

    await page.goto(credentials[index].URL);

    await page.locator('//input[@id="username"]').fill(credentials[index].Username);

    await page.locator('//input[@id="password"]').fill(credentials[index].Password);

    await page.waitForTimeout(3000) // for demo

    await page.locator('//input[@class="decorativeSubmit"]').click();


})
    
}


/*   test("Learn to read JSON TC001", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill(credentials[index].Username);

    await page.locator('//input[@id="password"]').fill(credentials[index].Password);

    await page.locator('//input[@class="decorativeSubmit"]').click();
})
    
  test("Learn to read JSON TC002", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill(credentials[index].Username);

    await page.locator('//input[@id="password"]').fill(credentials[index].Password);

    await page.locator('//input[@class="decorativeSubmit"]').click();
})*/