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
    console.log('textbooks found:' + JSON.stringify(books.textbooks));
    return {"textbooks" : books.textbooks};
};

//function that relieve ISBN as parameter and returns a textbook that have that ISBN
exports.getTextBookByISBN = function(isbn) {
    var i;
    for (i = 0; i < books.textbooks.length ; i++){
        if (books.textbooks[i].ISBN === isbn) {
            console.log('textbook found with isbn' + isbn + ': ' + JSON.stringify(books.textbooks[i]));
            return {"textbooks" : [books.textbooks[i]]};
        }
    }
    console.log('textbook not found');
    return {};
};

//function that relieve publisher as parameter and returns textbooks that have that same publisher
exports.getTextBookByPublisher = function(publisher) {
    var i;
    var booksObj = {'textbooks':[]};
    for (i = 0; i < books.textbooks.length ; i++){
        if (books.textbooks[i].publisher === publisher) {
            booksObj.textbooks.push(books.textbooks[i]);
        }
    }
    console.log('textbooks found with publisher' + publisher + ': ' + JSON.stringify(booksObj.textbooks));
    return booksObj;
};