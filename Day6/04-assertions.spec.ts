

import { expect, test } from "@playwright/test";

test("Learn about assertions in playwright", async ({ page }) => {

    /* Page assertion */
    await page.goto("https://leaftaps.com/opentaps/control/main");

    //  await expect(page).toHaveURL("https://amazon.com/");

    const pagetitle = await page.title()
    console.log(pagetitle);

    //   await expect(page).toHaveTitle("Leaftaps-Title",{timeout:8000}); // Over riding the default assertion timeout of 5000 ms to 8000 ms


    /* LOCATOR ASSERTIONS */
    await expect(page.locator('//input[@id="username"]')).toBeEditable();

    await page.locator('//input[@id="username"]').fill("democsr2");

    await expect.soft(page.locator('//input[@id="password"]')).toBeDisabled();

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await expect(page.locator('//input[@class="decorativeSubmit"]')).toBeEnabled();


    /* CSS COLOR BACKGROUND COLOUR ASSERTIONS */

    await expect(page.locator('//h2[text()="Leaftaps Login"]')).toHaveCSS('background-color', 'rgb(0, 148, 218)')

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();

    /* GENERIC ASSERIONS/ VALUE BASED ASSERTION/ NON RETRY ASSERTIONS */

    const pagetitleHome = await page.title()
    console.log(pagetitleHome);

    // expect(pagetitleHome).toBe("My Home | opentaps CRM");

    expect(pagetitleHome).toBe("My Home | opentaps CRM");

    await page.waitForTimeout(3000); // demo purpose

})