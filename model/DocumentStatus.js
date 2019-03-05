const mongoose = require('mongoose');

const DocumentStatusSchema = mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('DocumentStatus', DocumentStatusSchema, 'documentStatuses');
