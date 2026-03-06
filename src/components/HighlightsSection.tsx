import React from 'react';
import { motion } from 'motion/react';
import { Zap, Cpu, ShieldAlert, Anchor, Waves, Crosshair } from 'lucide-react';

const highlights = [
  { title: "Hybrid Aerial–Underwater Operation", icon: <Waves className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
  { title: "Autonomous Rescue Capability", icon: <Cpu className="w-8 h-8" />, color: "from-purple-500 to-indigo-500" },
  { title: "Debris Removal & Victim Extraction", icon: <ShieldAlert className="w-8 h-8" />, color: "from-red-500 to-orange-500" },
  { title: "High Payload + Modular Mission Pods", icon: <Anchor className="w-8 h-8" />, color: "from-emerald-500 to-teal-500" },
  { title: "AI-Driven Sensor Fusion & Decision Intelligence", icon: <Crosshair className="w-8 h-8" />, color: "from-yellow-500 to-amber-500" },
  { title: "Extreme-Environment Survivability", icon: <Zap className="w-8 h-8" />, color: "from-gray-500 to-slate-700" },
];

export const HighlightsSection = () => {
  return (
    <section className="py-24 bg-[#050507] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column: First 3 points */}
          <div className="space-y-6">
            {highlights.slice(0, 3).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/30 transition-all duration-300"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${item.color} rounded-3xl`}></div>
                <div className="relative flex items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-md overflow-hidden [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)]">
              <img
                src="https://i.ibb.co/Dg9w3TqM/Xenbus-Taking-Off-From-The-Ground.jpg"
                alt="Xenbus Taking Off"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Remaining points */}
          <div className="space-y-6">
            {highlights.slice(3).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/30 transition-all duration-300"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${item.color} rounded-3xl`}></div>
                <div className="relative flex items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
