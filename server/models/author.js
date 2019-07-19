const mongoose = require('mongoose');

module.exports = function(app){
    var AuthorSchema = new mongoose.Schema({
        name : {type: String, required: true, minlength: 3}
    })
    mongoose.model('Author', AuthorSchema)
}