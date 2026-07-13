"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
      {/* Explore Button */}

      <Link
        href="/all-courses"
        className={`
        group
        inline-flex
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-gradient-to-r
        from-indigo-600
        via-blue-600
        to-violet-600
        px-8
        py-4
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-2xl
        hover:shadow-blue-500/40
        cursor-pointer
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 4.5A1.5 1.5 0 014.5 3h15A1.5 1.5 0 0121 4.5v15A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 013 19.5v-15zm3 2v12h12v-12H6zm2 2h8v2H8v-2zm0 4h5v2H8v-2z" />
        </svg>

        Explore Courses

        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* How It Works */}

      <button
        className={`
        group
        inline-flex
        cursor-pointer
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        border-slate-300
        bg-white/90
        px-8
        py-4
        font-semibold
        text-slate-800
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:text-blue-600
        hover:shadow-xl
        dark:border-slate-700
        dark:bg-slate-900/60
        dark:text-white
        dark:hover:border-blue-400
      `}
      >
        <PlayCircle
          size={24}
          className="text-indigo-600 transition-transform duration-300 group-hover:scale-110"
        />

        How It Works
      </button>
    </div>
  );
}