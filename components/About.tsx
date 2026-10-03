import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=1000&fit=crop"
              alt="Calm therapy environment"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              You don&apos;t have to navigate this alone
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;m Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, California. 
              I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Many of my clients are high-achieving, thoughtful, and self-aware—but internally feel exhausted, 
              stuck in overthinking, or emotionally on edge. They come to me feeling "functional" on the outside 
              while quietly struggling with constant worry, tension, difficulty sleeping, or a sense that they&apos;re 
              always bracing for something to go wrong.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My work focuses on anxiety, panic, trauma, and burnout. I also frequently support clients dealing 
              with professional burnout, perfectionism, and high internal pressure—especially entrepreneurs, 
              creatives, and professionals who feel disconnected after years of pushing through stress.
            </p>
            <div className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Licensed Clinical Psychologist (PsyD)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Specializing in Anxiety, Trauma & Burnout</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Serving Santa Monica & California via Telehealth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
