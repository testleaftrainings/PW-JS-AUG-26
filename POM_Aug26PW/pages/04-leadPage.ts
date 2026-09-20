import { PWWrapper } from "../utility/playwrightWrapper";
import { LoginPage } from "./01-loginPage";


export class LeadPage extends PWWrapper{

async clickCreateLead(){

    await this.page.locator('//a[text()="Create Lead"]').click();

}

}