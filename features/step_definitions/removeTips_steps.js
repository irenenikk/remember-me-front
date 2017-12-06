const {defineSupportCode} = require('cucumber');
const {expect} = require('code');

defineSupportCode(function ({Given, When, Then}) {

  When('a book with {string} as author and {string} as title is on the page', function (author, title) {
     this.helloWorldPage.clickAddBookButton();
     this.helloWorldPage.writeToBookAuthorInput(author);
     this.helloWorldPage.writeToBookTitleInput(title);
     this.helloWorldPage.submitBookForm(author, title);

     this.helloWorldPage.getBooks()
      .end()
      .then((result) => {
          console.log(result);
          expect(result.content).to.contain(author);
          expect(result.content).to.contain(title);
      })
      .catch(function (error) {
        error.should.include('inserting book failed');
      });

      return this;
  });

  When('I click delete a book with {string} as author and {string} as title', function (author, title) {
      return this.helloWorldPage.clickDeleteBookButton(author, title);
  });

  Then('a book with {string} as author and {string} as title should not be on the page', function (author, title) {
      this.helloWorldPage.getBooks()
        .end()
        .then((result) => {
          console.log(result);
          if(result==null){
              done();
          }else {
            expect(result.content).not.to.contain(author);
            expect(result.content).not.to.contain(title);
          }
        })
        .catch(function (error) {
          error.should.include('checking book existence failed');
        });

        return this;
    });
});
