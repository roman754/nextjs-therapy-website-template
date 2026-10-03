export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[var(--primary)] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Start Your Healing Journey?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Taking the first step is often the hardest part. I&apos;m here to support you with compassion, 
          expertise, and a commitment to helping you feel better.
        </p>
        
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p className="text-lg">(310) 555-0123</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-lg">contact@mayareynoldspsyd.com</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-lg">123th Street 45 W, Santa Monica, CA 90401</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@mayareynoldspsyd.com"
            className="px-8 py-4 rounded-full bg-white font-medium text-lg transition-all hover:shadow-xl"
            style={{ color: 'var(--primary)' }}
          >
            Send Email
          </a>
          <a
            href="tel:3105550123"
            className="px-8 py-4 rounded-full font-medium text-lg border-2 border-white transition-all hover:bg-white hover:text-[var(--primary)]"
          >
            Call Now
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white border-opacity-20">
          <p className="text-sm opacity-75">
            Currently accepting new clients • In-person & telehealth available • Serving Santa Monica & California
          </p>
        </div>
      </div>
    </section>
  );
}
