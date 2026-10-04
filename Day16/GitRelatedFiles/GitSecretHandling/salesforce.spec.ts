import { test } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({
 path: "tests/Day16/.env"
}); // For local execution only

let token: string;
let inst_url: string;
let tokenType: string;
let id: string;

test.describe.serial("Salesforce API testing", () => {

  test("Generate a token", async ({ request }) => {

    const response = await request.post(
      "https://login.salesforce.com/services/oauth2/token",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        form: {
          "client_id": process.env.SF_CLIENT_ID as string,
          "client_secret": process.env.SF_CLIENT_SECRET as string,
          "username": process.env.SF_USERNAME as string,
          "password": process.env.SF_PASSWORD as string,
          "grant_type": "password"
        }
      }
    );

    const responseBody = await response.json();

    token = responseBody.access_token;
    inst_url = responseBody.instance_url;
    tokenType = responseBody.token_type;
  });

  test("Create Lead", async ({ request }) => {

    const response = await request.post(
      `${inst_url}/services/data/v65.0/sobjects/Lead`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${tokenType} ${token}`
        },
        data: {
          Salutation: "Mr.",
          FirstName: "RavindranNovWD25",
          LastName: "PlaywrightTrainer",
          Company: "Testleaf"
        }
      }
    );

    const body = await response.json();
    id = body.id;
  });

  test("Fetch Lead", async ({ request }) => {

    const response = await request.get(
      `${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${tokenType} ${token}`
        }
      }
    );

    console.log(await response.json());
  });

});

/* 1. Local execution => the secrete are feteched from the .env file
2. CI pipeline */