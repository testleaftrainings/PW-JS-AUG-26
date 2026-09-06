///<reference types="node" /> 

//Line number 1 is to tell the playwright from where the path is coming from which is type="node"

import { test } from "@playwright/test";
import path from "path"

test("Learn to handle file download using playwright", async ({ page }) => {

    await page.goto("https://leafground.com/file.xhtml");

    // const filePromise = page.waitForEvent("download") // listener

    // await page.locator('//span[text()="Download"]').click();

    // const downloadedfileref = await filePromise // resolving the listener action

    //Concurrent file download approach

    const [downloadedfileref] = await Promise.all([page.waitForEvent("download"), page.locator('//span[text()="Download"]').click()])

    //RELATIVE PATH:

    // await downloadedfileref.saveAs("Data/PW-JS-AUG.jpeg"); // cutomized name

    //ABSOLURE PATH :

    //await downloadedfileref.saveAs(path.join(__dirname, "../../Data/downloadedusingAbsolute.png"));

    await downloadedfileref.saveAs(path.join(__dirname, `../../Data/${downloadedfileref.suggestedFilename()}`));
    //How to get actual name:

    await downloadedfileref.saveAs(`Data/${downloadedfileref.suggestedFilename()}`) // actual filename

    await page.waitForTimeout(3000);

})

/* Difference between relative and absolute path:

1. Relative Path: The control directly move to Folder(Data) where we need to perform an action(downloading)

2. Absolute Path : The control is first in your current folder(Day8)  using the keyword __dirname

a. Then we will traverse to tests --> ../ => control moves from current folder (Day8) to tests

b. then traverse to root folder (PW-JS-Aug-26)--> ../ => control moves from tests to root folder

c. Data => Reached Data folder => Data/filename.png

Note: We are using absolute path because the slashes are not considered when we deploy in another environement*/