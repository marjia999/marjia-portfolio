"use client";

import { motion } from "framer-motion";
import { BookOpen, Network, ShieldAlert, FileSearch } from "lucide-react";

export default function Research() {
  const researchAreas = [
    "Federated Learning",
    "Retrieval-Augmented Generation",
    "Cybersecurity",
    "Threat Intelligence",
    "Byzantine-Resilient Systems",
    "Knowledge Poisoning",
    "Semantic Verification",
  ];

  return (
    <section id="research" className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Research
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 overflow-hidden"
        >
          {/* Decorative background gradients */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <BookOpen size={24} className="text-cyan-400" />
              </div>
              <p className="text-sm uppercase tracking-wider text-cyan-400 font-medium">
                Undergraduate Thesis / Ongoing Research
              </p>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
              Byzantine-Resilient Federated Retrieval-Augmented Generation for
              Cybersecurity Threat Intelligence
            </h3>

            <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-lg mb-8">
              <FileSearch size={20} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                  Research Direction
                </p>
                <p className="text-gray-300">
                  Counterfactual Semantic Verification Against Knowledge
                  Poisoning and Routing Hijacking.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Network size={18} className="text-cyan-400" />
                <p className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                  Core Focus Areas
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {researchAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-400/20 rounded-full hover:bg-cyan-500/20 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}