'use client'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
export default function FeedBack() {
    return (
        <div>
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
    )
}
