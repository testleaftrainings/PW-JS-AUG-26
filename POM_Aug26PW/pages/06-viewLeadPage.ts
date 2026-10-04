import { PWWrapper } from "../utility/playwrightWrapper";
import { LoginPage } from "./01-loginPage";


export class ViewLeadPage extends PWWrapper{

async viewLeadName(){

    const leadName = await this.page.locator('//span[@id="viewLead_firstName_sp"]').innerText();
    console.log(leadName);

    await this.page.waitForTimeout(3000);//for demo
    
}

}