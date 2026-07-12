"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  PlusCircle,
  BookOpen,
  FolderKanban,
    House,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Add Course",
    href: "/dashboard/add-course",
    icon: PlusCircle,
  },
  {
    title: "My Courses",
    href: "/dashboard/my-courses",
    icon: BookOpen,
  },
  {
    title: "Manage Courses",
    href: "/dashboard/manage-courses",
    icon: FolderKanban,
  },
];

export default function MobileSidebar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}

      <div className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-5 dark:border-slate-800 dark:bg-slate-900 lg:hidden">

        <h2 className="text-xl font-bold text-blue-600">
          Dashboard
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Menu size={24} />
        </button>

      </div>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Drawer */}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 bg-white shadow-2xl transition-all duration-300 dark:bg-slate-900 lg:hidden ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between border-b p-6 dark:border-slate-800">

          <h2 className="text-2xl font-bold text-blue-600">
            Dashboard
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={24} />
          </button>

        </div>

        <nav className="space-y-2 p-5">
<Link
    href="/"
    className="mb-4 flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
  >
    <House size={20} />
    <span className="font-medium">Back to Home</span>
  </Link>
          {menus.map((menu) => {
            const Icon = menu.icon;

            const active = pathname === menu.href;

            return (
              <Link
                key={menu.href}
                href={menu.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                <Icon size={20} />

                {menu.title}
              </Link>
            );
          })}

        </nav>

      </aside>
    </>
  );
}