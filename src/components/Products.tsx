import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Zap, Cpu, Monitor, ChevronRight, X } from 'lucide-react';

interface ProductsProps {
  isDark: boolean;
}

const products = [
  {
    id: 'switchgear',
    image: '/images/product-switchgear.jpg',
    icon: Zap,
    tag: 'Power Distribution',
    name: 'MV Switchgear Panel',
    model: 'PCS-MV-11000',
    tagline: 'Precision Power Distribution for Critical Infrastructure',
    desc: 'Our Medium Voltage Switchgear Panels deliver reliable and safe power distribution for offshore platforms and onshore facilities. Engineered for extreme environments with advanced arc-flash protection.',
    specs: [
      { label: 'Voltage Rating', value: 'Up to 33kV' },
      { label: 'Current Rating', value: '630A – 4000A' },
      { label: 'Protection Class', value: 'IP65 / IP67' },
      { label: 'Standard', value: 'IEC 62271' },
      { label: 'Arc Flash', value: 'IAC Class A/B' },
      { label: 'Cert.', value: 'ATEX Zone 1/2' },
    ],
    features: ['Arc Flash Protection', 'Remote Monitoring', 'SCADA Integration', 'Redundant Control'],
    badge: 'Best Seller',
    badgeColor: 'bg-blue-600',
  },
  {
    id: 'plc',
    image: '/images/product-plc.jpg',
    icon: Cpu,
    tag: 'Automation',
    name: 'Industrial PLC Control System',
    model: 'PCS-CTRL-500',
    tagline: 'Advanced Process Automation & Control Intelligence',
    desc: 'The PCS-CTRL-500 is a ruggedized PLC platform designed for demanding industrial environments. Delivers deterministic control with hot-swap redundancy and full cybersecurity hardening.',
    specs: [
      { label: 'CPU Speed', value: '1.2 GHz Dual Core' },
      { label: 'I/O Points', value: 'Up to 8,192' },
      { label: 'Scan Time', value: '< 1ms' },
      { label: 'Protocol', value: 'MODBUS / Profinet' },
      { label: 'Redundancy', value: 'Hot Standby' },
      { label: 'Rating', value: 'SIL 2 Certified' },
    ],
    features: ['Hot-Swap Redundancy', 'Cybersecurity IEC 62443', 'Edge Computing', 'Real-time Analytics'],
    badge: 'SIL 2',
    badgeColor: 'bg-emerald-600',
  },
  {
    id: 'scada',
    image: '/images/product-scada.jpg',
    icon: Monitor,
    tag: 'Monitoring & Control',
    name: 'SCADA / HMI System',
    model: 'PCS-SCADA-PRO',
    tagline: 'Real-Time Visibility Across Your Entire Operation',
    desc: 'The PCS-SCADA-PRO provides centralized supervision and control of complex industrial processes. Features an intuitive dark-themed HMI with real-time analytics, alarming, and historian.',
    specs: [
      { label: 'Display', value: '4K Multi-Screen' },
      { label: 'Tags', value: 'Unlimited' },
      { label: 'History', value: '10-Year Retention' },
      { label: 'Connectivity', value: 'OPC-UA / DNP3' },
      { label: 'Availability', value: '99.99% Uptime' },
      { label: 'Security', value: 'IEC 62443-3-3' },
    ],
    features: ['AI Anomaly Detection', 'Mobile Dashboard', 'Cloud Historian', 'Predictive Alerts'],
    badge: 'New',
    badgeColor: 'bg-orange-500',
  },
];

export const Products: React.FC<ProductsProps> = ({ isDark }) => {
  const [selected, setSelected] = useState<typeof products[0] | null>(null);
  const titleRef = useScrollReveal();

  const bg = isDark ? 'bg-[#0a1628]' : 'bg-white';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-500';
  const cardBg = isDark ? 'bg-[#0d1f3c] border-white/8 hover:border-blue-500/40' : 'bg-slate-50 border-slate-200 hover:border-blue-300';
  const modalBg = isDark ? 'bg-[#0a1628]' : 'bg-white';

  return (
    <section id="products" className={`${bg} relative py-24 md:py-32 overflow-hidden`}>
      {/* BG Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 w-full h-px"
          style={{ background: isDark ? 'linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)' : 'linear-gradient(90deg, transparent, rgba(37,99,235,0.15), transparent)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="reveal mb-16 text-center">
          <span className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            <span className="w-8 h-px bg-current" />
            Product Showcase
            <span className="w-8 h-px bg-current" />
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${textPrimary}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Our{' '}
            <span className={isDark ? 'gradient-text' : 'gradient-text-blue'}>Flagship</span>
            {' '}Products
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${textSecondary}`}>
            Purpose-built industrial control products trusted across the energy sector.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => setSelected(product)}
                className={`group relative rounded-3xl border overflow-hidden cursor-pointer transition-all duration-300 ${cardBg}`}
                style={{ boxShadow: isDark ? 'none' : '0 4px 30px rgba(0,0,0,0.05)' }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold text-white ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: isDark ? 'brightness(0.85)' : 'brightness(0.95)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-current to-transparent opacity-40"
                    style={{ color: isDark ? '#0d1f3c' : '#f8fafc' }} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${isDark ? 'bg-blue-600/20' : 'bg-blue-50'}`}>
                      <Icon className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                    <span className={`text-xs font-medium tracking-wider uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      {product.tag}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-1 ${textPrimary}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {product.name}
                  </h3>
                  <p className={`text-xs mb-3 font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{product.model}</p>
                  <p className={`text-sm leading-relaxed mb-4 line-clamp-2 ${textSecondary}`}>{product.tagline}</p>

                  {/* Quick specs */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.specs.slice(0, 4).map((spec) => (
                      <div key={spec.label} className={`p-2 rounded-lg text-xs ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
                        <div className={`font-medium mb-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{spec.label}</div>
                        <div className={`font-semibold ${textPrimary}`}>{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 group-hover:gap-3
                      ${isDark ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white'}`}
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={`fixed inset-4 md:inset-8 lg:inset-16 z-50 rounded-3xl overflow-hidden shadow-2xl ${modalBg}`}
              style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}
            >
              <button
                onClick={() => setSelected(null)}
                className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2 h-full">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-full object-cover"
                    style={{ filter: isDark ? 'brightness(0.8)' : 'brightness(0.9)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold text-white ${selected.badgeColor} mb-2 inline-block`}>
                      {selected.badge}
                    </span>
                    <p className="text-white/70 text-sm font-mono">{selected.model}</p>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 md:p-8 overflow-y-auto ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  <div className={`text-xs font-semibold tracking-widest uppercase mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {selected.tag}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {selected.name}
                  </h2>
                  <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{selected.desc}</p>

                  {/* Specs */}
                  <h4 className={`text-xs font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Technical Specs</h4>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {selected.specs.map((spec) => (
                      <div key={spec.label} className={`p-3 rounded-xl ${isDark ? 'bg-white/5 border border-white/8' : 'bg-slate-50 border border-slate-200'}`}>
                        <div className={`text-xs mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{spec.label}</div>
                        <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <h4 className={`text-xs font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Key Features</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selected.features.map((f) => (
                      <span key={f} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${isDark ? 'bg-blue-600/20 text-blue-300 border border-blue-500/20' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>
                        {f}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    onClick={() => { setSelected(null); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200"
                  >
                    Request Quote
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
