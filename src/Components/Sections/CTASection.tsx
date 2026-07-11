"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, UserPlus } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950 ">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Blue Blob */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute left-0 top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        />

        {/* Purple Blob */}

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 70, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
        />

        {/* Cyan Blob */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
        />

      </div>

      {/* ================= Content ================= */}

      <div className="relative w-full">

        <motion.div

          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: .7,
          }}

          className="
w-full
border
border-slate-200
dark:border-slate-800
bg-white
dark:bg-slate-900
shadow-xl
px-6
py-16
md:px-12
lg:px-20
"
        >

          {/* Badge */}

          <motion.div

            initial={{
              opacity:0,
              scale:.8
            }}

            whileInView={{
              opacity:1,
              scale:1
            }}

            transition={{
              delay:.2
            }}

            className="flex justify-center"
          >

            <span
              className="
              rounded-full
              bg-blue-100
              dark:bg-blue-900/30
              px-5
              py-2
              text-sm
              font-semibold
              text-blue-600
              dark:text-blue-400
              "
            >

              🎓 Join 5,000+ Successful Students

            </span>

          </motion.div>

          {/* Heading */}

          <motion.h2

            initial={{
              opacity:0,
              y:30
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:.3
            }}

            className="
            mt-8
            text-center
            text-4xl
            font-bold
            leading-tight
            text-slate-900
            dark:text-white
            md:text-6xl
            "
          >

            Find Your Perfect Tutor

            <br />

            Start Learning Today

          </motion.h2>

          {/* Description */}

          <motion.p

            initial={{
              opacity:0,
              y:30
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:.45
            }}

            className="
            mx-auto
            mt-6
            max-w-3xl
            text-center
            text-lg
            leading-8
            text-slate-600
            dark:text-slate-400
            "
          >

            Discover verified tutors, book tuition in minutes,
            and achieve your academic goals through personalized
            learning experiences.

          </motion.p>

          {/* Buttons */}

          <motion.div

            initial={{
              opacity:0,
              y:30
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:.6
            }}

            className="
            mt-12
            flex
            flex-col
            items-center
            justify-center
            gap-5
            sm:flex-row
            "
          >

            <motion.div
              whileHover={{
                scale:1.05,
                y:-4,
              }}
              whileTap={{
                scale:.95
              }}
            >

              <Link

                href="/find-tutors"

                className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-7
                py-4
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                "
              >

                <BookOpen size={20} />

                Find Tutor

                <ArrowRight size={18} />

              </Link>

            </motion.div>

            <motion.div
              whileHover={{
                scale:1.05,
                y:-4,
              }}
              whileTap={{
                scale:.95
              }}
            >

              <Link

                href="/become-a-tutor"

                className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-300
                dark:border-slate-700
                bg-transparent
                px-7
                py-4
                font-semibold
                text-slate-900
                dark:text-white
                transition
                hover:bg-slate-100
                dark:hover:bg-slate-800
                "
              >

                <UserPlus size={20} />

                Become Tutor

              </Link>

            </motion.div>

          </motion.div>

                    {/* ================= Statistics ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-4"
          >
            {[
              {
                value: "5K+",
                label: "Happy Students",
              },
              {
                value: "800+",
                label: "Verified Tutors",
              },
              {
                value: "1.2K+",
                label: "Tuition Posts",
              },
              {
                value: "98%",
                label: "Success Rate",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.9 + index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  dark:border-slate-800
                  bg-slate-50
                  dark:bg-slate-950
                  p-6
                  text-center
                  shadow-sm
                  transition-all
                  hover:shadow-xl
                "
              >
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 md:text-4xl">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ================= Bottom Text ================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
            }}
            className="mt-14 text-center"
          >
            <p className="text-slate-500 dark:text-slate-400">
              Trusted by thousands of students and tutors across Bangladesh.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= Floating Decorations ================= */}

      

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-20
          right-20
          hidden
          h-14
          w-14
          rounded-2xl
          border
          border-violet-300/40
          lg:block
        "
      />

      {/* ================= Bottom Glow ================= */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-32
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />
    </section>
  );
}