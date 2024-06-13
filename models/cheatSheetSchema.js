const mongoose = require('mongoose');

const cheatSheetSchema = new mongoose.Schema({
    cheatSheetTitle: {
        type: String,
        required: true,
        maxlength: [100, 'Title must be less than 100 characters long']
    },
    code: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: [500, 'Description must be less than 500 characters long']
    },
    language: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Languages',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

cheatSheetSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

const CheatSheet = mongoose.models.CheatSheet || mongoose.model('CheatSheet', cheatSheetSchema);
module.exports = CheatSheet;
