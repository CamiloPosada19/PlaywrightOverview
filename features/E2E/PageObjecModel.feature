@POM
@all
Feature: POM application with js
   As a user, I add an item to the shopping cart, verify that it is there and delete it.

Scenario:
    Given I as a user enter the website "ecommerce"
    When I add a random item from the main page 
    Then I verify that it is displayed on the cart page
    And I remove the item from the cart