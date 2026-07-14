"use client";

import Link from "next/link";
import {
  BookOpen,
  PlusCircle,
  FolderKanban,
  ArrowRight,
} from "lucide-react";

import { useSession } from "@/lib/auth-client";
import AnalyticsChart from "@/Components/Dashboard/AnalyticsChart";

export default function DashboardPage() {
  const { data: session } = useSession();

  const cards = [
    {
      title: "Add Course",
      description: "Create a new course and publish it.",
      href: "/dashboard/add-course",
      icon: PlusCircle,
      color: "bg-blue-600",
    },
    {
      title: "My Courses",
      description: "View all your created courses.",
      href: "/dashboard/my-courses",
      icon: BookOpen,
      color: "bg-emerald-600",
    },
    {
      title: "Manage Courses",
      description: "Edit or delete your courses.",
      href: "/dashboard/manage-courses",
      icon: FolderKanban,
      color: "bg-violet-600",
    },
  ];

  return (
    <section>

      {/* Welcome */}

      <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-xl">

        <h1 className="text-3xl font-bold">
          Welcome back,
          {" "}
          {session?.user?.name || "Student"} 👋
        </h1>

        <p className="mt-3 max-w-2xl text-blue-100">
          Manage your courses, create new learning content
          and keep everything organized from one place.
        </p>

      </div>

      {/* Stats */}

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
          <h4 className="text-slate-500">
            Total Courses
          </h4>

          <h2 className="mt-3 text-4xl font-bold">
            300+
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
          <h4 className="text-slate-500">
            Published
          </h4>

          <h2 className="mt-3 text-4xl font-bold">
            150+
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
          <h4 className="text-slate-500">
            Students
          </h4>

          <h2 className="mt-3 text-4xl font-bold">
            600+
          </h2>
        </div>

      </div>

      {/* Quick Actions */}

      <div className="mt-10">

        <h2 className="mb-5 text-2xl font-bold">
          Quick Actions
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-3xl bg-white p-6 shadow transition hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900"
              >

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.color}`}
                >
                  <Icon
                    size={28}
                    className="text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {card.title}
                </h3>

                <p className="mt-3 text-slate-500">
                  {card.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-semibold text-blue-600">

                  Open

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </div>

              </Link>
            );
          })}

        </div>

      </div>

      {/* Analytics */}

<div className="mt-12">

  <AnalyticsChart />

</div>

    </section>
  );
}