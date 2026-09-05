

import { test } from "@playwright/test";

test("Learn how to handle Modal Alerts", async ({ page }) => {

     page.on("dialog",async(allAlert)=>{ // We will take control beciase we have used page.on() listener
  //  page.once("dialog",async(allAlert)=>{ // We will take control beciase we have used page.on() listener

        console.log(allAlert.type());

        console.log(allAlert.message())

       // await allAlert.dismiss();

        if(allAlert.type()==="confirm"){

            await allAlert.dismiss();

        }else{
            await allAlert.accept("Testleaf");
        }

    

    }) // Here page.on() will listen to the activities that are performed in a page: alert pop 

    /* Notes :
    When we write page.on the alert should be handled by the automation tester 
    When we dont write page.on who has got control? => Playwright*/

    await page.goto("https://leafground.com/alert.xhtml");

    await page.locator('(//span[text()="Show"])').first().click();
    await page.waitForTimeout(3000); // demo purpose

    await page.locator('[class="card"]').filter({ hasText: "Alert (Confirm Dialog)" }).locator('//span[text()="Show"]').click() // out of 2 class="card" we have narrowed down our search using filter()
    await page.waitForTimeout(3000); // demo purpose

    await page.locator('[class="card"]').filter({ hasText: "Alert (Prompt Dialog)" }).locator('//span[text()="Show"]').click()
    await page.waitForTimeout(3000); // demo purpose
})