'use client'
import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Player } from '@lottiefiles/react-lottie-player';
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconLogin,
} from "@tabler/icons-react";
import animationURL from "@/animations/lottie/login2.json";
import BottomGradient from "@/components/HoverEffects/BottomGradient"

import { getData } from "@/Services/users"


export default function Loginfrom() {


    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const handleLogin = async () => {
        
        const orderData = await getData()

        console.log(orderData.data);

    }


    return (
        <div className="w-full lg:grid lg:min-h-[700px] lg:grid-cols-2 xl:min-h-[700px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Vlearn123@Vlearn.com"
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>

                            </div>
                            <Input
                                id="password"
                                type="password"
                                required placeholder="Enter The Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <Link
                            href="/forgot-password"
                            className="ml-auto inline-block text-sm underline"
                        >
                            Forgot your password?
                        </Link>
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/dashboard"
                            >
                                <Button
                                    className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                    type="submit"

                                >
                                    <IconLogin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                        login
                                    </span>
                                    <BottomGradient />
                                </Button>
                            </Link>
                            <Button
                                className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit"
                                onClick={handleLogin}
                            >
                                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    GitHub
                                </span>
                                <BottomGradient />
                            </Button>
                            <Button
                                className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="submit"
                            >
                                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Google
                                </span>
                                <BottomGradient />
                            </Button>

                        </div>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden  lg:block">

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
