
'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import {
    Home,
    StickyNote,
    FolderGit2,
    Package2,
    PanelLeft,
    Search,
    Link2,
    Library,
} from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChatBubbleIcon, DashboardIcon, HomeIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import Logo from "../../../../public/logo.png"
export default function Navbar() {
    const pathname = usePathname();
    const generateBreadcrumbItems = () => {
        const pathSegments = pathname.split('/').filter(segment => segment !== '');
        let currentPath = ''; // Initialize currentPath
        return pathSegments.map((segment, index) => {
            currentPath += `/${segment}`; // Update currentPath with the current segment
            const isLastSegment = index === pathSegments.length - 1;
            const segmentText = isLastSegment ? segment : 'Dashboard';
            const linkPath = currentPath === '' ? '/' : currentPath; // If it's the first segment, linkPath should be '/', otherwise use currentPath
            return (
                <React.Fragment key={currentPath}>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href={linkPath}>{segmentText}</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {!isLastSegment && <BreadcrumbSeparator />}
                </React.Fragment>
            );
        });
    };


    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="/dashboard"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        >
                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                            <span className="sr-only">Vlearn</span>
                        </Link>
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <Home className="h-5 w-5" />
                            Dashboard
                        </Link>
                        <Link
                            href="/dashboard/resources"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <Library className="h-5 w-5" />
                            Learning Resources
                        </Link>
                        <Link
                            href="/dashboard/projects"
                            className="flex items-center gap-4 px-2.5 text-foreground"
                        >
                            <FolderGit2 className="h-5 w-5" />
                            Projects
                        </Link>
                        <Link
                            href="/dashboard/cheatsheet"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <StickyNote className="h-5 w-5" />
                            Cheat Sheets
                        </Link>
                        <Link
                            href="/dashboard/blogsandyoutube"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <Link2 className="h-5 w-5" />
                            Blogs and YouTube Links
                        </Link>
                        <Link
                            href="/dashboard/ai-mentor"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <ChatBubbleIcon className="h-5 w-5" />
                            <span className="sr-only">AI Mentor</span>
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>

                    {generateBreadcrumbItems()}
                </BreadcrumbList>
            </Breadcrumb>
            <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
            </div>
            <DropdownMenu>
                <ThemeToggle />
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="overflow-hidden rounded-full"
                    >
                        <Image
                            src={Logo}
                            width={36}
                            height={36}
                            alt="Avatar"
                            className="overflow-hidden rounded-full"
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link
                            href="/dashboard/profile"
                            className=" rounded-lg  transition-colors hover:text-foreground cursor-pointer"
                        >
                            Settings
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link
                            href="/dashboard/support"
                            className=" rounded-lg  transition-colors hover:text-foreground cursor-pointer"
                        >
                            Support
                        </Link></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}
