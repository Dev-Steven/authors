const mongoose = require("mongoose");

var AuthorSchema = new mongoose.Schema({
    name: {type: String, required: true},
},{timestamps:true});
mongoose.model('Author', AuthorSchema);
