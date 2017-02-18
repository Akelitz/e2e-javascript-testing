var Movies = require('../PageObjects/movies.js');
var Movie = require('../PageObjects/movie.js');
var AddMovie = require('../PageObjects/add-movie.js');
var EditMovie = require('../PageObjects/edit-movie.js');
var DeleteMovie = require('../PageObjects/delete-movie.js');

describe('from movies page', function () {

    var from_movies_page = new Movies();

    beforeEach(function () {
        return from_movies_page.open();
    });

    it('I can filter the list of movies by year', function () {
        expect(
            from_movies_page
                .filter_by_year('2008')
                .then_is_movies_page_of_year('2008')
        ).toBeTruthy();
    });

    it('I can remove the filter to see the full list of movies', function () {
        expect(
            from_movies_page
                .filter_by_year('2008')
                .remove_filter()
                .then_is_movies_page()
        ).toBeTruthy();
    });

    it('I can see the details of a movie', function () {
        expect(
            from_movies_page
                .click_details_for('Ratatouille')
                .then_is_movie_page_of('Ratatouille')
        ).toBeTruthy();
    });

});

describe('from movie page', function () {

    var from_movie_page = new Movie();

    beforeEach(function () {
        from_movie_page.open(1);
    });

    it('I can go back to the full list of movies', function () {
        expect(
            from_movie_page
                .go_back_to_list()
                .then_is_movies_page()
        ).toBeTruthy();
    });

});

describe('from add movie page', function () {

    var from_add_movie_page = new AddMovie();

    beforeEach(function () {
        from_add_movie_page.open(1);
    });

    it('I can abort and go back to the full list of movies', function () {
        expect(
           from_add_movie_page
               .go_back_to_list()
               .then_is_movies_page()
       ).toBeTruthy();
    });

});

describe('from edit movie page', function () {

    var from_edit_movie_page = new EditMovie();

    beforeEach(function () {
        from_edit_movie_page.open(1);
    });

    it('I can abort and go back to the full list of movies', function () {
        expect(
           from_edit_movie_page
               .go_back_to_list()
               .then_is_movies_page()
       ).toBeTruthy();
    });

});

describe('from delete movie page', function () {

    var from_delete_movie_page = new DeleteMovie();

    beforeEach(function () {
        from_delete_movie_page.open(1);
    });

    it('I can abort and go back to the full list of movies', function () {
        expect(
            from_delete_movie_page
                .go_back_to_list()
                .then_is_movies_page()
        ).toBeTruthy();
    });

});