"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Star,
  User,
} from "lucide-react";

import { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function CourseCard({
  course,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: .25,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <Image
          src={course.image}
          alt={course.title}
          width={600}
          height={400}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">

          {course.category}

        </span>

      </div>

      {/* Body */}

      <div className="flex flex-1 flex-col p-5">

        <h2 className="line-clamp-2 text-xl font-bold text-slate-900 dark:text-white">

          {course.title}

        </h2>

        <p className="mt-3 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">

          {course.shortDescription}

        </p>

        {/* Meta */}

        <div className="mt-5 space-y-3">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <BookOpen
                size={18}
                className="text-blue-600"
              />

              <span className="text-sm">

                {course.level}

              </span>

            </div>

            <div className="flex items-center gap-2">

              <Clock3
                size={18}
                className="text-orange-500"
              />

              <span className="text-sm">

                {course.duration}

              </span>

            </div>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <User
                size={18}
                className="text-violet-600"
              />

              <span className="truncate text-sm">

                {course.instructor}

              </span>

            </div>

            <div className="flex items-center gap-1">

              <Star
                size={16}
                fill="gold"
                className="text-yellow-500"
              />

              <span>

                4.9

              </span>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-auto pt-6">

          <div className="mb-4 flex items-center justify-between">

            <span className="text-2xl font-bold text-blue-600">

              ${course.price}

            </span>

            <span className="text-sm text-slate-500">

              {course.language}

            </span>

          </div>

          <Link href={`/all-courses/${course._id}`}>

            <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">

              View Details

              <ArrowRight size={18} />

            </button>

          </Link>

        </div>

      </div>

    </motion.div>
  );
}