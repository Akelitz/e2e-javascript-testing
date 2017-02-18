var Movies = require('../PageObjects/movies.js');
var Movie = require('../PageObjects/movie.js');

describe('from movies page', function () {

    var from_movies_page = new Movies();

    beforeEach(function () {
        from_movies_page.open();
    });

    it('I can add a new movie', function () {
        expect(
            from_movies_page.open()
                .click_add_new()
                .set_title_to('Il piccolo principe')
                .set_year_to('2015')
                .click_save()
                .then_exists('Il piccolo principe')
        ).toBeTruthy();
    });

    it('I can edit a movie', function () {
        expect(
            from_movies_page
                .click_edit_for('Piovono gnocchi')
                .set_title_to('Piovono polpette')
                .click_save()
                .then_exists('Piovono polpette')
        ).toBeTruthy();
    });

    it('I can delete a movie', function () {
        expect(
            from_movies_page
                .click_delete_for('Il viaggio di Arlo')
                .click_confirm()
                .then_exists('Il viaggio di Arlo')
        ).toBeFalsy();
    });

});

describe('from movie page', function () {

    var from_movie_page = new Movie();

    beforeEach(function () {
        from_movie_page.open(7);
    });

    it('I can edit the movie', function () {
        expect(
            from_movie_page
                .click_edit()
                .set_title_to('I Croods')
                .click_save()
                .then_exists('I Croods')
        ).toBeTruthy();
    });

});