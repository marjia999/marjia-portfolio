"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Trophy, Medal } from "lucide-react";

export default function Achievements() {
  const certifications = [
    {
      title: "TryHackMe Pre Security",
      issuer: "TryHackMe",
    },
    {
      title: "Aspire Leadership Program 2024",
      issuer: "Aspire Institute",
    },
    {
      title: "Frontier Technology Scholarship",
      issuer: "FutureNation / UNDP Bangladesh",
    },
    {
      title: "Top 20 Performer",
      issuer: "BUP Career Edge 2024",
    },
  ];

  const achievements = [
    {
      title: "Finalist at NEOFETCH Hackathon",
      event: "Inventious 4.1, MIST",
      icon: <Trophy size={20} />,
    },
    {
      title: "9th Place in 'Crack The Numbers'",
      event: "BUP Career Edge 2024",
      icon: <Medal size={20} />,
    },
    {
      title: "National Data Analytics Competition 2025",
      event: "Participant",
      icon: <Award size={20} />,
    },
    {
      title: "ICPC Asia Dhaka Regional Preliminary 2023",
      event: "Participant",
      icon: <BadgeCheck size={20} />,
    },
  ];

  return (
    <section id="achievements" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <BadgeCheck size={22} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/50 transition-colors"
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg flex-shrink-0">
                    <Award size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{cert.title}</p>
                    <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Trophy size={22} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Achievements</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/50 transition-colors"
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg flex-shrink-0 text-cyan-400">
                    {achievement.icon}
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {achievement.title}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      {achievement.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}