describe('from movies page', function () {

    beforeEach(function () {
        browser.get('http://localhost:4886/');
        browser.sleep(1000);
    });

    it('I can add a new movie', function () {
        element(by.linkText('Add New')).click();
        browser.sleep(1000);
        element(by.id('Title')).clear().sendKeys('Il piccolo principe');
        element(by.id('Year')).clear().sendKeys('2015');
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        var moviesRows = element(by.id('Movies'))
            .all(by.tagName('tr'))
            .filter((e, index) => e.getText()
                .then(text => text.startsWith('Il piccolo principe'))
            );
        expect(moviesRows.isPresent()).toBeTruthy();
        var movieRow = moviesRows.first();
        expect(movieRow.all(by.tagName('td')).first().getText()).toEqual('Il piccolo principe');
    });

    it('I can edit a movie', function () {
        var moviesTable = element(by.id('Movies'));
        var moviesRows = moviesTable.all(by.tagName('tr'));
        var movieRow = moviesRows
            .filter((e, index) => e.getText()
                .then(text => text.startsWith('Piovono gnocchi'))
            ).first();
        var detailsLink = movieRow.element(by.linkText('Edit')).click();
        browser.sleep(1000);
        element(by.id('Title')).clear().sendKeys('Piovono polpette');
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        moviesRows = element(by.id('Movies'))
            .all(by.tagName('tr'))
            .filter((e, index) => e.getText()
                .then(text => text.startsWith('Piovono polpette'))
            );
        expect(moviesRows.isPresent()).toBeTruthy();
        movieRow = moviesRows.first();
        expect(movieRow.all(by.tagName('td')).first().getText()).toEqual('Piovono polpette');
    });

    it('I can delete a movie', function () {
        var moviesTable = element(by.id('Movies'));
        var moviesRows = moviesTable.all(by.tagName('tr'));
        var movieRow = moviesRows
            .filter((e, index) => e.getText()
                .then(text => text.startsWith('Il viaggio di Arlo'))
            ).first();
        var detailsLink = movieRow.element(by.linkText('Delete')).click();
        browser.sleep(1000);
        element(by.buttonText('Confirm')).click();
        browser.sleep(1000);
        moviesRows = element(by.id('Movies'))
            .all(by.tagName('tr'))
            .filter((e, index) => e.getText()
                .then(text => text.startsWith('Il viaggio di Arlo'))
            );
        expect(moviesRows.isPresent()).toBeFalsy();
    });

});

describe('from movie page', function () {

    beforeEach(function () {
        browser.get('http://localhost:4886/Movies/Details/7');
        browser.sleep(1000);
    });

    it('I can edit the movie', function () {
        element(by.linkText('Edit')).click();
        browser.sleep(1000);
        element(by.id('Title')).clear().sendKeys('I Croods');
        element(by.buttonText('Save')).click();
        browser.sleep(1000);
        var moviesRows = element(by.id('Movies'))
            .all(by.tagName('tr'))
            .filter((e, index) => e.getText()
                .then(text => text.startsWith('I Croods'))
            );
        expect(moviesRows.isPresent()).toBeTruthy();
        var movieRow = moviesRows.first();
        expect(movieRow.all(by.tagName('td')).first().getText()).toEqual('I Croods');
    });

});