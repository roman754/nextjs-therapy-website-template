import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl fade-in">
            <Image
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=1000&fit=crop"
              alt="Peaceful moment of self-reflection and mindfulness"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 fade-in-delay-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              You don&apos;t have to navigate this alone
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Therapy is a space to slow down, make sense of what you&apos;re feeling, and reconnect with 
              yourself. Whether you&apos;re navigating anxiety, processing past experiences, or feeling stuck 
              in patterns that no longer serve you, I&apos;m here to help you find your way forward.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My approach is warm, collaborative, and grounded in evidence-based methods like CBT, EMDR, and 
              mindfulness. I believe healing happens in relationship, and my goal is to create a space where 
              you feel truly seen, understood, and supported.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I work with adults in Santa Monica and throughout California via telehealth. Sessions are available 
              in person at my Santa Monica office or online, with flexible scheduling including evening appointments 
              to fit your life.
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
      
      {/* Subtle divider line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
