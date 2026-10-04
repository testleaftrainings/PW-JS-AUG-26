import { test } from "@playwright/test";

test(`Shadow DOM - Service Now`,async ({page}) => {
    

    await page.goto(`https://dev293266.service-now.com/now/nav/ui/classic/params/target/%24restapi.do`)

    await page.locator(`[aria-label="All"]`).click()

    await page.waitForTimeout(5000)
})


test.only(`Shadow DOM - Salesforce`,async ({page}) => {    

    await page.goto(`https://trailhead.salesforce.com/`)

    await page.getByText(`Products`,{exact:true}).nth(0).click()

    await page.waitForTimeout(5000)
})