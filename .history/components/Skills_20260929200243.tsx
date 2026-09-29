"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={22} />,
      skills: ["C", "C++", "Java", "Python", "PHP", "JavaScript"],
    },
    {
      title: "Web Development",
      icon: <Globe size={22} />,
      skills: [
        "HTML",
        "CSS",
        "React.js",
        "NestJS",
        "Node.js",
        "Express.js",
        "Flask",
      ],
    },
    {
      title: "Database & Query",
      icon: <Database size={22} />,
      skills: ["SQL", "MySQL", "PostgreSQL"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={22} />,
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Linux",
        "Excel",
        "Power BI",
        "MATLAB",
        "AutoCAD",
        "Canva",
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}