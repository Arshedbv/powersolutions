import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Flame, Cable, Gauge, Radio, Layers, Database } from 'lucide-react';

interface CapabilitiesProps {
  isDark: boolean;
}

const industries = [
  {
    icon: Flame,
    title: 'Oil & Gas',
    desc: 'Upstream, midstream, and downstream solutions across the full hydrocarbon value chain.',
    percentage: 92,
    color: 'bg-orange-500',
  },
  {
    icon: Cable,
    title: 'Power Distribution',
    desc: 'MV/LV switchgear, UPS systems, and power quality solutions for critical infrastructure.',
    percentage: 88,
    color: 'bg-blue-500',
  },
  {
    icon: Gauge,
    title: 'Instrumentation',
    desc: 'Field instrumentation, calibration, and measurement solutions for process control.',
    percentage: 95,
    color: 'bg-purple-500',
  },
  {
    icon: Radio,
    title: 'Control Systems',
    desc: 'DCS, PLC, and SCADA architecture design, implementation and lifecycle support.',
    percentage: 97,
    color: 'bg-cyan-500',
  },
  {
    icon: Layers,
    title: 'Process Engineering',
    desc: 'P&ID development, hazard studies, and detailed engineering for complex facilities.',
    percentage: 85,
    color: 'bg-green-500',
  },
  {
    icon: Database,
    title: 'Digital Solutions',
    desc: 'IIoT integration, digital twin development, and data-driven asset management.',
    percentage: 78,
    color: 'bg-indigo-500',
  },
];

export const Capabilities: React.FC<CapabilitiesProps> = ({ isDark }) => {
  const titleRef = useScrollReveal();

  const bg = isDark ? 'bg-[#060e1a]' : 'bg-slate-50';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-500';
  const cardBg = isDark
    ? 'bg-[#0a1628] border-white/8 hover:border-blue-500/30'
    : 'bg-white border-slate-200 hover:border-blue-300';
  const trackBg = isDark ? 'bg-white/10' : 'bg-slate-200';

  return (
    <section id="capabilities" className={`${bg} relative py-24 md:py-32 overflow-hidden`}>
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
          style={{
            background: isDark
              ? 'linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(37,99,235,0.2), transparent)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="reveal mb-16 text-center">
          <span className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            <span className="w-8 h-px bg-current" />
            Capabilities & Industries
            <span className="w-8 h-px bg-current" />
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${textPrimary}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Where We{' '}
            <span className={isDark ? 'gradient-text' : 'gradient-text-blue'}>Excel</span>
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${textSecondary}`}>
            Deep domain expertise across the most demanding industrial sectors in the region.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`group p-6 rounded-2xl border transition-all duration-300 card-hover ${cardBg}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300
                  ${isDark ? 'bg-white/5 group-hover:bg-white/10' : 'bg-slate-100 group-hover:bg-blue-50'}`}>
                  <Icon className={`w-6 h-6 text-blue-500`} />
                </div>

                {/* Text */}
                <h3 className={`text-lg font-bold mb-2 ${textPrimary}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${textSecondary}`}>{item.desc}</p>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Expertise Level</span>
                    <span className={`text-xs font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{item.percentage}%</span>
                  </div>
                  <div className={`w-full h-1.5 rounded-full ${trackBg}`}>
                    <motion.div
                      className={`h-1.5 rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className={`mt-16 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden ${
            isDark
              ? 'bg-gradient-to-br from-blue-900/30 to-[#0a1628] border border-blue-500/20'
              : 'bg-gradient-to-br from-blue-600 to-blue-800 border-0'
          }`}
        >
          {/* BG decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
          </div>

          <div className="relative z-10">
            <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-blue-400' : 'text-blue-200'}`}>
              Regional Presence
            </p>
            <h3
              className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-white'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Serving the Middle East & Beyond
            </h3>
            <p className={`text-base max-w-2xl mx-auto mb-8 ${isDark ? 'text-slate-400' : 'text-blue-100'}`}>
              From Oman to UAE, Kuwait to Saudi Arabia — our engineering teams are deployed
              wherever the energy industry demands excellence.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {['Oman', 'UAE', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain'].map((country) => (
                <span
                  key={country}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    isDark
                      ? 'bg-blue-600/20 border border-blue-500/30 text-blue-300'
                      : 'bg-white/20 border border-white/30 text-white'
                  }`}
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
