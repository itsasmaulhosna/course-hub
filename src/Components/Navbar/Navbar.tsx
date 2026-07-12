"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

import ThemeToggle from "./ThemeToggole";

import {
  useSession,
  signOut,
} from "@/lib/auth-client";

type Route = {
  name: string;
  path: string;
};

export default function Navbar() {
  const pathname = usePathname();

  const { data: session, isPending } = useSession();

  const [open, setOpen] = useState(false);

  const isLoggedIn = !!session?.user;

  const guestRoutes: Route[] = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    // { name: "About", path: "/about" },
    // { name: "Contact", path: "/contact" },
  ];

  const userRoutes: Route[] = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/all-courses" },
    // { name: "My Courses", path: "/my-courses" },
    // { name: "Add Course", path: "/courses/add" },
    // { name: "Manage Courses", path: "/courses/manage" },
  ];

  const routes = isLoggedIn
    ? userRoutes
    : guestRoutes;

  const handleLogout = async () => {
    await signOut();

    window.location.href = "/";
  };
  return (
  <>
    
  <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6">

        {/* Logo */}

        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="CourseHub Logo"
            width={200}
            height={200}
            priority
            className="h-auto w-44"
          />
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden flex-1 justify-center lg:flex">

          <div className="flex items-center gap-8">

            {routes.map((route) => (

              <Link
                key={route.path}
                href={route.path}
                className={`relative text-[15px] font-medium transition-all duration-200 ${
                  pathname === route.path
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                }`}
              >
                {route.name}

                {pathname === route.path && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-600 dark:bg-blue-400" />
                )}

              </Link>

            ))}

          </div>

        </nav>

        {/* Desktop Right */}

        <div className="hidden items-center gap-4 lg:flex">

          <ThemeToggle />

          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          ) : (
            <DropdownMenu.Root>

              <DropdownMenu.Trigger asChild>

                <button className="flex cursor-pointer items-center gap-2 outline-none">

                  <Image
                    src={
                      session?.user?.image ||
                      "/images/avatar.png"
                    }
                    alt={session?.user?.name || "User"}
                    width={42}
                    height={42}
                    className="rounded-full border-2 border-blue-500 object-cover"
                  />

                  <ChevronDown
                    size={18}
                    className="text-gray-500"
                  />

                </button>

              </DropdownMenu.Trigger>
                            <DropdownMenu.Content
                align="end"
                sideOffset={12}
                className="z-50 w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
              >
                {/* User Info */}

                <div className="flex items-center gap-4 border-b border-slate-200 p-5 dark:border-slate-700">

                  <Image
                    src={
                      session?.user?.image ||
                      "/images/avatar.png"
                    }
                    alt={session?.user?.name || "User"}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-blue-500 object-cover"
                  />

                  <div className="min-w-0 flex-1">

                    <h3 className="truncate text-lg font-semibold text-slate-900 dark:text-white">
                      {session?.user?.name}
                    </h3>

                    <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                      {session?.user?.email}
                    </p>

                  </div>

                </div>

                {/* Dashboard */}

                <DropdownMenu.Item asChild>

                  <Link
                    href="/dashboard"
                    className="flex cursor-pointer items-center gap-3 px-5 py-4 text-slate-700 outline-none transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <LayoutDashboard size={20} />

                    Dashboard

                  </Link>

                </DropdownMenu.Item>

                {/* Logout */}

                <DropdownMenu.Item
                  onClick={handleLogout}
                  className="flex cursor-pointer items-center gap-3 px-5 py-4 text-red-500 outline-none transition hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <LogOut size={20} />

                  Logout
                </DropdownMenu.Item>

              </DropdownMenu.Content>

            </DropdownMenu.Root>
          )}

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="ml-auto lg:hidden"
        >
          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>
            {/* Mobile Menu */}

      {open && (
        <div className="border-t border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:hidden">

          {isLoggedIn && (
            <div className="flex items-center gap-4 border-b border-slate-200 p-5 dark:border-slate-700">

              <Image
                src={session?.user?.image || "/images/avatar.png"}
                alt={session?.user?.name || "User"}
                width={55}
                height={55}
                className="rounded-full border-2 border-blue-500 object-cover"
              />

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-slate-900 dark:text-white">
                  {session?.user?.name}
                </h3>

                <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                  {session?.user?.email}
                </p>
              </div>

            </div>
          )}

          <nav className="flex flex-col">

            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                onClick={() => setOpen(false)}
                className={`px-6 py-4 transition ${
                  pathname === route.path
                    ? "bg-blue-50 font-semibold text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800"
                }`}
              >
                {route.name}
              </Link>
            ))}

            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-6 py-4 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800"
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 px-6 py-4 text-left text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 font-medium text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-slate-800"
                >
                  Register
                </Link>
              </>
            )}

          </nav>
        </div>
      )}

    </header>
  </>
);
}