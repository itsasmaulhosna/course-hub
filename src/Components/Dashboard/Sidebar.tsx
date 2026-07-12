"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PlusCircle,
  BookOpen,
  FolderKanban,
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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-72 border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:block">

      <div className="border-b border-slate-200 p-6 dark:border-slate-800">

        <h2 className="text-2xl font-bold text-blue-600">
          Dashboard
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Course Management
        </p>

      </div>

      <nav className="space-y-2 p-5">

        {menus.map((menu) => {
          const Icon = menu.icon;

          const active = pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />

              <span className="font-medium">
                {menu.title}
              </span>
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}