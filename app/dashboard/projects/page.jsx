
import Link from "next/link"

export default function Project() {
    return (
        <div className="mt-20">
            <div className="text-center space-y-2 px-4 md:px-6">
                <h2 className="text-3xl font-bold">Our Featured Projects</h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                    Discover our latest and greatest projects that showcase our expertise and creativity.
                </p>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6 mt-10">
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 border border-solid border-purple-500">
                    <Link href="/dashboard/projects/Project-Details" className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View Project</span>
                    </Link>
                    <img src="/placeholder.svg" alt="Project 1" width={400} height={300} className="object-cover w-full h-60" />
                    <div className="bg-white p-4 dark:bg-gray-950">
                        <h3 className="font-bold text-xl">Project 1</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt, nisl
                            nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
                        </p>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 border border-solid border-purple-500">
                    <Link href="/dashboard/projects/Project-Details" className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View Project</span>
                    </Link>
                    <img src="/placeholder.svg" alt="Project 2" width={400} height={300} className="object-cover w-full h-60" />
                    <div className="bg-white p-4 dark:bg-gray-950">
                        <h3 className="font-bold text-xl">Project 2</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 border border-solid border-purple-500">
                    <Link href="/dashboard/projects/Project-Details" className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View Project</span>
                    </Link>
                    <img src="/placeholder.svg" alt="Project 3" width={400} height={300} className="object-cover w-full h-60" />
                    <div className="bg-white p-4 dark:bg-gray-950">
                        <h3 className="font-bold text-xl">Project 3</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                            Nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 border border-solid border-purple-500">
                    <Link href="/dashboard/projects/Project-Details" className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View Project</span>
                    </Link>
                    <img src="/placeholder.svg" alt="Project 4" width={400} height={300} className="object-cover w-full h-60" />
                    <div className="bg-white p-4 dark:bg-gray-950">
                        <h3 className="font-bold text-xl">Project 4</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt, nisl
                            nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
                        </p>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 border border-solid border-purple-500">
                    <Link href="/dashboard/projects/Project-Details" className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View Project</span>
                    </Link>
                    <img src="/placeholder.svg" alt="Project 5" width={400} height={300} className="object-cover w-full h-60" />
                    <div className="bg-white p-4 dark:bg-gray-950">
                        <h3 className="font-bold text-xl">Project 5</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 border border-solid border-purple-500">
                    <Link href="/dashboard/projects/Project-Details" className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View Project</span>
                    </Link>
                    <img src="/placeholder.svg" alt="Project 6" width={400} height={300} className="object-cover w-full h-60" />
                    <div className="bg-white p-4 dark:bg-gray-950">
                        <h3 className="font-bold text-xl">Project 6</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                            Nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}