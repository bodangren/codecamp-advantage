"use client";

import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function SidebarUserNav() {
  const { setTheme, resolvedTheme } = useTheme();
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn || !user) {
    return null;
  }
  const primaryEmail = user.emailAddresses[0]?.emailAddress ?? "";

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center justify-between gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                className="h-10 bg-background data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                data-testid="user-nav-button"
              >
                <Image
                  alt={primaryEmail || "User Avatar"}
                  className="rounded-full"
                  height={24}
                  src={user.imageUrl ?? `https://avatar.vercel.sh/${primaryEmail}`}
                  width={24}
                />
                <span className="truncate" data-testid="user-email">
                  {primaryEmail}
                </span>
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-popper-anchor-width)"
            data-testid="user-nav-menu"
            side="top"
          >
            <DropdownMenuItem
              className="cursor-pointer"
              data-testid="user-nav-item-theme"
              onSelect={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {`Toggle ${resolvedTheme === "light" ? "dark" : "light"} mode`}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild data-testid="user-nav-item-auth">
              <SignOutButton redirectUrl="/sign-in">
                <button className="w-full cursor-pointer" type="button">
                  Sign out
                </button>
              </SignOutButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <UserButton afterSignOutUrl="/sign-in" />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
