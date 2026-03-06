import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, Waves, Wind, Cpu, Crosshair, Map, 
  Activity, Zap, Eye, Navigation, Database, Radio, 
  Flame, Droplets, Shield, Plane, ArrowRight, Download, 
  Play, ChevronRight, Menu, X, Globe, Anchor, Target, ArrowUp, Clock, Search, Biohazard
} from 'lucide-react';
import { VictimChamber } from './VictimChamber';
import { AirToWaterTransition } from './components/AirToWaterTransition';
import { EngineeringBlueprints } from './components/EngineeringBlueprints';
import { UrgentBackground } from './components/UrgentBackground';

import { HybridRescueArchitecture } from './components/HybridRescueArchitecture';
import { ExtremeEnvironmentsSection } from './components/ExtremeEnvironmentsSection';

import { GlobalImpactSection } from './components/GlobalImpactSection';
import { ExampleScenarioSection } from './components/ExampleScenarioSection';
import { HighlightsSection } from './components/HighlightsSection';
import { GlobalDisasterStats } from './components/GlobalDisasterStats';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#050507] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
          {/* Base Logo (Dimmed) */}
          <motion.img 
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 0.3, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            src="https://i.postimg.cc/76S35Rp3/Xenbus-Logo-Transparent-Background.png" 
            alt="XENBUS" 
            className="w-full h-full object-contain brightness-0 invert"
          />
          
          {/* Overlay Logo with Clip Path for Scanner Effect */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          >
             <img 
              src="https://i.postimg.cc/76S35Rp3/Xenbus-Logo-Transparent-Background.png" 
              alt="XENBUS" 
              className="w-full h-full object-contain brightness-0 invert drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]"
            />
          </motion.div>

          {/* Scanner Line */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-[#00f0ff] shadow-[0_0_20px_#00f0ff,0_0_10px_#00f0ff]"
            initial={{ top: "100%", opacity: 0 }}
            animate={{ top: ["100%", "0%"], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* Energy Pulse Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#00f0ff]/30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
          />
        </div>
        
        {/* Loading Text / Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="font-mono text-xs text-[#00f0ff] tracking-[0.3em] animate-pulse">
            SYSTEM INITIALIZING...
          </div>
          <div className="w-48 h-[1px] bg-[#00f0ff]/20 mt-2 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#00f0ff]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
          </div>
          <div className="flex justify-between w-48 mt-1 font-mono text-[8px] text-gray-500">
            <span>V 1.0.4</span>
            <span>SECURE</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050507]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex items-center group cursor-pointer relative py-2"
        >
          <div className="relative overflow-hidden flex items-center">
            <img 
              src="https://i.postimg.cc/76S35Rp3/Xenbus-Logo-Transparent-Background.png" 
              alt="XENBUS" 
              className="h-10 md:h-12 w-auto object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-[sheen_1.5s_ease-in-out]" />
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          <a href="#problem" className="text-gray-400 hover:text-[#00f0ff] transition-colors">PROBLEM</a>
          <a href="#solution" className="text-gray-400 hover:text-[#00f0ff] transition-colors">SOLUTION</a>
          <a href="#ai" className="text-gray-400 hover:text-[#00f0ff] transition-colors">INTELLIGENCE</a>
          <a href="#tech" className="text-gray-400 hover:text-[#00f0ff] transition-colors">TECHNOLOGY</a>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 border border-[#00f0ff]/50 text-[#00f0ff] hover:bg-[#00f0ff]/10 rounded-sm transition-all glow-box-cyan"
          >
            CONTACT US
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0b10] border-b border-white/10 p-6 flex flex-col gap-4 font-mono text-sm">
          <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-[#00f0ff]">PROBLEM</a>
          <a href="#solution" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-[#00f0ff]">SOLUTION</a>
          <a href="#ai" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-[#00f0ff]">INTELLIGENCE</a>
          <a href="#tech" onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-[#00f0ff]">TECHNOLOGY</a>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050507]/80 to-[#050507]"></div>
      
      {/* Abstract 3D Representation - Dynamic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none overflow-hidden z-0">
        {/* Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
          <img 
            src="https://i.postimg.cc/76S35Rp3/Xenbus-Logo-Transparent-Background.png" 
            alt="" 
            className="w-[80%] max-w-5xl object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Radar Sweep */}
        <div className="absolute w-[800px] h-[800px] rounded-full border border-[#00f0ff]/10">
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] origin-top-left bg-gradient-to-br from-[#00f0ff]/20 to-transparent animate-[spin_3s_linear_infinite]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
        </div>
        
        <div className="w-[600px] h-[600px] border border-red-500/20 rounded-full animate-[spin_4s_linear_infinite] border-dashed"></div>
        <div className="absolute w-[400px] h-[400px] border-t-2 border-r-2 border-[#00f0ff]/40 rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
        <div className="absolute w-[200px] h-[200px] border-2 border-[#0066ff] rounded-full animate-pulse glow-box-cyan"></div>
        
        {/* Floating Particles/Nodes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00f0ff] rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)", 
                transition: { duration: 0.8, ease: "easeOut" } 
              }
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              textShadow: [
                "0 0 10px rgba(0,240,255,0.2)",
                "0 0 30px rgba(0,240,255,0.8)",
                "0 0 10px rgba(0,240,255,0.2)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
            style={{ fontFamily: '"Courier New", Courier, monospace' }} 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight uppercase"
          >
            REDEFINING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff] glow-text">SEARCH & RESCUE</span><br/>
            ACROSS AIR, LAND AND WATER
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-12 font-light bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] via-white to-[#00f0ff] animate-pulse"
          >
            The world's first fully hybrid AI-powered rescue system capable of seamless aerial and underwater missions.
          </motion.p>
          
          
        </motion.div>
      </div>

      {/* Bottom HUD Elements */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end font-mono text-[10px] text-gray-500 hidden md:flex">
        <div>
          <p>LAT: 34.0522° N</p>
          <p>LONG: 118.2437° W</p>
          <p>ALT: 15,000 FT / DEPTH: 500M</p>
        </div>
        <div className="text-right">
          <p>SYS: NOMINAL</p>
          <p>PWR: HYBRID ACTIVE</p>
          <p>AI: OVERWATCH ENGAGED</p>
        </div>
      </div>
    </section>
  );
};

const MissionDemonstration = () => {
  return (
    <section className="py-32 relative bg-gradient-to-b from-[#050507] to-[#0a0b10] border-t border-white/5 overflow-hidden">
      {/* Subtle animated particles background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00f0ff] rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            A GLIMPSE OF <span className="text-[#00f0ff]">XENBUS</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto relative group"
        >
          {/* Glassmorphism container with subtle glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff]/20 to-transparent rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative glass-panel rounded-2xl border border-[#00f0ff]/20 overflow-hidden bg-black/50 backdrop-blur-xl p-2">
            {/* 16:9 Aspect Ratio Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/Kdwob5JDYW0?rel=0" 
                title="XENBUS Mission Demonstration" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    {
      value: "160M+",
      title: "GLOBAL IMPACT",
      subtitle: "People Affected Annually",
      desc: "UNDRR estimates 160 million people are impacted by climate-related and geological disasters each year globally.",
      color: "from-white to-gray-500",
      glow: "group-hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]",
      accent: "bg-white",
      icon: <Globe className="w-6 h-6" />
    },
    {
      value: "6hrs",
      title: "VICTIM SURVIVABILITY",
      subtitle: "The Critical Window",
      desc: "Average response time to remote disasters exceeds 4–12 hours. Victim survivability drops 80% after 6 hours.",
      color: "from-red-500 to-red-900",
      glow: "group-hover:shadow-[0_0_50px_rgba(239,68,68,0.4)]",
      accent: "bg-red-500",
      icon: <Clock className="w-6 h-6" />
    },
    {
      value: "40%",
      title: "RESCUER RISK",
      subtitle: "Casualty Rate",
      desc: "Secondary disasters kill or injure up to 40% of first responders in active collapse and flood rescue operations.",
      color: "from-orange-400 to-orange-700",
      glow: "group-hover:shadow-[0_0_50px_rgba(249,115,22,0.4)]",
      accent: "bg-orange-500",
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      value: "ZERO",
      title: "TECH GAP",
      subtitle: "Existing Hybrid Systems",
      desc: "Aerial drones cannot enter water. Underwater vehicles cannot fly. No existing system bridges this gap.",
      color: "from-[#00f0ff] to-[#0060ff]",
      glow: "group-hover:shadow-[0_0_50px_rgba(0,240,255,0.4)]",
      accent: "bg-[#00f0ff]",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-40 relative bg-black overflow-hidden">
      <UrgentBackground />
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,25,1)_0%,rgba(0,0,0,1)_100%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Moving Light Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[1px] w-12 bg-red-600"></div>
              <span className="font-mono text-red-500 text-sm tracking-[0.3em] uppercase">Critical Intelligence</span>
            </motion.div>
            <h2 className="font-orbitron text-4xl md:text-6xl font-black text-white leading-none tracking-tighter">
              THE BRUTAL <span className="text-red-600">REALITY</span> OF DISASTER RESPONSE
            </h2>
          </div>
          <div className="text-right">
            <p className="font-mono text-gray-500 text-sm uppercase tracking-widest">System Status: Active</p>
            <p className="font-mono text-red-500 text-sm uppercase tracking-widest">Threat Level: Critical</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              className={`group relative p-10 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-xl transition-all duration-500 ${stat.glow} hover:border-white/30 cursor-crosshair overflow-hidden`}
            >
              {/* Animated Background Gradient on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${stat.color}`}></div>
              
              {/* Icon & Index */}
              <div className="flex justify-between items-start mb-12">
                <div className={`p-3 rounded-2xl ${stat.accent}/10 text-white group-hover:scale-110 transition-transform duration-500`}>
                  {stat.icon}
                </div>
                <span className="font-mono text-white/20 text-4xl font-black group-hover:text-white/40 transition-colors">0{idx + 1}</span>
              </div>

              {/* Big Number with Gradient */}
              <div className="relative mb-6">
                <h3 className={`font-orbitron text-6xl md:text-7xl font-black tracking-tighter bg-gradient-to-br ${stat.color} bg-clip-text text-transparent group-hover:scale-110 origin-left transition-transform duration-500`}>
                  {stat.value}
                </h3>
                <div className={`absolute -bottom-2 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ${stat.accent}`}></div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <h4 className="font-orbitron text-xl font-bold text-white mb-1 tracking-tight group-hover:text-red-500 transition-colors">
                  {stat.title}
                </h4>
                <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em]">{stat.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed font-light opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {stat.desc}
              </p>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`w-1 h-1 rounded-full ${stat.accent}`}></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const disasters = [
    { icon: <Activity className="text-red-500" />, name: "Earthquakes", desc: "Collapsed debris fields block ground access. Survivors face 72-hour survival windows in void spaces.", color: "red" },
    { icon: <Waves className="text-blue-500" />, name: "Floods & Tsunamis", desc: "Rapidly rising waters render conventional rescue teams immobile. Aerial units cannot retrieve from submerged structures.", color: "blue" },
    { icon: <Flame className="text-orange-500" />, name: "Industrial Accidents", desc: "Infernos with structural collapse create environments impossible for human teams to navigate safely.", color: "orange" },
    { icon: <Anchor className="text-teal-500" />, name: "Shipwrecks", desc: "Maritime disasters require simultaneous aerial and underwater coordination — no single platform exists.", color: "teal" },
    { icon: <ShieldAlert className="text-yellow-500" />, name: "Chemical Disasters", desc: "Toxic environments expose rescue personnel to lethal risk. Remote operation is essential — not optional.", color: "yellow" },
    { icon: <Crosshair className="text-purple-500" />, name: "Battlefield Zones", desc: "Active combat areas and minefields make human evacuation of casualties tactically impossible.", color: "purple" },
    { icon: <Map className="text-green-500" />, name: "Extreme Terrains", desc: "Arctic, jungle, and mountain environments outpace human reach entirely, leaving victims without rescue options.", color: "green" },
    { icon: <Globe className="text-indigo-500" />, name: "Remote Disasters", desc: "Geographic isolation means no landing zones — traditional airlift cannot reach these zones at all.", color: "indigo" },
  ];

  return (
    <section id="problem" className="relative py-40 overflow-hidden bg-black">
      <UrgentBackground />
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop" 
          alt="Disaster Background" 
          className="w-full h-full object-cover opacity-30 scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        
        {/* Ember Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full blur-[1px]"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "100%", 
                opacity: Math.random() 
              }}
              animate={{ 
                y: "-10%", 
                opacity: [0, 1, 0],
                x: (Math.random() * 100 + (Math.random() - 0.5) * 10) + "%"
              }}
              transition={{ 
                duration: Math.random() * 5 + 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-red-500/30 bg-red-500/10 rounded-full mb-8"
          >
            <span className="font-mono text-[10px] text-red-500 tracking-[0.3em] uppercase">Critical Response Failure</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-7xl md:text-[12rem] font-black mb-12 leading-[0.8] tracking-tighter"
          >
            <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">WHEN SECONDS</span>
            <span 
              className="block text-transparent bg-clip-text bg-cover bg-center animate-pulse"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?q=80&w=2070&auto=format&fit=crop)',
                filter: 'drop-shadow(0 0 40px rgba(255, 68, 0, 0.6)) contrast(1.5)',
                WebkitTextStroke: '1px rgba(255, 68, 0, 0.3)'
              }}
            >
              DECIDE SURVIVAL
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative max-w-5xl"
          >
            <p className="font-orbitron text-2xl md:text-4xl text-gray-300 font-light leading-relaxed tracking-normal">
              The  Difference  Between  Rescue  And  Tragedy  Is  Measured  In  Minutes. 
              <span className="text-white font-medium drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">  Lives  Hang  In  The  Balance  </span> 
              While  Rescue  Fights 
              <span className="text-red-500 font-medium italic drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">  Distance,  Debris,  Danger  And  Delay.</span>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-red-600 mt-12"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {disasters.map((item, index) => {
            const colorMap: Record<string, string> = {
              red: "border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
              blue: "border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
              orange: "border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-500/60 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
              teal: "border-teal-500/30 shadow-[0_0_20px_rgba(20,184,166,0.15)] hover:border-teal-500/60 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]",
              yellow: "border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:border-yellow-500/60 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]",
              purple: "border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
              green: "border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:border-green-500/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
              indigo: "border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:border-indigo-500/60 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            };
            const bgMap: Record<string, string> = {
              red: "bg-red-500/5 group-hover:bg-red-500/10",
              blue: "bg-blue-500/5 group-hover:bg-blue-500/10",
              orange: "bg-orange-500/5 group-hover:bg-orange-500/10",
              teal: "bg-teal-500/5 group-hover:bg-teal-500/10",
              yellow: "bg-yellow-500/5 group-hover:bg-yellow-500/10",
              purple: "bg-purple-500/5 group-hover:bg-purple-500/10",
              green: "bg-green-500/5 group-hover:bg-green-500/10",
              indigo: "bg-indigo-500/5 group-hover:bg-indigo-500/10"
            };
            const iconColorMap: Record<string, string> = {
              red: "text-red-500/70 group-hover:text-red-500",
              blue: "text-blue-500/70 group-hover:text-blue-500",
              orange: "text-orange-500/70 group-hover:text-orange-500",
              teal: "text-teal-500/70 group-hover:text-teal-500",
              yellow: "text-yellow-500/70 group-hover:text-yellow-500",
              purple: "text-purple-500/70 group-hover:purple-500",
              green: "text-green-500/70 group-hover:green-500",
              indigo: "text-indigo-500/70 group-hover:indigo-500"
            };

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`glass-panel p-8 flex flex-col items-start text-left border rounded-2xl transition-all group relative overflow-hidden ${colorMap[item.color]}`}
              >
                <div className={`absolute inset-0 transition-colors ${bgMap[item.color]}`}></div>
                <div className={`mb-4 transition-colors group-hover:scale-110 duration-300 relative z-10 ${iconColorMap[item.color]}`}>
                  {React.cloneElement(item.icon, { className: "w-10 h-10" })}
                </div>
                <h3 className="font-bold text-white mb-2 tracking-tight uppercase relative z-10">{item.name}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {[
            { 
              title: "THE MOBILIZATION GAP", 
              desc: "Sixty minutes can save a life — the Golden Hour. Traditional rescue takes hours. The clock is winning", 
              stat: "4-6hr",
              statLabel: "Avg. Deployment"
            },
            { 
              title: "THE SACRIFICE RATIO", 
              desc: "The danger doesn’t stop at the victims. The same collapse that traps them can claim up to 40% of the rescuers who come to save them", 
              stat: "40%",
              statLabel: "Rescuer Casualty Risk"
            },
            { 
              title: "THE TERRAIN BARRIER", 
              desc: "When infrastructure fails, ground access is severed. Aerial scouting is easy, but physical intervention from the air is currently impossible for conventional aerial systems.", 
              stat: "90%",
              statLabel: "Access Limitation"
            },
            { 
              title: "NO AI DECISION LAYER", 
              desc: "Existing systems rely on manual teleoperation, imposing cognitive limits that cost critical seconds.", 
              stat: "Manual",
              statLabel: "Control Method"
            }
          ].map((problem, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-red-600 to-transparent"></div>
              <div className="pl-6">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-display text-4xl font-bold text-white/20">0{idx + 1}</span>
                  <h3 className="font-display text-xl font-bold text-white tracking-wider group-hover:text-red-500 transition-colors">{problem.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 font-light">{problem.desc}</p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-mono font-bold text-red-500">{problem.stat}</div>
                  <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest leading-tight">{problem.statLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const CinematicIntro = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/CL5bCX2c/Air_to_Water_Transition.png" 
          alt="XENBUS Air to Water Transition" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-[#050507]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-transparent to-[#050507]"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            ENTER XENBUS
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-mono tracking-wide max-w-3xl mx-auto leading-relaxed uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-white to-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            The World's First Fully Hybrid, Multi-Domain Autonomous Rescue Platform. Engineered To Operate Where Human Responders Cannot
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const features = [
    { 
      title: "VTOL & Hover", 
      desc: "Four diagonal, offset retractable mini turbofans (front lower, rear higher) rotate 90° downward. All four engines engage for vertical thrust, precision hover, ascent, descent, and heavy lift.",
      icon: <ArrowUp className="w-5 h-5 text-[#00f0ff]" />
    },
    { 
      title: "High-Speed Cruise", 
      desc: "Turbofans rotate 90° backward for pure forward thrust. Foldable mid-body wings deploy only during horizontal cruise. Two engines can idle for maximum efficiency.",
      icon: <Plane className="w-5 h-5 text-[#00f0ff]" />
    },
    { 
      title: "Electric Underwater Propulsion", 
      desc: "100% electric toroidal propulsion. JP-8 engine only powers the HVDC generator. Zero mechanical engine-to-thruster linkage underwater.",
      icon: <Waves className="w-5 h-5 text-[#00f0ff]" />
    },
    { 
      title: "Retractable Landing", 
      desc: "Four retractable legs deploy from flap chambers located at the bottom part of the hull at the four diagonals. Zero wheels. Zero tyres. Maximum stability on uneven terrain.",
      icon: <Anchor className="w-5 h-5 text-[#00f0ff]" />
    }
  ];

  return (
    <section id="solution" className="py-32 relative border-t border-white/5 bg-[#050507] overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            RETRACTABLE QUAD 360° VECTORING <br/><span className="text-[#00f0ff]">TURBOFAN VTOL ARCHITECTURE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            A fully hybrid multi-domain rescue platform. Rotor-free VTOL architecture engineered for deterministic precision across air and water.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Features 1 & 2 */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            {features.slice(0, 2).map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-6 border-l border-[#00f0ff]/30 hover:border-[#00f0ff] transition-colors group"
              >
                <div className="absolute left-[-4px] top-0 w-2 h-2 bg-[#00f0ff] rounded-full shadow-[0_0_10px_#00f0ff]"></div>
                <div className="flex items-center gap-4 mb-2">
                  <h4 className="font-mono font-bold text-white tracking-widest uppercase text-sm">{feature.title}</h4>
                </div>
                <p className="text-sm text-gray-400 font-mono leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Column - Diagram/Image */}
          <div className="lg:col-span-4 relative flex justify-center items-center h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/5 to-transparent rounded-full blur-3xl"></div>
            
            {/* Technical Circles */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-full h-full border border-[#00f0ff]/20 rounded-full animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute w-[85%] h-[85%] border border-dashed border-[#00f0ff]/30 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
              <div className="absolute w-[70%] h-[70%] border border-[#0066ff]/20 rounded-full"></div>
              
              {/* Crosshairs */}
              <div className="absolute w-full h-[1px] bg-[#00f0ff]/20"></div>
              <div className="absolute h-full w-[1px] bg-[#00f0ff]/20"></div>

              <img 
                src="https://i.postimg.cc/76S35Rp3/Xenbus-Logo-Transparent-Background.png" 
                alt="XENBUS Architecture Diagram" 
                className="absolute w-[80%] object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.3)] z-10"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* HUD Elements */}
            <div className="absolute top-10 left-0 font-mono text-[10px] text-[#00f0ff] bg-black/80 px-2 py-1 border border-[#00f0ff]/30 backdrop-blur-sm">FWD TURBOFANS (LOWER)</div>
            <div className="absolute bottom-10 right-0 font-mono text-[10px] text-[#00f0ff] bg-black/80 px-2 py-1 border border-[#00f0ff]/30 backdrop-blur-sm">AFT TURBOFANS (HIGHER)</div>
            <div className="absolute top-10 right-0 font-mono text-[10px] text-gray-400 bg-black/80 px-2 py-1 border border-white/10 backdrop-blur-sm">FOLDABLE CRUISE WINGS</div>
            <div className="absolute bottom-10 left-0 font-mono text-[10px] text-gray-400 bg-black/80 px-2 py-1 border border-white/10 backdrop-blur-sm">RETRACTABLE TOROIDAL PROPS</div>
          </div>

          {/* Right Column - Features 3, 4, 5 */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            {features.slice(2, 5).map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pr-6 border-r border-[#0066ff]/30 hover:border-[#0066ff] transition-colors group text-right"
              >
                <div className="absolute right-[-4px] top-0 w-2 h-2 bg-[#0066ff] rounded-full shadow-[0_0_10px_#0066ff]"></div>
                <div className="flex items-center justify-end gap-4 mb-2">
                  <h4 className="font-mono font-bold text-white tracking-widest uppercase text-sm">{feature.title}</h4>
                </div>
                <p className="text-sm text-gray-400 font-mono leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



const SystemArchitectureSection = () => {
  const techCategories = [
    {
      title: "NAVIGATION & GUIDANCE",
      icon: <Navigation className="w-5 h-5 text-[#00f0ff]" />,
      items: ["GNSS / Multi-constellation GPS", "Terrain Contour Matching (TERCOM)", "Inertial Navigation System (INS)", "Real-Time Kinematic (RTK)", "Digital Scene Matching (DSMAC)", "Neural SLAM Mapping", "A* Path Planning", "Transformer Route Optimization"]
    },
    {
      title: "AI INTELLIGENCE FRAMEWORK",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      items: ["Real-Time Multi-Variable Decision Engine", "Victim Detection Algorithms", "Neural SLAM-Based Mapping", "Path Optimization Algorithms", "Predictive Structural Collapse Modeling", "Swarm Coordination Protocol", "Autonomous Transition Logic", "Dynamic Threat Assessment", "Adaptive Flight Control", "Bio-Signature Recognition"]
    },
    {
      title: "SENSOR FUSION SUITE",
      icon: <Radio className="w-5 h-5 text-white" />,
      items: ["360° LiDAR Point Cloud", "mmWave Radar (Wall Penetration)", "UWB Radar (Through-Structure)", "Multi-Beam SONAR", "Infrared / Thermal Arrays", "Ultrasonic Proximity", "Hyperspectral Cameras", "Atmospheric Gas Detection"]
    },
    {
      title: "STRUCTURAL ENGINEERING",
      icon: <ShieldAlert className="w-5 h-5 text-gray-400" />,
      items: ["Titanium-Alloy Exoskeleton", "Carbon Fiber Reinforced Hull", "Sealed Propulsion Chambers", "Offset Diagonal Turbofan Mounts", "Retractable Flap-Chamber Legs", "Thermal Shielding", "Hydrodynamic Drag Reduction", "Pressurized Compartments"]
    },
    {
      title: "MISSION DEPLOYMENT ARCHITECTURE",
      icon: <Crosshair className="w-5 h-5 text-gray-400" />,
      items: ["Launchpad Deployable", "Supervised-Autonomous", "Swarm Capable Sync", "Multi-Environment Transition", "Encrypted Datalink Telemetry", "Satellite Uplink Redundancy", "Anti-Jamming Protocols", "Automated Return-to-Base"]
    }
  ];

  return (
    <section id="technology" className="py-32 relative bg-[#050507] border-t border-white/5 overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            SYSTEM-LEVEL <span className="text-[#00f0ff]">ARCHITECTURE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono mb-6">
            Aerospace-grade engineering integrated with a supervised-autonomous framework.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative group ${idx === 4 ? 'lg:col-span-2 lg:w-1/2 lg:mx-auto' : ''}`}
            >
              {/* Technical corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff]/30 group-hover:border-[#00f0ff] transition-colors"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff]/30 group-hover:border-[#00f0ff] transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00f0ff]/30 group-hover:border-[#00f0ff] transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00f0ff]/30 group-hover:border-[#00f0ff] transition-colors"></div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/5 p-8 h-full hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                  <div className="p-2 bg-[#00f0ff]/10 rounded-sm group-hover:bg-[#00f0ff]/20 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="font-mono text-lg font-bold text-white tracking-widest uppercase">{category.title}</h3>
                  <div className="ml-auto font-mono text-[10px] text-[#00f0ff]/50">SYS.{idx + 1}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <div className="font-mono text-[10px] text-[#00f0ff]/40 mt-1 group-hover/item:text-[#00f0ff] transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span className="text-xs text-gray-400 font-mono tracking-wide leading-relaxed group-hover/item:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-8 border border-[#00f0ff]/20 rounded-2xl bg-black/40 backdrop-blur-sm">
          <h3 className="text-center font-mono text-sm text-[#00f0ff] mb-12 tracking-widest uppercase">Flight Computer Integration Map</h3>
          <div className="w-full max-w-4xl mx-auto aspect-[2/1] relative">
            <svg viewBox="0 0 800 400" className="w-full h-full">
              {/* Central Computer */}
              <rect x="300" y="150" width="200" height="100" rx="10" fill="#050b14" stroke="#00f0ff" strokeWidth="2" />
              <text x="400" y="205" textAnchor="middle" fill="white" className="font-mono text-xs font-bold">REAL-TIME FLIGHT COMPUTER</text>
              
              {/* Connections */}
              {[
                { label: "Sensor Arrays", x: 100, y: 50 },
                { label: "Propulsion", x: 700, y: 50 },
                { label: "Navigation", x: 100, y: 200 },
                { label: "Hydraulics", x: 700, y: 200 },
                { label: "Mission Control", x: 100, y: 350 },
                { label: "Communications", x: 700, y: 350 },
                { label: "Power System", x: 300, y: 350 },
                { label: "Rescue Ops", x: 500, y: 350 }
              ].map((sys, i) => {
                // Calculate line endpoints to connect to the edge of the central box
                const centerX = 400;
                const centerY = 200;
                const boxWidth = 200;
                const boxHeight = 100;
                
                // Determine intersection point on the box edge
                let lineX2 = centerX;
                let lineY2 = centerY;
                
                if (sys.x < 300) lineX2 = 300; // Left edge
                else if (sys.x > 500) lineX2 = 500; // Right edge
                else lineX2 = sys.x;
                
                if (sys.y < 150) lineY2 = 150; // Top edge
                else if (sys.y > 250) lineY2 = 250; // Bottom edge
                else lineY2 = sys.y;

                return (
                  <g key={i}>
                    <line x1={lineX2} y1={lineY2} x2={sys.x} y2={sys.y} stroke="#00f0ff" strokeWidth="1" strokeDasharray="4 2" />
                    <rect x={sys.x - 50} y={sys.y - 25} width="100" height="50" rx="5" fill="#050b14" stroke="#00f0ff" strokeWidth="1" />
                    <text x={sys.x} y={sys.y + 5} textAnchor="middle" fill="#00f0ff" className="font-mono text-[10px]">{sys.label}</text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-center font-mono text-sm text-gray-400 mb-8 tracking-widest">OPERATIONAL ENVIRONMENTS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: "DENSE SMOKE", icon: <Wind className="w-6 h-6 mb-3 text-gray-400" /> },
              { name: "ZERO VISIBILITY", icon: <Eye className="w-6 h-6 mb-3 text-gray-400" /> },
              { name: "UNDERWATER DEPTH", icon: <Waves className="w-6 h-6 mb-3 text-[#00f0ff]" /> },
              { name: "ARCTIC SNOW", icon: <Droplets className="w-6 h-6 mb-3 text-white" /> },
              { name: "COLLAPSED STRUCTURES", icon: <Database className="w-6 h-6 mb-3 text-orange-500" /> },
              { name: "CHEMICAL HAZARD ZONES", icon: <ShieldAlert className="w-6 h-6 mb-3 text-yellow-500" /> },
              { name: "NIGHT OPERATIONS", icon: <Eye className="w-6 h-6 mb-3 text-indigo-400" /> },
              { name: "GPS-DENIED ENVIRONMENTS", icon: <Map className="w-6 h-6 mb-3 text-red-400" /> }
            ].map((env, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, borderColor: '#00f0ff' }}
                className="glass-panel p-4 flex flex-col items-center justify-center text-center border border-white/10 rounded-xl group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00f0ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {env.icon}
                <span className="font-mono text-[10px] text-white font-bold tracking-wider z-10">{env.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const RetrievalSection = () => {
  const tools = [
    { 
      title: "HYDRAULIC OBSTACLE REMOVAL", 
      desc: "5-axis bionic tentacles with force-feedback. High-torque hydraulic actuators lift, push, and displace structural debris.", 
      icon: <Shield className="w-5 h-5 text-[#00f0ff]" /> 
    },
    { 
      title: "MULTI-FUNCTION DEBRIS CUTTING", 
      desc: "Modular rotary cutters, plasma torches, and hydraulic shears. Breaches reinforced concrete, metal, and composite materials.", 
      icon: <Zap className="w-5 h-5 text-[#00f0ff]" /> 
    },
    { 
      title: "SNOW EXCAVATION SYSTEM", 
      desc: "High-frequency ultrasonic cutters and shovel-scoop attachments. Rapidly displaces compacted snowpack for deep-avalanche extraction.", 
      icon: <Droplets className="w-5 h-5 text-[#00f0ff]" /> 
    },
    { 
      title: "EXTREME CONDITION RECOVERY", 
      desc: "Zero-contact, bio-secure retrieval. Operates in chemical, thermal, and biologically contaminated zones without cross-contamination.", 
      icon: <ShieldAlert className="w-5 h-5 text-red-500" /> 
    }
  ];

  return (
    <section id="retrieval" className="py-32 relative bg-[#050507] border-t border-white/5 overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            ACTIVE DEBRIS <span className="text-[#00f0ff]">CLEARANCE SYSTEM</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            XENBUS can remove debris and access trapped victims autonomously via modular, high-torque hydraulic effectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            {tools.map((tool, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group glass-panel p-6 border-l-2 border-[#00f0ff]/50 hover:border-[#00f0ff] transition-colors"
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  {tool.icon}
                </div>
                <h3 className="font-mono text-sm font-bold text-white tracking-widest uppercase mb-2">{tool.title}</h3>
                <p className="text-sm text-gray-400 font-mono leading-relaxed pr-8">{tool.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-7 relative h-[500px] flex items-center justify-center rounded-2xl border border-white/10 bg-black/40 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent opacity-50"></div>
            
            {/* Technical overlay elements */}
            <div className="absolute top-6 left-6 font-mono text-[10px] text-[#00f0ff]">SYS.RETRIEVAL.ACTIVE</div>
            <div className="absolute bottom-6 right-6 font-mono text-[10px] text-[#00f0ff]">FORCE_FEEDBACK: NOMINAL</div>
            
            {/* Crosshairs */}
            <div className="absolute w-full h-[1px] bg-[#00f0ff]/20"></div>
            <div className="absolute h-full w-[1px] bg-[#00f0ff]/20"></div>
            <div className="absolute w-64 h-64 border border-[#00f0ff]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-80 h-80 border border-dashed border-[#00f0ff]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

            <Target className="w-16 h-16 text-[#00f0ff]/30 absolute animate-pulse" />
            
            <div className="z-10 text-center mt-32">
              <div className="font-mono text-xs text-[#00f0ff] tracking-widest bg-black/80 px-4 py-2 rounded border border-[#00f0ff]/30 backdrop-blur-sm">
                MODULAR EFFECTOR MOUNT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionProfilesSection = () => {
  const applications = [
    { title: "Earthquake Rescue", desc: "Rapid deployment to collapse zones. First-in capability before human teams can safely enter.", icon: <Activity className="w-8 h-8 text-[#00f0ff]" /> },
    { title: "Flood Response", desc: "Aerial-to-water transition enables rescue from rooftops, debris fields, and submerged structures.", icon: <Waves className="w-8 h-8 text-[#00f0ff]" /> },
    { title: "Shipwreck Recovery", desc: "SONAR-guided navigation through submerged wreckage for victim location and extraction.", icon: <Anchor className="w-8 h-8 text-[#00f0ff]" /> },
    { title: "Underwater Search", desc: "Fully submerged electric propulsion for deep-water search and rescue missions.", icon: <Search className="w-8 h-8 text-[#00f0ff]" /> },
    { title: "Wildfire Response", desc: "Real-time victim location and evacuation corridor identification in active fire environments.", icon: <Flame className="w-8 h-8 text-[#00f0ff]" /> },
    { title: "Hazardous Chemical", desc: "Unmanned operations in CBRN environments where no human responder can safely enter.", icon: <Biohazard className="w-8 h-8 text-[#00f0ff]" /> },
    { title: "Battlefield Rescue", desc: "Autonomous casualty extraction from active combat zones and contested terrain.", icon: <Crosshair className="w-8 h-8 text-[#00f0ff]" /> }
  ];

  return (
    <section className="py-32 relative border-t border-white/5 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase mb-4">Mission Profiles</h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">KEY APPLICATIONS</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            Designed for Humanity. Built for Extremes. A single platform. Infinite mission configurations. From civilian disaster response to military evacuation — XENBUS adapts to the mission, not the other way around.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {applications.map((mission, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05, borderColor: '#00f0ff' }}
              className="bg-[#0a1128]/50 backdrop-blur-md p-8 border border-white/10 rounded-xl text-center group transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] flex flex-col items-center"
            >
              <div className="mb-6 p-4 rounded-full bg-[#050b14] border border-[#00f0ff]/20 group-hover:border-[#00f0ff] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300">
                {mission.icon}
              </div>
              <h3 className="font-mono font-bold text-sm text-white uppercase tracking-wider mb-3 group-hover:text-[#00f0ff] transition-colors">{mission.title}</h3>
              <p className="text-xs font-mono text-gray-400 leading-relaxed">{mission.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CommsSection = () => {
  return (
    <section className="py-20 relative bg-[#0a0b10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center font-mono text-sm text-gray-400 mb-12 tracking-widest">COMMS & CONTROL</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Encrypted Datalink",
            "Satellite Uplink",
            "Mesh Network",
            "Anti-Jamming",
            "Human Override",
            "Swarm Sync Protocol"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 px-6 py-3 glass-panel border border-white/10 rounded-full hover:border-[#00f0ff]/50 hover:text-[#00f0ff] transition-colors cursor-default">
              <Radio className="w-4 h-4" />
              <span className="font-mono text-xs font-bold tracking-wider">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonSection = () => {
  const comparisonData = [
    { cap: "Operational Environment", xenbus: "Air + Water + Land Surface", traditional: "Aerial Only" },
    { cap: "Vertical Takeoff & Landing", xenbus: "✓", traditional: "✓" },
    { cap: "High-Speed Cruise (Turbofan)", xenbus: "✓", traditional: "✕" },
    { cap: "Seamless Underwater Transition", xenbus: "✓", traditional: "✕" },
    { cap: "Debris Removal Capability", xenbus: "✓", traditional: "✕" },
    { cap: "Victim Physical Extraction", xenbus: "✓", traditional: "✕" },
    { cap: "Oxygenated Carriage Chamber", xenbus: "✓", traditional: "✕" },
    { cap: "AI Decision System (Onboard)", xenbus: "✓", traditional: "✕" },
    { cap: "Through-Structure Victim Detection", xenbus: "✓", traditional: "✕" },
    { cap: "Swarm Coordination", xenbus: "✓", traditional: "Limited" },
    { cap: "CBRN / Hazmat Environment Safe", xenbus: "✓", traditional: "✕" },
    { cap: "Launchpad Rapid Deployment", xenbus: "✓", traditional: "✕" },
    { cap: "Zero Rescue Personnel Risk", xenbus: "✓", traditional: "Partial" },
    { cap: "Payload Capability", xenbus: "High", traditional: "Limited/Low" },
    { cap: "Power Source", xenbus: "Hybrid fuel-electric", traditional: "Battery only" }
  ];

  return (
    <section className="py-32 relative border-t border-white/5 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase mb-4">07 · Competitive Differentiation</h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">WHY XENBUS?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            XENBUS is not an incremental improvement — it is a category-defining system. The comparison with existing systems is not a comparison between products — it is between eras of rescue technology.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto glass-panel rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-6">
            <div className="font-orbitron font-bold text-sm text-gray-400 uppercase tracking-wider">Capability</div>
            <div className="font-orbitron font-bold text-lg text-[#00f0ff] text-center tracking-wider">XENBUS</div>
            <div className="font-orbitron font-bold text-sm text-gray-500 text-center uppercase tracking-wider">Traditional Systems</div>
          </div>
          
          <div className="divide-y divide-white/5">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 p-4 hover:bg-white/5 transition-colors items-center">
                <div className="font-mono text-xs md:text-sm text-gray-300">{row.cap}</div>
                <div className={`text-center font-bold ${row.xenbus === '✓' ? 'text-[#00f0ff]' : 'text-white'} font-mono text-sm`}>{row.xenbus}</div>
                <div className={`text-center font-mono text-sm ${row.traditional === '✕' ? 'text-red-500/50' : 'text-gray-500'}`}>{row.traditional}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative bg-[#0a0b10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Our Purpose Section */}
        <div className="mb-32 text-center max-w-4xl mx-auto">
          <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase mb-4">08 · Our Purpose</h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">"To make disaster response faster than disaster itself."</h2>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            Our mission is to build globally deployable autonomous rescue units capable of operating in every environment where human life is at risk — without placing a single rescuer in harm's way. XENBUS is not a product. It is the infrastructure of the next era of emergency response.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Vision", desc: "Global deployment in every disaster response network", icon: "👁️" },
              { title: "Mission", desc: "Zero preventable rescue deaths — every victim reachable", icon: "🎯" },
              { title: "Impact", desc: "Transforming disaster management from reactive to proactive deployment", icon: "⚡" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="glass-panel p-8 border border-white/10 rounded-2xl hover:border-[#00f0ff]/50 transition-colors flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="font-orbitron font-bold text-lg text-white mb-3">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase mb-4">09 · Partner With XENBUS</h3>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">ACCELERATE THE <br/><span className="text-[#00f0ff]">FUTURE OF RESCUE</span></h2>
            <p className="text-gray-400 mb-8 font-light">
              We are actively partnering with government agencies, defense organizations, disaster management institutions, and strategic investors committed to saving lives at scale.
            </p>
            
            <ul className="space-y-4 mb-12">
              {[
                "National Disaster Management Agencies",
                "Defense & Military Procurement Bodies",
                "Search & Rescue Organizations",
                "Strategic Technology Investors",
                "Industrial Safety & Hazmat Operators",
                "International Humanitarian Organizations",
                "Government Research & Development Labs",
                "Media & Documentary Partners"
              ].map((partner, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300 font-mono text-sm">
                  <ChevronRight className="w-4 h-4 text-[#00f0ff]" /> {partner}
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-8 mt-8">
              <h4 className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase mb-6">Contact Information</h4>
              <div className="space-y-4 font-mono text-sm text-gray-400">
                <div className="flex items-start gap-4">
                  <Map className="w-5 h-5 text-[#00f0ff] shrink-0 mt-1" />
                  <div>
                    <p className="text-white mb-1">Headquarters</p>
                    <p>38B Sardar Shankar Road, Kolkata</p>
                    <p>West Bengal, India, PIN - 700029</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Radio className="w-5 h-5 text-[#00f0ff] shrink-0" />
                  <div>
                    <p className="text-white mb-1">Secure Line</p>
                    <a href="tel:+919051813776" className="hover:text-[#00f0ff] transition-colors">(+91) 9051813776</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Database className="w-5 h-5 text-[#00f0ff] shrink-0" />
                  <div>
                    <p className="text-white mb-1">Digital Comms</p>
                    <a href="mailto:sohomsn22@gmail.com" className="hover:text-[#00f0ff] transition-colors">sohomsn22@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 border border-white/10 rounded-2xl glow-box-cyan relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f0ff]/5 blur-3xl rounded-full pointer-events-none"></div>
            <form className="space-y-6 relative z-10" action="https://formspree.io/f/mpqyzokv" method="POST">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-gray-400 mb-2">NAME</label>
                  <input type="text" name="name" required className="w-full bg-black/50 border border-white/10 p-3 text-white font-mono text-sm focus:border-[#00f0ff] outline-none transition-colors" />
                </div>
                <div>
                  <label className="block font-mono text-xs text-gray-400 mb-2">ORGANIZATION</label>
                  <input type="text" name="organization" className="w-full bg-black/50 border border-white/10 p-3 text-white font-mono text-sm focus:border-[#00f0ff] outline-none transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-gray-400 mb-2">EMAIL</label>
                  <input type="email" name="email" required className="w-full bg-black/50 border border-white/10 p-3 text-white font-mono text-sm focus:border-[#00f0ff] outline-none transition-colors" />
                </div>
                <div>
                  <label className="block font-mono text-xs text-gray-400 mb-2">CONTACT NUMBER</label>
                  <input type="tel" name="phone" className="w-full bg-black/50 border border-white/10 p-3 text-white font-mono text-sm focus:border-[#00f0ff] outline-none transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-gray-400 mb-2">COUNTRY</label>
                  <input type="text" name="country" className="w-full bg-black/50 border border-white/10 p-3 text-white font-mono text-sm focus:border-[#00f0ff] outline-none transition-colors" />
                </div>
                <div>
                  <label className="block font-mono text-xs text-gray-400 mb-2">INQUIRY TYPE</label>
                  <select name="inquiry_type" className="w-full bg-black/50 border border-white/10 p-3 text-white font-mono text-sm focus:border-[#00f0ff] outline-none transition-colors appearance-none">
                    <option value="Government / Defense">Government / Defense</option>
                    <option value="Investor Relations">Investor Relations</option>
                    <option value="Technical Integration">Technical Integration</option>
                    <option value="Media">Media</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-gray-400 mb-2">MESSAGE</label>
                <textarea name="message" rows={4} className="w-full bg-black/50 border border-white/10 p-3 text-white font-mono text-sm focus:border-[#00f0ff] outline-none transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-white text-black font-bold font-mono text-sm tracking-wider hover:bg-[#00f0ff] transition-colors mt-4">
                SUBMIT SECURE TRANSMISSION
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#050507] text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <img 
            src="https://i.postimg.cc/76S35Rp3/Xenbus-Logo-Transparent-Background.png" 
            alt="XENBUS" 
            className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-90"
            referrerPolicy="no-referrer"
          />
          <span className="font-mono text-[10px] md:text-xs text-gray-500 tracking-widest uppercase">
            Redefining Search & Rescue Across Air and Water
          </span>
        </div>
        <p className="font-mono text-xs text-gray-600">
          © {new Date().getFullYear()} Autonomous Intelligent Search and Rescue Unit. All rights reserved.
        </p>
        <div className="flex gap-4 font-mono text-xs text-gray-600">
          <a href="#" className="hover:text-[#00f0ff]">PRIVACY</a>
          <a href="#" className="hover:text-[#00f0ff]">TERMS</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#00f0ff] selection:text-black">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <div className="scanline"></div>
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      <StatsSection />
      <ProblemSection />
      <CinematicIntro />
      <GlobalImpactSection />
      <HybridRescueArchitecture />
      <ExtremeEnvironmentsSection />
      <MissionDemonstration />
      <SolutionSection />
      <SystemArchitectureSection />
      <VictimChamber />
      <RetrievalSection />
      <AirToWaterTransition />
      <EngineeringBlueprints />
      <MissionProfilesSection />
      <CommsSection />
      <ComparisonSection />
      <ExampleScenarioSection />
      <GlobalDisasterStats />
      <ContactSection />
      <Footer />
    </div>
  );
}
