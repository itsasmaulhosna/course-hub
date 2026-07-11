"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  MapPin,
  GraduationCap,
  Wallet,
  Clock,
  ArrowRight,
} from "lucide-react";

interface TuitionPost {
  id: number;
  subject: string;
  className: string;
  location: string;
  salary: string;
  schedule: string;
  mode: "Home" | "Online";
}

const tuitionPosts: TuitionPost[] = [
  {
    id: 1,
    subject: "Mathematics",
    className: "Class 10",
    location: "Dhanmondi, Dhaka",
    salary: "৳8,000/month",
    schedule: "3 Days/Week",
    mode: "Home",
  },
  {
    id: 2,
    subject: "Physics",
    className: "HSC 2nd Year",
    location: "Mirpur, Dhaka",
    salary: "৳10,000/month",
    schedule: "4 Days/Week",
    mode: "Home",
  },
  {
    id: 3,
    subject: "English",
    className: "Class 8",
    location: "Uttara, Dhaka",
    salary: "৳6,000/month",
    schedule: "Online",
    mode: "Online",
  },
  {
    id: 4,
    subject: "Chemistry",
    className: "Admission",
    location: "Mohammadpur",
    salary: "৳12,000/month",
    schedule: "5 Days/Week",
    mode: "Home",
  },
  {
    id: 5,
    subject: "ICT",
    className: "HSC",
    location: "Banani",
    salary: "৳9,000/month",
    schedule: "Online",
    mode: "Online",
  },
  {
    id: 6,
    subject: "Biology",
    className: "SSC",
    location: "Bashundhara",
    salary: "৳7,500/month",
    schedule: "3 Days/Week",
    mode: "Home",
  },
];

export default function LatestTuitionPosts() {
  return (
    <section className="bg-white dark:bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-4 py-1 rounded-full text-sm font-semibold">
            Latest Posts
          </span>

          <h2 className="text-4xl font-bold mt-5 text-slate-900 dark:text-white">
            Find Your Perfect Tuition
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Browse the newest tuition opportunities posted by students and
            guardians across Bangladesh.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {tuitionPosts.map((post, index) => (

            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .4,
                delay: index * .1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >

              {/* Top Badge */}
              <div className="flex justify-between items-center p-6 pb-0">

                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.mode}
                </span>

                <span className="text-xs text-slate-500">
                  New
                </span>

              </div>

              <div className="p-6">

                <div className="flex items-center gap-3">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-slate-800 flex items-center justify-center">
                    <BookOpen className="text-blue-600 dark:text-blue-400"/>
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {post.subject}
                    </h3>

                    <p className="text-slate-500 text-sm">
                      Tuition Required
                    </p>

                  </div>

                </div>

                <div className="space-y-4 mt-8">

                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <GraduationCap size={18}/>
                    <span>{post.className}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <MapPin size={18}/>
                    <span>{post.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <Wallet size={18}/>
                    <span>{post.salary}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <Clock size={18}/>
                    <span>{post.schedule}</span>
                  </div>

                </div>

                <button
                  className="
                  mt-8
                  w-full
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-3
                  font-semibold
                  transition
                  flex
                  items-center
                  justify-center
                  gap-2
                  "
                >
                  View Details
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}