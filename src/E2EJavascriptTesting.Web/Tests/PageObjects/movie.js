module.exports = function () {
    var Movies = require('./movies.js');
    var EditMovie = require('../PageObjects/edit-movie.js');
    var address = 'http://localhost:4886/Movies/Details/';
    var self = this;
    var sleep = 1000;

    this.open = function (id) {
        browser.get(address + id);
        browser.sleep(sleep);
        return self;
    };

    this.click_edit = function () {
        element(by.linkText('Edit')).click();
        browser.sleep(sleep);
        return new EditMovie();
    };

    this.go_back_to_list = function () {
        element(by.linkText('Back to List')).click();
        browser.sleep(sleep);
        return new Movies();
    };

    this.then_is_movie_page_of = function (movie) {
        return element(by.tagName('h2')).getText()
            .then(text => text === movie);
    };
};
