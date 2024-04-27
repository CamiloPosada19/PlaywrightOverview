Playwright Overview
===================
This repository provides an overview of how to use Playwright to automate testing in a web application. It is organised into three main folders: basic, actions and E2E, each of which addresses different aspects of Playwright testing leading to cucumber reports. 

![App Screenshot](https://github.com/CamiloPosada19/PlaywrightOverview/blob/main/ReportEvidence.png)



## Tech Stack

**Framework:** Playwright

## Cucumber

[Cucumber](https://cucumber.io/) is a testing automation tool that allows you to write tests in an easy-to-understand domain-specific language (Gherkin), encouraging collaboration between development and business teams. With Cucumber, you can create functional and acceptance tests that are readable by both humans and machines.

## Faker.js

[Faker.js](https://github.com/faker-js/faker) is a library for generating realistic fake data for use in testing and software development. With Faker.js, you can easily generate names, addresses, phone numbers, email addresses, and other types of data to simulate real-world scenarios in your automated tests or in your application during development.

## dotenv

[dotenv](https://github.com/motdotla/dotenv) is a library that loads environment variables from a `.env` file into the runtime environment of your application. This allows you to separate your application's configuration from its code, making it easier to manage environment variables across different environments (development, testing, production, etc.) and improving security by keeping sensitive information out of your source code.




Prerequisites
--------------


[![NodeJs](https://img.shields.io/badge/-NodeJS-grey?logo=node.js)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

#### Clone Repository
```bash
git clone https://github.com/CamiloPosada19/PlaywrightOverview.git
```
-----

Before running the tests, make sure you have installed Node.js and the necessary dependencies, which you can install using the following command:

```bash

  # Install the dependencies
    npm i
  # Install the browser
   npx playwright install
  # Execute the test
  npm run alltest
  # Create report
  node reporter.js
```



Folder Structure
----------------------

# Basic

 - Click elements with id
```javascript
const elementLocator = await page.locator("#selectorID"); 
await expect(elementLocator, "The element isn't found").toBeVisible();

```
   
 - Click elements with class
```javascript
await page.locator(".element-class").filter({ hasText: 'Text to search' }).click();

```
 - Click elements with xpath
```javascript
await page.locator("//input[@id='inputID']").fill("email@example.com"); // Replace "inputID" with the ID of your email input field
await page.locator("//input[@id='inputName']").fill("Example Name"); // Replace "inputName" with the ID of your name input field
await page.locator("//textarea[contains(@class,'text-area-class')]").fill("Example message"); // Replace "text-area-class" with the class of your text area
await page.locator("//button[contains(.,'Send message')]").click(); // Replace "Send message" with the text on your send message button
```
 - Click elements with getByRole
```javascript
await page.getByRole("link", { name: 'Laptops' }).click();

```
 - Click elements with text
```javascript
await page.getByText("MacBook Air").click();
```
# Actions
 - Checkbox selection in outline scenario
```javascript
switch (checkboxName) {
    case "male":
        await page.getByRole("radio", { name: "Male" }).first().check();
        await expect(page.getByRole("radio", { name: "Male" }).first()).toBeChecked();
        break;
    case "female":
        await page.getByRole("radio", { name: "Female" }).first().check();
        await expect(page.getByRole("radio", { name: "Female" }).first()).toBeChecked();
        break;
}

```
 - Hover to elements
```javascript
 await page.locator("#toolTipButton").hover({ force: true });
```
 - Drag and drop
```javascript
  await page.locator("#draggable").scrollIntoViewIfNeeded();
  await page.locator('#draggable').dragTo(page.locator('#droppable'));
```
 - Search for a random text and check in list that all elements contain it
```javascript
const links = await page.locator("div#wikipedia-search-result-link").count();
for (let i = 0; i < links; i++) {
    const link = page.locator("div#wikipedia-search-result-link").nth(i);
    await expect(link).toContainText(randomData, { timeout: 10000 });
}
```
# E2E
 - E2E test adding and removing an item from the cart with the Page Object Model design pattern and with a class manager for object creation.
```javascript


// ------------------------------- Page object manager -------------------------------


const  { SomePage } = require("ruta/a/SomePage")
const  { AnotherPage } = require("ruta/a/AnotherPage")
const { test, expect } = require('@playwright/test');

class PageObjectManager {
    constructor() {
        this.somePage = new SomePage()
        this.anotherPage = new AnotherPage()
    }


    getSomePage() {
        return this.somePage
    }

    getAnotherPage() {
        return this.anotherPage
    }
}

module.exports = { PageObjectManager }


//------------------------------- Implemented classes -------------------------------


const { test, expect } = require('@playwright/test');

class SomePage {
    constructor() {
     
        this.someElement = "//selector/del/elemento";
        this.anotherElement = "//selector/de/otro/elemento";
    }


    async performSomeAction() {
        await page.locator(this.someElement).click();
    }

   
    async verifySomething() {
      
        const element = page.locator(this.someElement);
        await expect(element).toHaveAttribute('attributeName', 'expectedValue');
        
    }
}

module.exports = { SomePage };


//------------------------------- Use of classes in cucumberSteps -------------------------------


const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const { expect } = require('@playwright/test');

const { PageObjectManager } = require("../../PlaywrightOverview/pages/PageObjectManager")
const pm = new PageObjectManager();

objectData = {
    randomName: faker.person.firstName(),
    randomEmail: faker.internet.email(),
    randomText: faker.hacker.phrase()
}

Given('I am on the main page', async function () {
   await pm.somePage.performSomeAction(); // Example action to add an item
});




```


