/**
 * Created by dudi on 27/04/2015.
 */

//json object
//holds books records
var books = {"textbooks" : [
    {"ISBN":"1118008189","name":"HTML and CSS: Design and Build Websites","author":"Jon Duckett","publisher":"Wiley","year":2011},
    {"ISBN":"1449355730","name":"Learning Python, 5th Edition", "author":"Mark Lutz","publisher":"O'Reilly Media","year":2013},
    {"ISBN":"0071809252","name":"Java: A Beginner's Guide", "author":"Herbert Schildt","publisher":"Mcgraw-Hill Osborne Media","year":2014},
    {"ISBN":"1783983280","name":"MEAN Web Development", "author":"Amos Haviv","publisher":"Packt Publishing","year":2014},
    {"ISBN":"0596517742","name":"JavaScript: The Good Parts", "author":"Douglas Crockford","publisher":"O'Reilly Media","year":2008}
]};


//functions that returns all of textbooks objects
exports.getAllTextBooks = function() {
    console.log('textbooks: ' + JSON.stringify(books.textbooks));
    return books.textbooks;
};

//function that relieve ISBN as parameter and returns a textbook that have that ISBN
exports.getTextBookByISBN = function(isbn) {
    var i;
    for (i = 0; i < books.textbooks.length ; i++){
        if (books.textbooks[i].ISBN === isbn) {
            console.log('found book: ' + JSON.stringify(books.textbooks[i]));
            return books.textbooks[i];
        }
    }
    console.log('no book matches the ISBN: ' + isbn);
    return {};
};

//function that relieve publisher as parameter and returns textbooks that have that publisher
exports.getTextBookByPublisher = function(publisher) {
    var i;
    var booksObj = {'books':[]};
    for (i = 0; i < books.textbooks.length ; i++){
        if (books.textbooks[i].publisher === publisher) {
            console.log('found book: ' + JSON.stringify(books.textbooks[i]));
            booksObj.books.push(books.textbooks[i]);
        }
    }
    return booksObj;
};