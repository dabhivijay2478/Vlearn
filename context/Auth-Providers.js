'use client'

import HoldLoading from '@/components/Loaders/Hold-Loading'
import CustomError from '@/components/ui/Error/CustomError'
import { SessionProvider } from 'next-auth/react'
import { useSession } from "next-auth/react"


export default function AuthProvider({ children }) {
    return (
        <SessionProvider>
            <Auth>
                {children}
            </Auth>
        </SessionProvider>
    )
}


function Auth({ children }) {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = useSession({ required: true })

    if (status === "loading") {
        return (
            <HoldLoading />
        );
    }
    else if (status === "authenticated") {
        return children
    }
    return <CustomError />
}