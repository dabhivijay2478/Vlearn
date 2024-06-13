const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: [2, 'Language name must be at least 2 characters long'],
        maxlength: [50, 'Language name must be less than 50 characters long']
    }
});

const Languages = mongoose.models.Languages || mongoose.model('Languages', languageSchema);
module.exports = Languages;
