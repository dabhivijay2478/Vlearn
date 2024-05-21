"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useInView } from "react-intersection-observer";

export default function Hero3() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Adjust the threshold as needed
    });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div ref={ref} className="container">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="w-full py-2 px-2 md:py-10 lg:py-10"
                id="pricing"
            >
                <motion.div
                    variants={itemVariants}
                    className="container mx-auto px-6 md:px-8 lg:px-12"
                >
                    <div className="flex flex-col items-center text-center gap-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
                        <p className="max-w-xl text-gray-500 dark:text-gray-400">
                            Choose the plan that best suits your needs and start your coding
                            journey with V learn.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    className="mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-0 mr-5"
                >
                    <CardContainer className="inter-var">
                        <CardBody className="bg-slate-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <motion.div variants={itemVariants}>
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    Free
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    Get started with the basics.
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-gray-400">$0</span>
                                        <span className="text-gray-400">/month</span>
                                    </div>
                                    <ul className="space-y-2 text-gray-400">
                                        <li className="flex items-center gap-2">
                                            <CheckIcon className="w-4 h-4 text-gray-50" />
                                            Access to coding challenges
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckIcon className="w-4 h-4 text-gray-50" />
                                            Curated learning resources
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckIcon className="w-4 h-4 text-gray-50" />
                                            GitHub integration
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <XIcon className="w-4 h-4 text-gray-50" />
                                            Cheat sheets
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <XIcon className="w-4 h-4 text-gray-50" />
                                            Coding blogs and YouTube channels
                                        </li>
                                    </ul>
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-700 px-6 text-sm font-medium text-gray-950 transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                                        href="#"
                                    >
                                        <CardItem
                                            translateZ={20}
                                            as="button"
                                            className="px-4 py-2 rounded-xl dark:text-black text-white text-xs font-bold"
                                        >
                                            Get Started
                                        </CardItem>
                                    </Link>
                                </div>
                            </motion.div>
                        </CardBody>
                    </CardContainer>
                    <CardContainer className="inter-var">
                        <CardBody className="bg-slate-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <motion.div variants={itemVariants}>
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    Pro
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    Unlock advanced features.
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-gray-400">$9</span>
                                        <span className="text-gray-400">/month</span>
                                    </div>
                                    <ul className="space-y-2 text-gray-400">
                                        <li className="flex items-center gap-2">
                                            <CheckIcon className="w-4 h-4 text-gray-50" />
                                            Access to coding challenges
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckIcon className="w-4 h-4 text-gray-50" />
                                            Curated learning resources
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckIcon className="w-4 h-4 text-gray-50" />
                                            GitHub integration
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckIcon className="w-4 h-4 text-gray-50" />
                                            Cheat sheets
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckIcon className="w-4 h-4 text-gray-50" />
                                            Coding blogs and YouTube channels
                                        </li>
                                    </ul>
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-700 px-6 text-sm font-medium text-gray-950 transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                                        href="#"
                                    >
                                        <CardItem
                                            translateZ={20}
                                            as="button"
                                            className="px-4 py-2 rounded-xl dark:text-black text-white text-xs font-bold"
                                        >
                                            Get Started
                                        </CardItem>
                                    </Link>
                                </div>
                            </motion.div>
                        </CardBody>
                    </CardContainer>
                </motion.div>
            </motion.div>
        </div>
    );
}


function CheckIcon(props) {
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
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}

function XIcon(props) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
