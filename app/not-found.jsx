'use client'
import Link from "next/link"
import { Player } from '@lottiefiles/react-lottie-player';
import ErroranimationUrl from "../animations/lottie/404";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 md:px-6 py-12 md:py-24 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-md text-center space-y-4">

                <Player
                    src={ErroranimationUrl}
                    className="player"
                    loop
                    autoplay

                />
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                    Oops! Page not found.
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                    The page you're looking for doesn't exist. Let's get you back on track.
                </p>
                <Link
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/dashboard"
                >
                    Go to homepage
                </Link>
            </div>
        </div>
    )
}