const { defineSupportCode } = require('cucumber');
const { expect } = require('code');

defineSupportCode(function ({Given, When, Then}) {


// BOOK
    When('I click on add new book -button', function () {
        return this.app.clickAddBookButton();
    });

    When('I write {string} as author for book', function(author) {
      return this.app.writeToBookAuthorInput(author);
    });

    When('I write {string} as title for book', function(title) {
      return this.app.writeToBookTitleInput(title);
    });

    When('I write {string} as comment for book', function(comment) {
      return this.app.writeToBookCommentInput(comment);
    });

    When('I submit the book form {string} as author and {string} as title', function (author, title) {
      return this.app.submitBookForm(author, title);
    });


    Then('a book with {string} as author and {string} as title and {string} as comment should be on the page', function (author, title, comment) {
      return this.app.getBooks()
          .end()
          .then((result) => {
              expect(result.content).to.contain(author);
              expect(result.content).to.contain(title);
              expect(result.content).to.contain(comment);
          });
  });

// BLOGPOST
  When('I click on add new blogpost -button', function () {
      return this.app.clickAddBlogpostButton();
  });

  When('I write {string} as author for blogpost', function(author) {
    return this.app.writeToBlogpostAuthorInput(author);
  });

  When('I write {string} as title for blogpost', function(title) {
    return this.app.writeToBlogpostTitleInput(title);
  });

  When('I write {string} as link for blogpost', function(link) {
    return this.app.writeToBlogpostLinkInput(link);
  });

  When('I write {string} as comment for blogpost', function(comment) {
    return this.app.writeToBlogpostCommentInput(comment);
  });


  When('I submit the blogpost form {string} as author and {string} as title', function (author, title) {
    return this.app.submitBlogpostForm(author, title);
  });


  Then('a blogpost with {string} as author and {string} as title and {string} as link and {string} as comment should be on the page', function (author, title, link, comment) {
    return this.app.getBlogposts()
        .end()
        .then((result) => {
            expect(result.content).to.contain(author);
            expect(result.content).to.contain(title);
            expect(result.content).to.contain(link);
            expect(result.content).to.contain(comment);
        });
    });



// VIDEO
      When('I click on add new video -button', function () {
          return this.app.clickAddVideoButton();
      });

      When('I write {string} as title for video', function(title) {
        return this.app.writeToVideoTitleInput(title);
      });

      When('I write {string} as link for video', function(link) {
        return this.app.writeToVideoLinkInput(link);
      });

      When('I write {string} as comment for video', function(comment) {
        return this.app.writeToVideoCommentInput(comment);
      });

      When('I submit the video form {string} as title and {string} as link', function (title, link) {
        return this.app.submitVideoForm(title, link);
      });


      Then('a video with {string} as title and {string} as link and {string} as comment should be on the page', function (title, link, comment) {
        return this.app.getVideos()
            .end()
            .then((result) => {
                expect(result.content).to.contain(title);
                expect(result.content).to.contain(link);
                expect(result.content).to.contain(comment);
            });
        });

        Then('a video with {string} as title should be on the page', function (title, link, comment) {
          return this.app.getVideos()
              .end()
              .then((result) => {
                  expect(result.content).to.contain(title);
              });
          });
  });
