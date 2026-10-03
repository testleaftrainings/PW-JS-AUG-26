import { test } from "@playwright/test";
import { logADefectInJira } from "./after-hooks-jira-tickets";

test.use({storageState:"Data/login_SF.json"})

test(`Test to record tracing a specific bug - YourName`,async ({page}) => {
   
    await page.goto('https://testleaf22-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home');

   // await page.getByRole("textbox",{name:"Username"}).fill("ravindran.ramdas@testleaf.com")
//     await page.getByLabel("Username").fill("ravindran.ramdas@testleaf.com")

//    await page.getByRole("textbox",{name:"Password"}).fill("Ravisalesplay#1234"); // accessibility
//     await page.getByRole("button",{name:"Log In"}).click()

    await page.getByTitle("App Launcher",{exact:true}).click(); // attribute

  //  await page.getByText("View All",{exact:true}).click(); //  => strict mode error capturing 

  //   await page.getByRole("button",{name:"View All Applications"}).click();//=> test case passed condition

    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Service") //attribute
    await page.waitForTimeout(3000)
})

test.afterAll(  async({},testinfo)=>{

//console.log(testinfo.status); // passed, fails , timeout

await logADefectInJira(testinfo)

})