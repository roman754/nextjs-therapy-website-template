export default function Approach() {
  return (
    <section id="approach" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My Approach to Therapy
            </h2>
            <p className="text-lg text-gray-600">
              Warm, collaborative, and grounded in evidence-based practice
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="bg-[var(--bg-cream)] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative & Supportive</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough 
                to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based 
                methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and 
                body-oriented techniques to help you understand both the emotional and physiological sides of 
                what you&apos;re experiencing.
              </p>
            </div>

            <div className="bg-[var(--bg-cream)] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trauma-Informed Care</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trauma work is an important part of my practice. I work with adults who have experienced 
                single-incident trauma as well as more complex, long-standing patterns from childhood, 
                relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, 
                stabilization, and helping you feel more regulated in your daily life - not just during sessions.
              </p>
            </div>

            <div className="bg-[var(--bg-cream)] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Modern Stress</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I frequently support clients dealing with professional burnout, perfectionism, and high internal 
                pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves 
                after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and develop 
                more sustainable ways of living and working.
              </p>
            </div>
          </div>

          {/* Modalities */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Therapeutic Modalities</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {['CBT', 'EMDR', 'Mindfulness', 'Body-Oriented'].map((modality) => (
                <div
                  key={modality}
                  className="text-center p-6 rounded-xl"
                  style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                >
                  <p className="font-semibold text-lg">{modality}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-700">
              &ldquo;Therapy works best when you feel respected, understood, and actively involved in the process.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
