const { defineSupportCode } = require('cucumber');
const { expect } = require('code');

defineSupportCode(function ({ Given, When, Then }) {

    When('a book with an empty title is submitted', function () {
        this.app.clickAddBookButton();
        this.app.writeToBookAuthorInput("Author");
        this.app.writeToBookTitleInput("");
        this.app.submitBookFormWithErrorValues();
    });

    When('a book with an empty author is submitted', function () {
        this.app.clickAddBookButton();
        this.app.writeToBookAuthorInput("");
        this.app.writeToBookTitleInput("Title");
        this.app.submitBookFormWithErrorValues();
    });

    When('a blogpost with an invalid url is submitted', function () {
        this.app.clickAddBlogpostButton();
        this.app.writeToBlogpostAuthorInput("Great blog");
        this.app.writeToBlogpostTitleInput("Great author");
        this.app.writeToBlogpostLinkInput("youtube");
        this.app.submitBlogpostFormWithErrorValues();
    });

    Then('an error message with {string} as content is shown on the infobar', function (errorMessage) {
        return this.app.getInfoBar()
            .end()
            .then((result) => {
                expect(result.content).to.contain(errorMessage);
            });
    })

});
