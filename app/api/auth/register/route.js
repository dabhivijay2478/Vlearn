import connectToDatabase from '@/Config/dbConnect';
import User from '@/models/userSchema';
import { NextResponse } from 'next/server';

connectToDatabase()
export async function POST(req) {
    try {
        const { username, email, password } = await req.json();

        // Validate input
        if (!username || !email || !password) {
            return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return NextResponse.json({ error: 'User with this username or email already exists.' }, { status: 400 });
        }

        // Create new user
        const newUser = new User({ username, email, password });
        await newUser.save();

        return NextResponse.json({ message: 'User registered successfully.' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'An error occurred during registration.' }, { status: 500 });
    }
}
