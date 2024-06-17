import { NextResponse } from "next/server";
import User from "@/models/userSchema";
import connectToDatabase from "@/Config/dbConnect";
export const dynamic = 'force-dynamic'
connectToDatabase();

export async function GET(request, { params }) {
    try {
        const email = params.email
        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { error: "User does not exist" },
                { status: 404 }
            );
        }

        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}