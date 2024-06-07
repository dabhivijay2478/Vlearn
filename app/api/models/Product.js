import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    dairyCode: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String },
    address: { type: String },
    contact: { type: String, required: true },
    role: { type: String, enum: ['farmer', 'manager', 'veterinarian'], required: true },
    password: { type: String, required: true },
    tokens: [{ token: { type: String, required: true } }]
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;