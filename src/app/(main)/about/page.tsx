import { BookOpen, GraduationCap, Target, Users, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto max-w-6xl px-6 py-16">

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm">
            <GraduationCap className="h-4 w-4 text-primary" />
            About CourseHUB
          </div>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Learn Smarter.
            <span className="text-primary"> Grow Faster.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground text-lg">
            CourseHUB is a modern learning platform built to help students,
            developers, and professionals discover quality courses, organize
            their learning journey, and achieve their goals—all in one place.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <BookOpen className="mb-4 h-10 w-10 text-primary" />

            <h3 className="text-xl font-semibold">
              Quality Learning
            </h3>

            <p className="mt-3 text-muted-foreground">
              Discover curated online courses from trusted sources covering
              programming, design, business, AI, and much more.
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <Target className="mb-4 h-10 w-10 text-primary" />

            <h3 className="text-xl font-semibold">
              Track Progress
            </h3>

            <p className="mt-3 text-muted-foreground">
              Save your favorite courses and keep track of your learning
              progress effortlessly.
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <Users className="mb-4 h-10 w-10 text-primary" />

            <h3 className="text-xl font-semibold">
              Community Focused
            </h3>

            <p className="mt-3 text-muted-foreground">
              Learn with thousands of passionate learners and continuously
              improve your skills.
            </p>
          </div>

        </div>

        <div className="mt-16 rounded-3xl border bg-card p-10">

          <div className="flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-primary" />

            <h2 className="text-2xl font-bold">
              Our Mission
            </h2>
          </div>

          <p className="mt-5 leading-8 text-muted-foreground">
            Our mission is simple—to make quality education accessible to
            everyone. We believe learning should be easy, organized, and
            inspiring. CourseHUB helps learners discover the right courses,
            stay motivated, and continuously build new skills for the future.
          </p>

        </div>

      </section>
    </main>
  );
}