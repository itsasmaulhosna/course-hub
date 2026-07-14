import Link from "next/link";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-background px-6">
      <div className="mx-auto max-w-2xl text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
          <SearchX className="h-12 w-12 text-blue-600 dark:text-blue-400" />
        </div>

        <h1 className="mt-8 text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-400">
          Sorry, the page you're looking for doesn't exist or may have been
          moved. Let's get you back to exploring courses.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <Link
            href="/all-courses"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Browse Courses
          </Link>

        </div>

      </div>
    </main>
  );
}