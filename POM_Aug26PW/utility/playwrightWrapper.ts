import { Page } from "@playwright/test"


export abstract class PWWrapper{

        page: Page // property of LoginPage // also a global variable which needs the page reference/value to be assigned

    constructor(Lpage: Page) { // Local Variable Lpage which holds the page reference of the fixture page from .spec.ts file
        this.page = Lpage //page=Lpage // 
    }

    async fillAndTab(locator:string,data:string){

        await this.page.locator(locator).fill(data);
        await this.page.locator(locator).press("Tab");


    }


}