import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-[var(--bg-cream)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Therapy for Anxiety, Trauma & Burnout in{' '}
              <span style={{ color: 'var(--primary)' }}>Santa Monica</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Compassionate support for high-achieving adults navigating anxiety, stress, and past experiences. 
              Find relief, build resilience, and reconnect with yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full text-white text-lg font-medium text-center transition-all hover:shadow-lg"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                Schedule Consultation
              </Link>
              <Link
                href="#about"
                className="px-8 py-4 rounded-full text-[var(--primary)] text-lg font-medium text-center border-2 transition-all hover:bg-[var(--primary)] hover:text-white"
                style={{ borderColor: 'var(--primary)' }}
              >
                Learn More
              </Link>
            </div>
            <div className="pt-6 text-sm text-gray-500">
              <p>✓ In-person sessions in Santa Monica</p>
              <p>✓ Telehealth available across California</p>
              <p>✓ Evening appointments available</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop"
              alt="Dr. Maya Reynolds - Licensed Clinical Psychologist"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: 'var(--secondary)' }}></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: 'var(--primary)' }}></div>
    </section>
  );
}
