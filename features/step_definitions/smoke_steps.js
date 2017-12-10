const { defineSupportCode } = require('cucumber');
const { expect } = require('code');

defineSupportCode(function ({Given, When, Then}) {
  Given('I navigate to the home page', function () {
      return this.app.setHost('http://localhost:3001');
  });

  When('I load the page', function () {
      return this.app.loadPage();
  });

  Then('{string} should be displayed in home bar', function (message) {
    return this.app.getPageMessage()
        .end()
        .then((result) => {
            expect(result.message).to.contain(message);
        });
  });

});
