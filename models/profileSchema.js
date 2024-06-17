const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [50, 'Name must be less than 50 characters long']
    },
    bio: {
        type: String,
        maxlength: [500, 'Bio must be less than 500 characters long']
    },
    urls: {
        type: [String],
        validate: {
            validator: function (v) {
                return v.every(url => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(url));
            },
            message: 'Please enter valid URLs'
        }
    },
    dateOfBirth: {
        type: Date,
        validate: {
            validator: function (v) {
                return v instanceof Date && !isNaN(v);
            },
            message: 'Please enter a valid date'
        }
    },
    theme: {
        type: String,
        enum: ['light', 'dark', 'system']
    },
    githubId: {
        type: String,
        unique: true,
        sparse: true
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
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

const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);
module.exports = Profile;
