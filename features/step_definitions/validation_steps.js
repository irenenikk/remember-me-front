const { defineSupportCode } = require('cucumber');
const { expect } = require('code');

defineSupportCode(function ({ Given, When, Then }) {

    When ('a book with an empty title and author is submitted', function () {
        this.app.clickAddBookButton();
        this.app.writeToBookAuthorInput("");
        this.app.writeToBookTitleInput("");
        this.app.submitBookFormWitErrorValues();
    });

    Then('an error message with {string} as content and {string} as content is shown on the infobar', function (errorMessage1, errorMessage2) {
        return this.app.getInfoBar()
            .end()
            .then((result) => {
                expect(result.content).to.contain(errorMessage1);
                expect(result.content).to.contain(errorMessage2);
            });
    });

});
