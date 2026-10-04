import { devices, test } from "@playwright/test"

test.use({
    ...devices['iPhone 14 Pro Max']
})

test(`Emulate the devices`,async ({page}) => {
    await page.goto(`https://www.amazon.in/`) 
    await page.waitForTimeout(4000)
})