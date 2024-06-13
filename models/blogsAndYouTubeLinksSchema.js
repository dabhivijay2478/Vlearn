const mongoose = require('mongoose');

const blogsAndYouTubeLinksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: [100, 'Title must be less than 100 characters long']
    },
    description: {
        type: String,
        required: true,
        maxlength: [500, 'Description must be less than 500 characters long']
    },
    url: {
        type: String,
        required: true,
        match: [/^(http|https):\/\/[^ "]+$/, 'Please enter a valid URL']
    },
    isBlog: {
        type: Boolean,
        default: false
    },
    isYouTube: {
        type: Boolean,
        default: false
    },
    language: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language',
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

blogsAndYouTubeLinksSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

const BlogsAndYouTubeLinks = mongoose.models.BlogsAndYouTubeLinks || mongoose.model('BlogsAndYouTubeLinks', blogsAndYouTubeLinksSchema);
module.exports = BlogsAndYouTubeLinks;
