import { NextResponse } from 'next/server';
import CheatSheet from '@/models/cheatSheetSchema';
import connectToDatabase from  '@/Config/dbConnect';
import Language from '@/models/languageSchema ';
export const dynamic = 'force-dynamic'

connectToDatabase()

export async function GET(request, { params }) {

    try {
        const  languageName  = params.getSheet;
        // Find the language by name
        const language = await Language.findOne({ name: languageName });
       
        if (!language) {
            return NextResponse.json({ error: 'Language not found' }, { status: 404 });
        }

        // Find cheat sheets by language _id
        const cheatSheets = await CheatSheet.find({ language: language._id });

        return NextResponse.json({ cheatSheets }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}