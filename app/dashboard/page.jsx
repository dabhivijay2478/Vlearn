'use client'
import { Button } from "@/components/ui/button"
import { Player } from '@lottiefiles/react-lottie-player';
import welcomeanimation from "../../animations/lottie/welcome.json";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ResponsivePie } from '@nivo/pie'
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

export default function Dashboard() {
    const Welcome = `Welcome back, John!`;
    const words = `Dive into your personalized learning journey and explore new courses to expand your knowledge.`;

    return (
        <main className="flex flex-col gap-12 py-12 md:py-16 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-2 lg:gap-12 xl:gap-16 container px-4 md:px-6">
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
                <div className="flex justify-center items-center">
                    <Player
                        src={welcomeanimation}
                        className="player w-72 h-72"
                        loop
                        autoplay
                    />
                </div>
            </div>

            <div className="flex min-h-[calc(100vh - var(--theme-spacing-16))] flex-1 flex-col gap-2 container px-4 md:px-6">
                <div className="max-w-8xl w-full mx-auto grid gap-6">
                    <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Weekly Learning Graph</CardTitle>
                                <CardDescription>
                                    Comparison of most visited technologies and languages this week vs last week.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <PieChart className="aspect-square" />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Tech and Language Visits</CardTitle>
                                <CardDescription>Total visits and time spent on each technology and language.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 text-sm">
                                    {["JavaScript", "React", "Python", "TypeScript", "Vue.js"].map((tech, index) => (
                                        <div className="flex items-center justify-between" key={index}>
                                            <div>{tech}</div>
                                            <div className="font-medium">
                                                <span className="text-gray-500 dark:text-gray-400 mr-1">{index * 234 + 543}</span>
                                                visits
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-2">
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
                                            <span className="text-gray-500 dark:text-gray-400 mr-1">7</span>
                                            days
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>Avg. Session Duration</div>
                                        <div className="font-medium">
                                            <span className="text-gray-500 dark:text-gray-400 mr-1">45</span>
                                            minutes
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Suggested Resources</CardTitle>
                                <CardDescription>
                                    Personalized suggestions for blogs, cheat sheets, courses, and tutorials.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 text-sm">
                                    {[
                                        { icon: "📚", title: "React Cheat Sheet", description: "A comprehensive cheat sheet for React developers." },
                                        { icon: "🎥", title: "React Fundamentals Course", description: "A beginner-friendly course to master the basics of React." },
                                        { icon: "📝", title: "JavaScript Best Practices", description: "A blog post on essential JavaScript best practices." }
                                    ].map((resource, index) => (
                                        <div className="flex items-start gap-4" key={index}>
                                            <div className={`rounded-lg w-10 h-10 text-2xl flex items-center justify-center ${index === 0 ? 'bg-[#55efc4]' : index === 1 ? 'bg-[#ffeaa7]' : 'bg-[#fdcb6e]'}`}>
                                                {resource.icon}
                                            </div>
                                            <div className="grid gap-1">
                                                <div className="font-medium">{resource.title}</div>
                                                <div className="text-gray-500 dark:text-gray-400">{resource.description}</div>
                                            </div>
                                        </div>
                                    ))}
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
            </div>
        </main>
    );
}

const data = [
    {
        "id": "elixir",
        "label": "elixir",
        "value": 160,
        "color": "hsl(50, 70%, 50%)"
    },
    {
        "id": "stylus",
        "label": "stylus",
        "value": 524,
        "color": "hsl(10, 70%, 50%)"
    },
    {
        "id": "erlang",
        "label": "erlang",
        "value": 450,
        "color": "hsl(19, 70%, 50%)"
    },
    {
        "id": "lisp",
        "label": "lisp",
        "value": 101,
        "color": "hsl(85, 70%, 50%)"
    },
    {
        "id": "haskell",
        "label": "haskell",
        "value": 385,
        "color": "hsl(167, 70%, 50%)"
    }
];

function PieChart(props) {
    return (
        <div {...props}>
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.2]]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [['darker', 2]]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: { id: 'ruby' },
                        id: 'dots'
                    },
                    {
                        match: { id: 'c' },
                        id: 'dots'
                    },
                    {
                        match: { id: 'go' },
                        id: 'dots'
                    },
                    {
                        match: { id: 'python' },
                        id: 'dots'
                    },
                    {
                        match: { id: 'scala' },
                        id: 'lines'
                    },
                    {
                        match: { id: 'lisp' },
                        id: 'lines'
                    },
                    {
                        match: { id: 'elixir' },
                        id: 'lines'
                    },
                    {
                        match: { id: 'javascript' },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
}
