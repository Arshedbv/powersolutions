import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const navLinks = [
  { label: 'Home',         href: '#hero' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Products',     href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Approach',     href: '#approach' },
  { label: 'Contact',      href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  /* ── Nav background logic ──────────────────────────────────────
     • Not scrolled → semi-transparent glass (works on any hero bg)
     • Scrolled + dark → deep navy glass
     • Scrolled + light → frosted white glass
  ─────────────────────────────────────────────────────────────── */
  const navBg = scrolled
    ? isDark
      ? 'nav-glass-dark'
      : 'nav-glass-light'
    : 'nav-glass-idle';

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── Logo ── */}
            <a
              href="#hero"
              onClick={e => { e.preventDefault(); handleNavClick('#hero'); }}
              className="flex items-center gap-2.5 group"
            >
              <div
                className={`
                  relative w-8 h-8 rounded-lg flex items-center justify-center
                  transition-all duration-300 group-hover:scale-110
                  ${isDark
                    ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]'
                    : 'bg-blue-700 shadow-[0_0_16px_rgba(37,99,235,0.3)]'}
                `}
              >
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>

              <div className="flex flex-col leading-none">
                <span
                  className={`
                    font-bold tracking-tight
                    ${isDark ? 'text-white' : 'text-slate-900'}
                  `}
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  PCS OMAN
                </span>
                <span
                  className={`text-[9px] tracking-widest uppercase ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  Power Control Solutions
                </span>
              </div>
            </a>

            {/* ── Desktop Links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`
                      relative px-3 py-2 text-sm font-medium rounded-lg
                      transition-all duration-200
                      ${isActive
                        ? isDark
                          ? 'text-blue-400'
                          : 'text-blue-700'
                        : isDark
                          ? 'text-slate-300 hover:text-white hover:bg-white/5'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }
                    `}
                  >
                    {link.label}

                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className={`
                          absolute bottom-1 left-3 right-3 h-0.5 rounded-full
                          ${isDark ? 'bg-blue-400' : 'bg-blue-700'}
                        `}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* ── Right actions ── */}
            <div className="flex items-center gap-3">

              {/* Theme toggle */}
              <button
                onClick={onToggleTheme}
                aria-label="Toggle theme"
                className={`
                  w-9 h-9 rounded-lg flex items-center justify-center
                  transition-all duration-200 hover:scale-110
                  ${isDark
                    ? 'bg-white/10 text-yellow-300 hover:bg-white/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }
                `}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* CTA button */}
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}
                className={`
                  hidden md:flex items-center gap-2 px-4 py-2 rounded-lg
                  text-sm font-semibold text-white
                  transition-all duration-300 hover:scale-105
                  ${isDark
                    ? 'bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                    : 'bg-blue-700 hover:bg-blue-600 shadow-[0_4px_15px_rgba(37,99,235,0.3)]'
                  }
                `}
              >
                Get in Touch
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(prev => !prev)}
                aria-label="Toggle menu"
                className={`
                  lg:hidden w-9 h-9 rounded-lg flex items-center justify-center
                  transition-all duration-200
                  ${isDark
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }
                `}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`
              fixed inset-x-0 top-16 z-40 mx-3 mt-1
              rounded-2xl overflow-hidden
              ${isDark ? 'glass-dark' : 'glass-light'}
            `}
            style={{
              boxShadow: isDark
                ? '0 20px 60px rgba(0,0,0,0.5)'
                : '0 20px 60px rgba(0,0,0,0.1)',
            }}
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`
                      px-4 py-3 rounded-xl text-sm font-medium
                      transition-all duration-200
                      ${isActive
                        ? isDark
                          ? 'bg-blue-600/20 text-blue-400'
                          : 'bg-blue-50 text-blue-700'
                        : isDark
                          ? 'text-slate-300 hover:bg-white/5 hover:text-white'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }
                    `}
                  >
                    {link.label}
                  </motion.a>
                );
              })}

              {/* Mobile CTA */}
              <div className={`
                mt-2 pt-3 border-t
                ${isDark ? 'border-white/10' : 'border-slate-200'}
              `}>
                <a
                  href="#contact"
                  onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}
                  className="
                    w-full flex items-center justify-center
                    px-4 py-3 rounded-xl text-sm font-semibold
                    bg-blue-600 hover:bg-blue-500 text-white
                    transition-colors duration-200
                  "
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};