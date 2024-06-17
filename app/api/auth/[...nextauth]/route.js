
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import User from '@/models/userSchema';
import connectToDatabase from '@/Config/dbConnect';
import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";
connectToDatabase();

const authOptions = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'credentials',
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { email, password } = credentials;
            

                const user = await User.findOne({ email: email });
                if (!user) {
                    throw new Error('No user found with the provided email');
                }
                const isValid = await bcrypt.compare(password, user.password);
                if (!isValid) {
                    throw new Error('Invalid password');
                }
                return {
                    id: user._id,
                    email: user.email
                };
            }
        }),
        GitHubProvider({
            name: "GitHub",
            type: "oauth",
            authorization: {
                url: "https://github.com/login/oauth/authorize",
                params: { scope: "read:user user:email" },
            },
            
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,

        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                id: token._id,
                email: token.email
            };
            return session;
        }
    },
    secret: process.env.SECRET_KEY,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login',
        error: '/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }