// src/middleware.ts

import { NextResponse } from 'next/server'
const secret = process.env.SECRET_KEY
import { getToken } from "next-auth/jwt"




export async function middleware(req) {

    const token = await getToken({ req, secret })
  
    const path = req.nextUrl.pathname

    // Define paths that are considered public (accessible without a token)
    const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail' || path === '/' || path === '/explore-features'

    // Get the token from the cookies

    // console.log(token.credentials);

    // Redirect logic based on the path and token presence
    if (isPublicPath && token) {

        // If trying to access a public path with a token, redirect to the home page
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    // If trying to access a protected path without a token, redirect to the login page
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

}

// It specifies the paths for which this middleware should be executed. 
// In this case, it's applied to '/', '/profile', '/login', and '/signup'.
export const config = {
    matcher: [
        '/dashboard/:path*',
        '/dashboard',

    ]
}