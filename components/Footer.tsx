import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Maya Reynolds, PsyD</h3>
            <p className="text-gray-400 mb-4">
              Licensed Clinical Psychologist specializing in anxiety, trauma, and burnout therapy for adults in Santa Monica, CA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#approach" className="text-gray-400 hover:text-white transition-colors">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="#office" className="text-gray-400 hover:text-white transition-colors">
                  Our Office
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123th Street 45 W</li>
              <li>Santa Monica, CA 90401</li>
              <li className="pt-2">
                <a href="tel:3105550123" className="hover:text-white transition-colors">
                  (310) 555-0123
                </a>
              </li>
              <li>
                <a href="mailto:contact@mayareynoldspsyd.com" className="hover:text-white transition-colors">
                  contact@mayareynoldspsyd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            Licensed in California. This website is for informational purposes and does not constitute medical advice. 
            If you are experiencing a mental health emergency, please call 911 or the 988 Suicide & Crisis Lifeline.
          </p>
        </div>
      </div>
    </footer>
  );
}
