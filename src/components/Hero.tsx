import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Zap,
  Settings,
  Download,
} from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const stats = [
  { value: '4+', label: 'Years Industry Experience' },
  { value: '500+', label: 'Products & Systems' },
  { value: '100+', label: 'Projects' },
  { value: 'Middle East', label: 'Operational Presence' },
];

const badges = [
  { icon: ShieldCheck, text: 'Oil & Gas Solutions' },
  { icon: Zap, text: 'Electrical & Instrumentation Experts' },
  { icon: Settings, text: 'Mechanical & Industrial Supply' },
];

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      className={`relative min-h-[100svh] flex items-center overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'
        }`}
    >
      {/* ================= Background ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? 'dark-bg' : 'light-bg'}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
          >
            <picture>
              {/* Desktop Image */}
              <source
                media="(min-width: 768px)"
                srcSet={
                  isDark
                    ? '/images/hero-bg.jpg'
                    : '/images/hero-bg-light.png'
                }
              />

              {/* Mobile Image */}
              <img
                src={
                  isDark
                    ? '/images/hero-bg-dark-mobile.png'
                    : '/images/hero-bg-light-mobile.png'
                }
                alt="Industrial Background"
                className="w-full h-full object-cover object-center"
              />
            </picture>
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div
          className={
            isDark
              ? 'absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/30'
              : 'absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-white/10'
          }
        />
      </div>

      {/* ================= Content ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ willChange: 'transform' }}
          >
            {/* Location Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className={
                  isDark
                    ? 'inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase bg-blue-600/20 border border-blue-500/30 text-blue-300'
                    : 'inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase bg-blue-100 border border-blue-200 text-blue-700'
                }
              >
                Sultanate of Oman — Muscat
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className={
                isDark
                  ? 'text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white'
                  : 'text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-slate-900'
              }
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Powering Industrial
              <span className="block text-blue-600">
                Excellence.
              </span>
              Delivering Reliable
              <span className="block text-blue-500">
                Engineering Solutions.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={
                isDark
                  ? 'text-lg max-w-2xl leading-relaxed mb-8 text-slate-300'
                  : 'text-lg max-w-2xl leading-relaxed mb-8 text-slate-600'
              }
            >
              POWER CONTROL SOLUTIONS is a leading multi-disciplinary
              engineering, installation, and maintenance company serving
              Oil & Gas, Infrastructure, Utilities, and Industrial sectors
              across Oman and the Middle East.
            </motion.p>

            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className={
                    isDark
                      ? 'flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300'
                      : 'flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700'
                  }
                >
                  <Icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
              <a
                href="#services"
                className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300"
              >
                Explore Our Services
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="relative group">
                <button
                  className={
                    isDark
                      ? 'flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 font-semibold transition'
                      : 'flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold transition'
                  }
                >
                  <Download className="w-4 h-4" />
                  Download Brochure
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={
                    isDark
                      ? 'p-4 rounded-xl bg-white/5 border border-white/10'
                      : 'p-4 rounded-xl bg-slate-100 border border-slate-200'
                  }
                >
                  <div
                    className={
                      isDark
                        ? 'text-2xl font-bold mb-1 text-white'
                        : 'text-2xl font-bold mb-1 text-slate-900'
                    }
                  >
                    {stat.value}
                  </div>
                  <div
                    className={
                      isDark
                        ? 'text-sm text-slate-400'
                        : 'text-sm text-slate-600'
                    }
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={itemVariants}
              className={
                isDark
                  ? 'mt-16 grid sm:grid-cols-3 gap-6 text-sm text-slate-400'
                  : 'mt-16 grid sm:grid-cols-3 gap-6 text-sm text-slate-600'
              }
            >
              <div className="flex items-center gap-2">
                <a href='tel:+96879763931' style={{ display: 'flex', gap: "5px" }}>
                  <Phone className="w-4 h-4 text-blue-600" />
                  +968 79763931
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a href='mailto:sales@pcsoman.com' style={{ display: 'flex', gap: "5px", alignItems: 'center' }}>
                  <Mail className="w-4 h-4 text-blue-600" />
                  sales@pcsoman.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                Muscat – Sultanate of Oman
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};