"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { UploadCloud, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { platform } from "os";
export default function AddCourseForm() {
const resetForm = () => {
  setTitle("");
  setInstructor("");
  setCategory("");
  setLevel("");
  setLanguage("");
  setDuration("");
  setPrice("");
  setShortDescription("");
  setDescription("");
  setRequirements("");
  setLearning("");

  setImage(null);
  setPreview("");
  

  if (fileRef.current) {
    fileRef.current.value = "";
  }
};


    const [image, setImage] = useState<File | null>(null);
const [preview, setPreview] = useState("");

const fileRef = useRef<HTMLInputElement>(null);
const [title, setTitle] = useState("");
const [category, setCategory] = useState("");
const [level, setLevel] = useState("");
const [language, setLanguage] = useState("");
const [price, setPrice] = useState("");
const [duration, setDuration] = useState("");
const [instructor, setInstructor] = useState("");
const [shortDescription, setShortDescription] = useState("");
const [description, setDescription] = useState("");
const [requirements, setRequirements] = useState("");
const [learning, setLearning] = useState("");
const [loading, setLoading] = useState(false);


const handleImage = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  setImage(file);
  setPreview(URL.createObjectURL(file));
};

const removeImage = () => {
  setImage(null);
  setPreview("");

  if (fileRef.current) {
    fileRef.current.value = "";
  }
};
const uploadImage = async () => {
  if (!image) return "";

  const formData = new FormData();
  formData.append("image", image);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  return data.imageUrl;
};
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    setLoading(true);

    
    const imageUrl = await uploadImage();

    
    const course = {
      title,
      instructor,
      category,
      level,
      language,
      duration,
      price,
      shortDescription,
      description,
      requirements,
      learning,
      image: imageUrl,
    };

    // 3. MongoDB-তে save
    const res = await fetch("/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error("Something went wrong");
    }

    toast.success("Course Added Successfully");

    resetForm();

  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      className="mx-auto max-w-6xl"
    >
      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Add New Course
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Create and publish a new course for students.
        </p>
      </div>

      {/* Form Card */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <form onSubmit={handleSubmit}
 className="space-y-8">

          {/* ============================= */}
          {/* Image Upload যাবে এখানে */}
          {/* ============================= */}

          <div>

  <h2 className="mb-5 text-xl font-semibold">
    Course Thumbnail
  </h2>

  <div className="rounded-2xl border-2 border-dashed border-slate-300 p-8 dark:border-slate-700">

    {!preview ? (

      <div className="flex flex-col items-center">

        <UploadCloud
          size={60}
          className="text-blue-500"
        />

        <h3 className="mt-4 text-xl font-semibold">
          Upload Course Thumbnail
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          PNG, JPG or WEBP
        </p>

        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 cursor-pointer"
        >
          Choose Image
        </button>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImage}
        />

      </div>

    ) : (

      <div className="flex flex-col items-center">

        <Image
          src={preview}
          alt="Preview"
          width={600}
          height={350}
          className="h-64 w-full rounded-2xl object-cover"
        />

        <div className="mt-6 flex gap-4">

          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="rounded-xl bg-blue-600 px-5 py-2 text-white"
          >
            Change Image
          </button>

          <button
            type="button"
            onClick={removeImage}
            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2 text-white"
          >
            <Trash2 size={18} />

            Remove
          </button>

        </div>

      </div>

    )}

  </div>

</div>
          {/* ============================= */}
          {/* Basic Information */}
          {/* ============================= */}

          <div>

  <h2 className="mb-6 text-xl font-semibold">
    Basic Information
  </h2>

  <div className="grid gap-6 lg:grid-cols-2">

    {/* Course Title */}

    <div>

      <label className="mb-2 block font-medium">
        Course Title
      </label>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Complete React Development"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
      />

    </div>

    {/* Instructor */}

    <div>

      <label className="mb-2 block font-medium">
        Instructor Name
      </label>

      <input
        type="text"
        value={instructor}
        onChange={(e) =>
          setInstructor(e.target.value)
        }
        placeholder="John Doe"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
      />

    </div>

    {/* Category */}

    <div>

      <label className="mb-2 block font-medium">
        Category
      </label>

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
      >
        <option value="">
          Select Category
        </option>

        <option>English</option>

        <option>ICT</option>

        <option>Physics</option>

        <option>Chemistry</option>

        <option>Mathematics</option>

        <option>Biology</option>

      </select>

    </div>

    {/* Level */}

    <div>

      <label className="mb-2 block font-medium">
        Level
      </label>

      <select
        value={level}
        onChange={(e) =>
          setLevel(e.target.value)
        }
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
      >
        <option value="">
          Select Level
        </option>

        <option>Beginner</option>

        <option>Intermediate</option>

        <option>Advanced</option>

      </select>

    </div>

    {/* Language */}

    <div>

      <label className="mb-2 block font-medium">
        Language
      </label>

      <select
        value={language}
        onChange={(e) =>
          setLanguage(e.target.value)
        }
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
      >
        <option value="">
          Select Language
        </option>

        <option>English</option>

        <option>Bangla</option>

      </select>

    </div>

    {/* Duration */}

    <div>

      <label className="mb-2 block font-medium">
        Duration
      </label>

      <input
        type="text"
        value={duration}
        onChange={(e) =>
          setDuration(e.target.value)
        }
        placeholder="12 Weeks"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
      />

    </div>

    {/* Price */}

    <div>

      <label className="mb-2 block font-medium">
        Price ($)
      </label>

      <input
        type="number"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
        placeholder="99"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
      />

    </div>

  </div>

</div>

          {/* ============================= */}
          {/* Description */}
          {/* ============================= */}

          <div>

            <h2 className="mb-5 text-xl font-semibold text-slate-900 dark:text-white">
              Course Description
            </h2>

            <div className="space-y-5">

              <div>

                <label className="mb-2 block font-medium">
                  Short Description
                </label>

                <textarea
  rows={6}
  value={shortDescription}
  onChange={(e) =>
    setShortDescription(e.target.value)
  }
    placeholder="Write a brief course description..."
  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
/>

              </div>

              <div>

                <label className="mb-2 block font-medium">
                  Full Description
                </label>

                <textarea
                  rows={6}
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                    placeholder="Write detailed course description..."
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
                />

              </div>

            </div>

          </div>

          {/* ============================= */}
          {/* Extra */}
          {/* ============================= */}

          <div>

            <h2 className="mb-5 text-xl font-semibold text-slate-900 dark:text-white">
              Additional Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-medium">
                  Requirements
                </label>

                <textarea
                  rows={4}
                  value={requirements}
                  onChange={(e) =>
                    setRequirements(e.target.value)

                  }
                  placeholder="List any prerequisites or requirements for this course..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium">
                  What You'll Learn
                </label>

<textarea
  rows={4}
  value={learning}
  onChange={(e) => setLearning(e.target.value)}
  placeholder="What students will learn from this course..."
  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
/>
              </div>

            </div>

          </div>

          {/* Submit */}

          <div className="flex justify-end">

            <button
  disabled={loading}
  type="submit"
  className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white disabled:opacity-70 cursor-pointer transition hover:bg-blue-700"
>
  {loading ? (
    <div className="flex items-center gap-2">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
      Publishing...
    </div>
  ) : (
    "Publish Course"
  )}
</button>

          </div>

        </form>

      </div>

    </motion.div>
  );
}