'use client'
import Link from "next/link"
import {
    Home,
    FolderGit2,
    Package2,
    Settings,
    Library,
    StickyNote,
    Link2,
} from "lucide-react"


import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"
import { ChatBubbleIcon, DashboardIcon, HomeIcon } from "@radix-ui/react-icons"


export default function Sidebar() {
    return (

        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 py-4">
                <Link
                    href="/dashboard"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <DashboardIcon className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Vlearn</span>
                </Link>
                <TooltipProvider>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Home className="h-5 w-5" />
                                <span className="sr-only">Dashboard</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Dashboard</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/resources"
                                className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Library className="h-5 w-5" />
                                <span className="sr-only">Learning Resources</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Learning Resources</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/projects"
                                className="flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <FolderGit2 className="h-5 w-5" />
                                <span className="sr-only">Projects</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Open Source Projects</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/cheatsheet"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <StickyNote className="h-5 w-5" />
                                <span className="sr-only">Cheat Sheets</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Cheat Sheets</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/blogsandyoutube"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Link2 className="h-5 w-5" />
                                <span className="sr-only">Blogs and YouTube Links</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Blogs and YouTube Links</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/ai-mentor"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <ChatBubbleIcon className="h-5 w-5" />
                                <span className="sr-only">AI Mentor</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">AI Mentor</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                <TooltipProvider>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/dashboard/profile"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>

    )
}
