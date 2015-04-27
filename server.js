/**
 * Created by dudi on 27/04/2015.
 */

var express = require('express');
var url = require('url');
var textbooks = require("./textbooks");

var app = express();
app.set('json spaces',4);

//if the route is '/textbooks' the server returns json object with all the textbooks
app.get('/textbooks',function(req,res) {
   res.json(textbooks.getAllTextBooks());
});


//if the route is '/isbn/:isbn' the server returns json object with the textbook of that ISBN
app.get('/isbn/:isbn',function(req,res){
    res.json(textbooks.getTextBookByISBN(req.params.isbn));
});

//if the route is '/publisher/:publisher' the server returns json object with all the textbook of that publisher
app.get('/publisher/:publisher',function(req,res){
    res.json(textbooks.getTextBookByPublisher(req.params.publisher));
});

//if the route is any other the return will be 404 not found error


app.listen(3000);