/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WDIHjNba4TZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
    return (
        <div className="w-full bg-gray-100 dark:bg-gray-900">

            <main>
                <section className="container mx-auto py-12 px-4 md:py-16 md:px-6 lg:py-20">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl md:text-5xl">
                                Elevate Your Software Engineering Journey
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 md:text-xl">
                                Discover a personalized learning platform designed to empower software engineers like you. Unlock your
                                full potential with AI-driven mentorship and curated project recommendations.
                            </p>
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <Button>Sign Up</Button>
                                <Button variant="outline">Learn More</Button>
                            </div>
                        </div>
                        <Image
                            alt="Hero Image"
                            className="mx-auto rounded-lg object-cover object-center"
                            height="400"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "600/400",
                                objectFit: "cover",
                            }}
                            width="600"
                        />
                    </div>
                </section>
                <section className="container mx-auto py-12 px-4 md:py-16 md:px-6 lg:py-20">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl">
                                Personalized Learning Dashboard
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 md:text-lg">
                                Unlock your full potential with a personalized learning dashboard that adapts to your unique needs and
                                goals. Track your progress, access curated resources, and stay motivated on your software engineering
                                journey.
                            </p>
                            <div className="flex items-center gap-3">
                                <LayoutDashboardIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-900 dark:text-gray-50 font-medium">Personalized Learning Dashboard</span>
                            </div>
                        </div>
                        <Image
                            alt="Personalized Learning Dashboard"
                            className="mx-auto rounded-lg object-cover object-center"
                            height="400"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "600/400",
                                objectFit: "cover",
                            }}
                            width="600"
                        />
                    </div>
                </section>
                <section className="container mx-auto py-12 px-4 md:py-16 md:px-6 lg:py-20">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                        <Image
                            alt="AI-Powered Mentor Bot"
                            className="mx-auto rounded-lg object-cover object-center"
                            height="400"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "600/400",
                                objectFit: "cover",
                            }}
                            width="600"
                        />
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl">
                                AI-Powered Mentor Bot
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 md:text-lg">
                                Leverage the power of AI to access personalized guidance and support from an intelligent mentor bot. Get
                                answers to your questions, receive feedback on your code, and unlock new learning opportunities tailored
                                to your needs.
                            </p>
                            <div className="flex items-center gap-3">
                                <BotIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-900 dark:text-gray-50 font-medium">AI-Powered Mentor Bot</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto py-12 px-4 md:py-16 md:px-6 lg:py-20">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl">
                                Curated Project Recommendations
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 md:text-lg">
                                Discover a curated selection of projects that align with your skill level and interests. Expand your
                                portfolio, collaborate with peers, and tackle real-world challenges to accelerate your software
                                engineering growth.
                            </p>
                            <div className="flex items-center gap-3">
                                <FolderIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-900 dark:text-gray-50 font-medium">Curated Project Recommendations</span>
                            </div>
                        </div>
                        <Image
                            alt="Curated Project Recommendations"
                            className="mx-auto rounded-lg object-cover object-center"
                            height="400"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "600/400",
                                objectFit: "cover",
                            }}
                            width="600"
                        />
                    </div>
                </section>
            </main>

        </div>
    )
}

function BotIcon(props) {
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
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
        </svg>
    )
}


function FolderIcon(props) {
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
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
        </svg>
    )
}


function LayoutDashboardIcon(props) {
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
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
    )
}


function MountainIcon(props) {
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}