import Image from 'next/image';

export default function Office() {
  return (
    <section id="office" className="py-20 lg:py-28 bg-[var(--bg-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A Space Designed for Healing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            My Santa Monica office is a quiet, private space designed to feel calm and grounding, 
            with natural light and a comfortable, uncluttered environment.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=1000&fit=crop"
              alt="Comfortable therapy office waiting area with natural lighting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Comfortable & Confidential
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              The space itself is designed to help you feel more at ease when you arrive. Many clients 
              share that the environment helps them feel more grounded and open during sessions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I offer both in-person therapy from my Santa Monica office and secure telehealth sessions 
              for clients located in California. My office is easily accessible and provides a welcoming 
              atmosphere where you can feel safe to explore your thoughts and emotions.
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">123th Street 45 W, Santa Monica, CA 90401</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Flexible Scheduling</p>
                  <p className="text-gray-600">Evening appointments available for working professionals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Privacy & Safety</p>
                  <p className="text-gray-600">Confidential, secure environment with private entrance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Images Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop"
              alt="Peaceful therapy session room"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
              alt="Comfortable seating area in therapy office"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Additional Info Box */}
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-md text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-3">In-Person & Telehealth Options</h4>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you prefer in-person sessions at my Santa Monica office or the convenience of 
            secure video sessions from home, I&apos;m here to support you in the way that works best for your life.
          </p>
        </div>
      </div>
    </section>
  );
}
