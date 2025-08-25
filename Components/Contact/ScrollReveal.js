"use client";
import { useEffect, useRef } from 'react';

const ScrollReveal = ({ children, animation = "fadeInUp", delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('reveal-active');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={elementRef}
      className={`scroll-reveal ${animation}`}
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
