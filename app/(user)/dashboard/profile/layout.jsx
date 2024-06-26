'use client'

import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/app/(user)/dashboard/profile/components/sidebar-nav";

// export const metadata = {
//   title: "Forms",
//   description: "Advanced form example using react-hook-form and Zod.",
// };

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/dashboard/profile/",
  },
  {
    title: "Account",
    href: "/dashboard/profile/account",
  },
  {
    title: "Appearance",
    href: "/dashboard/profile/appearance",
  },
  {
    title: "Notifications",
    href: "/dashboard/profile/notifications",
  },
  {
    title: "Display",
    href: "/dashboard/profile/display",
  },
];

export default function SettingsLayout({ children }) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16 md:block flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
