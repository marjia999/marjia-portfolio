"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "NexGuard",
    description:
      "A secure and privacy-focused mobile web browser concept focused on safer and more private web browsing.",
    tech: ["Web Development", "Security", "JavaScript"],
    github: "https://github.com/marjia999/NexGuard",
    featured: true,
  },
  {
    title: "Smart Graduate Career Assistant",
    description:
      "An AI-powered career assistance project for comparing CVs with job descriptions, identifying skill gaps, preparing interview questions, and creating a 30-day roadmap.",
    tech: ["AI", "React", "TypeScript"],
    github:
      "https://github.com/marjia999/Smart-Graduate-Career-Assistant",
    featured: true,
  },
  {
    title: "Agricultural Resource Management System",
    description:
      "A centralized platform for managing agricultural resources, service requests, tracking, and payments.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    github:
      "https://github.com/marjia999/Agricultural_Resource_Management_System",
  },
  {
    title: "Network Analyzer Tool",
    description:
      "A web-based network intelligence tool for analyzing domains and IP addresses using different network analysis utilities.",
    tech: ["Python", "Flask", "JavaScript"],
    github: "https://github.com/marjia999/Network-Analyzer-Tool",
  },
  {
    title: "Mental Health Tracker",
    description:
      "A Java desktop application featuring journaling, mood tracking, and sentiment analysis for personal emotional insights.",
    tech: ["Java", "Java Swing", "MySQL"],
    github: "https://github.com/marjia999/Mental-Health-Tracker",
  },
  {
    title: "Walton Sales Analytics",
    description:
      "A data analytics dashboard providing insights into sales performance, customer behavior, and inventory trends.",
    tech: ["Excel", "Power BI", "Power Query"],
  },
  {
    title: "Cafeteria Management System",
    description:
      "A console-based system for managing cafeteria orders, accounts, payments, and inventory operations.",
    tech: ["C", "File Handling"],
    github: "https://github.com/marjia999/Cafeteria-Management-System",
  },
];

const skills = {
  Programming: ["C", "C++", "Java", "Python", "PHP", "JavaScript"],
  Web: [
    "HTML",
    "CSS",
    "React.js",
    "NestJS",
    "Node.js",
    "Express.js",
    "Flask",
  ],
  Database: ["SQL", "MySQL", "PostgreSQL"],
  Tools: [
    "Git & GitHub",
    "Docker",
    "Linux",
    "Excel",
    "Power BI",
    "MATLAB",
    "AutoCAD",
    "Canva",
  ],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070b14]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-tight"
          >
            Marjia<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#research" className="transition hover:text-white">
              Research
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#070b14] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              {["about", "projects", "research", "experience", "skills", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={closeMenu}
                    className="capitalize transition hover:text-white"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.12),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.10),transparent_30%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Computer Science & Engineering Student
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Marjia Khatun.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              I build software and explore artificial intelligence,
              cybersecurity, and intelligent systems through projects,
              coursework, and research.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Projects
                <ArrowDown size={17} />
              </a>

              <a
                href="https://github.com/marjia999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/5"
              >
                <Github size={17} />
                GitHub
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-slate-400">
              <a
                href="https://github.com/marjia999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition hover:text-cyan-400"
              >
                <Github size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/marjia-khatun"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-cyan-400"
              >
                <Linkedin size={21} />
              </a>

              <a
                href="mailto:marjiakhatun.my@gmail.com"
                aria-label="Email"
                className="transition hover:text-cyan-400"
              >
                <Mail size={21} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="About"
            title="Building with curiosity and purpose."
          />

          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="leading-8 text-slate-400">
                I am a Computer Science and Engineering student at Bangladesh
                University of Professionals with an interest in software
                development, artificial intelligence, cybersecurity, and
                research.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                My academic and project work gives me opportunities to explore
                different areas of computing while strengthening my practical
                development skills.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7">
              <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                Current Focus
              </p>

              <ul className="mt-5 space-y-4 text-slate-300">
                <li>• Software development</li>
                <li>• Artificial intelligence</li>
                <li>• Cybersecurity</li>
                <li>• Research and intelligent systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Projects"
            title="Featured work"
            description="A selection of projects that reflect my interests across software, AI, data, and cybersecurity."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
          </div>

          <div className="mt-20">
            <h3 className="mb-7 text-2xl font-semibold text-white">
              More projects
            </h3>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                    compact
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Research"
            title="Exploring trustworthy AI systems."
          />

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/[0.08] to-blue-500/[0.04] p-8 md:p-10">
            <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
              Undergraduate Thesis
            </p>

            <h3 className="mt-4 max-w-4xl text-2xl font-semibold leading-9 text-white md:text-3xl">
              Byzantine-Resilient Federated Retrieval-Augmented Generation for
              Cybersecurity Threat Intelligence
            </h3>

            <p className="mt-6 max-w-3xl leading-8 text-slate-400">
              Research direction focused on counterfactual semantic
              verification against knowledge poisoning and routing hijacking.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Federated Learning",
                "RAG",
                "Cybersecurity",
                "Threat Intelligence",
                "Byzantine Resilience",
                "Semantic Verification",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Experience" title="Industry exposure" />

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-9">
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <p className="text-sm font-medium text-cyan-400">
                  SSL Wireless
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-white">
                  Industrial Trainee
                </h3>
              </div>

              <p className="text-sm text-slate-500">July 2026</p>
            </div>

            <p className="mt-6 max-w-3xl leading-8 text-slate-400">
              Gained hands-on industry exposure through expert-led sessions
              covering diverse professional roles, connecting academic
              learning with real-world corporate practices and learning about
              career pathways, professional development, and industry
              expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Skills" title="Tools I work with" />

          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <h3 className="text-lg font-semibold text-white">{category}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Education" title="Academic background" />

          <div className="space-y-5">
            <EducationCard
              degree="Bachelor of Computer Science and Engineering"
              institution="Bangladesh University of Professionals"
              period="July 2023 – Present"
              result="CGPA: 3.93 / 4.00"
            />

            <EducationCard
              degree="Higher Secondary Certificate"
              institution="Nalitabari Shahid Abdur Rashid Mohila College"
              period="2019 – 2021"
              result="Science | GPA: 5.00 / 5.00"
            />

            <EducationCard
              degree="Dakhil"
              institution="Nalitabari Garkanda Mohila Alim Madrasah"
              period="2017 – 2019"
              result="Science | GPA: 5.00 / 5.00"
            />
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Achievements & Certifications"
            title="Milestones along the way."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              title="Certifications"
              items={[
                "TryHackMe Pre Security Certificate",
                "Aspire Leadership Program 2024, Aspire Institute",
                "Frontier Technology Scholarship, FutureNation / UNDP Bangladesh",
              ]}
            />

            <InfoCard
              title="Achievements"
              items={[
                "National Data Analytics Competition 2025 participant",
                "9th place in the Crack The Numbers segment at BUP Career Edge 2024",
                "Finalist at NEOFETCH Hackathon, Inventious 4.1, MIST",
                "ICPC Asia Dhaka Regional Preliminary Contest 2023 participant",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Co-curricular"
            title="Beyond the classroom."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["BUP Computer Programming Club", "General Member", "June 2024 – Present"],
              ["IEEE BUP Student Branch WIE", "General Member", "October 2024 – Present"],
              ["BUP Robotics Club", "General Member", "March 2024 – Present"],
              ["UNYSAB", "Associate Member", "August 2026 – Present"],
            ].map(([organization, role, period]) => (
              <div
                key={organization}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-semibold text-white">{organization}</h3>
                <p className="mt-3 text-sm text-cyan-400">{role}</p>
                <p className="mt-2 text-xs text-slate-500">{period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s connect.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            I am open to opportunities related to software development,
            research, AI, cybersecurity, and collaborative projects.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:marjiakhatun.my@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/marjia-khatun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/5"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-7">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-slate-500">
          <p>All rights reserved | Marjia Khatun</p>

          <a
            href="#home"
            className="transition hover:text-cyan-400"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-slate-400">{description}</p>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: (typeof projects)[number];
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] ${
        compact ? "min-h-[270px]" : "min-h-[330px]"
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
            <ArrowUpRight size={19} />
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} on GitHub`}
              className="text-slate-500 transition hover:text-white"
            >
              <Github size={19} />
            </a>
          )}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>

          <p className="mt-3 leading-7 text-slate-400">
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function EducationCard({
  degree,
  institution,
  period,
  result,
}: {
  degree: string;
  institution: string;
  period: string;
  result: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
      <div className="flex flex-col justify-between gap-3 md:flex-row">
        <div>
          <h3 className="text-xl font-semibold text-white">{degree}</h3>
          <p className="mt-2 text-slate-400">{institution}</p>
        </div>

        <p className="text-sm text-slate-500">{period}</p>
      </div>

      <p className="mt-5 text-sm font-medium text-cyan-400">{result}</p>
    </div>
  );
}

function InfoCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}