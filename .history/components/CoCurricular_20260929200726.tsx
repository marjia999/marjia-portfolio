"use client";

import { motion } from "framer-motion";
import { Users, Calendar } from "lucide-react";

export default function CoCurricular() {
  const activities = [
    {
      organization:
        "United Nations Youth and Students Association of Bangladesh",
      role: "Associate Member",
      period: "August 2026 – Present",
    },
    {
      organization: "IEEE BUP Student Branch WIE Affinity Group",
      role: "General Member",
      period: "October 2024 – Present",
    },
    {
      organization: "BUP Computer Programming Club",
      role: "General Member",
      period: "June 2024 – Present",
    },
    {
      organization: "BUP Robotics Club",
      role: "General Member",
      period: "March 2024 – Present",
    },
  ];

  return (
    <section id="cocurricular" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Co-curricular Activities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-cyan-500/10 rounded-lg flex-shrink-0">
                  <Users size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-bold leading-snug">
                  {activity.organization}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4 pl-11">
                <span className="text-cyan-400 text-sm font-medium">
                  {activity.role}
                </span>
                <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <Calendar size={14} />
                  {activity.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}