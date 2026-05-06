import React from 'react';
import { Zap, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const footerLinks = {
  Services: ['Offshore Engineering', 'Onshore Facilities', 'Safety Systems', 'Lifecycle Maintenance'],
  Products: ['MV Switchgear', 'PLC Control Systems', 'SCADA / HMI', 'Power Distribution'],
  Company: ['About Us', 'Careers', 'News & Insights', 'Certifications'],
};

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const bg = isDark ? 'bg-[#030b16]' : 'bg-slate-900';
  const border = isDark ? 'border-white/8' : 'border-slate-700';

  return (
    <footer className={`${bg} relative overflow-hidden`}>
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)' }}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -bottom-20 left-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className={`py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b ${border}`}>
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  PCS OMAN
                </div>
                <div className="text-blue-400 text-[9px] tracking-widest uppercase">
                  Power Control Solutions
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Engineering excellence for the energy sector. Delivering precision-engineered
              industrial solutions across Oman and the Middle East since 1999.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              {[
                { icon: Mail, text: 'info@pcsoman.com' },
                { icon: Phone, text: '+968 79763931', href: 'tel:+96879763931' },
                { icon: MapPin, text: 'Muscat, Sultanate of Oman' },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <a href={href}><span className="text-xs text-slate-400">{text}</span></a>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-blue-400 transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {link}
                      <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Power Control Solutions Oman LLC. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-xs">Terms of Use</a>

            {/* Social */}
            <a
              href="#"
              className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-600/30 transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
