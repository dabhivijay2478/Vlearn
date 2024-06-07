import User from '@/app/api/models/user';
import connectToDatabase from '@/app/lib/dbConnect';
export const dynamic = 'force-dynamic'
export async function GET(request, { params }) {
    await connectToDatabase();

    try {
        const username = params.id


        if (!username) {
            return new Response(JSON.stringify({ error: 'Username is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const user = await User.findOne({ username: username });

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Optionally, you can exclude sensitive fields like password
        const { password, ...userDetails } = user.toObject();

        return new Response(JSON.stringify(userDetails), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}