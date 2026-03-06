import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock, ShieldCheck, HeartPulse } from 'lucide-react';
import { UrgentBackground } from './UrgentBackground';

export const GlobalImpactSection = () => {
  const impacts = [
    {
      title: "Faster Disaster Response",
      desc: "Sub-10-minute deployment from global launchpads to critical zones, closing the golden hour gap.",
      icon: <Clock className="w-8 h-8 text-[#00f0ff]" />,
      color: "from-[#00f0ff]/20 to-transparent"
    },
    {
      title: "Improved Survivor Recovery",
      desc: "AI-driven detection and autonomous extraction significantly increase survival rates in extreme conditions.",
      icon: <HeartPulse className="w-8 h-8 text-red-500" />,
      color: "from-red-500/20 to-transparent"
    },
    {
      title: "Reduced Risk for Human Rescuers",
      desc: "Zero-contact operations keep human teams out of hazardous, contaminated, or structurally unstable environments.",
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
      color: "from-green-400/20 to-transparent"
    },
    {
      title: "Humanitarian Missions Worldwide",
      desc: "A scalable, universally adaptable platform designed to serve humanity across all borders and disaster types.",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      color: "from-blue-400/20 to-transparent"
    }
  ];

  return (
    <section className="py-32 relative bg-[#0a0b10] border-t border-white/5 overflow-hidden">
      <UrgentBackground />
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_60%)] blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase mb-4">Why XENBUS Matters</h3>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]">
            GLOBAL IMPACT
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono leading-relaxed">
            Redefining the future of emergency response. XENBUS is not just a vehicle; it is a global paradigm shift in how humanity responds to its darkest hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`relative group bg-[#050507]/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#00f0ff]/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]`}
            >
              {/* Vibrant Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${impact.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 p-5 rounded-full bg-black/50 border border-white/10 group-hover:scale-110 group-hover:border-[#00f0ff]/50 transition-transform duration-500">
                  {impact.icon}
                </div>
                <h3 className="font-orbitron font-bold text-lg text-white uppercase tracking-wider mb-4 group-hover:text-[#00f0ff] transition-colors">{impact.title}</h3>
                <p className="text-sm text-gray-400 font-mono leading-relaxed">{impact.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
