/**
 * Created by dudi on 27/04/2015.
 */

var express = require('express');
var url = require('url');
var textbooks = require("./textbooks");

var app = express();
app.set('json spaces',4);

app.get('/books',function(req,res) {
   res.json(textbooks.getAllTextBooks());
});

app.get('/isbn/:isbn',function(req,res){
    res.json(textbooks.getTextBookByISBN(req.params.isbn));
});

app.get('/publisher/:publisher',function(req,res){
    res.json(textbooks.getTextBookByPublisher(req.params.publisher));
});

app.use(function(req,res){
    res.send(404,"the page you requested is not here!");
});

app.listen(3000);