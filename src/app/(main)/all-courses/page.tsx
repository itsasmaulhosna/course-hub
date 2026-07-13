"use client";

import { useEffect, useState } from "react";

import CourseCard from "@/Components/Course/CourseCard";
import CourseCardSkeleton from "@/Components/Course/CourseCardSkeleton";

import { Course } from "@/types/course";

export default function CoursesPage() {

  const [courses, setCourses] =
    useState<Course[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchCourses = async () => {

      try {

        const res =
          await fetch("/api/public/course");

        const data =
          await res.json();

        setCourses(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchCourses();

  }, []);

  return (

    <section className="mx-auto max-w-7xl px-6 py-14">

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">

          Explore Courses

        </h1>

        <p className="mt-3 text-slate-500 dark:text-slate-400">

          Learn from expert instructors and build your future.

        </p>

      </div>

      {loading ? (

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {Array.from({
            length: 8,
          }).map((_, index) => (

            <CourseCardSkeleton
              key={index}
            />

          ))}

        </div>

      ) : (

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {courses.map((course) => (

            <CourseCard
              key={course._id}
              course={course}
            />

          ))}

        </div>

      )}

    </section>

  );

}