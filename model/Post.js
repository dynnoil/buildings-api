const mongoose = require('mongoose');

const postSchemaOptions = {
    discriminatorKey: 'kind'
};

const PostSchema = mongoose.Schema(
    {
        name: String,
        description: String,
        image: String,
        content: String,
        createdAt: Date,
        updatedAt: Date,
        publishedAt: Date,
        author: String,
        status: String
    },
    postSchemaOptions
);

module.exports = mongoose.model('Post', PostSchema, 'posts');
