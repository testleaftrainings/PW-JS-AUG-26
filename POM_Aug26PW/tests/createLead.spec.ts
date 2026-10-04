
import { test } from "@playwright/test";
import { LoginPage } from "../pages/01-loginPage";
import { WelcomePage } from "../pages/02-welcomePage";
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadPage";
import { CreateLeadPage } from "../pages/05-createLeadPage";
import { ViewLeadPage } from "../pages/06-viewLeadPage";
import data from "../Data/LFlogin.json"
import dotenv from "dotenv"
import { test1 } from "../utility/customFixture";

dotenv.config({path:"Data/qa.env"})

test1("Learn login using POM",async ({page,loginfix,wpfix,hpfix,lpfix,clpfix,vpfix}) => {
    
 //object created for LoginPage class   
//const objlog = new LoginPage(page); // page => p879870 //page reference used to loade the url
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

  //object created for LeadPage class 

// const lp = new LeadPage(page);
 await lpfix.clickCreateLead();

   //object created for CreateLeadPage class 

 //const clp = new CreateLeadPage(page);
 await clpfix.enterMandatoryFields();
 await clpfix.clickCreateLead();

   //object created for ViewLeadPage class 

// const vp = new ViewLeadPage(page);
 await vpfix.viewLeadName();
 


})
