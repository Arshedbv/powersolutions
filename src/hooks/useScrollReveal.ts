import { useEffect, useRef } from "react";

let observer: IntersectionObserver | null = null;

const getObserver = (threshold: number) => {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
  }

  return observer;
};

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = getObserver(threshold);
    obs.observe(el);

    return () => {
      obs.unobserve(el);
    };
  }, [threshold]);

  return ref;
}