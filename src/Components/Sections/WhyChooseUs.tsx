"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  Clock3,
  Users,
  MapPinned,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    title: "Verified Tutors",
    description:
      "Every tutor goes through a verification process to ensure quality and trust.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Teachers",
    description:
      "Learn from experienced tutors specialized in different academic subjects.",
    icon: GraduationCap,
  },
  {
    title: "Flexible Schedule",
    description:
      "Choose study times that fit your daily routine and learning goals.",
    icon: Clock3,
  },
  {
    title: "One-to-One Learning",
    description:
      "Get personalized attention with individual tutoring sessions.",
    icon: Users,
  },
  {
    title: "Online & Home Tuition",
    description:
      "Study from home online or hire tutors for in-person classes.",
    icon: MapPinned,
  },
  {
    title: "Trusted by Students",
    description:
      "Thousands of students successfully found the right tutors through our platform.",
    icon: BadgeCheck,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Why Students Trust CourseHub
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            We make finding the right tutor simple, reliable, and effective with
            trusted educators and flexible learning options.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.25 }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}