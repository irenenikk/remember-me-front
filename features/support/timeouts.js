const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({setDefaultTimeout}) {
    const maxTimeout = 10000;

    setDefaultTimeout(maxTimeout);
});
