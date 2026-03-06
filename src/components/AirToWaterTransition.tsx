import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { UrgentBackground } from './UrgentBackground';

const FRAMES = [
  "https://i.ibb.co/DD7jTjJg/Xenbus-Taking-Out-Toroidal-Propellers-for-Air-to-Water-Transition-1.jpg",
  "https://i.ibb.co/R4PmWGwh/Xenbus-Taking-Out-Toroidal-Propellers-for-Air-to-Water-Transition-2.jpg",
  "https://i.ibb.co/7xk50D8t/Xenbus-Taking-Out-Toroidal-Propellers-for-Air-to-Water-Transition-3.jpg",
  "https://i.ibb.co/csKcW05/Xenbus-Taking-Out-Toroidal-Propellers-for-Air-to-Water-Transition-4.jpg",
  "https://i.ibb.co/tppVdmf2/Xenbus-Taking-Out-Toroidal-Propellers-for-Air-to-Water-Transition-5.jpg",
  "https://i.ibb.co/m50zDsTm/Xenbus-Taking-Out-Toroidal-Propellers-for-Air-to-Water-Transition-6.jpg",
  "https://i.ibb.co/1YpRpzhk/Xenbus-Taking-Out-Toroidal-Propellers-for-Air-to-Water-Transition-7.jpg",
  "https://i.ibb.co/hxBXNCR3/Xenbus-Taking-Out-Toroidal-Propellers-for-Air-to-Water-Transition-8.jpg",
  "https://i.ibb.co/3Y1TvdKB/Xenbus-Taking-Out-Toroidal-Propellers-for-Air-to-Water-Transition-9.jpg",
  "https://i.ibb.co/Y48Mwfsg/Xenbus-Taking-Out-Toroidal-Propellers-for-Air-to-Water-Transition-10.jpg"
];

export const AirToWaterTransition = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % FRAMES.length);
      }, 500); // 500ms per frame
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-32 relative bg-[#050507] border-t border-white/5 overflow-hidden">
      <UrgentBackground />
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-20">
        <div className="text-center">
          <h3 className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase mb-4">Hybrid Propulsion Mode Transition</h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">AIR-TO-WATER TRANSITION</h2>
          <p className="text-lg text-gray-400 font-mono mb-10">Seamlessly bridging the gap between aerial speed and underwater precision.</p>
          
          <div className="max-w-4xl mx-auto bg-[#050b14]/80 backdrop-blur-md border border-[#00f0ff]/30 p-8 rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.15)]">
            <div className="font-mono text-left text-[#00f0ff] text-lg md:text-xl leading-relaxed space-y-4" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
              <p className="flex items-start"><span className="mr-4 text-white opacity-50">01_</span> XENBUS hovers above the water surface.</p>
              <p className="flex items-start"><span className="mr-4 text-white opacity-50">02_</span> Toroidal propellers deploy from the body.</p>
              <p className="flex items-start"><span className="mr-4 text-white opacity-50">03_</span> Flight computer gradually transfers thrust from turbofans to underwater propellers.</p>
              <p className="flex items-start"><span className="mr-4 text-white opacity-50">04_</span> Turbofan engines power down.</p>
              <p className="flex items-start"><span className="mr-4 text-white opacity-50">05_</span> XENBUS descends smoothly and stabilizes on the water surface.</p>
              <p className="flex items-start"><span className="mr-4 text-white opacity-50">06_</span> Underwater navigation begins.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden border border-white/10 aspect-video bg-[#050b14] shadow-[0_0_50px_rgba(0,240,255,0.1)] group">
        {/* Environment Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1118] via-[#0d1b2a] to-[#02050a]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute top-0 left-0 right-0 h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 bg-white opacity-0 animate-[flash_7s_infinite]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent blur-xl"></div>
        </div>

        {/* Aircraft Frames */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {FRAMES.map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt={`Transition Frame ${index + 1}`}
              className={`absolute w-full h-full object-contain transition-opacity duration-100 ease-linear ${
                index === currentFrame ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              referrerPolicy="no-referrer"
            />
          ))}
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 right-6 z-30 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-[#00f0ff]/20 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all backdrop-blur-md"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
          </button>
          <button 
            onClick={() => setCurrentFrame(0)}
            className="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-[#00f0ff]/20 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all backdrop-blur-md"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
        
        {/* Scrub Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <input
            ref={sliderRef}
            type="range"
            min="0"
            max={FRAMES.length - 1}
            value={currentFrame}
            onChange={(e) => {
              setCurrentFrame(Number(e.target.value));
              setIsPlaying(false);
            }}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00f0ff]"
          />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flash {
          0%, 95%, 98%, 100% { opacity: 0; }
          96%, 99% { opacity: 0.15; }
        }
      `}} />
    </section>
  );
};
