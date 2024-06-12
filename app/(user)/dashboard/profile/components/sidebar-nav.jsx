"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // Update this import according to your Select component

export function SidebarNav({ className, items }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check the initial width

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectChange = (value) => {
    router.push(value);
  };

  return (
    <nav className={cn("flex space-x-1 lg:flex-col lg:space-x-0 lg:space-y-1", className)}>
      {isMobile ? (
        <Select onValueChange={handleSelectChange} className="w-full lg:hidden">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Menu" />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.href} value={item.href}>
                {item.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        items.map((item) => (
          <Link key={item.href} href={item.href}>
            <p
              className={cn(
                buttonVariants({ variant: "ghost" }),
                pathname === item.href ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline",
                "justify-start"
              )}
            >
              {item.title}
            </p>
          </Link>
        ))
      )}
    </nav>
  );
}
