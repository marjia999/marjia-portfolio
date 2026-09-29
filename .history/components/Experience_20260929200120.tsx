"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          {/* Experience Item */}
          <div className="relative pl-8 sm:pl-12 pb-8 border-l border-white/10">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full ring-4 ring-cyan-400/20" />

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Briefcase size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Industrial Trainee
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">
                      SSL Wireless
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar size={16} />
                  <span>July 2026</span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">
                Participated in expert-led sessions to bridge academic learning
                with real-world corporate practices. Gained practical insights
                into career pathways, professional development, and modern
                industry expectations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}