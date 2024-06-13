import { NextResponse } from 'next/server';
import CheatSheet from '@/models/cheatSheetSchema';
import connectToDatabase from  '@/Config/dbConnect';


connectToDatabase()



export async function POST(req) {

    try {
        const { cheatSheetTitle, code, description, language } = await req.json();

        // Validate the input
        if (!cheatSheetTitle || cheatSheetTitle.length > 100) {
            return NextResponse.json({ error: 'Title must be less than 100 characters long' }, { status: 400 });
        }
        if (!code) {
            return NextResponse.json({ error: 'Code is required' }, { status: 400 });
        }
        if (!description || description.length > 500) {
            return NextResponse.json({ error: 'Description must be less than 500 characters long' }, { status: 400 });
        }
        if (!language) {
            return NextResponse.json({ error: 'Language is required' }, { status: 400 });
        }

        // Create a new cheat sheet
        const newCheatSheet = new CheatSheet({ cheatSheetTitle, code, description, language });
        await newCheatSheet.save();

        return NextResponse.json({ message: 'Cheat sheet added successfully', cheatSheet: newCheatSheet }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}




