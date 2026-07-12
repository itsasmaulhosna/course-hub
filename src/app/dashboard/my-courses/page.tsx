"use client";

import { useEffect, useState } from "react";
import CourseCard from "@/Components/Course/CourseCard";
import { Course } from "@/types/course";

export default function MyCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("myCourses") || "[]"
    );

    setCourses(data);
  }, []);

  return (
    <section className="mx-auto max-w-7xl">
      <h1 className="mb-8 text-3xl font-bold">
        My Courses
      </h1>

      {courses.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-semibold">
            No Enrolled Courses
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            You haven't enrolled in any courses yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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