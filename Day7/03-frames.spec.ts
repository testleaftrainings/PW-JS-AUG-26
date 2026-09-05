

import { test } from "@playwright/test";

test("Learn handing frames using playwright", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml");

    //To get all the frames from th page

    const allFrames = page.frames(); // Here frames method will help you to get the number of from object present in that web application.

    //[frame1, frame2, frame3,frame4] // frame1=== main page frame

    const frameCount = allFrames.length // property

    console.log(frameCount); //No. of frameCount includes the mainpage frame + actual iframe present inisde the DOM

   const title= await allFrames[0].title(); // here allFrame[0] === frame1

   console.log(title);

   for(let i=0;i<frameCount;i++){

    //[frame1, frame2, frame3,frame4] // frame1=== main page frame

    //lenght = 1,2,3,4
    // index = 0,1,2,3

    const frametitle= await allFrames[i].title();

    console.log(`The tite of all the frame are ${frametitle}`);    

   }
   

})