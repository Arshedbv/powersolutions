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
    title: 'Consultancy & Planning',
    subtitle: 'Understanding Project Requirements',
    desc: 'We begin by evaluating operational needs, compliance standards, and technical specifications to provide structured consultancy and project planning tailored to industrial environments.',
    details: [
      'Technical Consultation',
      'Project Planning',
      'Standards Compliance',
      'System Recommendations',
    ],
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Engineering & Product Supply',
    subtitle: 'Quality Solutions from Trusted Brands',
    desc: 'We design and manufacture Low Voltage Switchgear and control panels while supplying instrumentation, valves, pumps, hazardous area equipment, and industrial electrical components.',
    details: [
      'LV Switchgear & Panels',
      'Field & Panel Instruments',
      'Valves & Pumps',
      'Hazardous Area Equipment',
    ],
  },
  {
    number: '03',
    icon: CheckSquare,
    title: 'Installation & Commissioning',
    subtitle: 'Safe & Structured Execution',
    desc: 'Our experienced teams carry out installation, calibration, and commissioning to ensure systems operate efficiently across Oil & Gas, Utilities, Infrastructure, and Industrial projects.',
    details: [
      'Electrical Installation',
      'Instrument Calibration',
      'System Testing',
      'Operational Handover',
    ],
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Maintenance & Support',
    subtitle: 'Long-Term Operational Reliability',
    desc: 'We provide ongoing maintenance services, technical support, and replacement solutions to ensure sustained performance and reliability throughout the asset lifecycle.',
    details: [
      'Routine Maintenance',
      'Emergency Assistance',
      'Technical Support',
      'Performance Optimization',
    ],
  },
];

export const Approach: React.FC<ApproachProps> = ({ isDark }) => {
  const titleRef = useScrollReveal();

  const bg = isDark ? 'bg-[#060e1a]' : 'bg-slate-50';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-600';
  const cardBg = isDark
    ? 'bg-[#0a1628] border-white/10'
    : 'bg-white border-slate-200';
  const connectorBg = isDark ? 'bg-blue-500/30' : 'bg-blue-200';

  return (
    <section id="approach" className={`${bg} relative py-24 md:py-32`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={titleRef} className="reveal mb-20 text-center">
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'
              }`}
          >
            <span className="w-8 h-px bg-current" />
            How We Work
            <span className="w-8 h-px bg-current" />
          </span>

          <h2
            className={`text-4xl md:text-5xl font-bold leading-tight ${textPrimary}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            From Consultation to
            <span className="block text-blue-500">Long-Term Support</span>
          </h2>

          <p className={`mt-4 text-lg max-w-3xl mx-auto ${textSecondary}`}>
            POWER CONTROL SOLUTIONS follows a structured and practical
            approach — combining engineering expertise, quality product
            supply, safe installation, and ongoing maintenance support
            across Oman and the Middle East.
          </p>
        </div>

        {/* Desktop Flow */}
        <div className="hidden lg:block mb-12">
          <div className="relative flex items-center justify-center mb-12">
            <div
              className={`absolute left-[12.5%] right-[12.5%] h-0.5 ${connectorBg} top-8`}
            />
            <div className="grid grid-cols-4 w-full">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="flex flex-col items-center text-center px-4"
                  >
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <span
                      className={`text-4xl font-black mb-2 ${isDark ? 'text-white/10' : 'text-slate-100'
                        }`}
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {step.number}
                    </span>

                    <h3
                      className={`text-lg font-bold mb-1 ${textPrimary}`}
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`text-xs font-medium mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}
                    >
                      {step.subtitle}
                    </p>

                    <p className={`text-xs mb-4 ${textSecondary}`}>
                      {step.desc}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                      {step.details.map((d) => (
                        <span
                          key={d}
                          className={`px-2 py-1 rounded-md text-[10px] font-medium ${isDark
                              ? 'bg-blue-600/15 border border-blue-500/25 text-blue-300'
                              : 'bg-blue-50 border border-blue-100 text-blue-700'
                            }`}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span
                      className={`text-xs font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}
                    >
                      {step.number}
                    </span>
                    <h3
                      className={`font-bold ${textPrimary}`}
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className={`text-sm mb-3 ${textSecondary}`}>
                  {step.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {step.details.map((d) => (
                    <span
                      key={d}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${isDark
                          ? 'bg-blue-600/15 border border-blue-500/25 text-blue-300'
                          : 'bg-blue-50 border border-blue-100 text-blue-700'
                        }`}
                    >
                      {d}
                    </span>
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
            Looking for reliable engineering and industrial supply support?
          </p>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300"
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};