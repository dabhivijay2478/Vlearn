import connectToDatabase from '@/Config/dbConnect';
import Languages from '@/models/languageSchema ';
import { NextResponse } from 'next/server';

connectToDatabase();


// route for add new languages in database
export async function POST(req) {

    try {
        const { name } = await req.json()
   

        // Validate the input
        if (!name || name.length < 2 || name.length > 50) {
            return NextResponse.json({ error: 'Language name must be between 2 and 50 characters long' });
        }

        // Check if the language already exists
        const existingLanguage = await Languages.findOne({ name });
        if (existingLanguage) {
            return NextResponse.json({ error: 'Language already exists' });
        }

        // Create a new language
        const newLanguage = new Languages({ name });
        await newLanguage.save();

        return NextResponse.json({ message: 'Language added successfully', language: newLanguage });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}

//route for get all languages
export async function GET(req) {


    try {
        const languages = await Languages.find({});
        return NextResponse.json({ languages });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}
