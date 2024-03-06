@basics
Feature: Basic actions

	I as a user want to use the different selectors of playwright

	Background:
		Given I as a user enter the website "ecommerce"

	Scenario: Basic actions with different selectors
		When I verify and type on an element with ID
		And I click and type on an element with Class
		And I click and type on an element with XPath
		Then I verify that the actions are performed correctly

	Scenario: Specialized playwright locators
		Given I as user click in laptop with getByRole
		When  Click on an element by text
		Then I check the element with text


	
