import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Waves, Factory, ShieldCheck, Settings,
  ArrowRight, Activity
} from 'lucide-react';

interface ServicesProps {
  isDark: boolean;
}

const services = [
  {
    icon: Waves,
    title: 'Offshore Platform Engineering & Upgrades',
    short: 'Offshore',
    desc: 'Comprehensive engineering solutions for offshore oil and gas platforms including structural upgrades, equipment modernization, and performance optimization to maximize production uptime.',
    points: ['Platform structural analysis', 'Equipment modernization', 'Production optimization', 'FPSO integration'],
    color: 'from-blue-600 to-blue-800',
    accent: 'rgba(37,99,235,0.15)',
  },
  {
    icon: Factory,
    title: 'Onshore Process Facilities & Pipeline Systems',
    short: 'Onshore',
    desc: 'End-to-end design, installation, and commissioning of onshore processing plants and pipeline infrastructure built to international standards and local regulations.',
    points: ['Process plant design', 'Pipeline commissioning', 'Facility upgrades', 'Flow assurance'],
    color: 'from-slate-600 to-slate-800',
    accent: 'rgba(100,116,139,0.15)',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Shutdown & Control Integration',
    short: 'Safety Systems',
    desc: 'Design and implementation of Safety Instrumented Systems (SIS), Emergency Shutdown systems (ESD), and integrated control architectures ensuring regulatory compliance and personnel safety.',
    points: ['SIL certification', 'ESD implementation', 'HAZOP studies', 'F&G systems'],
    color: 'from-blue-700 to-indigo-900',
    accent: 'rgba(99,102,241,0.15)',
  },
  {
    icon: Settings,
    title: 'Lifecycle Maintenance & Optimization',
    short: 'Maintenance',
    desc: 'Proactive maintenance strategies, reliability engineering, and asset integrity management programs that extend equipment life and maximize operational efficiency across your facilities.',
    points: ['Predictive maintenance', 'Asset integrity', 'Performance audits', 'Reliability engineering'],
    color: 'from-blue-500 to-blue-700',
    accent: 'rgba(59,130,246,0.15)',
  },
];

export const Services: React.FC<ServicesProps> = ({ isDark }) => {
  const [activeService, setActiveService] = useState(0);
  const titleRef = useScrollReveal();

  const bg = isDark ? 'bg-[#060e1a]' : 'bg-slate-50';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-500';
  const cardBg = isDark ? 'bg-[#0a1628] border-white/8' : 'bg-white border-slate-200';
  const activeCardBg = isDark ? 'bg-[#0d1f3c] border-blue-500/30' : 'bg-blue-50 border-blue-200';

  return (
    <section id="services" className={`${bg} relative py-24 md:py-32 overflow-hidden`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-lines opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="reveal mb-16 text-center">
          <span className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            <span className="w-8 h-px bg-current" />
            Our Services
            <span className="w-8 h-px bg-current" />
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${textPrimary}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            What We{' '}
            <span className={isDark ? 'gradient-text' : 'gradient-text-blue'}>Deliver</span>
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${textSecondary}`}>
            Specialized engineering capabilities across the full spectrum of industrial operations.
          </p>
        </div>

        {/* Desktop: Side by side */}
        <div className="hidden md:grid md:grid-cols-3 gap-3">
          {/* Left: Service list */}
          <div className="col-span-1 flex flex-col gap-2">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isActive = activeService === i;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveService(i)}
                  whileHover={{ x: 4 }}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive ? activeCardBg : `${cardBg} hover:border-blue-500/20`
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                        : isDark ? 'bg-white/5' : 'bg-slate-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                    </div>
                    <div>
                      <div className={`text-sm font-semibold transition-colors ${isActive ? (isDark ? 'text-blue-300' : 'text-blue-700') : textPrimary}`}>
                        {svc.short}
                      </div>
                      {isActive && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          className="h-0.5 bg-blue-500 rounded-full mt-1"
                        />
                      )}
                    </div>
                    <ArrowRight className={`w-4 h-4 ml-auto transition-all duration-300 ${isActive ? 'text-blue-400 translate-x-1' : 'text-transparent'}`} />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Detail */}
          <div className="col-span-2">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className={`p-8 rounded-3xl border h-full ${cardBg}`}
            >
              {(() => {
                const svc = services[activeService];
                const Icon = svc.icon;
                return (
                  <>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${svc.color} mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${textPrimary}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {svc.title}
                    </h3>
                    <p className={`text-base leading-relaxed mb-6 ${textSecondary}`}>{svc.desc}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {svc.points.map((pt, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.07 }}
                          className={`flex items-center gap-2.5 p-3 rounded-xl ${
                            isDark ? 'bg-blue-600/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'
                          }`}
                        >
                          <Activity className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                          <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{pt}</span>
                        </motion.div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        </div>

        {/* Mobile: Cards grid */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border card-hover ${cardBg}`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${textPrimary}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {svc.title}
                </h3>
                <p className={`text-sm leading-relaxed ${textSecondary}`}>{svc.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
