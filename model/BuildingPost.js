const mongoose = require('mongoose');

const Post = require('./Post');

const GeoPositionSchema = mongoose.Schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
});

const LocationSchema = mongoose.Schema({
    address: {
        type: String,
        required: true,
        maxlength: 280
    },
    geoPosition: {
        type: GeoPositionSchema,
        required: true
    }
});

const BuildingPostSchema = mongoose.Schema({
    location: { type: LocationSchema, required: true },
    architects: [{ type: String, maxlength: 140 }],
    creationYears: [{ type: Number, min: 0 }],
    architecturalStyle: { type: String, maxlength: 140 }
});

module.exports = Post.discriminator('BuildingPost', BuildingPostSchema);
