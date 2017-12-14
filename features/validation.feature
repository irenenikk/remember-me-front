@validation
Feature: tip validation Test

   Scenario: I should not be able to add a new book with an empty title
        Given I navigate to the home page
        When I load the page
        And a book with an empty title is submitted
        Then an error message with The title is a required field as content is shown on the infobar

    Scenario: I should not be able to add a new book with an empty author
        Given I navigate to the home page
        When I load the page
        And a book with an empty author is submitted
        Then an error message with The author is a required field as content is shown on the infobar

   Scenario: I should not be able to add a new blogpost with invalid url
        Given I navigate to the home page
        When I load the page
        And a blogpost with an invalid url is submitted
        Then an error message with The url should be valid as content is shown on the infobar