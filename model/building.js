const mongoose = require('mongoose');

const BuildingSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    content: String,
    location: {
        address: String,
        geoPosition: {
            latitude: Number,
            longitude: Number
        }
    },
    architects: [String],
    creationYears: [Number],
    architecturalStyle: String
});

module.exports = mongoose.model('Building', BuildingSchema, 'buildings');
