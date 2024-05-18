
import Link from "next/link"

export default function Footer() {
    return (
        <footer className=" p-6 md:py-12 w-full ">
            <div className="container max-w-7xl flex items-center justify-between">
                <Link className="flex items-center" href="#">
                    <MountainIcon className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>© 2024 Acme Inc. All rights reserved.</p>
                    <Link className="hover:underline underline-offset-4" href="#">
                        Privacy Policy
                    </Link>
                    <Link className="hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    )
}

function MountainIcon(props) {
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}