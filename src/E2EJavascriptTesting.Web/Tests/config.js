exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    specs: [
        './Specs/movies-readonly.js',
        './Specs/movies-crud.js'
    ],
    onPrepare: function () {
        browser.ignoreSynchronization = true;
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};