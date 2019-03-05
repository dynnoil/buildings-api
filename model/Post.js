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
        author: { type: mongoose.Types.ObjectId, ref: 'Author' },
        status: { type: mongoose.Types.ObjectId, ref: 'PostStatus' }
    },
    postSchemaOptions
);

module.exports = mongoose.model('Post', PostSchema, 'posts');
