const { Given, When, Then } = require('@cucumber/cucumber');
const { faker, NameModule } = require('@faker-js/faker');
//const { expect } = require('chai');
const { expect } = require('@playwright/test');
const  { ArticlePage } = require("../../PlaywrightOverview/pages/ArticlesPage")
const  { CartPage } = require("../../PlaywrightOverview/pages/CartPage")
const articlePage = new ArticlePage()
const cartPage = new CartPage();
objectData = {
  randomName: faker.person.firstName(),
  randomEmail: faker.internet.email(),
  randomText: faker.hacker.phrase()
}

When('I add a random item from the main page', async function () {
    // Write code here that turns the phrase above into concrete actions
    articlePage.method1()
    cartPage.method1()
  });

  Then('I verify that it is displayed on the cart page', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("testeando.. ")
  });

  Then('I remove the item from the cart', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("testeando.. ")
  });
