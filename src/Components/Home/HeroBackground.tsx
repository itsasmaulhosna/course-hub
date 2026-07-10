"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Top Left Dots */}

      <div className="absolute left-8 top-10 hidden md:grid grid-cols-3 gap-5 opacity-40">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            className="h-2.5 w-2.5 rounded-full bg-indigo-500 dark:bg-indigo-400"
          />
        ))}
      </div>

      {/* Left Blue Blur */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-400/20 blur-[120px]" />

      {/* Right Purple Blur */}

      <div className="absolute -right-28 top-10 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[140px]" />

      {/* Bottom Left Shape */}

      <div className="absolute -bottom-24 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-200/40 via-indigo-200/20 to-transparent blur-[80px] dark:from-blue-900/20 dark:via-indigo-900/10" />

      {/* Small Floating Circle */}

      <div className="absolute right-24 top-40 hidden h-6 w-6 rounded-full bg-indigo-500/30 blur-sm lg:block" />

      {/* Small Purple Circle */}

      <div className="absolute left-1/2 top-32 hidden h-4 w-4 rounded-full bg-violet-500/40 blur-sm lg:block" />
    </>
  );
}