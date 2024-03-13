const { Given, When, Then } = require('@cucumber/cucumber');
const { faker, NameModule } = require('@faker-js/faker');
//const { expect } = require('chai');
const { expect } = require('@playwright/test');
// import { test, expect } from '';

objectData = {
  randomName: faker.person.firstName(),
  randomEmail: faker.internet.email(),
  randomText: faker.hacker.phrase()
}

Given("I as a user enter the website {string}", async function (environment) {

  switch (environment) {
    case ("ecommerce"):
      await page.goto(process.env.URLBASE)
      break;
    case ("components"):
      await page.goto(process.env.URLCOMPONENTS)
      break;
    case ("tooltips"):
      await page.goto(process.env.URLTOOLTIPS)
      break;
    default:
      console.log("page not recognized")

  }



})

When('I verify and type on an element with ID', async function () {
  const nameID = await page.locator("#carouselExampleIndicators")
  await expect(nameID, "The element is not found").toBeVisible()
});

When('I click and type on an element with Class', async function () {
  await page.locator(".nav-link").filter({ hasText: 'Contact' }).click();
});

When('I click and type on an element with XPath', async function () {
  await page.locator("//input[@id='recipient-email']").fill(objectData.randomEmail);
  await page.locator("//input[@id='recipient-name']").fill(objectData.randomName);
  await page.locator("//textarea[contains(@class,'form-control')]").fill(objectData.randomText);
  await page.locator("//button[@type='button'][contains(.,'Send message')]").click();
});

Then('I verify that the actions are performed correctly', async function () {
  await expect(page.locator('img[alt="First slide"]')).toBeVisible();
  await expect(page.locator("#nava")).toHaveText("PRODUCT STORE");
});


Given('I as user click in laptop with getByRole', async function () {
  await page.getByRole("link", { name: 'Laptops' }).click();
});

When('Click on an element by text', async function () {
  await page.getByText("MacBook air").click();

});

Then('I check the element with text', async function () {
  await expect(page.getByText('Product description')).toBeVisible();
  // await expect(title,"the title has not been found").toHaveText("MacBook Air")
});