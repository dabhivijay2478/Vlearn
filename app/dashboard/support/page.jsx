/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Lb9RwLAPVkS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"

export default function Support() {
    return (
        <main className="w-full">
            <section className=" py-12 ">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Center</h1>
                            <p className="text-gray-500 dark:text-gray-400">
                                Get the help you need to make the most of our platform.
                            </p>
                        </div>
                        <div className="relative">
                            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                            <Input
                                className="w-full rounded-md border border-gray-200 bg-white px-12 py-3 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:focus:border-gray-600 dark:focus:ring-gray-600"
                                placeholder="Search our help center"
                                type="search"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Frequently Asked Questions</h2>
                            <p className="text-gray-500 dark:text-gray-400">Browse our most common questions and answers.</p>
                        </div>
                        <div className="grid gap-6">
                            <Collapsible>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-white px-6 py-4 text-left shadow-sm transition-colors hover:bg-gray-100 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:border-gray-600 dark:focus:ring-gray-600">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold">Account Management</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Questions about creating, managing, and accessing your account.
                                        </p>
                                    </div>
                                    <ChevronDownIcon className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180 dark:text-gray-400" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="space-y-4 rounded-md border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">How do I create an account?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            To create an account, visit our sign-up page and fill out the required information. You&#39;ll need to
                                            provide your name, email address, and a secure password.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">How do I reset my password?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            If you&#39;ve forgotten your password, you can reset it by clicking the &#34;Forgot Password&#34; link on the
                                            login page. Follow the instructions to reset your password.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">How do I update my profile information?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            To update your profile information, log in to your account and navigate to the &#34;Settings&#34; or
                                            &#34;Profile&#34; section. From there, you can edit your name, email, and other personal details.
                                        </p>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-white px-6 py-4 text-left shadow-sm transition-colors hover:bg-gray-100 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:border-gray-600 dark:focus:ring-gray-600">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold">Course Navigation</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Questions about accessing, navigating, and using the course content.
                                        </p>
                                    </div>
                                    <ChevronDownIcon className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180 dark:text-gray-400" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="space-y-4 rounded-md border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">How do I access the course materials?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Once you&#39;ve enrolled in a course, you can access the course materials by logging in to your
                                            account and navigating to the &#34;Courses&#34; section. From there, you can view the course curriculum,
                                            watch video lessons, and complete assignments.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">How do I track my progress in a course?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Your progress in a course is tracked automatically. You can view your progress, completed modules,
                                            and upcoming assignments by accessing the course dashboard.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">Can I download course materials for offline use?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Yes, you can download certain course materials, such as video lessons and PDF resources, for
                                            offline use. This feature is available for all enrolled courses.
                                        </p>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-white px-6 py-4 text-left shadow-sm transition-colors hover:bg-gray-100 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:border-gray-600 dark:focus:ring-gray-600">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold">Technical Issues</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Questions about troubleshooting technical problems with the platform.
                                        </p>
                                    </div>
                                    <ChevronDownIcon className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180 dark:text-gray-400" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="space-y-4 rounded-md border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">Why can&#39;t I log in to my account?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            If you&#39;re having trouble logging in, make sure you&#39;re using the correct email address and
                                            password. If you&#39;ve forgotten your password, you can reset it by clicking the &#34;Forgot Password&#34;
                                            link on the login page.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">Why can&#39;t I access a specific course?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            If you&#39;re unable to access a course, check your enrollment status and make sure you&#39;ve completed
                                            the necessary prerequisites. If the issue persists, please contact our support team for
                                            assistance.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">How do I troubleshoot video playback issues?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            If you&#39;re experiencing issues with video playback, try refreshing the page, checking your internet
                                            connection, or using a different browser or device. If the problem continues, please let us know
                                            so we can investigate further.
                                        </p>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-white px-6 py-4 text-left shadow-sm transition-colors hover:bg-gray-100 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:border-gray-600 dark:focus:ring-gray-600">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold">Billing and Payments</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Questions about subscription plans, payments, and refunds.
                                        </p>
                                    </div>
                                    <ChevronDownIcon className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180 dark:text-gray-400" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="space-y-4 rounded-md border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">What subscription plans do you offer?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            We offer a variety of subscription plans to fit your needs, including a free plan, a basic plan,
                                            and a pro plan with additional features. You can view and compare the plans on our pricing page.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">How do I upgrade or downgrade my subscription?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            To change your subscription plan, log in to your account and navigate to the &#34;Billing&#34; or
                                            &#34;Subscription&#34; section. From there, you can upgrade or downgrade your plan as needed.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">Can I get a refund if I cancel my subscription?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            We offer a 30-day money-back guarantee on all our subscription plans. If you&#39;re not satisfied with
                                            our platform, you can cancel your subscription and request a full refund within the first 30 days.
                                        </p>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible>
                                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border border-gray-200 bg-white px-6 py-4 text-left shadow-sm transition-colors hover:bg-gray-100 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:border-gray-600 dark:focus:ring-gray-600">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold">General Inquiries</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Questions about our company, policies, and other general topics.
                                        </p>
                                    </div>
                                    <ChevronDownIcon className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180 dark:text-gray-400" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="space-y-4 rounded-md border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-950">
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">What is your company&#39;s mission?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Our mission is to empower software engineers and developers with the knowledge and skills they
                                            need to succeed in their careers. We&#39;re committed to providing high-quality, accessible education
                                            that helps our learners achieve their goals.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">What is your privacy policy?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            We take the privacy and security of our users&#39; data very seriously. Our privacy policy outlines
                                            how we collect, use, and protect your personal information. You can review the full policy on our
                                            website.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-base font-semibold">Do you offer any discounts or scholarships?</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Yes, we offer various discounts and scholarship opportunities for eligible learners. You can check
                                            our pricing page or contact our support team for more information.
                                        </p>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

function ChevronDownIcon(props) {
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
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}


function SearchIcon(props) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}