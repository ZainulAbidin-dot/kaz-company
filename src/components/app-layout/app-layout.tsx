import { useEffect, useRef, useState } from 'react';

import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

const SCROLL_THRESHOLD = 200;
const NAV_HEIGHT_IN_PX = 100;

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [pastThreshold, setPastThreshold] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--nav-height',
      `${NAV_HEIGHT_IN_PX}px`
    );
    document.documentElement.style.setProperty(
      '--scroll-threshold',
      `${SCROLL_THRESHOLD}px`
    );
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (!navbarRef.current) return;

      const scrollY = window.scrollY;
      const isPastThreshold = scrollY > SCROLL_THRESHOLD;

      setPastThreshold(isPastThreshold);
    };

    checkScroll();

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        pastThreshold={pastThreshold}
        navHeightInPx={NAV_HEIGHT_IN_PX}
        ref={navbarRef}
      />

      <main
        className="flex-grow"
        style={{
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
