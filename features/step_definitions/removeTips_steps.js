const { defineSupportCode } = require('cucumber');
const { expect } = require('code');

defineSupportCode(function ({Given, When, Then}) {

  When('a book with {string} as author and {string} as title is on the page', function (author, title) {
     this.app.clickAddBookButton();
     this.app.writeToBookAuthorInput(author);
     this.app.writeToBookTitleInput(title);
     this.app.submitBookForm(author, title);

     return this.app.getBooks()
      .then((result) => {
          expect(result.content).to.contain(author);
          expect(result.content).to.contain(title);
      })

  });

  When('I click delete a book with {string} as author and {string} as title', function (author, title) {
      return this.app.clickDeleteBookButton(author, title);
  });

  Then('a book with {string} as author and {string} as title should not be on the page', function (author, title) {
      return this.app.getBooks()
        .then((result) => {
          if(result!=null) {
            expect(result.content).not.to.contain(author);
            expect(result.content).not.to.contain(title);
          }
        })

    });
});
