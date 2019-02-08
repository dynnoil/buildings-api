const mongoose = require('mongoose');

const BuildingSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    content: String
});

module.exports = mongoose.model('Building', BuildingSchema, 'buildings');
