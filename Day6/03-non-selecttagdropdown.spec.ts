
import { test } from "@playwright/test";

test("Learn to handle dropdown using non-select tag",async ({page}) => {
    

    await page.goto("https://leafground.com/select.xhtml");

    await page.locator('//label[text()="Select Country"]').click();

    await page.locator('//li[text()="India"]').click();

    await page.waitForTimeout(3000); // demo
})