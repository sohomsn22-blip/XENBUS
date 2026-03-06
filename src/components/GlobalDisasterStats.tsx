import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, TrendingUp, Activity, Clock, Globe, DollarSign, Users } from 'lucide-react';

export const GlobalDisasterStats = () => {
  const stats = [
    {
      id: 1,
      value: "380",
      suffix: "B+",
      label: "Global Economic Loss (2023)",
      icon: <DollarSign className="w-5 h-5 text-red-500" />,
      desc: "The financial impact of natural disasters continues to escalate annually.",
      color: "red"
    },
    {
      id: 2,
      value: "300",
      suffix: "%",
      label: "Increase in Frequency",
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
      desc: "Climate-related disasters have tripled over the last 30 years.",
      color: "orange"
    },
    {
      id: 3,
      value: "100",
      suffix: "M+",
      label: "People Affected Annually",
      icon: <Users className="w-5 h-5 text-yellow-500" />,
      desc: "Displacement, injury, and loss of life affect millions every single year.",
      color: "yellow"
    },
    {
      id: 4,
      value: "64",
      suffix: "%",
      label: "Infrastructure Failure Rate",
      icon: <AlertTriangle className="w-5 h-5 text-white" />,
      desc: "Critical communication and transport networks fail within the first 24 hours of major catastrophes.",
      color: "white"
    }
  ];

  return (
    <section className="py-32 relative bg-[#050507] overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-900/20 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="font-mono text-xs text-red-500 tracking-widest uppercase">Critical Urgency</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wide text-white">
            The Cost of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Inaction</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            The gap between disaster onset and rescue deployment is where lives are lost. 
            As climate instability accelerates, traditional response methods are failing to keep pace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="bg-[#0a0b10] border border-white/10 p-8 rounded-2xl h-full relative overflow-hidden group-hover:border-red-500/30 transition-colors duration-300">
                
                {/* Hover Glow */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${stat.color}-500/10 blur-3xl rounded-full group-hover:bg-${stat.color}-500/20 transition-all duration-500`}></div>

                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-${stat.color}-500/50 transition-colors`}>
                    {stat.icon}
                  </div>
                  <Activity className="w-4 h-4 text-gray-700 group-hover:text-gray-500 transition-colors" />
                </div>

                <div className="mb-2 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white font-mono tracking-tighter">
                    {stat.value}
                  </span>
                  <span className={`text-2xl font-bold text-${stat.color}-500`}>
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="font-mono text-sm text-gray-300 uppercase tracking-wider mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {stat.desc}
                </p>

                {/* Bottom Line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${stat.color}-500/0 via-${stat.color}-500/50 to-${stat.color}-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote / Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-red-900/10 to-transparent border border-red-500/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 rounded-full bg-red-500/10 border border-red-500/30 shrink-0">
              <Globe className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">The Status Quo is Insufficient</h3>
              <p className="text-gray-400 leading-relaxed">
                "We are entering an era of 'Mega-Disasters' where multiple catastrophic events occur simultaneously. 
                Current manual rescue infrastructures are mathematically incapable of scaling to meet this demand. 
                Autonomous systems are not a luxury—they are a statistical necessity."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-[1px] w-10 bg-red-500/50"></div>
                <span className="text-xs font-mono text-red-400 uppercase tracking-widest">Global Risk Assessment Report, 2025</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
