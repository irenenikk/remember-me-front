const {defineSupportCode} = require('cucumber');
const {expect} = require('code');

defineSupportCode(function ({Given, When, Then}) {
  Given('I navigate to the home page', function () {
      return this.helloWorldPage.setHost('http://localhost:3001');
  });

  When('I load the page', function () {
      return this.helloWorldPage.loadPage();
  });

  When('I click on add new book -button', function () {
      return this.helloWorldPage.clickAddBookButton();
  });

  When('I write {string} as author', function(author) {
    return this.helloWorldPage.writeToBookAuthorInput(author);
  });

  When('I write {string} as title', function(title) {
    return this.helloWorldPage.writeToBookTitleInput(title);
  });

  When('I submit the book form', function () {
    return this.helloWorldPage.submitBookForm();
  });

  Then('{string} should be displayed in home bar', function (message) {
    return this.helloWorldPage.getPageMessage()
        .end()
        .then((result) => {
            expect(result.message).to.contain(message);
        });
  });

  Then('a book with {string} as author and {string} as title should be on the page', function (author, title) {
    return this.helloWorldPage.getBooks()
        .end()
        .then((result) => {
            expect(result.content).to.contain(author);
            expect(result.content).to.contain(title);
        });
    });
});
