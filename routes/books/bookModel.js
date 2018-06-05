var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: String,
    category: String
});

mongoose.model('BookModel', BookSchema);
var Book = mongoose.model('BookModel');
module.exports = Book;