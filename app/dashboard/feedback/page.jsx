
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Feedback() {
    return (
        <Card className="w-full max-w-md mx-auto mt-12">
            <CardHeader>
                <CardTitle>Give us your feedback</CardTitle>
                <CardDescription>Help us improve by sharing your thoughts and experience.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="feedback">Feedback</Label>
                    <Textarea className="min-h-[100px]" id="feedback" placeholder="Share your thoughts..." />
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-medium">Rating:</span>
                    <div className="flex items-center gap-1">
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-end">
                <Button>Submit Feedback</Button>
            </CardFooter>
        </Card>
    )
}

function StarIcon(props) {
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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}