import { NextResponse } from 'next/server';

import BlogsAndYouTubeLinks from "@/models/blogsAndYouTubeLinksSchema";

import Language from '@/models/languageSchema ';
import connectToDatabase from '@/Config/dbConnect'

connectToDatabase()
export async function GET(request, { params }) {

    const  languageName  = params.getLinks;

    if (!languageName) {
        return NextResponse.json({ error: 'Language name is required' }, { status: 400 });
    }

    try {
        // Fetch the language by name
        const language = await Language.findOne({ name: languageName });

        if (!language) {
            return NextResponse.json({ error: 'Language not found' }, { status: 404 });
        }

        // Fetch links associated with the language ID
        const links = await BlogsAndYouTubeLinks.find({ language: language._id });

        return NextResponse.json({ links }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
