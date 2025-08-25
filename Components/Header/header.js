"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop - 80; // Account for header height
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 second duration
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      // Easing function for smooth animation
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }

      requestAnimationFrame(animation);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-placeholder">MY</div>
          <div className="logo-text">
         </div>
        </div>
        <div className="personal-name">Mandrini Yashodha</div>
      </div>
      <nav className="nav">
        <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
        <button onClick={() => scrollToSection('home')} className="nav-link">About</button>
        <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
        <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
        <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
        <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
      </nav>
    </header>
  );
}