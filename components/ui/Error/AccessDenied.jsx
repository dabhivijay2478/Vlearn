
import Link from "next/link"

export default function AccessDenied() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
            <div className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="space-y-2 text-center">
                    <TriangleAlertIcon className="mx-auto h-12 w-12 text-red-500" />
                    <h2 className="text-2xl font-bold tracking-tight">Access Denied</h2>
                    <p className="text-gray-500 dark:text-gray-400">You do not have permission to access this resource.</p>
                </div>
                <Link
                    href="/login"
                    className="inline-flex w-full justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                    prefetch={false}
                >
                    Go to Login
                </Link>
            </div>
        </div>
    )
}

function TriangleAlertIcon(props) {
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
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    )
}