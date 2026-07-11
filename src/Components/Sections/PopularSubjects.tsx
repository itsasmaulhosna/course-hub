"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Atom,
  BookOpen,
  Languages,
  MonitorSmartphone,
  Globe,
  Brain,
  PenTool,
} from "lucide-react";

const subjects = [
  {
    title: "Mathematics",
    description: "Master algebra, geometry, calculus and problem solving.",
    icon: Calculator,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Physics",
    description: "Understand mechanics, electricity and modern physics.",
    icon: Atom,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Chemistry",
    description: "Learn organic, inorganic and physical chemistry.",
    icon: Brain,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Biology",
    description: "Explore life science, genetics and human anatomy.",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "English",
    description: "Improve grammar, writing and spoken English.",
    icon: Languages,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "ICT",
    description: "Programming, computer fundamentals and technology.",
    icon: MonitorSmartphone,
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Bangla",
    description: "Literature, grammar and writing practice.",
    icon: BookOpen,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Higher Math",
    description: "Advanced mathematics for SSC, HSC & admission tests.",
    icon: PenTool,
    color: "from-fuchsia-500 to-violet-500",
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

export default function PopularSubjects() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            Subjects
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Explore Popular Subjects
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Choose your favorite subject and connect with experienced tutors to
            achieve your academic goals.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <motion.div
                key={subject.title}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: .25 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Gradient Blur */}
                <div
                  className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-r ${subject.color} opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-30`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${subject.color}`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {subject.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {subject.description}
                </p>

                <button className="mt-6 font-semibold text-blue-600 transition-all group-hover:translate-x-2 dark:text-blue-400">
                  Find Tutor →
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}