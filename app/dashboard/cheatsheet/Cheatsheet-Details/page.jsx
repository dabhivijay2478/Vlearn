'use client'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Component() {
    return (
        <ScrollArea className="h-[700px] w-auto rounded-md border p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>React Cheat Sheet</CardTitle>
                        <CardDescription>
                            A comprehensive cheat sheet for React, covering essential concepts and syntax.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                            <code>{`import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a React component.</p>
    </div>
  );
}`}</code>
                        </pre>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                            onClick={() => {
                                navigator.clipboard.writeText(`import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a React component.</p>
    </div>
  );
}`)
                                toast({
                                    title: "Code copied",
                                    description: "The React code snippet has been copied to your clipboard.",
                                    variant: "success",
                                })
                            }}
                        >
                            <CopyIcon className="h-5 w-5" />
                        </Button>
                        <Button variant="secondary" size="sm" className="flex items-center gap-2">
                            <RefreshCcwIcon className="h-4 w-4" />
                            Refine with AI
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>JavaScript Cheat Sheet</CardTitle>
                        <CardDescription>
                            A comprehensive cheat sheet for JavaScript, covering essential syntax and concepts.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                            <code>{`function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Alice');
`}</code>
                        </pre>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                            onClick={() => {
                                navigator.clipboard.writeText(`function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Alice');`)
                                toast({
                                    title: "Code copied",
                                    description: "The JavaScript code snippet has been copied to your clipboard.",
                                    variant: "success",
                                })
                            }}
                        >
                            <CopyIcon className="h-5 w-5" />
                        </Button>
                        <Button variant="secondary" size="sm" className="flex items-center gap-2">
                            <RefreshCcwIcon className="h-4 w-4" />
                            Refine with AI
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Python Cheat Sheet</CardTitle>
                        <CardDescription>
                            A comprehensive cheat sheet for Python, covering essential syntax and concepts.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                            <code>{`def square(x):
    return x * x

print(square(5))
`}</code>
                        </pre>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                            onClick={() => {
                                navigator.clipboard.writeText(`def square(x):
    return x * x

print(square(5))`)
                                toast({
                                    title: "Code copied",
                                    description: "The Python code snippet has been copied to your clipboard.",
                                    variant: "success",
                                })
                            }}
                        >
                            <CopyIcon className="h-5 w-5" />
                        </Button>
                        <Button variant="secondary" size="sm" className="flex items-center gap-2">
                            <RefreshCcwIcon className="h-4 w-4" />
                            Refine with AI
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Java Cheat Sheet</CardTitle>
                        <CardDescription>
                            A comprehensive cheat sheet for Java, covering essential syntax and concepts.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                            <code>{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`}</code>
                        </pre>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                            onClick={() => {
                                navigator.clipboard.writeText(`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`)
                                toast({
                                    title: "Code copied",
                                    description: "The Java code snippet has been copied to your clipboard.",
                                    variant: "success",
                                })
                            }}
                        >
                            <CopyIcon className="h-5 w-5" />
                        </Button>
                        <Button variant="secondary" size="sm" className="flex items-center gap-2" />
                    </CardFooter>
                </Card>
            </div>
        </ScrollArea>

    )
}

function CopyIcon(props) {
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
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
    )
}





function RefreshCcwIcon(props) {
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
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
        </svg>
    )
}