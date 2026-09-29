"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Optional: Subtle background glow effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-medium mb-4 tracking-wide">
            WELCOME TO MY PORTFOLIO
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Marjia Khatun
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Computer Science & Engineering student building software and exploring
          AI, cybersecurity, and intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all"
          >
            View Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <a
            href="https://github.com/marjia999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-cyan-400 text-white font-semibold rounded-lg transition-all"
          >
            <Github size={18} />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}