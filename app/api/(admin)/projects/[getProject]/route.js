import { NextResponse } from 'next/server';
import Project from '@/models/projectSchema';
import Language from '@/models/languageSchema ';

import connectToDatabase from '@/Config/dbConnect'

connectToDatabase()

export async function GET(request, { params }) {


    const  language  = params.getProject;

    try {
        // Find the language document by name
        const languageDoc = await Language.findOne({ name: language });

        if (!languageDoc) {
            return NextResponse.json({ error: 'Language not found' }, { status: 404 });
        }

        // Find projects that reference the language ID
        const projects = await Project.find({ languages: languageDoc._id }).populate('languages');

        return NextResponse.json({ projects }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

