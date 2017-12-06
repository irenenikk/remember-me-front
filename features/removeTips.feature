@remove
Feature: remove tips Test

    Scenario: I should be able to remove a book
        Given I navigate to the home page
        When I load the page
        And a book with Kjell Westo as author and Rikinkeltainen taivas as title is on the page
        #And I click delete a book with Kjell Westo as author and Rikinkeltainen taivas as title
        Then a book with Kjell Westo as author and Rikinkeltainen taivas as title should not be on the page
