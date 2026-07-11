"use client";

import { motion } from "framer-motion";
import {
  Search,
  UserCheck,
  BookOpen,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Find a Tutor",
    description:
      "Browse verified tutors by subject, class, location, or teaching experience.",
    icon: Search,
  },
  {
    id: "02",
    title: "Book Your Tutor",
    description:
      "Send a tuition request, compare profiles, and hire the tutor that fits your needs.",
    icon: UserCheck,
  },
  {
    id: "03",
    title: "Start Learning",
    description:
      "Attend online or home tuition sessions and achieve your academic goals.",
    icon: BookOpen,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold">
            How It Works
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
            Get Started in 3 Simple Steps
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Finding the perfect tutor has never been easier. Follow these
            simple steps and begin your learning journey today.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-20 grid gap-10 md:grid-cols-3">

          {/* Desktop Line */}
          <div className="hidden md:block absolute left-0 right-0 top-12 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="relative z-10 text-center"
              >

                {/* Circle */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl">

                  <Icon size={38} />

                </div>

                {/* Number */}
                <div className="mt-6 text-blue-600 dark:text-blue-400 font-bold text-lg">
                  {step.id}
                </div>

                {/* Title */}
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
                  {step.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}