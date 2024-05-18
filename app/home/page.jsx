
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Footer from "@/components/Footer"

export default function LandingPage() {
    return (
        <>
            <header className="w-full bg-gray-950 text-gray-50 py-4 px-6 md:px-8 lg:px-12 flex items-center justify-between">
                <Link className="flex items-center gap-2" href="#">
                    <CodeIcon className="w-6 h-6" />
                    <span className="text-lg font-semibold">CodeHub</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link className="hover:underline underline-offset-4" href="#pricing" >
                        Features
                    </Link>
                    <Link className="hover:underline underline-offset-4" href="#">
                        Resources
                    </Link>
                    <Link className="hover:underline underline-offset-4" href="#">
                        Pricing
                    </Link>
                    <Link className="hover:underline underline-offset-4" href="#">
                        Community
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-800 px-4 text-sm font-medium transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                        href="/login"
                    >
                        Log in
                    </Link>
                    <Link
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-950 transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                        href="/signup"
                    >
                        Sign up
                    </Link>
                </div>
            </header>
            <main>
                <section className="w-full bg-gray-950 text-gray-50 py-24 md:py-32 lg:py-40">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12 flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Elevate Your Coding Journey</h1>
                        <p className="max-w-3xl mt-4 text-lg md:text-xl">
                            CodeHub is an innovative e-learning platform designed to empower software engineers with a comprehensive
                            suite of tools and resources.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                                href="#"
                            >
                                Get Started
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 px-6 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                                href="#"
                            >
                                Explore Features
                            </Link>
                        </div>
                    </div>
                </section>
                <section
                    className="w-full bg-gray-100 dark:bg-gray-800 text-gray-950 dark:text-gray-50 py-24 md:py-32 lg:py-40"
                    id="features"
                >
                    <div className="container mx-auto px-6 md:px-8 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex flex-col items-start gap-4">
                                <CodeIcon className="w-8 h-8" />
                                <h3 className="text-2xl font-semibold">Interactive Coding Challenges</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Sharpen your skills with a vast library of interactive coding challenges, ranging from beginner to
                                    advanced levels.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <BookOpenIcon className="w-8 h-8" />
                                <h3 className="text-2xl font-semibold">Curated Learning Resources</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Explore a curated collection of tutorials, articles, and video lessons to deepen your understanding of
                                    various programming concepts.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <GithubIcon className="w-8 h-8" />
                                <h3 className="text-2xl font-semibold">GitHub Integration</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Seamlessly integrate your GitHub account to track your progress, showcase your projects, and
                                    collaborate with the community.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <ClipboardIcon className="w-8 h-8" />
                                <h3 className="text-2xl font-semibold">Comprehensive Cheat Sheets</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Access a comprehensive library of cheat sheets covering a wide range of programming languages,
                                    frameworks, and tools.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <TagsIcon className="w-8 h-8" />
                                <h3 className="text-2xl font-semibold">Coding Blogs</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Stay up-to-date with the latest industry trends and best practices through our curated selection of
                                    coding blogs.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <YoutubeIcon className="w-8 h-8" />
                                <h3 className="text-2xl font-semibold">YouTube Channels</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Explore a diverse collection of coding-related YouTube channels to enhance your learning experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-gray-950 text-gray-50 py-24 md:py-32 lg:py-40" id="resources">
                    <div className="container mx-auto px-6 md:px-8 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col items-start gap-4">
                                <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Learning Resources</h2>
                                <p className="text-gray-400">
                                    CodeHub provides a vast array of curated resources to support your coding journey, from interactive
                                    challenges to insightful blogs and YouTube channels.
                                </p>
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                                    href="#"
                                >
                                    Explore Resources
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-start gap-2">
                                    <CodeIcon className="w-6 h-6" />
                                    <h4 className="text-lg font-semibold">Coding Challenges</h4>
                                    <p className="text-gray-400 text-sm">Sharpen your skills with interactive coding challenges.</p>
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <BookOpenIcon className="w-6 h-6" />
                                    <h4 className="text-lg font-semibold">Learning Resources</h4>
                                    <p className="text-gray-400 text-sm">Explore a curated collection of tutorials and lessons.</p>
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <GithubIcon className="w-6 h-6" />
                                    <h4 className="text-lg font-semibold">GitHub Integration</h4>
                                    <p className="text-gray-400 text-sm">Seamlessly connect your GitHub account to track progress.</p>
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <ClipboardIcon className="w-6 h-6" />
                                    <h4 className="text-lg font-semibold">Cheat Sheets</h4>
                                    <p className="text-gray-400 text-sm">Access a comprehensive library of programming cheat sheets.</p>
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <TagsIcon className="w-6 h-6" />
                                    <h4 className="text-lg font-semibold">Coding Blogs</h4>
                                    <p className="text-gray-400 text-sm">Stay informed with our curated selection of coding blogs.</p>
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <YoutubeIcon className="w-6 h-6" />
                                    <h4 className="text-lg font-semibold">YouTube Channels</h4>
                                    <p className="text-gray-400 text-sm">
                                        Explore a diverse collection of coding-related YouTube channels.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="w-full bg-gray-100 dark:bg-gray-800 text-gray-950 dark:text-gray-50 py-24 md:py-32 lg:py-40"
                    id="pricing"
                >
                    <div className="container mx-auto px-6 md:px-8 lg:px-12">
                        <div className="flex flex-col items-center text-center gap-4">
                            <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
                            <p className="max-w-xl text-gray-500 dark:text-gray-400">
                                Choose the plan that best suits your needs and start your coding journey with CodeHub.
                            </p>
                        </div>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="bg-gray-950 text-gray-50">
                                <CardHeader>
                                    <CardTitle>Free</CardTitle>
                                    <CardDescription>Get started with the basics.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold">$0</span>
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
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                                        href="#"
                                    >
                                        Get Started
                                    </Link>
                                </CardFooter>
                            </Card>
                            <Card className="bg-gray-950 text-gray-50">
                                <CardHeader>
                                    <CardTitle>Pro</CardTitle>
                                    <CardDescription>Unlock advanced features.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold">$9</span>
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
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                                        href="#"
                                    >
                                        Get Started
                                    </Link>
                                </CardFooter>
                            </Card>
                            <Card className="bg-gray-950 text-gray-50">
                                <CardHeader>
                                    <CardTitle>Enterprise</CardTitle>
                                    <CardDescription>Tailored solutions for your team.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold">Contact Us</span>
                                    </div>
                                    <ul className="space-y-2 text-gray-400">
                                        <li className="flex items-center gap-2" />
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

function BookOpenIcon(props) {
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
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    )
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


function ClipboardIcon(props) {
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
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </svg>
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


function GithubIcon(props) {
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}


function TagsIcon(props) {
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
            <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
            <path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" />
            <circle cx="6.5" cy="9.5" r=".5" fill="currentColor" />
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


function YoutubeIcon(props) {
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
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>
    )
}





