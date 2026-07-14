"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import CourseCard from "@/Components/Course/CourseCard";
import CourseCardSkeleton from "@/Components/Course/CourseCardSkeleton";

import { Course } from "@/types/course";

export default function CoursesPage() {

  const [courses, setCourses] =
    useState<Course[]>([]);

  const [loading, setLoading] =
    useState(true);
    const [search, setSearch] = useState("");

const [sortBy, setSortBy] = useState("default");

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

  const filteredCourses = [...courses]
  .filter((course) => {

  return (

    course.title
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    course.category
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    course.instructor
      .toLowerCase()
      .includes(search.toLowerCase())

  );

})

  .sort((a, b) => {

    switch (sortBy) {

case "price-low":
  return Number(a.price) - Number(b.price);

case "price-high":
  return Number(b.price) - Number(a.price);
      case "title":
        return a.title.localeCompare(b.title);

      default:
        return 0;

    }

  });

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
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

  <input
    type="text"
    placeholder="Search courses..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 md:max-w-md dark:border-slate-700 dark:bg-slate-900"
  />

  <select
    value={sortBy}
    onChange={(e) =>
      setSortBy(e.target.value)
    }
    className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900"
  >
    <option value="default">
      Default
    </option>

    <option value="title">
      A → Z
    </option>

    <option value="price-low">
      Price: Low to High
    </option>

    <option value="price-high">
      Price: High to Low
    </option>

  </select>

</div>

      {loading ? (

  <div className="flex min-h-[400px] items-center justify-center">

    <div className="flex flex-col items-center gap-4">

      <Loader2
        className="h-12 w-12 animate-spin text-blue-600"
      />

      <p className="text-lg font-medium text-slate-600 dark:text-slate-300">
        Loading courses...
      </p>

    </div>

  </div>

) : filteredCourses.length === 0 ? (

  <div className="py-20 text-center">

    <h2 className="text-2xl font-semibold">
      No courses found
    </h2>

    <p className="mt-2 text-slate-500">
      Try another keyword.
    </p>

  </div>

) : (

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

    {filteredCourses.map((course) => (
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