import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Radio, Layers, Crosshair } from 'lucide-react';

const COLORS = {
  blue: '#00f0ff',   // Electrical
  orange: '#ff9900', // Fuel
  green: '#00ff66',  // Propulsion
  red: '#ff3333',    // Hydraulic
  purple: '#b026ff'  // Sensors
};

const TABS = [
  { id: 'propulsion', label: 'Propulsion Architecture', icon: Settings },
  { id: 'sensors', label: 'Sensor Fusion Layout', icon: Radio },
  { id: 'transition', label: 'Transition Workflow', icon: Layers },
  { id: 'payload', label: 'Extraction & Payload', icon: Crosshair }
];

const PROPULSION_ANNOTATIONS = [
  { id: 't-front', labelX: 15, labelY: 15, label: 'Front Vectoring Turbofans', color: 'green', details: ['2x Retractable mini turbofans', '360° Y-Z rotation, 180° X-Y rotation', 'VTOL & Cruise modes'] },
  { id: 't-rear', labelX: 85, labelY: 15, label: 'Rear Vectoring Turbofans', color: 'green', details: ['2x Retractable mini turbofans', 'Offset height mounting', 'Sealed sliding flaps'] },
  { id: 'p-front', labelX: 15, labelY: 85, label: 'Front Toroidal Propellers', color: 'green', details: ['2x Electric drive only', 'Retractable into sealed chambers', '360° Y-Z rotation'] },
  { id: 'p-rear', labelX: 85, labelY: 85, label: 'Rear Toroidal Propellers', color: 'green', details: ['2x Electric drive only', 'Retractable into sealed chambers'] },
  { id: 'wings', labelX: 50, labelY: 10, label: 'Foldable Wings', color: 'blue', details: ['Deployed only during horizontal cruise', 'Retracted inside body otherwise'] },
  { id: 'legs', labelX: 50, labelY: 90, label: 'Retractable Legs', color: 'orange', details: ['Four legs for landing/walking', 'No wheels or tyres', 'Retract inside body after take-off'] },
];

const SENSOR_ANNOTATIONS = [
  { id: 'nose', labelX: 20, labelY: 20, label: 'Nose Section', color: 'purple', details: ['Pyrex glass nose', 'Computers and avionics', 'Primary sensor cluster'] },
  { id: 'belly', labelX: 50, labelY: 85, label: 'Lower Belly', color: 'purple', details: ['Bio-acoustic sensors', 'Ultrasonic sensors', 'Chemical (CO2/VOC)', 'Ground penetrating radar'] },
  { id: 'sides', labelX: 15, labelY: 70, label: 'Sides', color: 'purple', details: ['SONAR arrays', 'Acoustic positioning system'] },
  { id: 'mid', labelX: 80, labelY: 20, label: 'Mid Body & Tail', color: 'purple', details: ['Environmental sensors', 'Thermal management', 'CNS + INS modules', 'Comm systems (Sat, RF, Mesh)'] },
];

const EXTRACTION_ANNOTATIONS = [
  { id: 'bay', labelX: 50, labelY: 15, label: 'Modular Payload Bay', color: 'blue', details: ['Bottom central belly location', '300 kg capacity', 'Detachable and sealed', 'Sliding curved belly door'] },
  { id: 'arms', labelX: 50, labelY: 85, label: 'Bionic Octopus Arms', color: 'red', details: ['Four arms inside payload chamber', 'Vacuum suction pads', 'Used to pickup/deploy payload safely'] },
  { id: 'obs1', labelX: 15, labelY: 50, label: 'Obstacle Removal Arm 1', color: 'orange', details: ['Five robotic tentacles to grip obstacles', 'Housed in side lower flap door'] },
  { id: 'obs2', labelX: 85, labelY: 50, label: 'Obstacle Removal Arm 2', color: 'orange', details: ['Circular cutter, shovel, pointed sharp structure', 'Housed in side lower flap door'] },
];

const TRANSITION_STAGES = [
  { title: 'Stage 1: High-Speed Cruise', img: 'https://picsum.photos/seed/xenbus-cruise/800/400', desc: ['Foldable wings fully deployed for lift', 'Turbofans rotated 90° backward for forward thrust', 'Control Logic: Aerodynamic flight mode'] },
  { title: 'Stage 2: Deceleration & Hover', img: 'https://picsum.photos/seed/xenbus-hover/800/400', desc: ['Wings retract into the main body', 'Turbofans rotate 90° downward', 'Control Logic: VTOL stabilization'] },
  { title: 'Stage 3: Surface Approach', img: 'https://picsum.photos/seed/xenbus-approach/800/400', desc: ['Vehicle lowers to just above water level', 'Turbofans provide 100% of required lift', 'Control Logic: Precision altitude hold'] },
  { title: 'Stage 4: Dual Propulsion Phase', img: 'https://picsum.photos/seed/xenbus-dual-prop/800/400', desc: ['Toroidal propellers deploy from sealed chambers', 'Toroidal thrust increases as turbofan thrust decreases', 'Control Logic: Thrust handoff synchronization'] },
  { title: 'Stage 5: Aquatic Handoff', img: 'https://picsum.photos/seed/xenbus-handoff/800/400', desc: ['Turbofans shut down and retract into sealed flaps', 'Toroidal propellers take over 100% of hover lift', 'Control Logic: Aquatic buoyancy prep'] },
  { title: 'Stage 6: Submersion', img: 'https://picsum.photos/seed/xenbus-submerged/800/400', desc: ['Toroidal thrust gradually decreases', 'Vehicle descends smoothly into the water', 'Control Logic: Full hydrodynamic navigation'] },
];

const GRID_PATTERN = `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpattern id='smallGrid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M10 0L0 0L0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='0.5'/%3E%3C/pattern%3E%3Crect width='40' height='40' fill='url(%23smallGrid)'/%3E%3Cpath d='M40 0L0 0L0 40' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`;

export const EngineeringBlueprints = () => {
  const [activeTab, setActiveTab] = useState('propulsion');

  const renderAnnotations = (annotations: any[]) => (
    <>
      {annotations.map((ann) => (
        <div
          key={`label-${ann.id}`}
          className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${ann.labelX}%`, top: `${ann.labelY}%` }}
        >
          <div className="bg-[#050b14]/95 border p-3 rounded-lg w-max max-w-[250px]" style={{ borderColor: `${COLORS[ann.color as keyof typeof COLORS]}`, boxShadow: `0 0 15px ${COLORS[ann.color as keyof typeof COLORS]}80` }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[ann.color as keyof typeof COLORS], boxShadow: `0 0 8px ${COLORS[ann.color as keyof typeof COLORS]}` }} />
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">{ann.label}</h4>
            </div>
            <ul className="space-y-1">
              {ann.details?.map((detail: string, i: number) => (
                <li key={i} className="text-[10px] font-mono text-gray-400 leading-tight whitespace-normal break-words">• {detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );

  const renderTransitionWorkflow = () => (
    <div className="absolute inset-0 overflow-y-auto p-8 custom-scrollbar bg-[#02050a]">
      <div className="max-w-4xl mx-auto relative">
        {/* Central glowing line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00f0ff]/0 via-[#00f0ff]/50 to-[#00f0ff]/0 transform md:-translate-x-1/2"></div>

        <div className="space-y-16 relative z-10 py-12">
          {TRANSITION_STAGES.map((stage, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`flex-1 w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'} pl-16 md:pl-0`}>
                  <div className="bg-[#050b14]/80 backdrop-blur-md border border-[#00f0ff]/20 p-6 rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.05)] hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] hover:border-[#00f0ff]/50 transition-all duration-500 group">
                    <h4 className="font-display text-[#00f0ff] text-xl font-bold mb-3 uppercase tracking-widest group-hover:text-white transition-colors">{stage.title}</h4>
                    <ul className="space-y-2">
                      {stage.desc.map((d, j) => (
                        <li key={j} className="text-xs font-mono text-gray-400 whitespace-normal break-words flex items-start gap-2">
                          <span className="text-[#00f0ff] mt-0.5 opacity-50">▹</span>
                          <span className={d.startsWith('Control Logic:') ? 'text-[#00f0ff]/80 font-bold' : ''}>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-0 md:relative md:left-auto w-14 h-14 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#02050a] border-2 border-[#00f0ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.5)] z-10 relative">
                    <span className="font-mono text-xs font-bold text-white">0{i + 1}</span>
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full border border-[#00f0ff] animate-ping opacity-20"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Central Equation Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#0a1128]/80 backdrop-blur-md border border-[#00f0ff]/40 rounded-xl p-8 flex items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.1)]"
        >
           <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: GRID_PATTERN }}></div>
           <div className="text-center relative z-10">
             <h4 className="font-mono text-[#00f0ff] text-sm mb-3 uppercase tracking-widest animate-pulse">Deterministic AI-Supervised Transition Logic</h4>
             <div className="font-display text-3xl md:text-4xl font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
               TOTAL UPWARD THRUST <span className="text-[#00f0ff] animate-pulse">=</span> WEIGHT
             </div>
             <p className="font-mono text-xs text-gray-400 mt-4 uppercase tracking-widest">(Continuous Thrust Handoff Synchronization)</p>
           </div>
        </motion.div>
      </div>
    </div>
  );

  return (
    <section className="py-32 bg-[#02050a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center mb-12">
          <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase mb-4">Technical Schematics</h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">ENGINEERING BLUEPRINTS</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 border ${
                  isActive 
                    ? 'bg-[#00f0ff]/10 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.2)]' 
                    : 'bg-black/50 border-white/10 text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Blueprint Display Area */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#050b14] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none z-0" style={{ backgroundImage: GRID_PATTERN }}></div>

              {activeTab === 'transition' ? (
                renderTransitionWorkflow()
              ) : (
                <>
                  {/* Base Image */}
                  <img
                    src={
                      activeTab === 'propulsion' ? 'https://i.ibb.co/Z1VgDJHs/Right-Side-View-of-Xenbus-in-Hanger.jpg' :
                      activeTab === 'sensors' ? 'https://i.ibb.co/gF6ftmxB/View-from-Front-of-Xenbus-at-Hanger.jpg' :
                      'https://i.postimg.cc/nL4mcJXN/Dedicated_Victim_Carriage_Chamber_2.png'
                    }
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-150 mix-blend-screen z-10"
                    alt="Engineering Blueprint"
                    referrerPolicy="no-referrer"
                  />

                  {/* Annotations */}
                  {activeTab === 'propulsion' && renderAnnotations(PROPULSION_ANNOTATIONS)}
                  {activeTab === 'sensors' && renderAnnotations(SENSOR_ANNOTATIONS)}
                  {activeTab === 'payload' && renderAnnotations(EXTRACTION_ANNOTATIONS)}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 240, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 240, 255, 0.5);
        }
      `}} />
    </section>
  );
};
