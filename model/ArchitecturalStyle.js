const mongoose = require('mongoose');

const ArchitecturalStyleScheme = mongoose.Schema({
    name: String,
    url: String,
    description: String
});

module.exports = mongoose.model('ArchitecturalStyle', ArchitecturalStyleScheme, 'architecturalStyles');
