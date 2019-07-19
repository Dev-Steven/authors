const authors = require('./../controllers/authors');

module.exports = function(app) {

    // Retrieve all authors   
    app.get('/authors', function(req, res) {
        console.log('Reached /authors in routes')
        authors.getauthors(req, res);
    })

    // add author

    // edit author

    //delete author

}

