const {defineSupportCode} = require('cucumber');
const {expect} = require('code');

defineSupportCode(function ({Given, When, Then}) {


// BOOK
    When('I click on add new book -button', function () {
        return this.helloWorldPage.clickAddBookButton();
    });

    When('I write {string} as author for book', function(author) {
      return this.helloWorldPage.writeToBookAuthorInput(author);
    });

    When('I write {string} as title for book', function(title) {
      return this.helloWorldPage.writeToBookTitleInput(title);
    });

    When('I write {string} as comment for book', function(comment) {
      return this.helloWorldPage.writeToBookCommentInput(comment);
    });

    When('I submit the book form', function () {
      return this.helloWorldPage.submitBookForm();
    });


    Then('a book with {string} as author and {string} as title and {string} as comment should be on the page', function (author, title, comment) {
      return this.helloWorldPage.getBooks()
          .end()
          .then((result) => {
              expect(result.content).to.contain(author);
              expect(result.content).to.contain(title);
              expect(result.content).to.contain(comment);

          });
  });

// BLOGPOST
  When('I click on add new blogpost -button', function () {
      return this.helloWorldPage.clickAddBlogpostButton();
  });

  When('I write {string} as author for blogpost', function(author) {
    return this.helloWorldPage.writeToBlogpostAuthorInput(author);
  });

  When('I write {string} as title for blogpost', function(title) {
    return this.helloWorldPage.writeToBlogpostTitleInput(title);
  });

  When('I write {string} as link for blogpost', function(link) {
    return this.helloWorldPage.writeToBlogpostLinkInput(link);
  });

  When('I write {string} as comment for blogpost', function(comment) {
    return this.helloWorldPage.writeToBlogpostCommentInput(comment);
  });


  When('I submit the blogpost form', function () {
    return this.helloWorldPage.submitBlogpostForm();
  });


  Then('a blogpost with {string} as author and {string} as title and {string} as link and {string} as comment should be on the page', function (author, title, link, comment) {
    return this.helloWorldPage.getBlogposts()
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
          return this.helloWorldPage.clickAddVideoButton();
      });

      When('I write {string} as title for video', function(title) {
        return this.helloWorldPage.writeToVideoTitleInput(title);
      });

      When('I write {string} as link for video', function(link) {
        return this.helloWorldPage.writeToVideoLinkInput(link);
      });

      When('I write {string} as comment for video', function(comment) {
        return this.helloWorldPage.writeToVideoCommentInput(comment);
      });

      When('I submit the video form', function () {
        return this.helloWorldPage.submitVideoForm();
      });


      Then('a video with {string} as title and {string} as link and {string} as comment should be on the page', function (title, link, comment) {
        return this.helloWorldPage.getVideos()
            .end()
            .then((result) => {
                expect(result.content).to.contain(title);
                expect(result.content).to.contain(link);
                expect(result.content).to.contain(comment);
            });
        });



});
