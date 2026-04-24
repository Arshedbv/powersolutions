import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const pillars = [
  'Multi-disciplinary engineering expertise across oil & gas sectors',
  'Proven experience spanning the Middle East for 25+ years',
  'Unwavering focus on safety, reliability, and efficiency',
  'End-to-end project lifecycle management',
  'Certified teams with international standards compliance',
  'Rapid deployment and 24/7 operational support',
];

const highlights = [
  { icon: Award, title: 'ISO Certified', desc: 'International quality management standards across all operations' },
  { icon: Users, title: 'Expert Team', desc: '500+ certified engineers and specialists' },
  { icon: TrendingUp, title: 'Proven Track Record', desc: 'Consistent performance across 200+ major projects' },
];

export const About: React.FC<AboutProps> = ({ isDark }) => {
  const titleRef = useScrollReveal();
  const contentRef = useScrollReveal(0.1);
  const imageRef = useScrollReveal(0.1);

  const bg = isDark ? 'bg-[#0a1628]' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-500';
  const cardBg = isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200';
  const pillBg = isDark ? 'bg-blue-600/10 border-blue-500/20' : 'bg-blue-50 border-blue-100';

  return (
    <section id="about" className={`${bg} relative py-24 md:py-32 overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div ref={titleRef} className="reveal mb-4">
          <span className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            <span className="w-8 h-px bg-current" />
            Who We Are
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <div ref={contentRef} className="reveal">
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 ${textPrimary}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Built on
              <span className={`block ${isDark ? 'gradient-text' : 'gradient-text-blue'}`}>
                Engineering
              </span>
              Excellence
            </h2>

            <p className={`text-lg leading-relaxed mb-8 ${textSecondary}`}>
              Power Control Solutions Oman is a premier engineering firm delivering specialized
              industrial solutions across offshore and onshore environments. With deep roots in the
              Omani market and a broad regional footprint, we engineer systems that power the
              future of the Middle East's energy sector.
            </p>

            <div className="space-y-3 mb-10">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={`flex items-start gap-3 p-3 rounded-xl border ${pillBg}`}
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{p}</span>
                </motion.div>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`p-4 rounded-2xl border card-hover ${cardBg}`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                    isDark ? 'bg-blue-600/20' : 'bg-blue-50'
                  }`}>
                    <Icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className={`text-sm font-semibold mb-1 ${textPrimary}`}>{title}</div>
                  <div className={`text-xs leading-relaxed ${textSecondary}`}>{desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image + overlay */}
          <div ref={imageRef} className="reveal relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="/images/about-bg.jpg"
                alt="Engineering team at work"
                className="w-full h-full object-cover"
                style={{ filter: isDark ? 'brightness(0.8)' : 'brightness(0.9)' }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a]/80 via-transparent to-transparent" />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-dark"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400 tracking-widest uppercase">Project Success Rate</span>
                  <span className="text-xs text-blue-400 font-semibold">2024</span>
                </div>
                <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  99.8%
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
                  <motion.div
                    className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: '99.8%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-blue-600 opacity-10 rotate-12"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 w-16 h-16 rounded-xl bg-blue-400 opacity-10 -rotate-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
