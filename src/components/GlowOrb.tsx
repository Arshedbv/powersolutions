import React, { useEffect, useRef, useState } from 'react';

interface GlowOrbProps {
  isDark: boolean;
}

export const GlowOrb: React.FC<GlowOrbProps> = ({ isDark }) => {
  const orbRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -200, y: -200 });
  const currentRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show orb on non-touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
    setVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('button, a, [data-interactive]');
      setExpanded(!!interactive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    const animate = () => {
      const lerp = 0.09;
      currentRef.current.x += (posRef.current.x - currentRef.current.x) * lerp;
      currentRef.current.y += (posRef.current.y - currentRef.current.y) * lerp;

      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!visible) return null;

  const size = expanded ? 280 : 160;
  const opacity = expanded ? 0.55 : 0.35;

  return (
    <div
      ref={orbRef}
      className="orb"
      style={{
        width: size,
        height: size,
        opacity,
        background: isDark
          ? 'radial-gradient(circle at center, rgba(59,130,246,0.9) 0%, rgba(37,99,235,0.6) 30%, rgba(29,78,216,0.3) 60%, transparent 100%)'
          : 'radial-gradient(circle at center, rgba(37,99,235,0.7) 0%, rgba(59,130,246,0.4) 30%, rgba(147,197,253,0.2) 60%, transparent 100%)',
        filter: `blur(${expanded ? 40 : 30}px)`,
        transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease, filter 0.4s ease',
      }}
    />
  );
};
