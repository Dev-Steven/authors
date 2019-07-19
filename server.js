var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var flash = require('express-flash');
var port = 8010;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(flash());

// Mongoose
require('./server/config/mongoose.js');

// Routes
require('./server/config/routes')(app);

app.listen(port, function() {
console.log(`listening on port ${port}`);    
})