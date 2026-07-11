"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, Stars } from "lucide-react";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col justify-between overflow-hidden border-b border-white/10 px-6 py-10 lg:border-b-0 lg:px-16 lg:py-14"
    >
      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-6 top-8 rounded-full bg-white/5 p-3 backdrop-blur-xl lg:right-20 lg:top-16 lg:p-4"
      >
        <Bot className="h-5 w-5 text-violet-400 lg:h-6 lg:w-6" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-16 right-6 rounded-full bg-white/5 p-3 backdrop-blur-xl lg:bottom-32 lg:right-12 lg:p-4"
      >
        <Sparkles className="h-5 w-5 text-yellow-400 lg:h-6 lg:w-6" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute right-24 top-1/2 hidden rounded-full bg-white/5 p-4 backdrop-blur-xl lg:block"
      >
        <Stars className="text-cyan-400" />
      </motion.div>

      {/* Logo */}
      <div>
        <h2 className="text-3xl font-extrabold lg:text-5xl">
          <span className="text-white">Prompt</span>
          <span className="text-yellow-400">Vault</span>
        </h2>

        {/* Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 backdrop-blur-xl lg:mt-8 lg:px-5 lg:py-3"
        >
          <Sparkles size={16} className="text-yellow-400" />

          <span className="text-xs text-gray-300 lg:text-sm">
            12,000+ Curated AI Prompts
          </span>
        </motion.div>
      </div>

      {/* Heading */}
      <div className="mt-10 max-w-2xl lg:mt-0">
        <h1 className="text-4xl font-bold leading-tight text-white lg:text-6xl">
          Discover.
          <br />
          Share.
          <br />
          Monetize AI Prompts.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 lg:mt-8 lg:text-xl lg:leading-9">
          Join thousands of creators building the future of AI with
          high-quality prompts for ChatGPT, Claude, Gemini and more.
        </p>
      </div>

      {/* Testimonial */}
      <motion.div
        whileHover={{
          scale: 1.02,
          y: -5,
        }}
        className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10 lg:mt-0 lg:p-8"
      >
        <div className="flex gap-1 text-yellow-400">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-4 text-base leading-7 text-gray-300 lg:mt-5 lg:text-lg lg:leading-8">
          PromptVault helped us increase productivity by more than
          60%. Finding high-quality prompts has never been easier.
        </p>

        <div className="mt-6 flex items-center gap-4 lg:mt-8">
          <img
            src="https://i.pravatar.cc/100"
            alt="Alex Johnson"
            className="h-12 w-12 rounded-full lg:h-14 lg:w-14"
          />

          <div>
            <h4 className="font-semibold text-white">
              Alex Johnson
            </h4>

            <p className="text-sm text-gray-400">
              Product Designer
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}