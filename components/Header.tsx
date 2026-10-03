'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>
              Dr. Maya Reynolds
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
              Services
            </Link>
            <Link href="#approach" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
              Approach
            </Link>
            <Link href="#office" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
              Our Office
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
              FAQ
            </Link>
            <Link 
              href="#contact" 
              className="px-6 py-2.5 rounded-full text-white font-medium transition-colors"
              style={{ backgroundColor: 'var(--primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-dark)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[var(--primary)] p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="#about" 
                className="text-gray-700 hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#services" 
                className="text-gray-700 hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#approach" 
                className="text-gray-700 hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Approach
              </Link>
              <Link 
                href="#office" 
                className="text-gray-700 hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Office
              </Link>
              <Link 
                href="#faq" 
                className="text-gray-700 hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="#contact" 
                className="px-6 py-2.5 rounded-full text-white font-medium text-center"
                style={{ backgroundColor: 'var(--primary)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
