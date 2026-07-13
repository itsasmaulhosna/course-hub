"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";

import { Course } from "@/types/course";

export default function ManageCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Courses
  const fetchCourses = async () => {
    try {
      const res = await fetch("/api/dashboard/manage-courses", {
        credentials: "include",
      });

      const data = await res.json();

      if (Array.isArray(data)) {
        setCourses(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Delete Course
  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch(
        `/api/dashboard/manage-courses/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        setCourses((prev) =>
          prev.filter((course) => course._id !== id)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="space-y-8">

  {/* Header */}
  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Manage Courses
      </h1>

      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Manage, edit and organize all your published courses.
      </p>
    </div>

    <Link
      href="/dashboard/add-course"
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
    >
      <Plus size={18} />
      Add Course
    </Link>

  </div>

  {/* Loading */}
  {loading ? (

    <div className="flex h-64 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">

      <p className="text-gray-500 dark:text-gray-400">
        Loading courses...
      </p>

    </div>

  ) : courses.length === 0 ? (

    <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        No Courses Found
      </h2>

      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Start by creating your first course.
      </p>

      <Link
        href="/dashboard/add-course"
        className="mt-6 rounded-lg bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-700"
      >
        Create Course
      </Link>

    </div>

  ) : (

    <>
    {/* Desktop Table */}
<div className="hidden overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900 lg:block">

  <table className="min-w-full">

    <thead className="bg-gray-100 dark:bg-gray-800">

      <tr>

        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
          Image
        </th>

        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
          Title
        </th>

        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
          Category
        </th>

        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
          Instructor
        </th>

        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
          Price
        </th>

        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
          Actions
        </th>

      </tr>

    </thead>

    <tbody>

      {courses.map((course) => (

        <tr
          key={course._id}
          className="border-t border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
        >

          <td className="px-6 py-4">

            <img
              src={course.image}
              alt={course.title}
              className="h-16 w-24 rounded-lg object-cover"
            />

          </td>

          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {course.title}
          </td>

          <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
            {course.category}
          </td>

          <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
            {course.instructor}
          </td>

          <td className="px-6 py-4 font-semibold text-green-600 dark:text-green-400">
            ${course.price}
          </td>

          <td className="px-6 py-4">

            <div className="flex justify-center gap-3">

              <Link
                href={`/all-courses/${course._id}`}
                className="rounded p-2 text-sky-600 transition hover:bg-sky-100 dark:text-sky-400 dark:hover:bg-sky-900/30"
              >
                <Eye size={18} />
              </Link>

              <Link
                href={`/dashboard/edit-course/${course._id}`}
                className="rounded p-2 text-emerald-600 transition hover:bg-emerald-100 dark:text-emerald-400 dark:hover:bg-emerald-900/30"
              >
                <Pencil size={18} />
              </Link>

              <button
                onClick={() => handleDelete(course._id)}
                className="rounded p-2 text-red-600 transition hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/30 cursor-pointer"
              >
                <Trash2 size={18} />
              </button>

            </div>

          </td>

        </tr>

      ))}

    </tbody>

  </table>

</div>
{/* Mobile Cards */}
<div className="grid gap-6 lg:hidden">

  {courses.map((course) => (

    <div
      key={course._id}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
    >

      {/* Image */}
      <div className="relative h-52 w-full">

        {course.image ? (

          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover"
          />

        ) : (

          <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-800">
            No Image
          </div>

        )}

      </div>

      {/* Body */}
      <div className="space-y-4 p-5">

        <h2 className="line-clamp-2 text-xl font-bold text-gray-900 dark:text-white">
          {course.title}
        </h2>

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
            {course.category}
          </span>

          <span className="text-lg font-bold text-green-600 dark:text-green-400">
            ${course.price}
          </span>

        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          👨‍🏫 {course.instructor}
        </p>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">

          <Link
            href={`/all-courses/${course._id}`}
            className="rounded-lg p-2 text-sky-600 transition hover:bg-sky-100 dark:text-sky-400 dark:hover:bg-sky-900/30"
          >
            <Eye size={20} />
          </Link>

          <Link
            href={`/dashboard/edit-course/${course._id}`}
            className="rounded-lg p-2 text-emerald-600 transition hover:bg-emerald-100 dark:text-emerald-400 dark:hover:bg-emerald-900/30"
          >
            <Pencil size={20} />
          </Link>

          <button
            onClick={() => handleDelete(course._id)}
            className="rounded-lg p-2 text-red-600 transition hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/30 cursor-pointer"
          >
            <Trash2 size={20} />
          </button>

        </div>

      </div>

    </div>

  ))}

</div>

    </>
  )}

</section>
  );
}