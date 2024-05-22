
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
      <div className="grid gap-8 md:gap-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Acme Project Planner</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            A comprehensive project management tool to streamline your team&#39;s workflow.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">About the Project</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            The Acme Project Planner is a powerful web application designed to help teams effectively manage their
            projects from start to finish. With a user-friendly interface and a wide range of features, this tool
            simplifies the project management process, enabling teams to stay organized, collaborate efficiently, and
            achieve their goals.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Key features of the Acme Project Planner include task management, team collaboration, resource allocation,
            progress tracking, and comprehensive reporting. Users can create and assign tasks, set deadlines, and
            monitor the status of their projects in real-time. The application also provides a centralized platform for
            team members to communicate, share files, and stay up-to-date on project developments.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold">Task Management</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Create, assign, and track tasks with ease. Set due dates, priorities, and status updates to keep your
                team on track.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold">Team Collaboration</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Facilitate seamless communication and collaboration among team members. Share files, comment on tasks,
                and stay in sync.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold">Resource Management</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Allocate and manage resources effectively. Track team availability, workloads, and utilization to
                optimize productivity.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold">Reporting and Analytics</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Generate comprehensive reports and analytics to gain valuable insights into your project&#39;s progress and
                performance.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
              <Image
                alt="React"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width={40}
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
              <Image
                alt="Next.js"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width={40}
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
              <Image
                alt="Tailwind CSS"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width={40}
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
              <Image
                alt="MongoDB"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width={40}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Installation and Usage</h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-semibold">Installation</h3>
            <ol className="list-decimal list-inside text-gray-500 dark:text-gray-400 mt-2">
              <li>
                Clone the repository: <code>git clone https://github.com/acme/project-planner.git</code>
              </li>
              <li>
                Install dependencies: <code>npm install</code>
              </li>
              <li>
                Set up environment variables: <code>cp .env.example .env</code>
              </li>
              <li>
                Start the development server: <code>npm run dev</code>
              </li>
            </ol>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-semibold">Usage</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              After installation, you can access the Acme Project Planner by navigating to
              <code>http://localhost:3000</code>
              in your web browser. The application provides a user-friendly interface to manage your projects, tasks,
              and team collaboration.{"\n                    "}
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Screenshots and Demos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Image
              alt="Screenshot 1"
              className="rounded-lg object-cover"
              height={450}
              src="/placeholder.svg"
              style={{
                aspectRatio: "800/450",
                objectFit: "cover",
              }}
              width={800}
            />
            <Image
              alt="Screenshot 2"
              className="rounded-lg object-cover"
              height={450}
              src="/placeholder.svg"
              style={{
                aspectRatio: "800/450",
                objectFit: "cover",
              }}
              width={800}
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Contributors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <Avatar>
                <AvatarImage alt="John Doe" src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="mt-2 text-center">
                <div className="font-semibold">John Doe</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Lead Developer</div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <Avatar>
                <AvatarImage alt="Jane Smith" src="/placeholder-user.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="mt-2 text-center">
                <div className="font-semibold">Jane Smith</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">UI/UX Designer</div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <Avatar>
                <AvatarImage alt="Michael Johnson" src="/placeholder-user.jpg" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div className="mt-2 text-center">
                <div className="font-semibold">Michael Johnson</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Backend Engineer</div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <Avatar>
                <AvatarImage alt="Emily Davis" src="/placeholder-user.jpg" />
                <AvatarFallback>ED</AvatarFallback>
              </Avatar>
              <div className="mt-2 text-center">
                <div className="font-semibold">Emily Davis</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">QA Engineer</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Feedback and Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold">Provide Feedback</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                We value your feedback! Please share your thoughts, suggestions, or any issues you&#39;ve encountered while
                using the Acme Project Planner.
              </p>
              <Button className="mt-4">Submit Feedback</Button>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold">Additional Resources</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Explore our comprehensive documentation, tutorials, and community resources to learn more about the Acme
                Project Planner and get the most out of its features.
              </p>
              <div className="mt-4 flex flex-col md:flex-row gap-2">
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Documentation
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Community Forum
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Future Plans</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            The Acme Project Planner is constantly evolving to meet the needs of our users. In the future, we plan to
            introduce new features and enhancements, such as:
          </p>
          <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mt-4">
            <li>Advanced analytics and reporting capabilities</li>
            <li>Integrations with popular productivity and communication tools</li>
            <li>Improved mobile responsiveness and dedicated mobile apps</li>
            <li>Expanded team collaboration features, including real-time updates and notifications</li>
            <li>Customizable project templates and workflow automation</li>
          </ul>
          <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            We are committed to continuously improving the Acme Project Planner to provide the best possible experience
            for our users. Stay tuned for updates and new releases!
          </p>
        </div>
      </div>
    </main>
  )
}