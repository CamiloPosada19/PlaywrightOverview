const {Given,When,Then} = require('@cucumber/cucumber');
const { faker, NameModule } = require('@faker-js/faker');
//const { expect } = require('chai');
const { expect } = require('@playwright/test');
// import { test, expect } from '';

objectData = {
  randomName:faker.person.firstName(),
  randomEmail:faker.internet.email(),
  randomText:faker.hacker.phrase()
}

Given("I as a user enter the website",async function(){
  await page.goto(process.env.URLBASE)
})


When('I verify and type on an element with ID',async function () {
  const nameID = await page.locator("#carouselExampleIndicators")
  await expect(nameID,"The element is not found").toBeVisible()

});


When('I click and type on an element with Class', async function () {
    await page.locator(".nav-link").filter({hasText:'Contact'}).click();
});


When ('I click and type on an element with XPath', async function () {
  await page.locator("//input[@id='recipient-email']").fill(objectData.randomEmail);
  await page.locator("//input[@id='recipient-name']").fill(objectData.randomName);
  await page.locator("//textarea[contains(@class,'form-control')]").fill(objectData.randomText);
  await page.locator("//button[@type='button'][contains(.,'Send message')]").click();
});



Then('I verify that the actions are performed correctly', async function () {
  await expect(page.locator('img[alt="First slide"]')).toBeVisible();
  await expect(page.locator("#nava")).toHaveText("PRODUCT STORE")
});