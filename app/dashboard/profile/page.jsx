'use client'
import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "@/app/dashboard/profile/profile-form"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  )
}































































//old code




// import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Badge } from "@/components/ui/badge"

// export default function Profile() {
//     return (
//         <div className="flex flex-col min-h-screen ">
   
//             <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
//                 <div className="grid md:grid-cols-[280px_1fr] gap-8">
//                     <div className="bg-white dark:bg-gray-900 rounded-lg shadow">
//                         <nav className="space-y-1 p-4">
//                             <Link
//                                 className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
//                                 href="#"
//                             >
//                                 <UserIcon className="h-5 w-5" />
//                                 Personal Information
//                             </Link>
//                             <Link
//                                 className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
//                                 href="#"
//                             >
//                                 <GaugeIcon className="h-5 w-5" />
//                                 Preferences
//                             </Link>
//                             <Link
//                                 className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
//                                 href="#"
//                             >
//                                 <ActivityIcon className="h-5 w-5" />
//                                 Activity
//                             </Link>
//                             <Link
//                                 className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
//                                 href="#"
//                             >
//                                 <TrophyIcon className="h-5 w-5" />
//                                 Progress & Achievements
//                             </Link>
//                             <Link
//                                 className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
//                                 href="#"
//                             >
//                                 <UsersIcon className="h-5 w-5" />
//                                 Connections
//                             </Link>
//                             <Link
//                                 className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
//                                 href="#"
//                             >
//                                 <LockIcon className="h-5 w-5" />
//                                 Privacy
//                             </Link>
//                         </nav>
//                     </div>
//                     <div className="grid gap-8">
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>Personal Information</CardTitle>
//                                 <CardDescription>Update your basic profile details.</CardDescription>
//                             </CardHeader>
//                             <CardContent className="grid gap-6">
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div className="grid gap-2">
//                                         <Label htmlFor="name">Name</Label>
//                                         <Input defaultValue="Jared Palmer" id="name" />
//                                     </div>
//                                     <div className="grid gap-2">
//                                         <Label htmlFor="email">Email</Label>
//                                         <Input defaultValue="jared@example.com" id="email" type="email" />
//                                     </div>
//                                 </div>
//                                 <div className="grid gap-2">
//                                     <Label htmlFor="bio">Bio</Label>
//                                     <Textarea
//                                         defaultValue="I'm a frontend developer and open-source enthusiast. I love building beautiful and accessible user interfaces."
//                                         id="bio"
//                                         placeholder="Tell us a bit about yourself..."
//                                     />
//                                 </div>
//                                 <div className="flex justify-end">
//                                     <Button>Save Changes</Button>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>Preferences</CardTitle>
//                                 <CardDescription>Customize your account preferences.</CardDescription>
//                             </CardHeader>
//                             <CardContent className="grid gap-6">
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div className="grid gap-2">
//                                         <Label htmlFor="language">Language</Label>
//                                         <Select defaultValue="en">
//                                             <SelectTrigger id="language">
//                                                 <SelectValue placeholder="Select language" />
//                                             </SelectTrigger>
//                                             <SelectContent>
//                                                 <SelectItem value="en">English</SelectItem>
//                                                 <SelectItem value="es">Español</SelectItem>
//                                                 <SelectItem value="fr">Français</SelectItem>
//                                                 <SelectItem value="de">Deutsch</SelectItem>
//                                             </SelectContent>
//                                         </Select>
//                                     </div>
//                                     <div className="grid gap-2">
//                                         <Label htmlFor="theme">Theme</Label>
//                                         <Select defaultValue="light">
//                                             <SelectTrigger id="theme">
//                                                 <SelectValue placeholder="Select theme" />
//                                             </SelectTrigger>
//                                             <SelectContent>
//                                                 <SelectItem value="light">Light</SelectItem>
//                                                 <SelectItem value="dark">Dark</SelectItem>
//                                                 <SelectItem value="system">System</SelectItem>
//                                             </SelectContent>
//                                         </Select>
//                                     </div>
//                                 </div>
//                                 <div className="grid gap-2">
//                                     <Label htmlFor="notifications">Notifications</Label>
//                                     <Checkbox defaultChecked id="notifications">
//                                         Receive email notifications
//                                     </Checkbox>
//                                 </div>
//                                 <div className="flex justify-end">
//                                     <Button>Save Preferences</Button>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>Activity</CardTitle>
//                                 <CardDescription>View your recent activity on the platform.</CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="grid gap-4">
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <Avatar>
//                                                 <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
//                                                 <AvatarFallback>JP</AvatarFallback>
//                                             </Avatar>
//                                             <div className="grid gap-1">
//                                                 <div className="font-medium">Jared Palmer</div>
//                                                 <div className="text-sm text-gray-500 dark:text-gray-400">Joined 2 months ago</div>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <Badge variant="secondary">Contributor</Badge>
//                                             <Badge variant="secondary">Moderator</Badge>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <Avatar>
//                                                 <AvatarImage alt="@olivia" src="/placeholder-avatar.jpg" />
//                                                 <AvatarFallback>OD</AvatarFallback>
//                                             </Avatar>
//                                             <div className="grid gap-1">
//                                                 <div className="font-medium">Olivia Davis</div>
//                                                 <div className="text-sm text-gray-500 dark:text-gray-400">Joined 1 year ago</div>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <Badge variant="secondary">Contributor</Badge>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <Avatar>
//                                                 <AvatarImage alt="@alex" src="/placeholder-avatar.jpg" />
//                                                 <AvatarFallback>AS</AvatarFallback>
//                                             </Avatar>
//                                             <div className="grid gap-1">
//                                                 <div className="font-medium">Alex Smith</div>
//                                                 <div className="text-sm text-gray-500 dark:text-gray-400">Joined 6 months ago</div>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <Badge variant="secondary">Contributor</Badge>
//                                             <Badge variant="secondary">Moderator</Badge>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>Progress & Achievements</CardTitle>
//                                 <CardDescription>View your progress and achievements on the platform.</CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="grid gap-4">
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800">
//                                                 <TrophyIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
//                                             </div>
//                                             <div className="grid gap-1">
//                                                 <div className="font-medium">Contributor of the Month</div>
//                                                 <div className="text-sm text-gray-500 dark:text-gray-400">
//                                                     Awarded for outstanding contributions
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="text-sm font-medium text-blue-600 dark:text-blue-400">View Details</div>
//                                     </div>
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800">
//                                                 <StarIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
//                                             </div>
//                                             <div className="grid gap-1">
//                                                 <div className="font-medium">Top Rated Contributor</div>
//                                                 <div className="text-sm text-gray-500 dark:text-gray-400">
//                                                     Awarded for high-quality contributions
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="text-sm font-medium text-blue-600 dark:text-blue-400">View Details</div>
//                                     </div>
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 dark:bg-gray-800">
//                                                 <SparklesIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
//                                             </div>
//                                             <div className="grid gap-1">
//                                                 <div className="font-medium">Community Champion</div>
//                                                 <div className="text-sm text-gray-500 dark:text-gray-400">
//                                                     Awarded for exceptional community engagement
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="text-sm font-medium text-blue-600 dark:text-blue-400">View Details</div>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>Connections</CardTitle>
//                                 <CardDescription>Connect with other users and build your network.</CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <div className="grid gap-4">
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <Avatar>
//                                                 <AvatarImage alt="@olivia" src="/placeholder-avatar.jpg" />
//                                                 <AvatarFallback>OD</AvatarFallback>
//                                             </Avatar>
//                                             <div className="grid gap-1">
//                                                 <div className="font-medium">Olivia Davis</div>
//                                                 <div className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</div>
//                                             </div>
//                                         </div>
//                                         <Button size="sm" variant="outline">
//                                             Connect
//                                         </Button>
//                                     </div>
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <Avatar>
//                                                 <AvatarImage alt="@alex" src="/placeholder-avatar.jpg" />
//                                                 <AvatarFallback>AS</AvatarFallback>
//                                             </Avatar>
//                                             <div className="grid gap-1">
//                                                 <div className="font-medium">Alex Smith</div>
//                                                 <div className="text-sm text-gray-500 dark:text-gray-400">Backend Developer</div>
//                                             </div>
//                                         </div>
//                                         <Button size="sm" variant="outline">
//                                             Connect
//                                         </Button>
//                                     </div>
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <Avatar>
//                                                 <AvatarImage alt="@emma" src="/placeholder-avatar.jpg" />
//                                                 <AvatarFallback>EM</AvatarFallback>
//                                             </Avatar>
//                                             <div className="grid gap-1">
//                                                 <div className="font-medium">Emma Johnson</div>
//                                                 <div className="text-sm text-gray-500 dark:text-gray-400">Product Manager</div>
//                                             </div>
//                                         </div>
//                                         <Button size="sm" variant="outline">
//                                             Connect
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>Privacy</CardTitle>
//                                 <CardDescription>
//                                     Manage your privacy settings and control who can see your information.
//                                 </CardDescription>
//                             </CardHeader>
//                             <CardContent className="grid gap-6">
//                                 <div className="grid gap-2">
//                                     <Label htmlFor="profile-visibility">Profile Visibility</Label>
//                                     <Select defaultValue="public">
//                                         <SelectTrigger id="profile-visibility">
//                                             <SelectValue placeholder="Select visibility" />
//                                         </SelectTrigger>
//                                         <SelectContent>
//                                             <SelectItem value="public">Public</SelectItem>
//                                             <SelectItem value="private">Private</SelectItem>
//                                         </SelectContent>
//                                     </Select>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }

// function ActivityIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
//         </svg>
//     )
// }


// function GaugeIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="m12 14 4-4" />
//             <path d="M3.34 19a10 10 0 1 1 17.32 0" />
//         </svg>
//     )
// }


// function LockIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
//             <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//         </svg>
//     )
// }


// function SparklesIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
//             <path d="M5 3v4" />
//             <path d="M19 17v4" />
//             <path d="M3 5h4" />
//             <path d="M17 19h4" />
//         </svg>
//     )
// }


// function StarIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//         </svg>
//     )
// }


// function TrophyIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
//             <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
//             <path d="M4 22h16" />
//             <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
//             <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
//             <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
//         </svg>
//     )
// }


// function UserIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//             <circle cx="12" cy="7" r="4" />
//         </svg>
//     )
// }


// function UsersIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//             <circle cx="9" cy="7" r="4" />
//             <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//             <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//         </svg>
//     )
// }








