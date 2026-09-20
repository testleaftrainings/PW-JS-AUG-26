import { PWWrapper } from "../utility/playwrightWrapper";
import { LoginPage } from "./01-loginPage";



export class HomePage extends PWWrapper{

async clickLeads(){

await this.page.locator('//a[text()="Leads"]').click();

}


}