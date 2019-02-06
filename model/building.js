const mongoose = require('mongoose');

const BuildingSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Building', BuildingSchema, 'buildings');
