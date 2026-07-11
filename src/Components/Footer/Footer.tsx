"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { ArrowUp, GraduationCap } from "lucide-react";
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Find Tutors", href: "/tutors" },
  { name: "Tuition Posts", href: "/tuition-posts" },
  { name: "Become Tutor", href: "/become-a-tutor" },
];

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "English",
];

const support = [
  "Help Center",
  "FAQ",
  "Privacy Policy",
  "Terms & Conditions",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">

      {/* Background Blur */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">

                <GraduationCap size={26} />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  CourseHub
                </h2>

                <p className="text-sm text-slate-500">
                  Learn Without Limits
                </p>

              </div>

            </Link>

            <p className="mt-6 leading-7 text-slate-600 dark:text-slate-400">
              CourseHub connects students with trusted tutors for online and
              home tuition across Bangladesh.
            </p>

            {/* Social */}

            <div className="mt-8 flex gap-4">

              {[

                {
                  icon: FaFacebookF,
                  href: "#",
                },

                {
                  icon: FaLinkedinIn,
                  href: "#",
                },

                {
                  icon: FaGithub,
                  href: "#",
                },

                {
                  icon: FaInstagram,
                  href: "#",
                },

              ].map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.a

                    key={index}

                    href={item.href}

                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}

                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    text-slate-700
                    transition
                    hover:bg-blue-600
                    hover:text-white
                    dark:border-slate-800
                    dark:bg-slate-900
                    dark:text-slate-300
                    "
                  >

                    <Icon size={20} />

                  </motion.a>

                );

              })}

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <div className="space-y-4">

              {quickLinks.map((link) => (

                <Link

                  key={link.name}

                  href={link.href}

                  className="block text-slate-600 transition hover:translate-x-2 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >

                  {link.name}

                </Link>

              ))}

            </div>

          </motion.div>

          {/* Subjects */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
              Popular Subjects
            </h3>

            <div className="space-y-4">

              {subjects.map((item) => (

                <p
                  key={item}
                  className="text-slate-600 dark:text-slate-400"
                >
                  {item}
                </p>

              ))}

            </div>

          </motion.div>

          {/* Support */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
              Support
            </h3>

            <div className="space-y-4">

              {support.map((item) => (

                <p
                  key={item}
                  className="text-slate-600 dark:text-slate-400"
                >
                  {item}
                </p>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 dark:border-slate-800 md:flex-row">

          <p className="text-center text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} CourseHub. All Rights Reserved.
          </p>

          <motion.button
            whileHover={{
              y: -5,
            }}
            whileTap={{
              scale: .9,
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-5
            py-3
            font-medium
            text-white
            hover:bg-blue-700
            "
          >
            Back to Top

            <ArrowUp size={18} />

          </motion.button>

        </div>

      </div>

    </footer>
  );
}