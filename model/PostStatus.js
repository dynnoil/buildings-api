const mongoose = require('mongoose');

const PostStatus = mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('PostStatus', PostStatus, 'postStatuses');
