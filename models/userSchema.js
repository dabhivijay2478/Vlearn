const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [30, 'Username must be less than 30 characters long']
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    password: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,

    verifyToken: String,
    verifyTokenExpiry: Date,

    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password") && this.password) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    this.updatedAt = Date.now();
    next();
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = User;
