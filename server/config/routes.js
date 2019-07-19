const authors = require('./../controllers/authors');

module.exports = function(app) {

    // Retrieve all authors   
    app.get('/authors', function(req, res) {
        console.log('Reached /authors in routes')
        authors.getAuthors(req, res);
    }),

    // add author
    app.post('/authors/new', function(req, res) {
        console.log('In routes');
        authors.addAuthor(req, res);
    })

    // edit author

    //delete author
    app.delete('/authors/delete/:id', function(req, res) {
        console.log('In routes. Id: ', req.params.id);
        authors.deleteAuthor(req, res);
    })
}

