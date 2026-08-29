

import { test } from "@playwright/test";

test("Learn CSS Selectors strategy", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    // await page.locator('[id="username"]').fill("democsr2"); // option1

    //  await page.locator('#username').fill("democsr2");  // Option2 : [id="username"] ==> #username

    // await page.locator('[class="inputLogin"]').nth(0).fill("democsr2"); // Option 3 : nth method

    await page.locator('[class="inputLogin"]').first().fill("democsr2"); // Option 4 : first mtehod

    // await page.locator('[id="password"]').fill("crmsfa"); // option1

    //  await page.locator('#password').fill("crmsfa"); // option2

    //   await page.locator('[class="inputLogin"]').nth(1).fill("crmsfa"); // Option 3 : nth method

    await page.locator('[class="inputLogin"]').last().fill("crmsfa"); // Option 4 : last method

    // await page.locator('[class="decorativeSubmit"]').click(); // option1

    await page.locator('.decorativeSubmit').click(); // option2

    await page.waitForTimeout(3000); // demo purpose

})