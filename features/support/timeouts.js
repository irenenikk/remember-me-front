const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({setDefaultTimeout}) {
    const maxTimeout = 20000000;

    setDefaultTimeout(maxTimeout);
});
