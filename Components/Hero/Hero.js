"use client";
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    "Software Engineering Intern",
    "3rd Year IT Undergraduate",
    "Aspiring Full Stack Developer"
  ];

  useEffect(() => {
    const typeSpeed = 100; // Speed for typing
    const deleteSpeed = 50; // Speed for deleting
    const pauseTime = 2000; // Time to pause when text is complete

    const typewriter = () => {
      const currentText = texts[textIndex];
      
      if (!isDeleting) {
        // Typing phase
        if (charIndex < currentText.length) {
          setTimeout(() => {
            setText(currentText.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          }, typeSpeed);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting phase
        if (charIndex > 0) {
          setTimeout(() => {
            setText(currentText.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          }, deleteSpeed);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typewriter, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, textIndex, charIndex, texts]);

  return (
    <section className="hero">
              <div className="hero-content">
          <div className="hero-left">
            <div className="profile-image">
              <div className="image-placeholder"><img src="/Dp.jpg" alt="Profile" /></div>
            </div>
          </div>
          <div className="hero-right">
            <div className="headline-section">
              <h1 className="main-headline">Hi, I am Mandrini Yashodha</h1>
              <div className="headline-info">
                <div className="typewriter-container">
                  <span className="typewriter-text">{text}</span>
                  <span className="cursor">|</span>
                </div>
              </div>
            </div>
            
            <div className="who-am-i">
              <h2 className="who-am-i-title">WHO AM I?</h2>
              <div className="description">
              <p>
                I am a motivated third year Information Technology Student with a strong foundation in programming, database management, and web development. Passionate about learning emerging technologies and applying theoretical knowledge to practical solutions. Seeking opportunities with a strong focus on hands-on experience in software development while contributing to innovate projects.
              </p>
            </div>
            </div>

            
            <div className="hero-buttons">
              <button className="hero-btn primary-btn" onClick={() => window.open('https://drive.google.com/file/d/1oCCABvFS3xz13ZMuQhVtg_Tvcv-rO3lP/view?usp=sharing', '_blank')}>
                <span>View My Resume</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
              </button>
              <button className="hero-btn secondary-btn" onClick={() => document.getElementById('get-in-touch').scrollIntoView({ behavior: 'smooth' })}>
                <span>Get In Touch</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
    </section>
  );
} 