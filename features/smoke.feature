@smoke
Feature: App Smoke Test

    Ensure form functionality

    Scenario: Home page should exist
        Given I navigate to the home page
        When I load the page
        Then Remember me should be displayed in home bar

    Scenario: I should be able to add a book
        Given I navigate to the home page
        When I load the page
        And I click on add new book -button
        And I write Foster Wallace as author
        And I write Consider the Lobster as title
        And I submit the book form
        Then a book with Foster Wallace as author and Consider the Lobster as title should be on the page
