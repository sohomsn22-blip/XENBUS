import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimationFrame } from 'motion/react';
import { Play, Pause, RotateCcw, Shield, Activity, Wind, Droplets, ArrowRight, Cpu, Gauge, ShieldCheck, Flame } from 'lucide-react';

const conceptImages = [
  "https://i.ibb.co/gb9ncZYJ/Triple-Stage-Isobaric-Victim-Carriage-Chamber-1.png",
  "https://i.ibb.co/zVnWY4V1/Triple-Stage-Isobaric-Victim-Carriage-Chamber-2.png",
  "https://i.ibb.co/SwMpxqzv/Triple-Stage-Isobaric-Victim-Carriage-Chamber-3.png",
  "https://i.ibb.co/SwyFhXn2/Triple-Stage-Isobaric-Victim-Carriage-Chamber-4.png"
];

const sequenceFrames = [
  "https://i.postimg.cc/CKTDg1KF/Dedicated_Victim_Carriage_Chamber_1.png",
  "https://i.postimg.cc/nL4mcJXN/Dedicated_Victim_Carriage_Chamber_2.png",
  "https://i.postimg.cc/7L3zYkC4/Dedicated_Victim_Carriage_Chamber_3.png",
  "https://i.postimg.cc/0NYS2s6N/Dedicated_Victim_Carriage_Chamber_5.png",
  "https://i.postimg.cc/Xvf57bZN/Dedicated_Victim_Carriage_Chamber_4.png",
  "https://i.postimg.cc/436cNgKN/Dedicated_Victim_Carriage_Chamber_6.png"
];

const zeroContactImage = "https://i.ibb.co/YTFB0BZ3/Zero-Contact-Transport.png";

export const VictimChamber = () => {
  // Module 1 State
  const [currentConcept, setCurrentConcept] = useState(0);
  
  // Module 2 State
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const progressRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  // Preload sequence frames
  useEffect(() => {
    let loadedCount = 0;
    const total = sequenceFrames.length;
    
    sequenceFrames.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.crossOrigin = "anonymous";
      img.onload = () => {
        imagesRef.current[idx] = img;
        loadedCount++;
        if (loadedCount === total) setIsLoaded(true);
      };
    });
  }, []);

  // Auto-cycle concept images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentConcept((prev) => (prev + 1) % conceptImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Optimized Animation Loop using Canvas
  useAnimationFrame((time) => {
    if (!isLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (isPlaying) {
      const delta = time - lastTimeRef.current;
      const totalDuration = 6000; // 6 seconds for full cycle
      const speed = sequenceFrames.length / totalDuration;
      progressRef.current = (progressRef.current + (delta * speed)) % sequenceFrames.length;
    }
    lastTimeRef.current = time;

    const frameProgress = progressRef.current;
    const currentIdx = Math.floor(frameProgress);
    const nextIdx = (currentIdx + 1) % sequenceFrames.length;
    const blend = frameProgress % 1;

    // Smoother cubic easing for blend
    const easedBlend = blend < 0.5 
      ? 4 * blend * blend * blend 
      : 1 - Math.pow(-2 * blend + 2, 3) / 2;

    setCurrentStage(currentIdx + 1);

    // Clear and Draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Background Light Well
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width / 1.2);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.4, '#ffffff');
    gradient.addColorStop(0.7, '#f0faff');
    gradient.addColorStop(1, '#050507');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Images with Multiply Blend Mode
    ctx.globalCompositeOperation = 'multiply';
    
    const imgCurrent = imagesRef.current[currentIdx];
    const imgNext = imagesRef.current[nextIdx];

    const drawFrame = (img: HTMLImageElement, alpha: number, index: number) => {
      if (!img) return;
      ctx.globalAlpha = alpha;
      
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;
      let drawWidth, drawHeight, x, y;

      if (imgRatio > canvasRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
      }

      // Manual scale adjustment for frame 3 (index 2) to fix perceived scaling issue
      const scaleAdj = index === 2 ? 1.08 : 1;
      drawWidth *= scaleAdj;
      drawHeight *= scaleAdj;

      x = (canvas.width - drawWidth) / 2;
      y = (canvas.height - drawHeight) / 2;

      ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };

    if (imgCurrent && imgNext) {
      // Apply subtle motion blur during transition
      const blurAmount = Math.sin(easedBlend * Math.PI) * 2;
      if (blurAmount > 0.1) {
        ctx.filter = `blur(${blurAmount}px)`;
      }

      drawFrame(imgCurrent, 1 - easedBlend, currentIdx);
      drawFrame(imgNext, easedBlend, nextIdx);

      ctx.filter = 'none';
    }

    // Technical Scanlines
    ctx.globalCompositeOperation = 'overlay';
    ctx.globalAlpha = 0.04;
    for (let i = 0; i < canvas.height; i += 4) {
      ctx.fillStyle = '#00f0ff';
      ctx.fillRect(0, i, canvas.width, 1);
    }

    // Reset composite
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
  });

  return (
    <section id="victim-chamber" className="py-32 relative border-t border-white/5 bg-[#050507] overflow-hidden">
      {/* Background Grid & Particles */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0066ff]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight"
          >
            VICTIM EXTRACTION & <span className="text-[#00f0ff]">OXYGENATED</span> <br/>
            <span className="text-white">TRANSPORT CHAMBER SYSTEM</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-gray-400 mb-8 font-light leading-relaxed">
              A pressurized, temperature-regulated, oxygen-rich enclosed carriage pod designed to safely transport conscious or unconscious victims from extraction point to medical handoff — across air, land, and water.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 glass-panel border border-[#00f0ff]/30 rounded-full text-[#00f0ff] font-mono text-xs">
                <Wind className="w-4 h-4" /> O₂ REGULATED
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass-panel border border-orange-500/30 rounded-full text-orange-500 font-mono text-xs">
                <Flame className="w-4 h-4" /> TEMP CONTROLLED
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass-panel border border-green-500/30 rounded-full text-green-500 font-mono text-xs">
                <Activity className="w-4 h-4" /> BIOMETRIC MONITORED
              </div>
            </div>
          </motion.div>
        </div>

        {/* Module 1: Hero Chamber Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f0ff]/50 bg-[#00f0ff]/10 text-[#00f0ff] w-fit font-mono text-[10px] tracking-widest animate-pulse shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Activity className="w-3 h-3" />
              <span>TRIPLE-STAGE ISOBARIC SYSTEM</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white uppercase">
              ENGINEERED FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">ABSOLUTE SURVIVAL</span>
            </h3>
            <p className="text-gray-400 font-mono leading-relaxed">
              The XENBUS extraction pod represents a paradigm shift in autonomous rescue. 
              Designed to maintain critical life support across extreme pressure differentials, 
              toxic atmospheres, and high-G maneuvers without modifying the core mechanical structure.
            </p>
            <ul className="flex flex-col gap-4 mt-4">
              {[
                "Hermetically sealed triple-layer composite hull",
                "Automated atmospheric regulation & scrubbing",
                "Active kinetic shock dampening system",
                "Real-time biometric telemetry uplink"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-3 text-sm font-mono text-gray-300 group cursor-default"
                >
                  <ArrowRight className="w-4 h-4 text-[#00f0ff] mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] glass-panel rounded-2xl border border-[#00f0ff]/20 overflow-hidden group cursor-pointer glow-box-cyan"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentConcept}
                src={conceptImages[currentConcept]}
                alt={`Victim Carriage Chamber Concept ${currentConcept + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            {/* HUD Overlay */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl"></div>
            <div className="absolute top-4 left-4 font-mono text-[10px] text-[#00f0ff] bg-black/60 px-2 py-1 backdrop-blur-md border border-[#00f0ff]/30">
              SYS.DIAGNOSTIC // {currentConcept + 1}/4
            </div>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {conceptImages.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentConcept(idx)}
                  className={`w-8 h-1 transition-all ${idx === currentConcept ? 'bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]' : 'bg-white/20 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Module 2: Animated Chamber Deployment Sequence */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase tracking-widest">DEPLOYMENT SEQUENCE</h3>
            <p className="text-[#00f0ff] font-mono text-xs uppercase tracking-[0.3em] opacity-70">Automated extraction protocol visualization</p>
          </div>
          
          <div className="glass-panel rounded-3xl border border-white/10 p-4 md:p-10 bg-[#0a0b10]/90 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#00f0ff05_0%,transparent_70%)]"></div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-black mb-10 flex items-center justify-center shadow-2xl">
              {/* Main Canvas Rendering */}
              {!isLoaded && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black gap-4">
                  <div className="w-12 h-12 border-4 border-[#00f0ff]/10 border-t-[#00f0ff] rounded-full animate-spin"></div>
                  <span className="font-mono text-[10px] text-[#00f0ff] tracking-[0.4em] uppercase animate-pulse">Syncing Telemetry...</span>
                </div>
              )}
              
              <canvas 
                ref={canvasRef}
                width={1920}
                height={1080}
                className="w-full h-full object-contain"
              />

              {/* HUD Overlays */}
              <div className="absolute inset-0 pointer-events-none z-20">
                <div className="absolute top-8 left-8 font-mono text-[10px] text-[#00f0ff] bg-black/80 px-4 py-3 backdrop-blur-3xl border border-[#00f0ff]/30 rounded-sm flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="tracking-[0.2em] font-bold">ISOBARIC_LOCK: ACTIVE</span>
                  </div>
                  <div className="w-full h-[1px] bg-[#00f0ff]/20"></div>
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-500 uppercase">Pressure</span>
                    <span className="font-bold">1.013 BAR</span>
                  </div>
                </div>

                <div className="absolute top-8 right-8 font-mono text-[10px] text-red-500 bg-black/80 px-4 py-3 border border-red-500/30 flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="tracking-widest">LIVE_EXTRACTION_FEED</span>
                </div>

                {/* Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-30">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black transition-all glow-box-cyan shadow-lg"
                >
                  {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1.5" />}
                </button>
                <button 
                  onClick={() => { progressRef.current = 0; setIsPlaying(true); }}
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 w-full flex flex-col gap-4">
                <div className="flex justify-between font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                  <span>Sequence Progress</span>
                  <span className="text-[#00f0ff]">{Math.round((progressRef.current / sequenceFrames.length) * 100)}%</span>
                </div>
                <div className="flex items-center gap-6 font-mono text-xs text-gray-400">
                  <span className="text-[#00f0ff] font-bold">STAGE_{currentStage}</span>
                  <input 
                    type="range" 
                    min="0" 
                    max={sequenceFrames.length - 0.01} 
                    step="0.01"
                    value={progressRef.current}
                    onChange={(e) => {
                      progressRef.current = parseFloat(e.target.value);
                      setIsPlaying(false);
                    }}
                    className="flex-1 h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00f0ff]"
                  />
                  <span>END_SEQ</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Module 3: Zero Contact Transport Panel */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-[#00f0ff]/20 glass-panel p-2 glow-box"
          >
            <img 
              src={zeroContactImage}
              alt="Zero Contact Transport Concept"
              className="w-full h-auto rounded-xl object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-transparent to-transparent opacity-60 pointer-events-none"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex flex-col gap-6"
          >
            <h3 className="text-3xl font-display font-bold text-white uppercase">
              ZERO CONTACT <br/><span className="text-[#00f0ff]">TRANSPORT</span>
            </h3>
            <p className="text-gray-400 font-mono leading-relaxed">
              Safe victim extraction requires zero physical contamination risk. 
              The XENBUS chamber isolates the rescued individual within a sealed environment 
              while maintaining breathable conditions and pressure stability.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {[
                { icon: <Shield className="w-5 h-5" />, text: "Sealed Containment", color: "cyan" },
                { icon: <Wind className="w-5 h-5" />, text: "Oxygenated Environment", color: "blue" },
                { icon: <Activity className="w-5 h-5" />, text: "Medical Stabilization", color: "emerald" },
                { icon: <Droplets className="w-5 h-5" />, text: "Biohazard Isolation", color: "violet" }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-center gap-3 p-4 glass-panel border border-white/5 rounded-lg hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/5 transition-all group cursor-pointer"
                >
                  <div className={`p-2 rounded-md bg-white/5 text-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black transition-colors`}>
                    {feature.icon}
                  </div>
                  <span className="font-mono text-xs text-gray-300 group-hover:text-white transition-colors uppercase tracking-wider">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
