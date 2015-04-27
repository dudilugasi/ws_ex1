/**
 * Created by dudi on 27/04/2015.
 */
var textbooks = {"textbooks" : [
    {"ISBN":"1118008189","name":"HTML and CSS: Design and Build Websites","author":"Jon Duckett","publisher":"Wiley","year":2011},
    {"ISBN":"1449355730","name":"Learning Python, 5th Edition", "author":"Mark Lutz","publisher":"O'Reilly Media","year":2013},
    {"ISBN":"0071809252","name":"Java: A Beginner's Guide", "author":"Herbert Schildt","publisher":"Mcgraw-Hill Osborne Media","year":2014},
    {"ISBN":"1783983280","name":"MEAN Web Development", "author":"Amos Haviv","publisher":"Packt Publishing","year":2014},
    {"ISBN":"0596517742","name":"JavaScript: The Good Parts", "author":"Douglas Crockford","publisher":"O'Reilly Media","year":2008}
]};

var path = "./includes/test.json";

exports.getAllTextBooks = function() {
    return textbooks;
};

exports.getTextBookByISBN = function(isbn) {
    var i;
    for (i = 0; i < textbooks.textbooks.length ; i++){
        if (textbooks.textbooks[i].ISBN === isbn) {
            return textbooks.textbooks[i];
        }
    }
    return {"error":"could not find book"};
};

exports.getTextBookByPublisher = function(publisher) {
    var i;
    var books = {'books':[]};
    for (i = 0; i < textbooks.textbooks.length ; i++){
        if (textbooks.textbooks[i].publisher === publisher) {
            books.books.push(textbooks.textbooks[i]);
        }
    }
    return books;
};