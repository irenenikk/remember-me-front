/*
const {defineSupportCode} = require('cucumber');
const {expect} = require('code');

defineSupportCode(function ({Given, When, Then}) {

  Given('a book with {string} as author and {string} as title is on the page', function (author, title) {
    this.helloWorldPage.clickAddBookButton();
    this.helloWorldPage.writeToBookAuthorInput(author);
    this.helloWorldPage.writeToBookTitleInput(title);
    return this.helloWorldPage.submitBookForm();
  });

  When('I click delete', function () {
      return this.helloWorldPage.clickDeleteBookButton();
  });

  Then('a book with {string} as author and {string} as title should not be on the page', function (author, title) {
    return !this.helloWorldPage.getBooks()
        .end()
        .then((result) => {
            expect(result.content).to.contain(author);
            expect(result.content).to.contain(title);
        });
    });
});
*/
