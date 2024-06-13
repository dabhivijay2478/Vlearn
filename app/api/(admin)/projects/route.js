import { NextResponse } from 'next/server';
import Project from '@/models/projectSchema';
import Language from '@/models/languageSchema ';

import connectToDatabase from '@/Config/dbConnect'

connectToDatabase()

export async function POST(req) {


    try {
        const {
            languages,
            title,
            about,
            technologiesUsed,
            installationAndUsage,
            usage,
            screenshotsAndDemos,
            futurePlans,
            keyFeatures
        } = await req.json();

        // Validate if languages exist in the Languages collection
        const languageDocs = await Language.find({ _id: { $in: languages } });
        if (languageDocs.length !== languages.length) {
            return NextResponse.json({ error: 'Some languages not found' }, { status: 400 });
        }

        // Create a new project
        const newProject = new Project({
            languages,
            title,
            about,
            technologiesUsed,
            installationAndUsage,
            usage,
            screenshotsAndDemos,
            futurePlans,
            keyFeatures
        });

        await newProject.save();

        return NextResponse.json({ message: 'Project created successfully', project: newProject }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
