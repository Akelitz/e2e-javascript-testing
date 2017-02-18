module.exports = function () {
    var Movie = require('../PageObjects/movie.js');
    var AddMovie = require('../PageObjects/add-movie.js');
    var DeleteMovie = require('../PageObjects/delete-movie.js');
    var EditMovie = require('../PageObjects/edit-movie.js');
    var address = 'http://localhost:4886/';
    var self = this;
    var sleep = 1000;

    //this.addNewLink = element(by.linkText('Add New'));
    //this.titleHeader = element(by.tagName('h2'));
    //this.yearsParagraph = element(by.id('years'));
    //this.moviesTable = element(by.id('movies'));

    this.open = function () {
        browser.get(address);
        browser.sleep(sleep);
        return self;
    };

    this.click_add_new = function () {
        element(by.linkText('Add New')).click();
        browser.sleep(sleep);
        return new AddMovie();
    };

    this.click_delete_for = function (movie) {
        var moviesTable = element(by.id('Movies'));
        var moviesRows = moviesTable.all(by.tagName('tr'));
        var movieRow = moviesRows
            .filter((e, index) => e.getText()
                .then(text => text.startsWith(movie))
            ).first();
        var detailsLink = movieRow.element(by.linkText('Delete')).click();
        browser.sleep(sleep);
        return new DeleteMovie();
    };

    this.click_details_for = function (movie) {
        var moviesTable = element(by.id('Movies'));
        var moviesRows = moviesTable.all(by.tagName('tr'));
        var movieRow = moviesRows
            .filter((e, index) => e.getText()
                .then(text => text.startsWith(movie))
            ).first();
        var detailsLink = movieRow.element(by.linkText('Details')).click();
        browser.sleep(sleep);
        return new Movie();
    };

    this.click_edit_for = function (movie) {
        var moviesTable = element(by.id('Movies'));
        var moviesRows = moviesTable.all(by.tagName('tr'));
        var movieRow = moviesRows
            .filter((e, index) => e.getText()
                .then(text => text.startsWith(movie))
            ).first();
        var detailsLink = movieRow.element(by.linkText('Edit')).click();
        browser.sleep(sleep);
        return new EditMovie();
    };

    this.filter_by_year = function (year) {
        var yearLink = element(by.id('Years')).element(by.linkText(year));
        yearLink.click();
        return self;
    };

    this.remove_filter = function () {
        var allLink = element(by.id('Years')).element(by.linkText('All'));
        allLink.click();
        return self;
    };

    this.then_exists = function (movie) {
        var moviesRows = element(by.id('Movies'))
            .all(by.tagName('tr'))
            .filter((e, index) => e.getText()
                .then(text => text.startsWith(movie))
            );
        return moviesRows.isPresent().then(isPresent => {
            if (!isPresent)
                return false;
            try {
                var movieRow = moviesRows.first();
                return movieRow.all(by.tagName('td')).first().getText()
                    .then(text => text === movie);
            }
            catch (ex) {
                return false;
            }
        });
    };

    this.then_is_movies_page = function () {
        return element(by.tagName('h2')).getText()
            .then(text => text === 'Movies');
    };

    this.then_is_movies_page_of_year = function (year) {
        return element(by.tagName('h2')).getText()
            .then(text => text === 'Movies of ' + year);
    };
};