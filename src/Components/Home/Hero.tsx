

"use client";

import Image from "next/image";
import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[70vh] overflow-hidden">

      {/* Background Image */}

      <Image
        src="/images/banner-bg.png"
        alt="CourseHub Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-white/85 dark:bg-slate-950/80" />

      {/* Decorative Background */}

      <HeroBackground />

      {/* Container */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col-reverse items-center px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:px-10 lg:pt-12">

        {/* ========================= */}
        {/* Left Content */}
        {/* ========================= */}

        <div className="w-full text-center lg:w-[45%] lg:text-left xl:pl-15">

          {/* Badge */}

          <div className="animate-slide-left delay-100 mx-auto mb-4 lg:mx-0 inline-flex items-center rounded-full border border-blue-100 bg-white/70 px-5 py-3 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 lg:mx-0">

<span
  className="
    mr-3
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    bg-gradient-to-r
    from-blue-600
    to-indigo-600
    text-lg
    text-white
    animate-bounce
    shadow-lg
  "
>
  🎓
</span>

            <span
  className="
    font-semibold
    tracking-wide
    text-slate-700
    transition-colors
    duration-300
    group-hover:text-blue-600
    dark:text-white
  "
>
  Empower Your Future
</span>

          </div>

          {/* Heading */}

          <h1
            className={`
            animate-slide-left
            delay-300
            text-center
            text-4xl
            font-black
            leading-tight
            text-slate-900
            sm:text-5xl
            md:text-6xl
            lg:text-left
            xl:text-6xl
            
            dark:text-white
          `}
          >
            Learn New Skills

            <br />

            Anytime,

            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">

              
              Anywhere

            </span>

          </h1>

          {/* Description */}

          <p
            className={`
            animate-slide-left
            delay-500
            mt-8
            mx-auto
            max-w-xl
          
text-center
lg:mx-0
lg:text-left
            text-lg
            leading-8
            text-slate-600
            lg:text-left
            dark:text-slate-300
          `}
          >
            Explore thousands of high-quality online courses
            from industry experts. Build your skills, earn
            certificates, and achieve your career goals with
            CourseHub.
          </p>

          {/* Buttons */}

          <div className="animate-slide-left delay-700 flex justify-center lg:justify-start">
    <HeroButtons />
</div>

          {/* Stats */}

          <div className="animate-slide-left delay-[900ms] mt-10">

            <HeroStats />

          </div>

        </div>

        {/* ========================= */}
{/* Right Image */}
{/* ========================= */}

<div className="relative flex w-full lg:w-[55%] items-center justify-center lg:justify-end lg:pt-16">

  <div className="absolute bottom-10 right-20 h-[550px] w-[550px] rounded-full bg-blue-500/20 blur-[180px]" />

  <Image
    src="/images/banner.png"
    alt="CourseHub Student"
    width={2000}
    height={2000}
    priority
    className={`
      relative
      z-10
      h-auto

      w-[300px]
      sm:w-[380px]
      md:w-[500px]

      lg:w-[900px]
      xl:w-[1100px]
      2xl:w-[1300px]

      object-contain
      origin-bottom

      lg:scale-125

      lg:-translate-y-8
      lg:-translate-x-12
      lg:mt-45

      animate-float
    `}
  />
</div>
      </div>
    </section>
  );
}