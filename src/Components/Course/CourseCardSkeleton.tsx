export default function CourseCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">

      <div className="h-56 bg-slate-200 dark:bg-slate-800" />

      <div className="space-y-4 p-5">

        <div className="h-6 rounded bg-slate-200 dark:bg-slate-800" />

        <div className="h-4 rounded bg-slate-200 dark:bg-slate-800" />

        <div className="h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-800" />

        <div className="mt-8 h-12 rounded-xl bg-slate-200 dark:bg-slate-800" />

      </div>

    </div>
  );
}