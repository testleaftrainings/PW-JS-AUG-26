import { test } from "@playwright/test";

test(`Learning Webtable`,async ({page}) => {
    
    await page.goto(`https://the-internet.herokuapp.com/tables#edit`);
    for (let index = 1; index <= 6; index++) {
    const tableVal =await page.locator(`//table[1]/tbody/tr[1]/td[${index}]`).innerText();
    console.log(tableVal);        
    }
   
    
})