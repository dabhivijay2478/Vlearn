
import Link from "next/link"

export default function Resource() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-8 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Tech Stack</h2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            We leverage the latest and greatest technologies to build powerful and scalable solutions.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <Link href="/dashboard/resources/List-Resources" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">Learn more</span>
                        </Link>
                        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-950">
                            <img src="/placeholder.svg" width={64} height={64} alt="React" className="mb-4" />
                            <h3 className="text-xl font-bold">React</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                A JavaScript library for building user interfaces.
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <Link href="/dashboard/resources/List-Resources" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">Learn more</span>
                        </Link>
                        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-950">
                            <img src="/placeholder.svg" width={64} height={64} alt="Next.js" className="mb-4" />
                            <h3 className="text-xl font-bold">Next.js</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                A React framework for building server-rendered applications.
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <Link href="/dashboard/resources/List-Resources" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">Learn more</span>
                        </Link>
                        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-950">
                            <img src="/placeholder.svg" width={64} height={64} alt="TypeScript" className="mb-4" />
                            <h3 className="text-xl font-bold">TypeScript</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                A superset of JavaScript that adds optional static typing.
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <Link href="/dashboard/resources/List-Resources" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">Learn more</span>
                        </Link>
                        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-950">
                            <img src="/placeholder.svg" width={64} height={64} alt="Tailwind CSS" className="mb-4" />
                            <h3 className="text-xl font-bold">Tailwind CSS</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                A utility-first CSS framework for rapidly building custom designs.
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <Link href="/dashboard/resources/List-Resources" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">Learn more</span>
                        </Link>
                        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-950">
                            <img src="/placeholder.svg" width={64} height={64} alt="Redis" className="mb-4" />
                            <h3 className="text-xl font-bold">Redis</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                An open-source, in-memory data structure store used as a database, cache, and message broker.
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <Link href="/dashboard/resources/List-Resources" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">Learn more</span>
                        </Link>
                        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-950">
                            <img src="/placeholder.svg" width={64} height={64} alt="Redis" className="mb-4" />
                            <h3 className="text-xl font-bold">Redis</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                An open-source, in-memory data structure store used as a database, cache, and message broker.
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <Link href="/dashboard/resources/List-Resources" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">Learn more</span>
                        </Link>
                        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-950">
                            <img src="/placeholder.svg" width={64} height={64} alt="Redis" className="mb-4" />
                            <h3 className="text-xl font-bold">Redis</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                An open-source, in-memory data structure store used as a database, cache, and message broker.
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <Link href="/dashboard/resources/List-Resources" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">Learn more</span>
                        </Link>
                        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-950">
                            <img src="/placeholder.svg" width={64} height={64} alt="Redis" className="mb-4" />
                            <h3 className="text-xl font-bold">Redis</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                An open-source, in-memory data structure store used as a database, cache, and message broker.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}