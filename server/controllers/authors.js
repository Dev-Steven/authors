const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

Author = mongoose.model('Author');
app.use(bodyParser.json());

module.exports = {
    
    index : function(req,res){
        res.json({message: "INDEX"})
    }
}
