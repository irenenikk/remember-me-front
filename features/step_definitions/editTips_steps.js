const { defineSupportCode } = require('cucumber');
const { expect } = require('code');

defineSupportCode(function ({Given, When, Then}) {


// BOOK
  When('I click edit a book with {string} as author and {string} as title and I change them to {string} as new author and {string} as new title and {string} as new comment', function (author, title, newAuthor, newTitle, newComment) {
      return this.app.clickEditBookButton(author, title, newAuthor, newTitle, newComment);
  });

// BLOGPOST
  When('I click edit a blogpost with {string} as author and {string} as title and I change them to {string} as new author and {string} as new title and {string} as new link', function (author, title, newAuthor, newTitle, newLink) {
      return this.app.clickEditBlogpostButton(author, title, newAuthor, newTitle, newLink);
  });

  Then('a blogpost with {string} as author and {string} as title and {string} as link should be on the page', function (author, title, link) {
    return this.app.getBlogposts()
        .end()
        .then((result) => {
            expect(result.content).to.contain(author);
            expect(result.content).to.contain(title);
            expect(result.content).to.contain(link);
        });
    });

// VIDEO
  When('I click edit a video with {string} as title and {string} as link and I change them to {string} as new title and{string} as new link', function (title, link, newTitle, newLink) {
      return this.app.clickEditVideoButton(title, link, newTitle, newLink);
  });

  Then('a video with {string} as title and {string} as link should be on the page', function (title, link) {
    return this.app.getVideos()
        .end()
        .then((result) => {
            expect(result.content).to.contain(title);
            expect(result.content).to.contain(link);
        });
    });

});
