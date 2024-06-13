const mongoose = require('mongoose');

const keyFeatureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: [100, 'Title must be less than 100 characters long']
    },
    desc: {
        type: String,
        required: true,
        maxlength: [500, 'Description must be less than 500 characters long']
    }
});

const projectSchema = new mongoose.Schema({
    languages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Languages',
        required: true
    }],
    title: {
        type: String,
        required: true,
        maxlength: [100, 'Title must be less than 100 characters long']
    },
    about: {
        type: String,
        required: true,
        maxlength: [1000, 'About must be less than 1000 characters long']
    },
    technologiesUsed: {
        type: [String],
        required: true
    },
    installationAndUsage: {
        type: String,
        required: true,
        maxlength: [2000, 'Installation and Usage must be less than 2000 characters long']
    },
    usage: {
        type: String,
        required: true,
        maxlength: [2000, 'Usage must be less than 2000 characters long']
    },
    screenshotsAndDemos: {
        type: [String], // This can be an array of URLs pointing to images or demo links
        required: true
    },
    futurePlans: {
        type: String,
        required: true,
        maxlength: [1000, 'Future Plans must be less than 1000 characters long']
    },
    keyFeatures: [keyFeatureSchema],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

projectSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
module.exports = Project;
