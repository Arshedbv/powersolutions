import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@pcsoman.com',
    href: 'mailto:sales@pcsoman.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+968 79763931',
    href: 'tel:+96879763931',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Muscat, Sultanate of Oman',
    href: '#',
  },
];

export const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const titleRef = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const bg = isDark ? 'bg-[#060e1a]' : 'bg-slate-50';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-500';
  const inputBg = isDark
    ? 'bg-white/5 border-white/10 text-white placeholder-slate-600 focus:border-blue-500/60 focus:bg-white/8'
    : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-400';
  const formBg = isDark
    ? 'bg-[#0a1628] border-white/8'
    : 'bg-white border-slate-200';
  const infoBg = isDark
    ? 'bg-[#0d1f3c] border-blue-500/20'
    : 'bg-blue-700';

  return (
    <section id="contact" className={`${bg} relative py-24 md:py-32 overflow-hidden`}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="reveal mb-16 text-center">
          <span className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            <span className="w-8 h-px bg-current" />
            Get In Touch
            <span className="w-8 h-px bg-current" />
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${textPrimary}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Let's Build{' '}
            <span className={isDark ? 'gradient-text' : 'gradient-text-blue'}>Something</span>
            <br />
            Together
          </h2>
          <p className={`mt-4 text-lg max-w-xl mx-auto ${textSecondary}`}>
            Ready to start your next project? Our engineering team is ready to discuss your requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-3xl p-8 ${infoBg} relative overflow-hidden`}
          >
            {/* BG decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />
            </div>

            <div className="relative z-10">
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Contact Information
              </h3>
              <p className={`text-sm mb-8 ${isDark ? 'text-slate-400' : 'text-blue-100'}`}>
                Reach our team directly or fill out the form and we'll respond within one business day.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110 ${
                      isDark ? 'bg-blue-600/30' : 'bg-white/20'
                    }`}>
                      <Icon className="w-4 h-4 text-blue-300" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium mb-0.5 ${isDark ? 'text-slate-500' : 'text-blue-200'}`}>{label}</p>
                      <p className="text-sm font-medium text-white">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Working hours */}
              <div className={`p-4 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/10 border border-white/20'}`}>
                <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${isDark ? 'text-blue-400' : 'text-blue-200'}`}>
                  Working Hours
                </p>
                <p className="text-sm text-white">Sunday – Thursday</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-blue-200'}`}>8:00 AM – 5:00 PM (GST)</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`lg:col-span-2 rounded-3xl border p-8 ${formBg}`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </motion.div>
                <h3 className={`text-2xl font-bold mb-2 ${textPrimary}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Message Sent!
                </h3>
                <p className={`text-base ${textSecondary}`}>
                  Thank you for reaching out. Our team will get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', message: '' }); }}
                  className="mt-6 px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Ahmed Al-Rashidi"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="ahmed@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    placeholder="Petroleum Development Oman"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg}`}
                  />
                </div>

                {/* Service */}
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Service of Interest
                  </label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/20 ${inputBg} cursor-pointer`}
                  >
                    <option value="" className={isDark ? 'bg-[#0a1628]' : 'bg-white'}>Select a service...</option>
                    <option value="offshore" className={isDark ? 'bg-[#0a1628]' : 'bg-white'}>Offshore Platform Engineering</option>
                    <option value="onshore" className={isDark ? 'bg-[#0a1628]' : 'bg-white'}>Onshore Process Facilities</option>
                    <option value="safety" className={isDark ? 'bg-[#0a1628]' : 'bg-white'}>Safety Shutdown & Control</option>
                    <option value="maintenance" className={isDark ? 'bg-[#0a1628]' : 'bg-white'}>Lifecycle Maintenance</option>
                    <option value="products" className={isDark ? 'bg-[#0a1628]' : 'bg-white'}>Product Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project requirements, timeline, and any specific technical details..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/20 resize-none ${inputBg}`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-70 transition-all duration-200 hover:scale-[1.01] shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                  data-interactive="true"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className={`text-xs text-center ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
