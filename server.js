/**
 * Created by dudi on 27/04/2015.
 */

var express = require('express');
var url = require('url');
var textbooks = require("./textbooks");

var app = express();
app.set('json spaces',4);

app.get('/getbooks',function(req,res) {
   res.json(textbooks.getAllTextBooks());
});

app.get('/getbookbyisbn/:isbn',function(req,res){
    res.json(textbooks.getTextBookByISBN(req.params.isbn));
});

app.get('/getbooksbypublisher/:publisher',function(req,res){
    res.json(textbooks.getTextBookByPublisher(req.params.publisher));
});

console.log();

app.listen(3000);