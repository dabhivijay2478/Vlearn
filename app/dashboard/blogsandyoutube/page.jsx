
import { Input } from "@/components/ui/input"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import Image from 'next/image'
import Logo from "../../../public/logo.png"
export default function blogsandyoutube() {
    return (
        <div className="">
            <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Discover the Best Software Engineering Content
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                        Explore a curated collection of the top software engineering blogs and YouTube channels.
                    </p>
                    <div className="relative mt-6">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                        <Input
                            className="w-full rounded-md border border-gray-200 bg-white px-12 py-3 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:focus:border-gray-600 dark:focus:ring-gray-600"
                            placeholder="Search our help center"
                            type="search"
                        />
                    </div>
                </div>

            </div>
            <main className="container mx-auto grid grid-cols-1 gap-8 px-4 pb-12 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-1 lg:col-span-1">
                    <div className="sticky top-4 space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Categories</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <nav className="space-y-2">
                                    <Link
                                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800"
                                        href="#"
                                    >
                                        <span>Programming Languages</span>
                                        <ChevronRightIcon className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800"
                                        href="#"
                                    >
                                        <span>Web Development</span>
                                        <ChevronRightIcon className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800"
                                        href="#"
                                    >
                                        <span>Machine Learning</span>
                                        <ChevronRightIcon className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800"
                                        href="#"
                                    >
                                        <span>Career Advice</span>
                                        <ChevronRightIcon className="h-4 w-4" />
                                    </Link>
                                </nav>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-2">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                            <Link className="absolute inset-0 z-10" href="#">
                                <span className="sr-only">View blog post</span>
                            </Link>
                            <Image
                                alt="Blog post thumbnail"
                                className="h-40 w-full object-cover transition-all group-hover:scale-105"
                                height={225}
                                src={Logo}
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Mastering React Hooks: A Comprehensive Guide</h3>
                                <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                                    Dive deep into the world of React Hooks and learn how to leverage them to build powerful and efficient
                                    React applications.
                                </p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                            <Link className="absolute inset-0 z-10" href="#">
                                <span className="sr-only">View blog post</span>
                            </Link>
                            <Image
                                alt="Blog post thumbnail"
                                className="h-40 w-full object-cover transition-all group-hover:scale-105"
                                height={225}
                                src={Logo}
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Optimizing Your Python Code: Techniques and Best Practices</h3>
                                <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                                    Learn how to write efficient and performant Python code by exploring various optimization techniques
                                    and best practices.
                                </p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                            <Link className="absolute inset-0 z-10" href="#">
                                <span className="sr-only">View YouTube channel</span>
                            </Link>
                            <Image
                                alt="YouTube channel thumbnail"
                                className="h-40 w-full object-cover transition-all group-hover:scale-105"
                                height={225}
                                src={Logo}
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Traversy Media - Web Development Tutorials</h3>
                                <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                                    Comprehensive tutorials on web development, covering HTML, CSS, JavaScript, and various frameworks and
                                    libraries.
                                </p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                            <Link className="absolute inset-0 z-10" href="#">
                                <span className="sr-only">View blog post</span>
                            </Link>
                            <Image
                                alt="Blog post thumbnail"
                                className="h-40 w-full object-cover transition-all group-hover:scale-105"
                                height={225}
                                src={Logo}
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Building Scalable and Resilient Microservices with Go</h3>
                                <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                                    Explore the best practices and techniques for building high-performance, scalable, and fault-tolerant
                                    microservices using the Go programming language.
                                </p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                            <Link className="absolute inset-0 z-10" href="#">
                                <span className="sr-only">View YouTube channel</span>
                            </Link>
                            <Image
                                alt="YouTube channel thumbnail"
                                className="h-40 w-full object-cover transition-all group-hover:scale-105"
                                height={225}
                                src={Logo}
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">freeCodeCamp - Learn to Code for Free</h3>
                                <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                                    Comprehensive tutorials and projects for learning web development, data science, and more, all for
                                    free.
                                </p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                            <Link className="absolute inset-0 z-10" href="#">
                                <span className="sr-only">View blog post</span>
                            </Link>
                            <Image
                                alt="Blog post thumbnail"
                                className="h-40 w-full object-cover transition-all group-hover:scale-105"
                                height={225}
                                src={Logo}
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Mastering TypeScript: A Deep Dive into the Language</h3>
                                <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                                    Explore the power of TypeScript and learn how to leverage its features to write more robust and
                                    maintainable code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

function ChevronRightIcon(props) {
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
            <path d="m9 18 6-6-6-6" />
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