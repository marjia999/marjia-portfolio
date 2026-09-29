"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

// Custom SVG for GitHub
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width="28"
      height="28"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Contact() {
  const contactLinks = [
    {
      name: "Email",
      value: "marjiakhatun.my@gmail.com",
      link: "mailto:marjiakhatun.my@gmail.com",
      icon: <Mail size={28} />,
      color: "hover:text-red-400 border-transparent hover:border-red-500/30",
      bgHover: "group-hover:bg-red-500/10",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/marjia-khatun",
      link: "https://www.linkedin.com/in/marjia-khatun",
      icon: <Linkedin size={28} />,
      color: "hover:text-blue-400 border-transparent hover:border-blue-500/30",
      bgHover: "group-hover:bg-blue-500/10",
    },
    {
      name: "GitHub",
      value: "github.com/marjia999",
      link: "https://github.com/marjia999",
      icon: <GithubIcon className="w-7 h-7" />,
      color:
        "hover:text-gray-200 border-transparent hover:border-gray-500/30",
      bgHover: "group-hover:bg-gray-500/10",
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you have a question, an opportunity, or just want to say hi,
            my inbox is always open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target={contact.name === "Email" ? undefined : "_blank"}
              rel={contact.name === "Email" ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex flex-col items-center gap-4 p-8 bg-white/5 border rounded-2xl transition-all text-gray-400 ${contact.color}`}
            >
              <div
                className={`p-4 bg-white/5 rounded-full transition-colors ${contact.bgHover}`}
              >
                {contact.icon}
              </div>
              <div className="text-center">
                <p className="text-white font-bold mb-1">{contact.name}</p>
                <p className="text-sm break-all">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}