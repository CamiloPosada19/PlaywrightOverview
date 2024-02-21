const {Given,When,Then} = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');

require('dotenv').config({path:"env/.env"})

Given("I as a user enter the website",async function(){
  await page.goto(process.env.URLFORM)
  await page.locator(".fc-button-label").first().click();
  const randomFullname = faker.person.fullName();   // test faker.js
  console.log(randomFullname)
  
 
  
  
})


When('I click and type on an element with ID',async function () {
await page.locator("#firstName").click()
});


When('I click and type on an element with Class', function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Conectado")
});


When ('I click and type on an element with XPath', function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Conectado")
});



Then('I verify that the actions are performed correctly', function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Conectado")
});