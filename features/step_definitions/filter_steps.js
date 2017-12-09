const { defineSupportCode } = require('cucumber');
const { expect } = require('code');

defineSupportCode(function ({Given, When, Then}) {

  When('I add some done and an undone tips on the site', function () {
    const title = "Introduction to the Theory of Computation";
    const author = "Sipser";

    const author2 = "Everyone";
    const title2 = "Hacker News"
    const url = "https://news.ycombinator.com/";

    const title3 = "Hashing with Chaining"
    const url2 = "https://www.youtube.com/watch?v=0M_kIqhwbFo&t=1832s";

    this.app.clickAddBookButton();
    this.app.writeToBookAuthorInput(author);
    this.app.writeToBookTitleInput(title);
    this.app.submitBookForm(author, title);
    this.app.clickDoneToggle(title, author);

    this.app.clickAddBlogpostButton();
    this.app.writeToBlogpostTitleInput(title2);
    this.app.writeToBlogpostAuthorInput(author2);
    this.app.writeToBlogpostLinkInput(url);
    this.app.submitBlogpostForm(author2, title2);
    this.app.clickDoneToggle(title2, author2);

    this.app.clickAddVideoButton();
    this.app.writeToVideoTitleInput(title3);
    this.app.writeToVideoLinkInput(url2);
    return this.app.submitVideoForm(title3, url2);
  });

  When('I add some new done and an undone tips on the site', function () {
    const author2 = "Mark Zuckerberg";
    const title2 = "Get a job"
    const url = "https://reactjs.org/";

    this.app.clickAddBlogpostButton();
    this.app.writeToBlogpostTitleInput(title2);
    this.app.writeToBlogpostAuthorInput(author2);
    this.app.writeToBlogpostLinkInput(url);
    this.app.submitBlogpostForm(author2, title2);
    return this.app.clickDoneToggle(title2, author2);
  });

  When('I click on the show done -button', function () {
    return this.app.clickShowDoneButton();
  });

  When('I click on the show undone -button', function () {
    return this.app.clickShowUndoneButton();
  });

  Then('only done tips should be visible on the page', function () {
    return this.app.getCheckedCheckBoxes()
      .end()
      .then((result) => {
        expect(result.content).to.only.include(true);
    });
  });

  Then('only undone tips should be visible on the page', function () {
    return this.app.getCheckedCheckBoxes()
      .end()
      .then((result) => {
        expect(result.content).to.only.include(false);
    });
  });
});
