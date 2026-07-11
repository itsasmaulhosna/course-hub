"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "SSC Student",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "I found an amazing Mathematics tutor within two days. My exam preparation became much easier and my confidence improved a lot.",
  },
  {
    id: 2,
    name: "Mahmud Hasan",
    role: "HSC Student",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "The platform is very easy to use. I hired an online Physics tutor and my grades improved significantly.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Parent",
    image: "https://i.pravatar.cc/150?img=25",
    review:
      "Verified tutors gave me peace of mind. My son now studies regularly with an experienced home tutor.",
  },
];

export default function StudentTestimonials() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
            What Our Students Say
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Hear from students and parents who found trusted tutors through
            CourseHub.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Quote */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Quote size={28} />
              </div>

              {/* Review */}
              <p className="leading-7 text-slate-600 dark:text-slate-400">
                `{item.review}`
              </p>

              {/* Rating */}
              <div className="mt-6 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-blue-500"
                />

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}