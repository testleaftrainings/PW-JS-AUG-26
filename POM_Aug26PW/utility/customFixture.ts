
import {test as baseTest} from "@playwright/test"; // here as keyword is used to set an alias name to your normal test
import { LoginPage } from "../pages/01-loginPage";
import { WelcomePage } from "../pages/02-welcomePage";
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadPage";
import { CreateLeadPage } from "../pages/05-createLeadPage";
import { ViewLeadPage } from "../pages/06-viewLeadPage";

//Inbuilt fixture :
// normal test // test (runner)===> page fixture (Inbuilt playwright fixture)


//customized fixture :
//  cutomized test //  test1 ===> loginfix ( customized fixture)

//page(fixture)+loginfix=test1

type myFixture ={
loginfix:LoginPage,
wpfix:WelcomePage,
hpfix:HomePage,
lpfix:LeadPage,
clpfix:CreateLeadPage,
vpfix:ViewLeadPage
}

export const test = baseTest.extend<myFixture>({ // normal test + customized fixture

    //key : value

loginfix : async ({page},use) => {
    const objlog = new LoginPage(page);
    use(objlog) // the customized fixture is used here to make it available to the test1 function
    //use() ensures that the loginfix is closed after the test is completed and the resources are released
},

wpfix : async ({page},use) => {
     const wp = new WelcomePage(page);
    use(wp) // the customized fixture is used here to make it available to the test1 function
    //use() ensures that the loginfix is closed after the test is completed and the resources are released
},

hpfix : async ({page},use) => {
     const hp = new HomePage(page);
    use(hp) // the customized fixture is used here to make it available to the test1 function
    //use() ensures that the loginfix is closed after the test is completed and the resources are released
},

lpfix : async ({page},use) => {
     const lp = new LeadPage(page);
    use(lp) // the customized fixture is used here to make it available to the test1 function
    //use() ensures that the loginfix is closed after the test is completed and the resources are released
},

clpfix : async ({page},use) => {
    const clp = new CreateLeadPage(page);
    use(clp) // the customized fixture is used here to make it available to the test1 function
    //use() ensures that the loginfix is closed after the test is completed and the resources are released
},

vpfix : async ({page},use) => {
    const vp = new ViewLeadPage(page);
    use(vp) // the customized fixture is used here to make it available to the test1 function
    //use() ensures that the loginfix is closed after the test is completed and the resources are released
},

})







// const wp = new WelcomePage(page);



// const hp = new HomePage(page);



// const lp = new LeadPage(page);


// const clp = new CreateLeadPage(page);


// const vp = new ViewLeadPage(page);