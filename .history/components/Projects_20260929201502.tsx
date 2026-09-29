"use client";

import { motion } from "framer-motion";
import { Folder } from "lucide-react";

// Custom SVG for GitHub
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width="18"
      height="18"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Projects() {
  const otherProjects = [
    {
      title: "Agricultural Resource Management System",
      description:
        "A full-stack platform for managing agricultural resources, service requests, tracking, and payments through a centralized system.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      github:
        "https://github.com/marjia999/Agricultural_Resource_Management_System",
    },
    {
      title: "Network Analyzer Tool",
      description:
        "A web-based network intelligence tool for analyzing domains and IPs using WHOIS, DNS, SSL, geolocation, and scanning utilities.",
      technologies: ["Python", "Flask", "JavaScript"],
      github: "https://github.com/marjia999/Network-Analyzer-Tool",
    },
    {
      title: "Mental Health Tracker",
      description:
        "A mental wellness application featuring journaling, mood tracking, and sentiment analysis for personalized emotional insights.",
      technologies: ["Java", "Java Swing", "MySQL"],
      github: "https://github.com/marjia999/Mental-Health-Tracker",
    },
    {
      title: "Walton Sales Analytics",
      description:
        "A data analytics dashboard providing insights into sales performance, customer behavior, and inventory trends.",
      technologies: ["Excel", "Power BI", "Power Query"],
      github: https://github.com/marjia999/Walton-Sales-PowerBI, // No public repo available
    },
    {
      title: "Cafeteria Management System",
      description:
        "A console-based system for managing cafeteria orders, accounts, payments, and inventory operations.",
      technologies: ["C", "File Handling"],
      github: "https://github.com/marjia999/Cafeteria-Management-System",
    },
  ];

  return (
    <section className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Other Notable Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Grid Layout for smaller projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative flex flex-col bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/50 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder size={22} className="text-cyan-400" />
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <GithubIcon />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full"
                  >
                    {tech}
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