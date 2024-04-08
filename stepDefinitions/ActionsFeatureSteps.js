const { Given, When, Then } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');
const exp = require('constants');
const { faker, NameModule } = require('@faker-js/faker');
const randomData = faker.person.firstName()
When(/^I click on the "(.*?)" checkbox$/, async function (checkboxName) {

  switch (checkboxName) {
    case "male":
      //await page.locator("//div[@class='form-check form-check-inline'][contains(.,'Female')]").click();
      await page.getByRole("radio", { name: "Male" }).first().check()
      break;
    case "female":
      await page.getByRole("radio", { name: "Female" }).first().check()
      break;

  }

});

Then('I confirm that the checkbox corresponding to {string} is selected.', async function (expectedResult) {
  if (expectedResult === "male") {
    await expect(page.getByRole("radio", { name: "Male" }).first()).toBeChecked();
  } else if (expectedResult === "female") {
    await expect(page.getByRole("radio", { name: "Female" }).first()).toBeChecked();

  }
});


When('Mouse over the green button', async function () {
  await page.locator("#toolTipButton").hover({ force: true });
});


Then('A tooltip containing the following text {string} is displayed', async function (text) {
  await page.waitForSelector('div.tooltip-inner',{timeout:10000});
  await expect(page.locator("div.tooltip-inner")).toContainText(text,({timeout:10000}))
  await expect(page.locator("div.tooltip-inner")).toBeVisible({timeout:15000})

});



When('I drag the element to the box', async function () {
  await page.locator("#draggable").scrollIntoViewIfNeeded();
  await page.locator('#draggable').dragTo(page.locator('#droppable'));
});


Then('Verify that the item is in the yellow box', async function () {
  let container = await page.locator('#droppable')
  await expect(container).toHaveText("Dropped!")

});


When('I perform a random text search', async function () {

  console.log(randomData)
  await page.locator(".wikipedia-search-input").fill(randomData)
  await page.locator(".wikipedia-search-button").click()

});


Then('I verify that all the results contain the searched text', async function () {
  await page.waitForSelector("div#wikipedia-search-result-link")
  const result = await page.locator("div#wikipedia-search-result-link").count({timeout:10000})
  for (let i = 0; i <result; i++) {
    await expect(page.locator("div#wikipedia-search-result-link").nth(i)).toContainText(randomData,{expect:10000});

  }


});