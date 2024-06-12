

import mongoose from "mongoose";

const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }

    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            console.error("MONGODB_URI environment variable is not set");
            return false;
        }

        await mongoose.connect(uri);
        console.log("MongoDB connected");
        return true;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        return false;
    }
};

export default connectToDatabase;