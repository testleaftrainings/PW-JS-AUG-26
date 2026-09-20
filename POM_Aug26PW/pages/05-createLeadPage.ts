import { PWWrapper } from "../utility/playwrightWrapper";
import { LoginPage } from "./01-loginPage";
import {faker} from "@faker-js/faker"

export class CreateLeadPage extends PWWrapper{

async enterMandatoryFields(){

    await this.page.locator('//input[@id="createLeadForm_companyName"]').fill(faker.company.buzzNoun());
    await this.page.locator('//input[@id="createLeadForm_firstName"]').fill(faker.person.firstName());
    await this.page.locator('//input[@id="createLeadForm_lastName"]').fill(faker.person.lastName())

}

async clickCreateLead(){

    await this.page.locator('//input[@class="smallSubmit"]').click();
}

}