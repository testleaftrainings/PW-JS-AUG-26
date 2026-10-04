/* When you dont have real server reafy in that case you can go for network inteception 
The nework logs in dev tools you can analyse for any reponse in network logs -- debugging the api call we use network interceptoon 
In API testing we do the mock server response without needing your actual server available
If you want to prevent certain request to be sebnt to the server, if you want to make changes to your request header ot your parameter , body content you can intercept the API call  */

// import { test } from "@playwright/test";
// test.use({storageState:"Data/login_salesforce.json"})

// test(`Network interception using Salesforce login`,async ({page}) => {
    
// /* We are going to intercept a POST call go to salesforce application click login button and observe the netwrok tab
// Look for aura?preloadActions we are going to intercept this particular API call
// You can see the endpoint URL request method POST, we can see the Response 
// When we dont have an API documentation then we need to rely on Network tab which call is makng what which takes time so that is the reasn we are asking developers to share the API documentation  */


// page.route("**/aura?preloadActions",async(route, request)=>{
//     if(request.method()==='POST'){
//         console.log(`Request URL: ${request.url()}`);
//         console.log(`Request headers: ${JSON.stringify(request.headers(), null, 2)}`);
// /* This will:
// Convert the headers object into a JSON string.
// null, 2 adds indentation for better readability. */      
        
//     }
//     else {
//         route.continue(); //means continue to interact with your server
//     }

// }) 

// // route is going to control the request behaviour whether to proceed route.continue and route.abort to block

// //If I want to mock a response without sending the request to actual server instead I will provide my own mock server I will send the response instead of server route.fullfill, route.continue, route.abort 
// //page.route intercept your network request which your client is making while you interact with your web page
// //if you want to mock the responses.
// //route is going to have 2 parameters one is your url pattern here ** means match and get all the aura endpoint(it is the endpoint url that you want intercept)
// //  and handler is asyncronous function what happens when that particular matching request is intercepted.

//      await page.goto("https://testleaf22-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home") // 

//     // await page.getByLabel("Username").fill("ravindran.ramdas@testleaf.com")

//     // await page.getByRole("textbox",{name:"Password"}).fill("Ravitestleaf#1234");

//     // await page.waitForTimeout(2000);

//     // await page.getByRole("button",{name:"Log In"}).click();

//     await page.getByTitle("App Launcher",{exact:true}).click();

//     await page.getByText("View All",{exact:true}).click();

//     await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Service");
// })



// //Additional notes on mocking he reponse :

import { test } from "@playwright/test";
test.use({storageState:"Data/login_salesforce.json"})

test(`Network interception using Salesforce login (Mocked)`, async ({ page }) => {

  // Intercept the POST call to aura?preloadActions and mock the response
  await page.route("**/aura?preloadActions", async (route, request) => {
    if (request.method() === 'POST') {
      console.log(`Intercepted Request URL: ${request.url()}`);
      console.log(`Intercepted Request Headers: ${JSON.stringify(request.headers(), null, 2)}`);

      // Mocked response body
      const mockedResponse = {
        actions: [
          {
            id: "1",
            status: "SUCCESS",
            returnValue: { message: "This is a mocked response" }
          }
        ]
      };

      console.log(`Mocked Response Body:\n${JSON.stringify(mockedResponse, null, 2)}`);
      // Fulfill the request with mock data instead of calling the real server
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(mockedResponse)
      });
    } else {
      // Let other requests go through
      await route.continue();
    }
  });

  // Navigate and simulate login flow
    await page.goto("https://testleaf22-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home") // 

  // await page.getByLabel("Username").fill("ravindran.ramdas@testleaf.com");
  // await page.getByRole("textbox", { name: "Password" }).fill("Ravi@testleaf#1234");

  // await page.waitForTimeout(2000);

  // await page.getByRole("button", { name: "Log In" }).click();

  await page.getByTitle("App Launcher", { exact: true }).click();

  await page.getByText("View All", { exact: true }).click();

  await page.getByPlaceholder("Search apps or items...", { exact: true }).fill("Service");
});