
//import { test } from "@playwright/test";
import { LoginPage } from "../pages/01-loginPage";
import { WelcomePage } from "../pages/02-welcomePage";
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadPage";
import { CreateLeadPage } from "../pages/05-createLeadPage";
import { ViewLeadPage } from "../pages/06-viewLeadPage";
import data from "../Data/LFlogin.json"
import dotenv from "dotenv"
import { test } from "../utility/customFixture";

dotenv.config({path:"Data/qa.env"})

test("Learn login using POM",async ({page,loginfix,wpfix,hpfix}) => {
    
 //object created for LoginPage class   
// const objlog = new LoginPage(page); // page => p879870 //page reference used to loade the url
// await objlog.loadurl(process.env.BaseUrl as string); // parameteized method
// await objlog.enterCredentials(data[0].Username, data[0].Password);
// await objlog.clickLogin();

await loginfix.loadurl(process.env.BaseUrl as string); // parameteized method
await loginfix.enterCredentials(data[0].Username, data[0].Password);
await loginfix.clickLogin();

 //object created for WelcomePage class 

 //const wp = new WelcomePage(page);
 await wpfix.clickCRM()

  //object created for HomePage class 

 //const hp = new HomePage(page);
 await hpfix.clickLeads()

 

})
