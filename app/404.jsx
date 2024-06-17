
import Link from "next/link"

export default function CustomError() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-950 p-6">
            <div className="max-w-md w-full space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-400">
                    <CircleAlertIcon className="h-8 w-8" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight">Oops, something went wrong!</h1>
                <p className="text-gray-500 dark:text-gray-400">
                    There was an issue with your login. Please try again in a few minutes.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                    <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                    >
                        Try Again
                    </Link>
                    <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    )
}

function CircleAlertIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    )
}