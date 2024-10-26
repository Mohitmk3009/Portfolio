"use client"
import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollWidth(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[9999]">
      <div
        className="h-full bg-white transition-all duration-300"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
