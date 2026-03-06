import React from 'react';
import { motion } from 'framer-motion';
import { PlaneTakeoff, Radar, Cpu, Wrench, ShieldCheck, ArrowUpRight } from 'lucide-react';

const SCENARIO_STEPS = [
  {
    title: "Launch",
    desc: "XENBUS launches from a nearby base.",
    icon: <PlaneTakeoff className="w-6 h-6 text-white" />
  },
  {
    title: "Scan",
    desc: "The system scans the disaster zone using radar and LiDAR.",
    icon: <Radar className="w-6 h-6 text-white" />
  },
  {
    title: "Identify",
    desc: "AI identifies possible victim locations beneath rubble.",
    icon: <Cpu className="w-6 h-6 text-white" />
  },
  {
    title: "Clear",
    desc: "AISARU clears debris using its obstacle removal system.",
    icon: <Wrench className="w-6 h-6 text-white" />
  },
  {
    title: "Secure",
    desc: "The victim is secured inside the onboard carriage chamber.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />
  },
  {
    title: "Evacuate",
    desc: "The system evacuates the victim to safety.",
    icon: <ArrowUpRight className="w-6 h-6 text-white" />
  }
];

export const ExampleScenarioSection = () => {
  return (
    <section className="py-32 relative bg-[#050507] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase mb-4">Example Scenario</h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            EARTHQUAKE RESCUE OPERATION
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            A step-by-step visual timeline of a typical XENBUS deployment in a collapsed urban environment.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative">
            {SCENARIO_STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Node */}
                <div className="w-16 h-16 rounded-full bg-[#0a1128] border-2 border-[#00f0ff]/50 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:border-[#00f0ff] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300">
                  {step.icon}
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full border border-[#00f0ff] opacity-0 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                </div>
                
                <h3 className="font-mono font-bold text-[#00f0ff] uppercase tracking-wider mb-3">{step.title}</h3>
                <p className="text-xs text-gray-400 font-mono leading-relaxed max-w-[150px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
