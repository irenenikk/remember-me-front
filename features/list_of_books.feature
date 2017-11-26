Feature: User can see a list of books on the webpage

Scenario:
  Given Book "Author" exists in props
  When SearchResults is rendered 
  Then Book "Author" is shown on the webpage