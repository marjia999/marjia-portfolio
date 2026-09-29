"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, BrainCircuit, Shield } from "lucide-react";

export default function About() {
  const interests = [
    { name: "Software Development", icon: <Code size={20} /> },
    { name: "Artificial Intelligence", icon: <BrainCircuit size={20} /> },
    { name: "Cybersecurity", icon: <Shield size={20} /> },
    { name: "Research", icon: <GraduationCap size={20} /> },
  ];

  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Text Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-400 leading-relaxed">
              I am a Computer Science and Engineering student at the Bangladesh
              University of Professionals. My academic journey is driven by a
              deep curiosity about how technology can solve complex, real-world
              problems.
            </p>

            <p className="text-gray-400 leading-relaxed">
              As a student and aspiring developer, I am focused on building a
              strong foundation in modern software engineering principles. I
              enjoy bridging the gap between theoretical computer science and
              practical application, whether that involves developing web
              applications or exploring underlying systems architecture.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Currently, I am actively expanding my knowledge and practical
              skills across several core domains:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {interests.map((interest) => (
                <div
                  key={interest.name}
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400/50 transition-colors"
                >
                  <div className="text-cyan-400">{interest.icon}</div>
                  <span className="text-white text-sm font-medium">
                    {interest.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden">
              {/* Subtle gradient accent inside the card */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <GraduationCap size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Current Status
                  </h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                      Degree
                    </p>
                    <p className="text-white font-medium">
                      B.Sc. in Computer Science & Engineering
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                      Institution
                    </p>
                    <p className="text-white font-medium">
                      Bangladesh University of Professionals
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                      Timeline
                    </p>
                    <p className="text-white font-medium">
                      July 2023 – Present
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                      Current CGPA
                    </p>
                    <p className="text-cyan-400 font-bold text-lg">
                      3.93 / 4.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}