/**
 * Created by dudi on 27/04/2015.
 */

var express = require('express');
var textbooks = require("./textbooks");

var app = express();
app.set('json spaces',4);
app.set('views', process.cwd() + '/views');
app.set('view engine', 'ejs');

app.get('/api',function(req,res){
    res.render('index');
});

//if the route is '/textbooks' the server returns json object with all the textbooks
app.get('/textbooks',function(req,res) {
    console.log('getting all textbooks');
    res.json(textbooks.getAllTextBooks());
});


//if the route is '/isbn/:isbn'
//the server returns json object with the textbook of that ISBN
app.get('/isbn/:isbn',function(req,res){
    console.log('getting book with ISBN: ' + req.params.isbn);
    res.json(textbooks.getTextBookByISBN(req.params.isbn));
});

//if the route is '/publisher/:publisher'
// the server returns json object with all the textbook of that publisher
app.get('/publisher/:publisher',function(req,res){
    console.log('getting books with publisher: ' + req.params.publisher);
    res.json(textbooks.getTextBookByPublisher(req.params.publisher));
});

//if the route is any other the return will be 404 not found error


var port = process.env.PORT || 5000;
app.listen(port);
console.log("server listening on port",port);
