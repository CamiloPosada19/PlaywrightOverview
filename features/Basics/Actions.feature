@actions
@all
Feature: Main Actions with playwright

    I as a user want to perform the daily actions of a user and verify it.

    Scenario Outline: User selects checkboxes
        Given I as a user enter the website "components"
        When I click on the "<typeCheckbox>" checkbox
        Then I confirm that the checkbox corresponding to "<expectedResult>" is selected.

        Examples:
            | typeCheckbox | expectedResult |
            | male         | male           |
            | female       | female         |

    Scenario: Perform the hover and verify that the tooltip is visible.
        Given I as a user enter the website "tooltips"
        When Mouse over the green button
        Then A tooltip containing the following text "You hovered over the Button" is displayed



    Scenario: I as a user perform a drag and drop
        Given I as a user enter the website "components"
        When I drag the element to the box
        Then Verify that the item is in the yellow box


    Scenario: Perform a search and verify that all the results contain the searched word
        Given I as a user enter the website "components"
        When I perform a random text search
        Then I verify that all the results contain the searched text



