
import { test } from "@playwright/test";
import { LoginPage } from "./loginPage";

test("Learn login using POM",async ({page}) => {
    
const objlog = new LoginPage(page); // page => page reference used to loade the url
await objlog.loadurl("https://leaftaps.com/opentaps/control/main"); // parameteized method
await objlog.enterCredentials("democsr2", "crmsfa");
await objlog.clickLogin();

})
