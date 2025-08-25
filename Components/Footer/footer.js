"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          Copyright © {currentYear} Mandrini Yashodha
        </p>
      </div>
    </footer>
  );
}