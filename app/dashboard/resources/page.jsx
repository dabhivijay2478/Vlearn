
import Link from "next/link"

export default function Resources() {
    return (
        <main className="w-full">
            <section className="w-full py-12 md:py-24 lg:py-32 ">
                <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Learning Resources</h1>
                        <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                            Explore a curated collection of educational materials to support your software engineering journey.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 hover:border-purple-500 transition-colors">
                            <div className="p-6 space-y-4">
                                <h2 className="text-xl font-semibold">Programming Languages</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            JavaScript
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            Python
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            Java
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            C++
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            Ruby
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 hover:border-purple-500 transition-colors">
                            <div className="p-6 space-y-4">
                                <h2 className="text-xl font-semibold">Frameworks and Libraries</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            React
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            Angular
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            Vue.js
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            Node.js
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            Django
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 hover:border-purple-500 transition-colors">
                            <div className="p-6 space-y-4">
                                <h2 className="text-xl font-semibold">Tutorials and Courses</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <PlayIcon className="h-5 w-5" />
                                            Beginner&#39;s Guide to Web Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <PlayIcon className="h-5 w-5" />
                                            Data Structures and Algorithms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <PlayIcon className="h-5 w-5" />
                                            Introduction to Machine Learning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <PlayIcon className="h-5 w-5" />
                                            Full-Stack Web Development with React
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <PlayIcon className="h-5 w-5" />
                                            Mastering Git and Version Control
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 hover:border-purple-500 transition-colors">
                            <div className="p-6 space-y-4">
                                <h2 className="text-xl font-semibold">Documentation and References</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookOpenIcon className="h-5 w-5" />
                                            MDN Web Docs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookOpenIcon className="h-5 w-5" />
                                            Python Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookOpenIcon className="h-5 w-5" />
                                            React Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookOpenIcon className="h-5 w-5" />
                                            Angular Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookOpenIcon className="h-5 w-5" />
                                            Node.js Documentation
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 hover:border-purple-500 transition-colors">
                            <div className="p-6 space-y-4">
                                <h2 className="text-xl font-semibold">Books and Publications</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookIcon className="h-5 w-5" />
                                            Clean Code: A Handbook of Agile Software Craftsmanship
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookIcon className="h-5 w-5" />
                                            The Pragmatic Programmer: From Journeyman to Master
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookIcon className="h-5 w-5" />
                                            Cracking the Coding Interview: 189 Programming Questions and Solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookIcon className="h-5 w-5" />
                                            Head First Design Patterns: A Brain-Friendly Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookIcon className="h-5 w-5" />
                                            The Mythical Man-Month: Essays on Software Engineering
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 hover:border-purple-500 transition-colors">
                            <div className="p-6 space-y-4">
                                <h2 className="text-xl font-semibold">Interactive Learning</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            FreeCodeCamp
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            Codecademy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            HackerRank
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            LeetCode
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <CodeIcon className="h-5 w-5" />
                                            Exercism
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 hover:border-purple-500 transition-colors">
                            <div className="p-6 space-y-4">
                                <h2 className="text-xl font-semibold">Academic Resources</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookOpenIcon className="h-5 w-5" />
                                            MIT OpenCourseWare
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookOpenIcon className="h-5 w-5" />
                                            Coursera
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookOpenIcon className="h-5 w-5" />
                                            edX
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookOpenIcon className="h-5 w-5" />
                                            Udacity
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="flex items-center gap-2 font-medium hover:text-purple-500" href="#">
                                            <BookOpenIcon className="h-5 w-5" />
                                            Udemy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

function BookIcon(props) {
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
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
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


function PlayIcon(props) {
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
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    )
}