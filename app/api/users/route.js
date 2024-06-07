
import { NextResponse } from "next/server";
import User from "../models/Product";
import connectToDatabase from "@/app/lib/dbConnect";


export async function GET() {
    try {
        // Connect to the database
        const res = await connectToDatabase();
        if (!res) {

            return NextResponse.json({ message: "not Connected!" });
        }
        else {
            try {
                const farmers = await User.find({}).select('-password -tokens');
                return NextResponse.json({ data: farmers });
            } catch (error) {

                return NextResponse.json({ success: false, error: 'Something went wrong' });
            }

        }
        // If the connection is successful, return a success message
    } catch (e) {
        // If an error occurs during the connection, return an error message
        return NextResponse.json({ message: e.message }, { status: 500 });
    }
}