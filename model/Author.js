const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    fullName: String
});

module.exports = mongoose.model('Author', AuthorSchema, 'authors');
