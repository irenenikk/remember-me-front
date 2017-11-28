const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({setDefaultTimeout}) {
    const maxTimeout = 100000;

    setDefaultTimeout(maxTimeout);
});
