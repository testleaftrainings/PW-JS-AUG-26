import { test } from "@playwright/test";

test.use({
  geolocation: {
    latitude: 40.8440236,
    longitude: -75.310998
  },
  permissions: ["geolocation", "notifications"]
});

test("Learning Geolocation", async ({ page }) => {

  await page.goto("https://www.google.com/maps");

  await page.getByRole("button", { name: "Your Location" }).click();

  await page.waitForTimeout(10000);
});