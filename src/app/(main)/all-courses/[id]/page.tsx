"use client";
import CourseCard from "@/Components/Course/CourseCard";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Course } from "@/types/course";
import { toast } from "sonner";

export default function CourseDetailsPage() {
const router = useRouter();
    const { id } = useParams();

   const [course, setCourse] =
  useState<Course | null>(null);

const [relatedCourses, setRelatedCourses] =
  useState<Course[]>([]);

    const [loading, setLoading] = useState(false);

const handleEnroll = async () => {
  setLoading(true);

  setTimeout(() => {
    const courses = JSON.parse(
      localStorage.getItem("myCourses") || "[]"
    );

    const exists = courses.find(
      (item: Course) => item._id === course._id
    );

    if (exists) {
      toast.error("Already Enrolled");
      setLoading(false);
      return;
    }

    courses.push(course);

    localStorage.setItem(
      "myCourses",
      JSON.stringify(courses)
    );

    toast.success("Enrollment Successful");

    setLoading(false);

    router.push("/dashboard/my-courses");

  }, 1000);
};
    useEffect(()=>{

        const fetchCourse = async()=>{

            try{

                const res =
                await fetch(`/api/courses/${id}`);

                const data = await res.json();
                console.log(data);

setCourse(data.course);

setRelatedCourses(
  data.relatedCourses
);

            }finally{

                setLoading(false);

            }

        }

        fetchCourse();

    },[id]);

    if(loading){

        return 
            <div className="py-20 text-center">
                Loading...
            </div>
        

    }

    if(!course){

        return
            <div className="py-20 text-center">
                Course Not Found
            </div>
        

    }

    return(

        <div>

  <section className="mx-auto max-w-7xl px-6 py-10">

    <div className="grid gap-10 lg:grid-cols-2">

      {/* Left */}

      <div>

        <img
          src={course.image}
          alt={course.title}
          className="h-[450px] w-full rounded-3xl object-cover"
        />

      </div>

      {/* Right */}

      <div>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">

          {course.category}

        </span>

        <h1 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">

          {course.title}

        </h1>

        <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">

          {course.shortDescription}

        </p>

        {/* Meta */}

        <div className="mt-8 grid grid-cols-2 gap-5">

          <div className="rounded-2xl border p-5 dark:border-slate-700">

            <p className="text-sm text-slate-500">
              Instructor
            </p>

            <h3 className="mt-2 font-semibold">

              {course.instructor}

            </h3>

          </div>

          <div className="rounded-2xl border p-5 dark:border-slate-700">

            <p className="text-sm text-slate-500">
              Duration
            </p>

            <h3 className="mt-2 font-semibold">

              {course.duration}

            </h3>

          </div>

          <div className="rounded-2xl border p-5 dark:border-slate-700">

            <p className="text-sm text-slate-500">
              Level
            </p>

            <h3 className="mt-2 font-semibold">

              {course.level}

            </h3>

          </div>

          <div className="rounded-2xl border p-5 dark:border-slate-700">

            <p className="text-sm text-slate-500">
              Language
            </p>

            <h3 className="mt-2 font-semibold">

              {course.language}

            </h3>

          </div>

        </div>

        {/* Price */}

        <div className="mt-8 flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              Course Fee
            </p>

            <h2 className="text-4xl font-bold text-blue-600">

              ${course.price}

            </h2>

          </div>

          <button
  onClick={handleEnroll}
  disabled={loading}
  className="rounded-xl bg-blue-600 px-8 py-4 text-white disabled:opacity-70"
>
  {loading ? (
    <div className="flex items-center gap-2">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
      Enrolling...
    </div>
  ) : (
    "Enroll Now"
  )}
</button>

        </div>

      </div>

    </div>

    {/* Description */}

    <div className="mt-16 rounded-3xl border p-8 dark:border-slate-700">

      <h2 className="text-3xl font-bold">

        Course Description

      </h2>

      <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">

        {course.description}

      </p>

    </div>

    {/* Requirements */}

    <div className="mt-10 rounded-3xl border p-8 dark:border-slate-700">

      <h2 className="text-3xl font-bold">

        Requirements

      </h2>

      <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">

        {course.requirements}

      </p>

    </div>

    {/* Learning */}

    <div className="mt-10 rounded-3xl border p-8 dark:border-slate-700">

      <h2 className="text-3xl font-bold">

        What You'll Learn

      </h2>

      <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">

        {course.learning}

      </p>

    </div>
{/* Related Courses */}

<div className="mt-20">

  <div className="mb-8">

    <h2 className="text-3xl font-bold">

      Related Courses

    </h2>

    <p className="mt-2 text-slate-500">

      Explore more courses from the same category.

    </p>

  </div>

  {relatedCourses.length === 0 ? (

    <div className="rounded-2xl border p-10 text-center dark:border-slate-700">

      <h3 className="text-lg font-semibold">

        No Related Courses Found

      </h3>

    </div>

  ) : (

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {relatedCourses.map((course) => (

        <CourseCard
          key={course._id}
          course={course}
        />

      ))}

    </div>

  )}

</div>
  </section>

        </div>

    )

}