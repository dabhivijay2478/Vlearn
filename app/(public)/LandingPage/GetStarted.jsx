'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function GetStarted() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const words = `V learn is an innovative e-learning platform designed to empower software engineers with a comprehensive
    suite of tools and resources.`;
    return (
        <>
            <section className="w-full py-24 md:py-32 lg:py-40">
                <div className="container mx-auto px-6 md:px-8 lg:px-12 flex flex-col items-center text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariants}
                    >
                        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" variants={itemVariants}>
                            Elevate Your Coding Journey
                        </motion.h1>
                        <motion.span className="max-w-3xl mt-4 text-lg md:text-xl" variants={itemVariants}>
                            <TextGenerateEffect words={words} />
                        </motion.span>
                        <motion.div
                            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                            variants={itemVariants}
                        >
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-purple-500"
                                href="/login"
                            >
                                Get Started
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 px-6 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                                href="/explore-features"
                            >
                                Explore Features
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
