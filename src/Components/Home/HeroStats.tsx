"use client";

import { Award, BookOpen, Users } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: BookOpen,
    value: "1000+",
    title: "Courses",
    subtitle: "Learn anything",
    color: "text-indigo-600",
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  {
    id: 2,
    icon: Users,
    value: "20K+",
    title: "Students",
    subtitle: "Growing Community",
    color: "text-emerald-600",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: 3,
    icon: Award,
    value: "Certified",
    title: "Courses",
    subtitle: "Boost your career",
    color: "text-amber-500",
    bg: "bg-amber-100 dark:bg-amber-900/30",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-center gap-5"
            >
              {/* Icon */}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full ${item.bg}`}
              >
                <Icon className={item.color} size={30} />
              </div>

              {/* Text */}

              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {item.value}
                </h3>

                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.subtitle}
                </p>
              </div>

              {/* Divider */}

              {index !== stats.length - 1 && (
                <div className="ml-8 hidden h-16 w-px bg-slate-300 dark:bg-slate-700 lg:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}