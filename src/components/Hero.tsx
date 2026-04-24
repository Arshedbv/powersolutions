import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Shield, Zap, Globe } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '15+', label: 'Countries Served' },
  { value: '99.8%', label: 'Uptime Record' },
];

const badges = [
  { icon: Shield, text: 'ISO 9001 Certified' },
  { icon: Zap, text: 'ATEX Compliant' },
  { icon: Globe, text: 'Middle East Leader' },
];

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' as const } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Industrial Platform"
          className="w-full h-full object-cover object-center"
          style={{ filter: isDark ? 'brightness(0.35) saturate(0.8)' : 'brightness(0.45) saturate(0.7)' }}
        />
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-r from-[#060e1a]/92 via-[#060e1a]/70 to-transparent'
            : 'bg-gradient-to-r from-slate-900/88 via-slate-900/65 to-slate-900/20'
        }`} />
        <div className={`absolute inset-x-0 bottom-0 h-48 ${
          isDark
            ? 'bg-gradient-to-t from-[#060e1a] to-transparent'
            : 'bg-gradient-to-t from-slate-50 to-transparent'
        }`} />
        <div className="absolute inset-0 grid-lines opacity-20" />
      </div>

      {/* Floating background orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.5) 0%, transparent 70%)',
            filter: 'blur(80px)',
            opacity: 0.3,
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/5 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96,165,250,0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            opacity: 0.2,
            animation: 'float 6s ease-in-out infinite 2s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="max-w-4xl">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Top badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-blue-600/20 border border-blue-500/30 text-blue-300 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Offshore & Onshore Engineering — Oman
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-white block">Engineering</span>
              <span className="text-white block">Power.</span>
              <span className="block gradient-text">Delivering</span>
              <span className="block gradient-text">Precision.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8 font-light"
            >
              Offshore and Onshore Engineering Solutions Built for Performance.
              Trusted by industry leaders across the Middle East for over two decades.
            </motion.p>

            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              {badges.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300 backdrop-blur-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-blue-400" />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
              <a
                href="#services"
                onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
                data-interactive="true"
              >
                Explore Services
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                data-interactive="true"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                  className="relative p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div
                    className="text-2xl sm:text-3xl font-bold text-white mb-0.5"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 leading-snug">{stat.label}</div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-600/60 to-transparent" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
