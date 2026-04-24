import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PenTool, Hammer, CheckSquare, Wrench } from 'lucide-react';

interface ApproachProps {
  isDark: boolean;
}

const steps = [
  {
    number: '01',
    icon: PenTool,
    title: 'Design',
    subtitle: 'Engineering Excellence from Day One',
    desc: 'We begin with rigorous FEED and detailed engineering. Every system is designed to meet international standards while addressing the specific requirements of your operational environment.',
    details: ['FEED & Conceptual Design', 'P&ID Development', 'HAZOP & Risk Assessment', 'System Architecture'],
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Installation',
    subtitle: 'Precision Execution in the Field',
    desc: 'Our certified teams execute installations with zero-tolerance for safety deviations. We deploy the right personnel, equipment, and protocols to deliver on time and within scope.',
    details: ['Mechanical Installation', 'Electrical Hook-up', 'Instrument Calibration', 'Cable Management'],
  },
  {
    number: '03',
    icon: CheckSquare,
    title: 'Commissioning',
    subtitle: 'Systematic Validation & Handover',
    desc: 'Thorough pre-commissioning, commissioning, and start-up procedures ensure every system performs to specification before handover. Full documentation and operator training included.',
    details: ['Pre-commissioning Checks', 'Loop & Function Testing', 'Performance Verification', 'Operator Training'],
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Maintenance',
    subtitle: 'Sustained Peak Performance',
    desc: 'Ongoing maintenance contracts ensure your assets continue to operate at peak efficiency. From planned shutdowns to emergency callouts, we provide reliable support throughout the asset lifecycle.',
    details: ['Planned Maintenance', 'Emergency Response', 'Performance Monitoring', 'Lifecycle Planning'],
  },
];

export const Approach: React.FC<ApproachProps> = ({ isDark }) => {
  const titleRef = useScrollReveal();

  const bg = isDark ? 'bg-[#0a1628]' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-500';
  const cardBg = isDark ? 'bg-[#0d1f3c] border-white/8' : 'bg-slate-50 border-slate-200';
  const connectorBg = isDark ? 'bg-blue-500/30' : 'bg-blue-200';

  return (
    <section id="approach" className={`${bg} relative py-24 md:py-32 overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-lines opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="reveal mb-20 text-center">
          <span className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            <span className="w-8 h-px bg-current" />
            Project Approach
            <span className="w-8 h-px bg-current" />
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${textPrimary}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            From Concept to{' '}
            <span className={isDark ? 'gradient-text' : 'gradient-text-blue'}>Operation</span>
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${textSecondary}`}>
            A structured, proven methodology that ensures every project is delivered safely,
            on time, and to specification.
          </p>
        </div>

        {/* Desktop horizontal flow */}
        <div className="hidden lg:block mb-8">
          {/* Connector line */}
          <div className="relative flex items-center justify-center mb-12">
            <div className={`absolute left-[12.5%] right-[12.5%] h-0.5 ${connectorBg} top-8`} />
            <div className="grid grid-cols-4 w-full gap-0">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="flex flex-col items-center"
                  >
                    {/* Icon node */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center z-10 relative
                        bg-gradient-to-br from-blue-600 to-blue-800 shadow-[0_0_20px_rgba(37,99,235,0.35)]`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      {/* Pulse ring */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/30 animate-pulse" />
                    </div>

                    {/* Step content */}
                    <div className="text-center px-4">
                      <span className={`text-4xl font-black block mb-1 leading-none ${isDark ? 'text-white/6' : 'text-slate-100'}`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {step.number}
                      </span>
                      <h3 className={`text-xl font-bold mb-1.5 ${textPrimary}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className={`text-xs font-medium mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        {step.subtitle}
                      </p>
                      <p className={`text-xs leading-relaxed mb-4 ${textSecondary}`}>{step.desc}</p>
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {step.details.map((d) => (
                          <span key={d} className={`px-2 py-1 rounded-md text-[10px] font-medium ${
                            isDark
                              ? 'bg-blue-600/15 border border-blue-500/25 text-blue-300'
                              : 'bg-blue-50 border border-blue-100 text-blue-700'
                          }`}>{d}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical cards */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`p-6 rounded-2xl border ${cardBg}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-600 to-blue-800">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{step.number}</span>
                    <h3 className={`font-bold ${textPrimary}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{step.title}</h3>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed mb-3 ${textSecondary}`}>{step.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {step.details.map((d) => (
                    <span key={d} className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                      isDark
                        ? 'bg-blue-600/15 border border-blue-500/25 text-blue-300'
                        : 'bg-blue-50 border border-blue-100 text-blue-700'
                    }`}>{d}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className={`text-sm mb-6 ${textSecondary}`}>
            Ready to start your project journey with us?
          </p>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.35)]"
            data-interactive="true"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};
