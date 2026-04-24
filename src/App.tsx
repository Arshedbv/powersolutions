import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';

import { GlowOrb } from './components/GlowOrb';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Capabilities } from './components/Capabilities';
import { Approach } from './components/Approach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const { toggleTheme, isDark } = useTheme();

  // GLOBAL THEME SYSTEM (LIGHT IS PRIMARY)
  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      // DARK MODE (inversion layer)
      document.body.style.backgroundColor = '#060e1a';
      document.body.style.color = '#f8fafc';

      root.style.setProperty('--bg', '#060e1a');
      root.style.setProperty('--text', '#f8fafc');
      root.style.setProperty('--muted', 'rgba(248, 250, 252, 0.7)');
    } else {
      // LIGHT MODE (PRIMARY)
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#0a0a0a';

      root.style.setProperty('--bg', '#ffffff');
      root.style.setProperty('--text', '#0a0a0a');
      root.style.setProperty('--muted', 'rgba(0, 0, 0, 0.6)');
    }
  }, [isDark]);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: isDark ? '#060e1a' : '#ffffff',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Ambient cursor glow */}
      <GlowOrb isDark={isDark} />

      {/* NAVBAR */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* MAIN CONTENT */}
      <main className="relative z-10">
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Services isDark={isDark} />
        <Products isDark={isDark} />
        <Capabilities isDark={isDark} />
        <Approach isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      {/* FOOTER */}
      <Footer isDark={isDark} />
    </div>
  );
}