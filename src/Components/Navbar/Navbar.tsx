"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggole";

type NavbarProps = {
  isLoggedIn: boolean;
};

type Route = {
  name: string;
  path: string;
};

export default function Navbar({ isLoggedIn }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const guestRoutes: Route[] = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const userRoutes: Route[] = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "My Courses", path: "/my-courses" },
    { name: "Add Course", path: "/courses/add" },
    { name: "Manage Courses", path: "/courses/manage" },
  ];

  const routes = isLoggedIn ? userRoutes : guestRoutes;

  return (
    
     <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900"> 
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="CourseHub Logo"
            width={200}
            height={200}

            priority
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
              </Link>
            ))}
          </div>
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-3 lg:flex">
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
                className="rounded-lg bg-blue-600 px-5 py-2 text-white transition-all hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/profile"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white"
              >
                R
              </Link>

              <button className="rounded-lg border border-red-500 px-4 py-2 text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950">
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:hidden">
          <nav className="flex flex-col">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                onClick={() => setOpen(false)}
                className={`px-6 py-4 transition ${
                  pathname === route.path
  ? "bg-blue-50 text-blue-600 font-semibold dark:bg-slate-800 dark:text-blue-400"
  : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800"
                }`}
              >
                {route.name}
              </Link>
            ))}

            <div className="border-t">
              {!isLoggedIn ? (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 font-medium text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-slate-800"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800"
                  >
                    Profile
                  </Link>

                  <button
                    onClick={() => {
                      setOpen(false);
                      // logout logic here
                    }}
                    className="w-full px-6 py-4 text-left text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}