import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Zap,
  Gauge,
  Settings,
  ShieldCheck,
  Wrench,
  Factory,
} from 'lucide-react';

interface CapabilitiesProps {
  isDark: boolean;
}

const capabilities = [
  {
    icon: Zap,
    title: 'Electrical Engineering',
    desc: 'Design and manufacturing of Low Voltage Switchgear, control panels, distribution systems, and industrial electrical components for Oil & Gas, Infrastructure, and Utilities.',
  },
  {
    icon: Gauge,
    title: 'Instrumentation Solutions',
    desc: 'Complete range of field and panel instruments including pressure, flow, temperature, and level devices, transmitters, analyzers, and tank gauging systems.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Compliance Systems',
    desc: 'Intrinsic safety solutions, hazardous area equipment, safety interlocks, valve locking devices, surge protection, and industrial security systems.',
  },
  {
    icon: Settings,
    title: 'Mechanical Equipment Supply',
    desc: 'Supply of valves, pumps, actuators, heat exchangers, flanges, manifolds, expansion joints, and rotating equipment from leading international manufacturers.',
  },
  {
    icon: Wrench,
    title: 'Installation & Maintenance',
    desc: 'Engineering installation, commissioning, consultancy, project management, and ongoing operational support services across industrial facilities.',
  },
  {
    icon: Factory,
    title: 'Industries Served',
    desc: 'Supporting Oil & Gas, Water & Electricity, Infrastructure, Building, and Public Utility projects across Oman, India, and the Middle East.',
  },
];

export const Capabilities: React.FC<CapabilitiesProps> = ({ isDark }) => {
  const titleRef = useScrollReveal();

  const bg = isDark ? 'bg-[#060e1a]' : 'bg-slate-50';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-600';
  const cardBg = isDark
    ? 'bg-[#0a1628] border-white/10 hover:border-blue-400/30'
    : 'bg-white border-slate-200 hover:border-blue-300';

  return (
    <section id="capabilities" className={`${bg} py-24 md:py-32`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={titleRef} className="reveal mb-16 text-center">
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            <span className="w-8 h-px bg-current" />
            Our Capabilities
            <span className="w-8 h-px bg-current" />
          </span>

          <h2
            className={`text-4xl md:text-5xl font-bold leading-tight ${textPrimary}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Comprehensive Engineering &
            <span className="block text-blue-500">Industrial Solutions</span>
          </h2>

          <p className={`mt-4 text-lg max-w-3xl mx-auto ${textSecondary}`}>
            POWER CONTROL SOLUTIONS delivers multi-disciplinary engineering,
            installation, and maintenance services supported by high-quality
            industrial products and strategic global partnerships.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl border transition-all duration-300 ${cardBg}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isDark ? 'bg-white/5' : 'bg-slate-100'
                  }`}
                >
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>

                <h3
                  className={`text-lg font-bold mb-2 ${textPrimary}`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {item.title}
                </h3>

                <p className={`text-sm leading-relaxed ${textSecondary}`}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Regional Presence Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`mt-16 p-8 md:p-10 rounded-3xl text-center ${
            isDark
              ? 'bg-[#0a1628] border border-blue-500/20'
              : 'bg-blue-600 text-white'
          }`}
        >
          <h3
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-white'
            }`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Regional Experience Across India & Middle East
          </h3>

          <p
            className={`max-w-2xl mx-auto ${
              isDark ? 'text-slate-400' : 'text-blue-100'
            }`}
          >
            With successful project execution across Oman, India, and the
            Middle East, we deliver reliable, compliant, and high-performance
            engineering solutions tailored to diverse industrial environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};