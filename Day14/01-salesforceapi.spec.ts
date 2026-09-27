

/* 
UI Automation  // page fixture
--------------
const browser = await chromium.launch({headless:false,channel:"chrome"}) // here we are getting the chromium browser "object" from playwright library
const context = await browser.newContext(); // Created an isolated environment with the help of browser reference
const page = await context.newPage()

await page.goto("https://your-salesforce-instance.com"); 


API Automation   // request fixture
---------------

const apirequestcontext = await request.newContext();  // newCOntext is an isolated environment for API testing
await apirequestcontext.post('https://your-salesforce-instance.com/api/leads'); // 

*/



/* Important API information required from developer to do API testing

1. Endpoint : 

2. CRUD: POST, GET,PATCH,PUT, DELETE
(Note :PATCH : Address Update of an Employee
PUT : The entire record of the employee id updated) 

3. Authorization

4. Headers
Content-Type: JSON/ XML

5. Request Body: (Note: Mandatory fields)
{
"firstName":"Ravindran",
"lastName":"R",
"companyName": "Testleaf"
}

*/


import { expect, test } from "@playwright/test";

let token: any// Here we are declaring the token variable globally so that we can access across different test blocks

let url: any

let id: any

test.describe.serial("Create Lead in Salesforce using API in serial mode", async () => {

    test("Generate Token using POST CRUD", async ({ request }) => { // API Testing

        //await page.goto("") // UI testing

        const response = await request.post("https://login.salesforce.com/services/oauth2/token", //  by using post the object data is converted to JSON this process is called SERIALIZATION
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "client_id": "3MVG9VMBZCsTL9hnYaVamF_yN9V_7jduv6wkX4QT.YordW9Ne3Rzr3M3nBp9rf5KKALILsGwSU_G72muTfg.V",
                    "client_secret": "06F3A5498B5A56CC0FB13624BBE1D696F84F4C15920DB47E8A96E29E1CF2C109",
                    "username": "ravindran.ramdas@testleaf.com",
                    "password": "Ravi@testleaf#123",
                    "grant_type": "password"
                }
            }
        )

        const responseBody = await response.json(); // Deseriailzation JSON => Object
        // When request comes from the server through the network it is in a light weight format called as JSON 
        // but if you require it in Object format we need to convert it, and this convertion id called as "DESERIALIZATION"

        token = responseBody.access_token;
        console.log(responseBody.access_token);

        url = responseBody.instance_url; // https://testleaf22-dev-ed.develop.my.salesforce.com

        console.log(responseBody.instance_url); // 00DNS000001rTAX!AQEAQJsfGmyWHgdEdPNmF81p5FHQtRiZLwAcquFg3cfb3.XHvGaWzZowMw4mFlSmtFjMwaXiWl2H2rVBAtXCsIHsFY0uzt2y

        console.log(response.status()) // 200
        console.log(response.statusText()) // OK

        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe("OK")
    })


    test("Create Lead using API request context", async ({ request }) => {

        const leadResponseBody = await request.post(`${url}/services/data/v65.0/sobjects/Lead`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: {
                    "FirstName": "Ravindran",
                    "LastName": "R",
                    "Company": "API_UsingPlaywright_Automation_Testleaf_2026",
                    "Salutation": "Mr."
                }
            }
        )

        const responseBody = await leadResponseBody.json()
        console.log(responseBody.id)

        id = responseBody.id
    })


    test("Retrieve Lead that was created ", async ({ request }) => {

        const retrieveResponse = await request.get(`${url}/services/data/v65.0/sobjects/Lead/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const retreiveResponseBody = await retrieveResponse.json();
        console.log(retreiveResponseBody);

    })

    test("Update Lead using API request context", async ({ request }) => {

        const leadResponseBody = await request.patch(`${url}/services/data/v65.0/sobjects/Lead/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: {
                    "FirstName": "Ravindran",
                    "LastName": "R",
                    "Company": "API_UsingPlaywright_Automation_Qeagle_2026",
                    "Salutation": "Mr."
                }
            }
        )

        console.log(leadResponseBody.status()) // 204
        console.log(leadResponseBody.statusText()) // No Content

    })

      test("Delete Lead that was created ", async ({ request }) => {

        const retrieveResponse = await request.delete(`${url}/services/data/v65.0/sobjects/Lead/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        console.log(retrieveResponse.status()) // 204
        console.log(retrieveResponse.statusText()) // No Content

    })


})