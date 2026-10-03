export default function Services() {
  const services = [
    {
      title: 'Anxiety & Panic Therapy',
      description: 'If you struggle with constant worry, overthinking, or panic attacks, therapy can help you understand the root causes and develop practical tools to regain control. I use evidence-based approaches like CBT, EMDR, and mindfulness to help you find relief and build lasting resilience.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Trauma & EMDR Therapy',
      description: 'Trauma doesn\'t always look the way people expect. Whether from childhood experiences, relationships, or single events, unprocessed trauma can affect your sense of safety and self. I help clients process past experiences using EMDR and trauma-informed approaches, focusing on stabilization and healing at your own pace.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Burnout & Stress Management',
      description: 'High achievers often feel pressure to keep pushing, even when exhausted. I work with entrepreneurs, creatives, and professionals experiencing burnout, perfectionism, and disconnection. Therapy helps you slow down, reconnect, and develop sustainable ways of living and working without constant stress.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[var(--bg-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How I Can Help
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized therapy services for adults in Santa Monica seeking support with anxiety, 
            trauma, and stress-related challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6" style={{ color: 'var(--primary)' }}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white px-8 py-6 rounded-2xl shadow-md">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              All sessions are confidential and tailored to your unique needs
            </p>
            <p className="text-gray-600">
              Available for adults in Santa Monica and across California via secure telehealth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
