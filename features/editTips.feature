@edit
Feature: Edit Tips Test

   Ensure form functionality in editing tips

   Scenario: I should be able to edit book
      Given I navigate to the home page
      When I load the page
      And a book with Eeva as author and Terv as title is on the page
      And I click edit a book with Eeva as author and Terv as title and I add Kilpi to author field and eisin to title field and Riina recommended this one as new comment
      Then a book with Terveisin as title and Riina recommended this one as comment should be on the page
      And a book with Eeva as author and Terv as title should not be on the page

#   Scenario: I should be able to edit blogpost
#       Given I navigate to the home page
#       When I load the page
#       And a blogpost with Taina as author and Does not write a blog as title and http://broken.fi as link is on the page
#       And I click edit a blogpost with Taina as author and Does not write a blog as title and I change them to Nate Hunzaker as new author and Acceptance Testing React Apps with Jest and Nightmare as new title and https://www.viget.com/articles/acceptance-testing-react-apps-with-jest-and-nightmare as new link
#       Then a blogpost with Nate Hunzaker as author and Acceptance Testing React Apps with Jest and Nightmare as title and https://www.viget.com/articles/acceptance-testing-react-apps-with-jest-and-nightmare as link should be on the page
#       And a blogpost with Taina as author and Does not write blog as title and http://broken.fi as link should not be on the page

#    Scenario: I should be able to edit video
#       Given I navigate to the home page
#       When I load the page
#       And a video with Just some hits as title and https://www.youtube.com/watch?v=PEczLzpVigQ as valid Youtube video link is on the page
#       And I click edit a video with Just some hits as title and https://www.youtube.com/watch?v=PEczLzpVigQ as link and I change them to Trending top 1 as new title and https://www.youtube.com/watch?v=AG8O3vl66Jc as new link
#       Then a video with Trending top 1 as title should be on the page
#       And a video with Just some hits as title should not be on the page
