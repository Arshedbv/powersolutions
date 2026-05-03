import React from 'react';
import { motion } from 'framer-motion';
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
  { value: '15+', label: 'Years Industry Experience' },
  { value: '500+', label: 'Products & Systems Supplied' },
  { value: '100+', label: 'Projects Delivered' },
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Industrial Platform"
          className="w-full h-full object-cover object-center"
          style={{ filter: isDark ? 'brightness(0.35)' : 'brightness(0.45)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            {/* Location */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase bg-blue-600/20 border border-blue-500/30 text-blue-300">
                Sultanate of Oman — Dhofar, Salalah
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Powering Industrial
              <span className="block text-blue-500">Excellence.</span>
              Delivering Reliable
              <span className="block text-blue-400">Engineering Solutions.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-8"
            >
              POWER CONTROL SOLUTIONS is a leading multi-disciplinary engineering,
              installation, and maintenance company serving Oil & Gas, Infrastructure,
              Utilities, and Industrial sectors across Oman and the Middle East.
            </motion.p>

            {/* Service Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                >
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">

              {/* Services Button */}
              <a
                href="#services"
                className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300"
              >
                Explore Our Services
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300 font-semibold">
                  <Download className="w-4 h-4" />
                  Download Brochure
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-56 bg-slate-900 border border-white/10 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl">

                  <a
                    href="/pdf/power-control-solutions.pdf"
                    download
                    className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                  >
                    Power Control Solutions
                  </a>

                  <a
                    href="/pdf/product-brochure.pdf"
                    download
                    className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                  >
                    Product Brochure
                  </a>

                </div>
              </div>

            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="mt-16 grid sm:grid-cols-3 gap-6 text-slate-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                +968 79763931
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                sales@pcsoman.com
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                Dhofar, Salalah – Sultanate of Oman
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};