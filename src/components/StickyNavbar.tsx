import { useState, useEffect } from "react";
import { Navbar } from "./Navbar"; // Import your Navbar component

const StickyNavbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolling(true);  // Turn white after 100vh scroll
      } else {
        setScrolling(false); // Keep transparent in first 100vh
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-[100] shadow-lg transition-all duration-300 ${
        scrolling ? "bg-[rgba(122,126,189,0.2)] dark:bg-[rgba(22,22,138,0.25)] shadow-lg backdrop-blur-md border border-[rgba(255,255,255,0.2)]" : "bg-transparent"
      }`}
    >
      <Navbar />
    </div>
  );
};

export default StickyNavbar;
