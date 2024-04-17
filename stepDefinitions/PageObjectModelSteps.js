const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const { expect } = require('@playwright/test');

const  { PageObjectManager } = require("../../PlaywrightOverview/pages/PageObjectManager")
const pm = new PageObjectManager()

objectData = {
  randomName: faker.person.firstName(),
  randomEmail: faker.internet.email(),
  randomText: faker.hacker.phrase()
}

When('I add a random item from the main page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pm.articlePage.selectARandomElement()
    await pm.articlePage.goTotheCart()

  

  });

  Then('I verify that it is displayed on the cart page', async function () {
   await pm.cartPage.verifyItemInAcart();
    
  });

  Then('I remove the item from the cart', async function () {
    await pm.cartPage.deleteItemInCart()
  });
