import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Zap,
  Activity,
  Settings,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface ServicesProps {
  isDark: boolean;
}

const services = [
  {
    icon: Zap,
    title: 'Electrical Engineering & Switchgear Solutions',
    short: 'Electrical',
    desc: 'Design and manufacturing of custom Low Voltage Switchgear and control panels for Oil & Gas, Water & Electricity, Infrastructure, Building, and Public Utility projects.',
    points: [
      'Low & Medium Voltage Switchgear',
      'Control Panel Boards',
      'Circuit Breakers (MCB, ELCB, RCCB, ACB)',
      'Relays, Contactors & Timers',
      'Explosion-Proof Panels & Junction Boxes',
    ],
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: Activity,
    title: 'Instrumentation & Process Control Solutions',
    short: 'Instrumentation',
    desc: 'Comprehensive supply of high-quality field and panel instruments, process analyzers, tank gauging systems, and intrinsically safe products across Oman.',
    points: [
      'Pressure, Level & Flow Instruments',
      'Transmitters & Switches',
      'Field Bus & Industrial Ethernet',
      'HART Interfacing & Process I/O',
      'Safety Interlocks & Valve Locking Devices',
    ],
    color: 'from-indigo-600 to-blue-700',
  },
  {
    icon: Settings,
    title: 'Mechanical Systems & Industrial Equipment',
    short: 'Mechanical',
    desc: 'Innovative and cost-effective mechanical engineering solutions delivered through strategic partnerships with internationally recognized manufacturers.',
    points: [
      'Heat Exchangers & Combustion Systems',
      'Stationary & Rotating Equipment',
      'Flanges, Manifolds & Expansion Joints',
      'Well Head Equipment',
      'Stud Bolts & Gaskets',
    ],
    color: 'from-slate-600 to-slate-800',
  },
  {
    icon: ShieldCheck,
    title: 'Valves, Pumps & Industrial Supply',
    short: 'Industrial Supply',
    desc: 'Extensive supply of valves, actuators, pumps, strainers, filters, and pipeline materials supporting diverse industrial applications.',
    points: [
      'Ball, Gate, Check & Butterfly Valves',
      'Needle & Double Block and Bleed Valves',
      'Control & Safety Valves',
      'Pumps & Pump Spares',
      'Line Pipes (SS, MI, PVC, HDPE, FRP etc.)',
    ],
    color: 'from-blue-500 to-indigo-800',
  },
];

export const Services: React.FC<ServicesProps> = ({ isDark }) => {
  const [activeService, setActiveService] = useState(0);
  const titleRef = useScrollReveal();

  const bg = isDark ? 'bg-[#060e1a]' : 'bg-slate-50';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-600';
  const cardBg = isDark
    ? 'bg-[#0a1628] border-white/10'
    : 'bg-white border-slate-200';
  const activeCardBg = isDark
    ? 'bg-[#0d1f3c] border-blue-500/40'
    : 'bg-blue-50 border-blue-300';

  return (
    <section id="services" className={`${bg} relative py-24 md:py-32`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div ref={titleRef} className="reveal mb-16 text-center">
          <span className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
            <span className="w-8 h-px bg-current" />
            Our Services
            <span className="w-8 h-px bg-current" />
          </span>

          <h2
            className={`text-4xl md:text-5xl font-bold leading-tight ${textPrimary}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Multi-Disciplinary Engineering
            <span className="block text-blue-500">Solutions</span>
          </h2>

          <p className={`mt-4 text-lg max-w-3xl mx-auto ${textSecondary}`}>
            POWER CONTROL SOLUTIONS delivers comprehensive electrical,
            instrumentation, mechanical, and industrial supply services
            designed to meet international standards and support projects
            across Oman and the Middle East.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">

          {/* Service List */}
          <div className="col-span-1 flex flex-col gap-3">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isActive = activeService === i;

              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveService(i)}
                  whileHover={{ x: 4 }}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 ${isActive ? activeCardBg : `${cardBg} hover:border-blue-400/30`
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? 'bg-blue-600' : isDark ? 'bg-white/5' : 'bg-slate-100'
                      }`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : isDark ? 'text-slate-400' : 'text-slate-600'
                        }`} />
                    </div>

                    <div className={`text-sm font-semibold ${isActive ? 'text-blue-500' : textPrimary
                      }`}>
                      {svc.short}
                    </div>

                    <ArrowRight className={`w-4 h-4 ml-auto transition ${isActive ? 'text-blue-500 translate-x-1' : 'opacity-0'
                      }`} />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Service Detail */}
          <div className="col-span-2">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`p-8 rounded-3xl border ${cardBg}`}
            >
              {(() => {
                const svc = services[activeService];
                const Icon = svc.icon;

                return (
                  <>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${svc.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className={`text-2xl font-bold mb-4 ${textPrimary}`}>
                      {svc.title}
                    </h3>

                    <p className={`mb-6 leading-relaxed ${textSecondary}`}>
                      {svc.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {svc.points.map((pt, j) => (
                        <div
                          key={j}
                          className={`p-3 rounded-xl text-sm ${isDark
                              ? 'bg-blue-600/10 border border-blue-500/20 text-slate-300'
                              : 'bg-blue-50 border border-blue-100 text-slate-700'
                            }`}
                        >
                          {pt}
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden grid gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${cardBg}`}
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${svc.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className={`text-lg font-bold mb-2 ${textPrimary}`}>
                  {svc.title}
                </h3>

                <p className={`text-sm ${textSecondary}`}>
                  {svc.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};