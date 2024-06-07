'use client'
import Link from "next/link"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Player } from '@lottiefiles/react-lottie-player';

import animationURL from "@/animations/lottie/ThinkCoding";
import {
    IconBrandGithub,
    IconBrandGoogle,

} from "@tabler/icons-react";
import BottomGradient from "@/components/HoverEffects/BottomGradient"
import { User } from "lucide-react";
export default function SignupFrom() {
    return (
        <div className="w-full lg:grid lg:min-h-[700px] lg:grid-cols-2 xl:min-h-[700px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to Create to your account
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">UserName</Label>
                            <Input
                                id="UserNamer"
                                type="text"
                                placeholder="Vlearn123"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Vlearn123@Vlearn.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>

                            </div>
                            <Input id="password" type="password" required placeholder="Enter The Password" />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Confirm Password</Label>

                            </div>
                            <Input id="password" type="password" required placeholder="Re-Enter The Password" />

                        </div>
                        <div className="flex flex-col space-y-4">
                            <button
                                className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit"
                            >
                                <User className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Sign Up
                                </span>
                                <BottomGradient />
                            </button>
                            <button
                                className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit"
                            >
                                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    GitHub
                                </span>
                                <BottomGradient />
                            </button>
                            <button
                                className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit"
                            >
                                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Google
                                </span>
                                <BottomGradient />
                            </button>

                        </div>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        You Already have an account?{" "}
                        <Link href="/auth/login" className="underline">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden   lg:block">

                <Player
                    src={animationURL}
                    className="player"
                    loop
                    autoplay

                />
            </div>
        </div>
    )
}




