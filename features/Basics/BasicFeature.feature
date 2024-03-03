@basics
Feature: Basic actions 

As a user
I want to login into applications

Scenario: Basic actions with different selectors 
	Given I as a user enter the website
	When I verify and type on an element with ID
	And I click and type on an element with Class
	And I click and type on an element with XPath
	Then I verify that the actions are performed correctly

# Scenario: Specialized playwright locators
# 	Given I as user click and upload document with locator getByrole
# 	When  Search for an element by text aand another by placeholder
# 	Then I select the checks by the label 
