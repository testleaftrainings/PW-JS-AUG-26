

//File Upload :

/* 1. Uploading a file with input tag and type="file" in the DOM
2. Uploading a file when you dont have an input tag in your DOM */


import { test } from "@playwright/test";
import path from "path"

test("Learn to upload a file in Playwright",async ({page}) => {

    await page.goto("https://leafground.com/file.xhtml");

    await page.locator('(//input[@type="file"])[1]').setInputFiles(path.join(__dirname,"../../Data/PW-JS-AUG.png"));

    //Here by using setInputFiles() method we are injecting the files directely to that webelemment

    await page.waitForTimeout(3000) // demo
    
})


test.only("Learn to upload a file in Playwright without input tag",async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    const fileuploadPromise = page.waitForEvent("filechooser"); // listener to upload a chosen file from the workspace

    await page.locator('[id="drag-drop-upload"]').click();

    const fileUploadRef = await fileuploadPromise

    fileUploadRef.setFiles(path.join(__dirname,"../../Data/TestLeaf Logo.png"))
    
    await page.waitForTimeout(3000) // demo
    
})

/* Classrrom:

1. GO to application : https://leafground.com/file.xhtml

Upload mutiple .png files using input tag in DOM

2.GO to application : https://the-internet.herokuapp.com/upload

Upload mutiple .png files using listener concept*/