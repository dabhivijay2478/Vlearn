import { NextResponse } from 'next/server';

import BlogsAndYouTubeLinks from "@/models/blogsAndYouTubeLinksSchema";
import connectToDatabase from '@/Config/dbConnect'

connectToDatabase()
export async function POST(req) {


    try {
        const { title, description, url, isBlog, isYouTube, language } = await req.json();

        if (!title || !description || !url || !language) {
            return NextResponse.json({ error: 'All required fields must be filled' }, { status: 400 });
        }

        const newLink = new BlogsAndYouTubeLinks({
            title,
            description,
            url,
            isBlog,
            isYouTube,
            language
        });

        await newLink.save();

        return NextResponse.json({ message: 'Link added successfully', link: newLink }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
