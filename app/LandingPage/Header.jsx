'use client'

import React from 'react'
import Image from "next/image"
import logo from "@/public/logo.png"
import Link from "next/link"

import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle'
export default function Header() {

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const linkVariants = {
        hover: { scale: 1.1 },
    };
    return (
        <>
            <motion.header
                className="w-full dark:bg-gray-950 dark:text-gray-50 py-4 px-6 md:px-8 lg:px-12 flex items-center justify-between"
                initial="hidden"
                animate="visible"
                variants={headerVariants}
            >
                <Link className="flex items-center gap-2" href="#">

                    <Image src={logo} width={30} height={25} alt="Logo" />
                    <span className="text-lg font-semibold">V learn</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <motion.div>
                        <nav className="hidden md:flex items-center gap-6">

                            <Link className="hover:underline underline-offset-4" href="#features">
                                Features
                            </Link>
                            <Link className="hover:underline underline-offset-4" href="#resources">
                                Resources
                            </Link>
                            <Link className="hover:underline underline-offset-4" href="#pricing">
                                Pricing
                            </Link>

                        </nav>
                    </motion.div>

                </nav>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <motion.div variants={linkVariants} whileHover="hover">
                        <Link
                            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-800 px-4 text-sm font-medium transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                            href="/login"
                        >
                            Log in
                        </Link>
                    </motion.div>
                    <motion.div variants={linkVariants} whileHover="hover">
                        <Link
                            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-950 transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                            href="/signup"
                        >
                            Sign up
                        </Link>
                    </motion.div>
                </div>
            </motion.header>
        </>
    )
}
