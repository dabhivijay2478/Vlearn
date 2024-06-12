'use client'

import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"

export default function Navbarcheatsheet() {
    return (
        <div className="md:hidden mb-6">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full">
                        <MenuIcon className="mr-2 h-4 w-4" />
                        Technologies & Languages
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-full">
                    <DropdownMenuItem>
                        <div className="space-y-2 mt-2">
                            <Link
                                href="#"
                                className="block text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                                prefetch={false}
                            >
                                React
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
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}



function MenuIcon(props) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}