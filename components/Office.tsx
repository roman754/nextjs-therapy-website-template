import Image from 'next/image';

export default function Office() {
  return (
    <section id="office" className="py-20 lg:py-28 bg-[var(--bg-cream)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-5 floating-shape" style={{ backgroundColor: 'var(--accent)' }}></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full opacity-5 floating-shape" style={{ backgroundColor: 'var(--primary)', animationDelay: '1.5s' }}></div>
      
      {/* Subtle divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
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
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 fade-in">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=1000&fit=crop"
              alt="Warm and inviting therapy office with natural wood and comfortable seating"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
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
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Free Parking</p>
                  <p className="text-gray-600">Convenient street parking and nearby parking structures</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Accessible</p>
                  <p className="text-gray-600">Wheelchair accessible building with elevator access</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 fade-in">
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop"
              alt="Cozy therapy room with comfortable seating and warm natural light"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop"
              alt="Peaceful office space with plants and natural elements"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
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
