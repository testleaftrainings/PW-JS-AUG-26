

import { APIRequestContext } from "@playwright/test";

let token: any// Here we are declaring the token variable globally so that we can access across different test blocks

let url: any

let id: any

export async function generateToken(request:APIRequestContext){

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

} 


export async function createLead(request:APIRequestContext){

     const leadResponseBody = await request.post(`${url}/services/data/v65.0/sobjects/Lead`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: {
                    "FirstName": "Ravindran",
                    "LastName": "R",
                    "Company": "Google",
                    "Salutation": "Mr."
                }
            }
        )

        const responseBody = await leadResponseBody.json()
        console.log(responseBody.id)

        id = responseBody.id

}

export async function retrieveLead(request:APIRequestContext):Promise<string>{


 const retrieveResponse = await request.get(`${url}/services/data/v65.0/sobjects/Lead/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const retreiveResponseBody = await retrieveResponse.json();
        console.log(retreiveResponseBody);

        return retreiveResponseBody.Company // Microsoft

    }