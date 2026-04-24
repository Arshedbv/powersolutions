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

  // Apply theme class to body for global theming
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#060e1a' : '#f8fafc';
    document.body.style.color = isDark ? '#f8fafc' : '#0a1628';
  }, [isDark]);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: isDark ? '#060e1a' : '#f8fafc',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Global glowing orb cursor */}
      <GlowOrb isDark={isDark} />

      {/* Navigation */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main content */}
      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Services isDark={isDark} />
        <Products isDark={isDark} />
        <Capabilities isDark={isDark} />
        <Approach isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />
    </div>
  );
}
