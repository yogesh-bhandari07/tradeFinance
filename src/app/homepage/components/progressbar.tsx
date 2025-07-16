'use client';

import { useEffect, useState } from 'react';

export function IndeterminateProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Delay rendering until after hydration
    setHasMounted(true);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const total = scrollHeight - clientHeight;
      const percent = total > 0 ? (scrollTop / total) * 100 : 0;

      setScrollProgress(percent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // trigger once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!hasMounted) {
    // Optional fallback to avoid SSR mismatch
    return (
      <div
        suppressHydrationWarning
        className="w-full h-1 bg-[#ff6900]"
      >
        <div className="h-full w-0 bg-ttp-orange transition-all duration-200 ease-out" />
      </div>
    );
  }

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={scrollProgress}
      className="w-full h-1 bg-[#ff6900]"
    >
      <div
        className="h-full bg-ttp-orange transition-all duration-200 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
