'use client'
import { Button } from "@/components/ui/button"
import { Player } from '@lottiefiles/react-lottie-player';
import welcomeanimation from "../../animations/lottie/welcome.json";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ResponsiveLine } from "@nivo/line"

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
                        className="w-72 h-72 md:w-96 md:h-96"
                        loop
                        autoplay
                    />
                </div>
            </section>
            <section className="container mx-auto px-4 md:px-6 flex min-h-[calc(100vh_-_theme(spacing.16))] ">
                <div className="max-w-7xl w-full mx-auto grid gap-6">
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Weekly Learning Graph</CardTitle>
                                <CardDescription>
                                    Comparison of most visited technologies and languages this week vs last week.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <LineChart className="aspect-[9/4]" />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Tech and Language Visits</CardTitle>
                                <CardDescription>Total visits and time spent on each technology and language.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 text-sm">
                                    <div className="flex items-center justify-between">
                                        <div>JavaScript</div>
                                        <div className="font-medium">
                                            <span className="text-gray-500 dark:text-gray-400 mr-1">1,234</span> visits
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>React</div>
                                        <div className="font-medium">
                                            <span className="text-gray-500 dark:text-gray-400 mr-1">987</span> visits
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>Python</div>
                                        <div className="font-medium">
                                            <span className="text-gray-500 dark:text-gray-400 mr-1">789</span> visits
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>TypeScript</div>
                                        <div className="font-medium">
                                            <span className="text-gray-500 dark:text-gray-400 mr-1">654</span> visits
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>Vue.js</div>
                                        <div className="font-medium">
                                            <span className="text-gray-500 dark:text-gray-400 mr-1">543</span> visits
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Login Tracking</CardTitle>
                                <CardDescription>Number of logins, login streaks, and average session duration.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 text-sm">
                                    <div className="flex items-center justify-between">
                                        <div>Logins</div>
                                        <div className="font-medium">
                                            <span className="text-gray-500 dark:text-gray-400 mr-1">1,234</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>Login Streak</div>
                                        <div className="font-medium">
                                            <span className="text-gray-500 dark:text-gray-400 mr-1">7</span> days
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>Avg. Session Duration</div>
                                        <div className="font-medium">
                                            <span className="text-gray-500 dark:text-gray-400 mr-1">45</span> minutes
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Suggested Resources</CardTitle>
                                <CardDescription>Personalized suggestions for blogs, cheat sheets, courses, and tutorials.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 text-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-lg w-10 h-10 bg-[#55efc4] text-2xl flex items-center justify-center">
                                            📚
                                        </div>
                                        <div className="grid gap-1">
                                            <div className="font-medium">React Cheat Sheet</div>
                                            <div className="text-gray-500 dark:text-gray-400">
                                                A comprehensive cheat sheet for React developers.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-lg w-10 h-10 bg-[#ffeaa7] text-2xl flex items-center justify-center">
                                            🎥
                                        </div>
                                        <div className="grid gap-1">
                                            <div className="font-medium">React Fundamentals Course</div>
                                            <div className="text-gray-500 dark:text-gray-400">
                                                A beginner-friendly course to master the basics of React.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-lg w-10 h-10 bg-[#fdcb6e] text-2xl flex items-center justify-center">
                                            📝
                                        </div>
                                        <div className="grid gap-1">
                                            <div className="font-medium">JavaScript Best Practices</div>
                                            <div className="text-gray-500 dark:text-gray-400">
                                                A blog post on essential JavaScript best practices.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Feedback and Suggestions</CardTitle>
                            <CardDescription>Let us know how we can improve your learning experience.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="grid gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="feedback">Feedback</Label>
                                    <Textarea id="feedback" rows={3} placeholder="Share your thoughts..." />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="suggestion">Suggestion</Label>
                                    <Textarea id="suggestion" rows={3} placeholder="What would you like to see?" />
                                </div>
                                <Button type="submit" className="justify-self-end">
                                    Submit
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    )
}

function LineChart(props) {
    return (
        <div {...props}>
            <ResponsiveLine
                data={[
                    {
                        id: "Desktop",
                        data: [
                            { x: "Jan", y: 43 },
                            { x: "Feb", y: 137 },
                            { x: "Mar", y: 61 },
                            { x: "Apr", y: 145 },
                            { x: "May", y: 26 },
                            { x: "Jun", y: 154 },
                        ],
                    },
                    {
                        id: "Mobile",
                        data: [
                            { x: "Jan", y: 60 },
                            { x: "Feb", y: 48 },
                            { x: "Mar", y: 177 },
                            { x: "Apr", y: 78 },
                            { x: "May", y: 96 },
                            { x: "Jun", y: 204 },
                        ],
                    },
                ]}
                margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                xScale={{
                    type: "point",
                }}
                yScale={{
                    type: "linear",
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 16,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickValues: 5,
                    tickPadding: 16,
                }}
                colors={["#2563eb", "#e11d48"]}
                pointSize={6}
                useMesh={true}
                gridYValues={6}
                theme={{
                    tooltip: {
                        chip: {
                            borderRadius: "9999px",
                        },
                        container: {
                            fontSize: "12px",
                            textTransform: "capitalize",
                            borderRadius: "6px",
                        },
                    },
                    grid: {
                        line: {
                            stroke: "#f3f4f6",
                        },
                    },
                }}
                role="application"
            />
        </div>
    )
}
