'use client'
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Player } from '@lottiefiles/react-lottie-player';
import welcomeanimation from "../../animations/lottie/welcome.json";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

export default function Dashboard() {
    const Welcome = `Welcome back, John!`;
    const words = ` Dive into your personalized learning journey and explore new courses to expand your knowledge.`;
    return (
        <main className="flex flex-col gap-12 py-12 md:py-16 lg:py-20">
            <section className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <div>
                                <TextGenerateEffect words={Welcome} className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none" />
                            </div>
                            <div>
                                <TextGenerateEffect words={words} className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <Player
                        src={welcomeanimation}
                        className="player w-72 h-72"
                        loop
                        autoplay

                    />
                </div>
            </section>
            <section className="container px-4 md:px-6">
                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Your Active Courses</h2>
                        <p className="text-gray-500 md:text-lg dark:text-gray-400">
                            Stay on top of your learning with these active courses.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <Card>
                            <CardContent className="flex flex-col items-start gap-2 mt-3">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Web Development
                                </div>
                                <h3 className="text-lg font-semibold">Introduction to React</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Learn the fundamentals of React and build your first web application.
                                </p>
                                <div className="mt-auto flex w-full items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                        <span className="text-sm text-gray-500 dark:text-gray-400">12 hrs</span>
                                    </div>
                                    <Button size="sm">Continue</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex flex-col items-start gap-2  mt-3">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Design</div>
                                <h3 className="text-lg font-semibold">Figma Essentials</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Master the fundamentals of Figma and create stunning designs.
                                </p>
                                <div className="mt-auto flex w-full items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                        <span className="text-sm text-gray-500 dark:text-gray-400">8 hrs</span>
                                    </div>
                                    <Button size="sm">Continue</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex flex-col items-start gap-2  mt-3">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Data Science
                                </div>
                                <h3 className="text-lg font-semibold">Python for Data Analysis</h3>
                                <p className="text-gray-500 dark:text-gray-400">Dive into the world of data analysis using Python.</p>
                                <div className="mt-auto flex w-full items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                        <span className="text-sm text-gray-500 dark:text-gray-400">15 hrs</span>
                                    </div>
                                    <Button size="sm">Continue</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex flex-col items-start gap-2  mt-3">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Marketing</div>
                                <h3 className="text-lg font-semibold">Social Media Marketing</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Learn how to effectively leverage social media for your business.
                                </p>
                                <div className="mt-auto flex w-full items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                        <span className="text-sm text-gray-500 dark:text-gray-400">10 hrs</span>
                                    </div>
                                    <Button size="sm">Continue</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="container px-4 md:px-6">
                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Featured Courses</h2>
                        <p className="text-gray-500 md:text-lg dark:text-gray-400">Explore our latest and most popular courses.</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <Card >
                            <Avatar className="m-2 " >
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardContent className="space-y-2 p-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Development
                                </div>
                                <h3 className="text-lg font-semibold">Mastering TypeScript: From Beginner to Expert</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Dive deep into the world of TypeScript and unlock its full potential.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                        <span className="text-sm text-gray-500 dark:text-gray-400">20 hrs</span>
                                    </div>
                                    <Button size="sm">Enroll</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <Avatar className="m-2 " >
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardContent className="space-y-2 p-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Design</div>
                                <h3 className="text-lg font-semibold">Mastering Adobe XD: From Beginner to Pro</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Unlock your design potential with this comprehensive XD course.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                        <span className="text-sm text-gray-500 dark:text-gray-400">18 hrs</span>
                                    </div>
                                    <Button size="sm">Enroll</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <Avatar className="m-2 " >
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardContent className="space-y-2 p-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Data Science
                                </div>
                                <h3 className="text-lg font-semibold">Hands-on Machine Learning with Python</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Explore the world of machine learning and build intelligent applications.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                        <span className="text-sm text-gray-500 dark:text-gray-400">25 hrs</span>
                                    </div>
                                    <Button size="sm">Enroll</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <Avatar className="m-2 " >
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardContent className="space-y-2 p-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Marketing</div>
                                <h3 className="text-lg font-semibold">Mastering Google Ads: From Beginner to Expert</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Unlock the power of Google Ads and drive growth for your business.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                        <span className="text-sm text-gray-500 dark:text-gray-400">22 hrs</span>
                                    </div>
                                    <Button size="sm">Enroll</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    )
}

function ClockIcon(props) {
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
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}