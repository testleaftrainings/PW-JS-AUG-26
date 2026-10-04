
/* test.skip --> ignore the test from execution
test.fixme --> track and know failures that are yet tp be fixed
test.fail --> for negative testing --> test has to fail is the expectation */

import { expect, test } from "@playwright/test";

test.describe.serial("Learn annotations",async () => {
    
test.skip("Learn skip annoation", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.waitForTimeout(3000); // for demo
})

test("Learn fixme annoation", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.waitForTimeout(3000); // for demo
})

test("Learn fail annoation", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    expect(page.locator('//input[@class="decorativeSubmit"]')).toBeDisabled();

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.waitForTimeout(3000); // for demo
})
})

