describe('from movies page', function () {

    beforeEach(function () {
        browser.get('http://localhost:4886/');
        browser.sleep(1000);
    });

    it('I can filter the list of movies by year', function () {
        var yearLink = element(by.id('Years')).element(by.linkText('2008'));
        yearLink.click();
        browser.sleep(1000);
        expect(element(by.tagName('h2')).getText()).toEqual('Movies of 2008');
    });

    it('I can remove the filter to see the full list of movies', function () {
        var yearLink = element(by.id('Years')).element(by.linkText('2008'));
        yearLink.click();
        browser.sleep(1000);
        var allLink = element(by.id('Years')).element(by.linkText('All'));
        allLink.click();
        browser.sleep(1000);
        expect(element(by.tagName('h2')).getText()).toEqual('Movies');
    });

    it('I can see the details of a movie', function () {
        var moviesTable = element(by.id('Movies'));
        var moviesRows = moviesTable.all(by.tagName('tr'));
        var movieRow = moviesRows
            .filter((e, index) => e.getText()
                .then(text => text.startsWith('Ratatouille'))
            ).first();
        var detailsLink = movieRow.element(by.linkText('Details')).click();
        browser.sleep(1000);
        expect(element(by.tagName('h2')).getText()).toEqual('Ratatouille');
    });

});

describe('from movie page', function () {

    beforeEach(function () {
        browser.get('http://localhost:4886/Movies/Details/1');
        browser.sleep(1000);
    });

    it('I can go back to the full list of movies', function () {
        element(by.linkText('Back to List')).click();
        browser.sleep(1000);
        expect(element(by.tagName('h2')).getText()).toEqual('Movies');
    });

});

describe('from add movie page', function () {

    beforeEach(function () {
        browser.get('http://localhost:4886/Movies/Add');
        browser.sleep(1000);
    });

    it('I can abort and go back to the full list of movies', function () {
        element(by.linkText('Back to List')).click();
        browser.sleep(1000);
        expect(element(by.tagName('h2')).getText()).toEqual('Movies');
    });

});

describe('from edit movie page', function () {

    beforeEach(function () {
        browser.get('http://localhost:4886/Movies/Edit/1');
        browser.sleep(1000);
    });

    it('I can abort and go back to the full list of movies', function () {
        element(by.linkText('Back to List')).click();
        browser.sleep(1000);
        expect(element(by.tagName('h2')).getText()).toEqual('Movies');
    });

});

describe('from delete movie page', function () {

    beforeEach(function () {
        browser.get('http://localhost:4886/Movies/Delete/1');
        browser.sleep(1000);
    });

    it('I can abort and go back to the full list of movies', function () {
        element(by.linkText('Back to List')).click();
        browser.sleep(1000);
        expect(element(by.tagName('h2')).getText()).toEqual('Movies');
    });

});