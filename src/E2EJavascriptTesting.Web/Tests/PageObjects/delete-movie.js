module.exports = function () {
    var Movies = require('../PageObjects/movies.js');
    var address = 'http://localhost:4886/Movies/Delete/';
    var self = this;
    var sleep = 1000;

    this.open = function (id) {
        browser.get(address + id);
        browser.sleep(sleep);
        return self;
    };

    this.click_confirm = function () {
        element(by.buttonText('Confirm')).click();
        browser.sleep(sleep);
        return new Movies();
    };

    this.go_back_to_list = function () {
        element(by.linkText('Back to List')).click();
        browser.sleep(sleep);
        return new Movies();
    };
};