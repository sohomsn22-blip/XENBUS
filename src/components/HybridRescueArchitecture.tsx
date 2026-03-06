import React from 'react';
import { motion } from 'framer-motion';
import { PlaneTakeoff, Navigation, Crosshair, Radar, Wrench, ShieldCheck, Waves, PlaneLanding } from 'lucide-react';
import { UrgentBackground } from './UrgentBackground';

const WORKFLOW_STEPS = [
  {
    title: "Aerial Deployment",
    desc: "Rapid launch from land bases or carrier ships using VTOL capabilities.",
    icon: <PlaneTakeoff className="w-6 h-6 text-[#00f0ff]" />
  },
  {
    title: "Autonomous Navigation",
    desc: "AI-driven flight to the disaster zone avoiding dynamic obstacles.",
    icon: <Navigation className="w-6 h-6 text-[#00f0ff]" />
  },
  {
    title: "Hover Stabilization",
    desc: "Precision altitude hold using vectoring turbofans in turbulent conditions.",
    icon: <Crosshair className="w-6 h-6 text-[#00f0ff]" />
  },
  {
    title: "Victim Detection via AI Sensor Fusion",
    desc: "Multi-modal scanning (thermal, acoustic, visual) to locate survivors.",
    icon: <Radar className="w-6 h-6 text-[#00f0ff]" />
  },
  {
    title: "Obstacle Removal & Access",
    desc: "Deploying bionic arms to clear debris and create safe extraction paths.",
    icon: <Wrench className="w-6 h-6 text-[#00f0ff]" />
  },
  {
    title: "Victim Retrieval & Containment",
    desc: "Securing victims in the climate-controlled, stabilized payload bay.",
    icon: <ShieldCheck className="w-6 h-6 text-[#00f0ff]" />
  },
  {
    title: "Air-Water Transition",
    desc: "Seamless switch to toroidal electric propulsion for maritime missions.",
    icon: <Waves className="w-6 h-6 text-[#00f0ff]" />
  },
  {
    title: "Safe Evacuation & Return",
    desc: "High-speed cruise back to base for immediate medical handoff.",
    icon: <PlaneLanding className="w-6 h-6 text-[#00f0ff]" />
  }
];

export const HybridRescueArchitecture = () => {
  return (
    <section className="py-32 bg-[#02050a] border-t border-white/5 relative overflow-hidden">
      <UrgentBackground />
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase mb-4">Mission Workflow</h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            HYBRID RESCUE ARCHITECTURE
          </h2>
        </div>

        <div className="relative">
          {/* Horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent -translate-y-1/2 z-0"></div>
          
          {/* Vertical connecting line for mobile */}
          <div className="block lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#00f0ff]/30 to-transparent z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {WORKFLOW_STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-row lg:flex-col items-start lg:items-center gap-6 group"
              >
                {/* Node */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#050b14] border border-[#00f0ff]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] group-hover:border-[#00f0ff] transition-all duration-500 z-10 relative">
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#00f0ff] text-black font-mono text-[10px] font-bold flex items-center justify-center z-20">
                    {idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:text-center pt-2 lg:pt-0">
                  <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-2 group-hover:text-[#00f0ff] transition-colors">{step.title}</h4>
                  <p className="text-xs font-mono text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
