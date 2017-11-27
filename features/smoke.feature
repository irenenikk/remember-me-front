@smoke
Feature: App Smoke Test

    Ensure the application will load and render

    Scenario: Load the page
        Given a page exists
        When I load the page
        Then Hello World should be displayed
