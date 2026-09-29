"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export default function Education() {
  const educationHistory = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Bangladesh University of Professionals",
      period: "July 2023 – Present",
      score: "CGPA: 3.93 / 4.00",
      description:
        "Currently pursuing B.Sc. with a focus on software development, AI, and cybersecurity systems.",
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science",
      institution: "Nalitabari Shahid Abdur Rashid Mohila College",
      period: "2019 – 2021",
      score: "GPA: 5.00 / 5.00",
      description:
        "Completed higher secondary education with a focus on core sciences and mathematics.",
    },
    {
      degree: "Dakhil - Science",
      institution: "Nalitabari Garkanda Mohila Alim Madrasah",
      period: "2017 – 2019",
      score: "GPA: 5.00 / 5.00",
      description:
        "Completed secondary education with excellent academic standing.",
    },
  ];

  return (
    <section id="education" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-12 border-l border-white/10"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full ring-4 ring-cyan-400/20" />

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-colors">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg flex-shrink-0">
                    <GraduationCap size={20} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <BookOpen size={16} />
                    <span>{edu.score}</span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}