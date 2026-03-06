import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, Zap, Droplets, Anchor, Radio, Activity } from 'lucide-react';

const specs = [
  { title: "Primary Structure", desc: "Advanced Carbon Fiber Composite — ultra-high strength-to-weight ratio, electromagnetic neutrality", icon: <Shield className="w-6 h-6" /> },
  { title: "Load Bearing", desc: "Grade-5 Titanium structural components — corrosion-resistant, extreme temperature rated", icon: <Activity className="w-6 h-6" /> },
  { title: "Sensor Fairings", desc: "Borosilicate (Pyrex) glass optics — thermal shock resistant, chemically inert", icon: <Radio className="w-6 h-6" /> },
  { title: "RF Protection", desc: "Composite Radome — signal-transparent, weather-hardened antenna enclosure", icon: <Radio className="w-6 h-6" /> },
  { title: "Computing Layer", desc: "Hard Real-Time OS with deterministic latency — zero-tolerance computational delay", icon: <Cpu className="w-6 h-6" /> },
  { title: "Propulsion", desc: "Hybrid turbofan + high-density battery — extended range with burst performance", icon: <Zap className="w-6 h-6" /> },
  { title: "Actuation", desc: "Electro-hydraulic actuator network — precision force for extraction operations", icon: <Anchor className="w-6 h-6" /> },
  { title: "Waterproofing", desc: "IP68+ hermetic sealing with active pressure equalization for deep submersion", icon: <Droplets className="w-6 h-6" /> },
];

export const ExtremeEnvironmentsSection = () => {
  return (
    <section className="py-32 relative bg-[#050507] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            ENGINEERED FOR EXTREME ENVIRONMENTS
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            Built to aerospace standards with defense-grade tolerances for maximum performance under the harshest conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-panel p-6 border border-white/10 rounded-2xl hover:border-[#00f0ff]/50 transition-colors group"
            >
              <div className="mb-4 text-[#00f0ff] group-hover:scale-110 transition-transform">{spec.icon}</div>
              <h3 className="font-bold text-white mb-2 tracking-tight uppercase text-sm">{spec.title}</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">{spec.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
