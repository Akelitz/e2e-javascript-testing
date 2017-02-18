module.exports = function () {
    var Movies = require('../PageObjects/movies.js');
    var address = 'http://localhost:4886/Movies/Edit/';
    var self = this;
    var sleep = 1000;

    this.open = function (id) {
        browser.get(address + id);
        browser.sleep(sleep);
        return self;
    };

    this.click_save = function () {
        element(by.buttonText('Save')).click();
        browser.sleep(sleep);
        return new Movies();
    };

    this.go_back_to_list = function () {
        element(by.linkText('Back to List')).click();
        browser.sleep(sleep);
        return new Movies();
    };

    this.set_title_to = function (title) {
        element(by.id('Title')).clear().sendKeys(title);
        return self;
    };

    this.set_year_to = function (year) {
        element(by.id('Year')).clear().sendKeys(year);
        return self;
    };
};