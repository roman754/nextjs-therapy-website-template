import Image from 'next/image';

export default function DoctorBio() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Doctor Photo */}
          <div className="md:w-1/3 flex-shrink-0">
            <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <Image
                src="/images/dr-maya-reynolds.jpg"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:w-2/3 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Dr. Maya Reynolds, PsyD
              </h2>
              <p className="text-xl font-medium mb-4" style={{ color: 'var(--primary)' }}>
                Licensed Clinical Psychologist
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I&apos;m a licensed clinical psychologist based in Santa Monica, California, offering therapy 
                for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
              </p>
              
              <p>
                Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally 
                feel exhausted, stuck in overthinking, or emotionally on edge. They come to me feeling "functional" 
                on the outside while quietly struggling with constant worry, tension in their body, difficulty 
                sleeping, or a sense that they&apos;re always bracing for something to go wrong.
              </p>

              <p>
                My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me 
                feeling "functional" on the outside while quietly struggling with constant worry, tension in 
                their body, difficulty sleeping, or a sense that they&apos;re always bracing for something to 
                go wrong. Others are navigating the impact of earlier life experiences that continue to affect 
                their relationships, confidence, or sense of safety.
              </p>
            </div>

            <div className="pt-6 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Licensed in California</p>
                  <p className="text-sm text-gray-600">PsyD - Clinical Psychology</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Santa Monica Office</p>
                  <p className="text-sm text-gray-600">In-person & Telehealth</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Evidence-Based</p>
                  <p className="text-sm text-gray-600">CBT, EMDR, Mindfulness</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Adults 18+</p>
                  <p className="text-sm text-gray-600">Individual Therapy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
