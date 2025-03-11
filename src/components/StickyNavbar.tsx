import { useState, useEffect, useRef } from 'react';
import { Navbar } from './Navbar';
import Footer from './Footer';

interface StickyNavLayoutProps {
  children: React.ReactNode;
}

const StickyNavLayout = ({ children }: StickyNavLayoutProps) => {
  const [scrolling, setScrolling] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const navbarHeight = navbarRef.current?.clientHeight;
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      <header
        ref={navbarRef}
        className={`fixed top-0 w-full z-[100] shadow-lg transition-all duration-300 ${
          scrolling
            ? 'bg-[rgba(122,126,189,0.2)] dark:bg-[rgba(22,22,138,0.25)] shadow-lg backdrop-blur-md border border-[rgba(255,255,255,0.2)]'
            : 'bg-transparent'
        }`}
      >
        <Navbar />
      </header>
      <main className='flex-grow' style={{ paddingTop: 'var(--navbar-height, 64px)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default StickyNavLayout;
