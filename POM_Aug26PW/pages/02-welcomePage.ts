import { PWWrapper } from "../utility/playwrightWrapper";
import { LoginPage } from "./01-loginPage";


export class WelcomePage extends PWWrapper{ // Here when we extends LoginPage we will get "page" property that can be used in WelcomePage

    
async clickCRM(){

await this.page.locator('//a[contains(text(),"CRM")]').click();    

}


}