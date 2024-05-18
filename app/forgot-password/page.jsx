
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Forgot() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
            <div className="mx-auto w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Forgot your password?</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Enter the email address associated with your account and we'll send you a link to reset your password.
                    </p>
                </div>
                <form className="space-y-6">
                    <div>
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input id="email" placeholder="Enter your email" required type="email" />
                    </div>
                    <Button className="w-full" type="submit">
                        Reset Password
                    </Button>
                </form>
            </div>
        </div>
    )
}