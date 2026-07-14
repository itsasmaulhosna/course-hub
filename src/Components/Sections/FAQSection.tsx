"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How can I find a tutor?",
    answer:
      "Simply browse tutors by subject, class, or location, then view their profile and send a tuition request.",
  },
  {
    question: "Are all tutors verified?",
    answer:
      "Yes. Every tutor goes through a verification process before joining our platform.",
  },
  {
    question: "Can I hire tutors for online classes?",
    answer:
      "Absolutely! You can choose between online tutoring and home tuition based on your preference.",
  },
  {
    question: "How do tuition payments work?",
    answer:
      "Payments are arranged securely between students and tutors according to the agreed schedule.",
  },
  {
    question: "Can I change my tutor later?",
    answer:
      "Yes. If you're not satisfied, you can switch to another tutor anytime.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Everything you need to know about finding tutors and starting your learning journey.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
              >
                <span className="text-lg font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                >
                  <ChevronDown className="text-blue-600 dark:text-blue-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: .3 }}
                  >
                    <p className="px-6 pb-6 leading-7 text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}