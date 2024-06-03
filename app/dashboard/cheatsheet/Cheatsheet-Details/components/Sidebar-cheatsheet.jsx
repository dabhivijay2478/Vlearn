
'use client'
import Link from 'next/link'
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
export default function Sidebarcheatsheet() {
    return (

        <div className="hidden md:block   border-gray-200 dark:border-gray-800 w-64 p-6 overflow-y-auto">
            <ScrollArea className="h-[600px] w-auto rounded-md border p-4 mt-6 ml-2">
                <nav className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Technologies</h3>
                    <div className="space-y-2">
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            Reactsadad
                        </Link>
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            Vue.js
                        </Link>
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            Angular
                        </Link>
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            Node.js
                        </Link>
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            Python
                        </Link>
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            Java
                        </Link>
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            C++
                        </Link>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">Programming Languages</h3>
                    <div className="space-y-2">
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            JavaScript
                        </Link>
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            TypeScript
                        </Link>
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            Python
                        </Link>
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            Java
                        </Link>
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            C++
                        </Link>
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            Ruby
                        </Link>
                        <Link
                            href="#"
                            className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            Swift
                        </Link>
                    </div>
                </nav>
            </ScrollArea>

        </div>
    )
}


function CodeIcon(props) {
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
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}

function AArrowUpIcon(props) {
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
            <path d="M3.5 13h6" />
            <path d="m2 16 4.5-9 4.5 9" />
            <path d="M18 16V7" />
            <path d="m14 11 4-4 4 4" />
        </svg>
    )
}
