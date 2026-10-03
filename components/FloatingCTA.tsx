'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Link
          href="#contact"
          className="fixed bottom-8 right-8 z-50 px-6 py-4 rounded-full text-white font-medium shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl flex items-center gap-2 animate-bounce"
          style={{ backgroundColor: 'var(--primary)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-dark)';
            e.currentTarget.classList.remove('animate-bounce');
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary)';
          }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book Now
        </Link>
      )}
    </>
  );
}
