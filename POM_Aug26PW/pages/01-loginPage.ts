import { Page } from "@playwright/test"; //Here we need to import "Page" interface from playwright library inorder to make typescript infer from where the "Page" interface is coming from
import { PWWrapper } from "../utility/playwrightWrapper";

export class LoginPage extends PWWrapper{

    // page: Page // property of LoginPage // also a global variable which needs the page reference/value to be assigned

    // constructor(Lpage: Page) { // Local Variable Lpage which holds the page reference of the fixture page from .spec.ts file
    //     this.page = Lpage //page=Lpage // 
    // }

    //properties

    // url = "https://leaftaps.com/opentaps/control/main"
    // username = "democsr2"
    // password = "crmsfa"

    //methods

    async loadurl(url: string) { // actionable // here url acts as a local variable
        //     console.log("Loading the web application", this.url); // here url is not a local variable hence we used this keyword
        //      console.log("Loading the web application", url)

        await this.page.goto(url)
    }

    async enterCredentials(username: string, password: string) {
        //    console.log("Fill username and password", this.username, this.password);
        //   console.log("Fill username and password", username, password);
        // await this.page.locator('//input[@id="username"]').fill(username);
        // await this.page.locator('//input[@id="password"]').fill(password);

        await this.fillAndTab('//input[@id="username"]',username);        
        await this.fillAndTab('//input[@id="password"]',password)

    }

    async clickLogin() {
        console.log("Click the Login Button ");
        await this.page.locator('//input[@class="decorativeSubmit"]').click();

    }
}

// const objlog = new LoginPage();
// objlog.loadurl("https://leaftaps.com/opentaps/control/main"); // parameteized method
// objlog.enterCredentials("democsr2", "crmsfa");
// objlog.clickLogin();