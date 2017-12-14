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

  When('a blogpost with {string} as author and {string} as title and {string} as link is on the page', function (author, title, link) {
     this.app.clickAddBlogpostButton();
     this.app.writeToBlogpostAuthorInput(author);
     this.app.writeToBlogpostTitleInput(title);
     this.app.writeToBlogpostLinkInput(link);
     this.app.submitBlogpostForm(author, title);

     return this.app.getBlogposts()
      .then((result) => {
          expect(result.content).to.contain(author);
          expect(result.content).to.contain(title);
          expect(result.content).to.contain(link);
      })
  });

  When('a video with {string} as title and {string} as valid Youtube video link is on the page', function (title, link) {
     this.app.clickAddVideoButton();
     this.app.writeToVideoTitleInput(title);
     this.app.writeToVideoLinkInput(link);
     this.app.submitVideoForm(title, link);

     return this.app.getVideos()
      .then((result) => {
          expect(result.content).to.contain(title);
      })
  });

  When('I click delete a book with {string} as author and {string} as title', function (author, title) {
      return this.app.clickDeleteBookButton(author, title);
  });

  When('I click delete a blogpost with {string} as author and {string} as title', function (author, title) {
      return this.app.clickDeleteBlogpostButton(author, title);
  });

  When('I click delete a video with {string} as title and {string} as link', function (title, link) {
      return this.app.clickDeleteVideoButton(title, link);
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

  Then('a blogpost with {string} as author and {string} as title and {string} as link should not be on the page', function (author, title, link) {
      return this.app.getBlogposts()
        .then((result) => {
          if(result!=null) {
            expect(result.content).not.to.contain(author);
            expect(result.content).not.to.contain(title);
            expect(result.content).not.to.contain(link);
          }
        })
    });

  Then('a video with {string} as title and {string} as link should not be on the page', function (title, link) {
    return this.app.getVideos()
      .then((result) => {
      if(result!=null) {
        expect(result.content).not.to.contain(link);
        expect(result.content).not.to.contain(title);
      }
    })
  });

  Then('a video with {string} as title should not be on the page', function (title, link) {
    return this.app.getVideos()
      .then((result) => {
      if(result!=null) {
        expect(result.content).not.to.contain(title);
      }
    })
  });




});
