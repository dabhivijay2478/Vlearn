'use client'
import Link from "next/link"
import logo from "@/public/logo.png"
import Image from "next/image"

export default function Resources() {
    return (
        <>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Latest Blog Posts</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4 relative border border-solid border-purple-500 rounded-lg">
                        <Link href="#" className="absolute inset-0" prefetch={false}>
                            <span className="sr-only">View</span>
                        </Link>
                        <Image
                            src={logo}
                            alt="Thumbnail"
                            width={168}
                            height={94}
                            className="aspect-video rounded-lg object-cover"
                        />
                        <div className="text-sm">
                            <div className="font-medium line-clamp-2">Mastering Async/Await in JavaScript</div>
                            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">John Doe • 2 days ago</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 relative border border-solid border-purple-500 rounded-lg">
                        <Link href="#" className="absolute inset-0" prefetch={false}>
                            <span className="sr-only">View</span>
                        </Link>
                        <Image
                            src={logo}
                            alt="Thumbnail"
                            width={168}
                            height={94}
                            className="aspect-video rounded-lg object-cover"
                        />
                        <div className="text-sm">
                            <div className="font-medium line-clamp-2">Optimizing JavaScript Performance</div>
                            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Jane Smith • 1 week ago</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Featured Videos</h3>
                <div className="grid gap-4 ">
                    <div className="flex items-start gap-4 relative border border-solid border-purple-500 rounded-lg">
                        <Link href="#" className="absolute inset-0" prefetch={false}>
                            <span className="sr-only">View</span>
                        </Link>
                        <Image
                            src={logo}
                            alt="Thumbnail"
                            width={168}
                            height={94}
                            className="aspect-video rounded-lg object-cover"
                        />
                        <div className="text-sm">
                            <div className="font-medium line-clamp-2">Introduction to JavaScript Modules</div>
                            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Vercel • 3 days ago</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 relative border border-solid border-purple-500 rounded-lg">
                        <Link href="#" className="absolute inset-0" prefetch={false}>
                            <span className="sr-only">View</span>
                        </Link>
                        <Image
                            src={logo}
                            alt="Thumbnail"
                            width={168}
                            height={94}
                            className="aspect-video rounded-lg object-cover"
                        />
                        <div className="text-sm">
                            <div className="font-medium line-clamp-2">Building a Todo App with JavaScript</div>
                            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Lee Robinson • 1 week ago</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function ArrowUp10Icon(props) {
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
            <path d="m3 8 4-4 4 4" />
            <path d="M7 4v16" />
            <path d="M17 10V4h-2" />
            <path d="M15 10h4" />
            <rect x="15" y="14" width="4" height="6" ry="2" />
        </svg>
    )
}


function ArrowUpIcon(props) {
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
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
        </svg>
    )
}


function ChevronDownIcon(props) {
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
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}


function ChromeIcon(props) {
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
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
    )
}


function GoalIcon(props) {
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
            <path d="M12 13V2l8 4-8 4" />
            <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
            <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
        </svg>
    )
}


function PyramidIcon(props) {
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
            <path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
            <path d="M12 2v20" />
        </svg>
    )
}


function RedoDotIcon(props) {
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
            <circle cx="12" cy="17" r="1" />
            <path d="M21 7v6h-6" />
            <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
        </svg>
    )
}


function SearchIcon(props) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function SettingsIcon(props) {
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
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function ViewIcon(props) {
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
            <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
            <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
            <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
        </svg>
    )
}


function WrenchIcon(props) {
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
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    )
}