const mongoose = require('mongoose');

const postSchemaOptions = {
    discriminatorKey: 'kind'
};

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 140
    },
    avatar: {
        type: String,
        match: /^([--:\\w?@%&+~#=]*\\.[a-z]{2,4}\/{0,2})((?:[?&](?:\\w+)=(?:\\w+))+|[--:\\w?@%&+~#=]+)?$/
    }
});

const PostSchema = mongoose.Schema(
    {
        name: String,
        description: String,
        image: String,
        content: String,
        createdAt: Date,
        updatedAt: Date,
        publishedAt: Date,
        author: { type: AuthorSchema, required: true },
        status: { type: mongoose.Types.ObjectId, ref: 'PostStatus' }
    },
    postSchemaOptions
);

module.exports = mongoose.model('Post', PostSchema, 'posts');
