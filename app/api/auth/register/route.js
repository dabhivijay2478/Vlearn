import User from '@/models/userSchema';
import connectToDatabase from '@/Config/dbConnect';
import { NextResponse } from "next/server";

export async function POST(req) {
    await connectToDatabase();
    const { username, email, password } = await req.json();


    if (!username || !email || !password) {
        return NextResponse.json({ error: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'Email already exists' });
        }

        const user = new User({ username, email, password });
        await user.save();

        const token = await user.generateAuthToken();
        return NextResponse.json({ user, token });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' });
    }
}