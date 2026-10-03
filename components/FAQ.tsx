'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer: 'I operate as an out-of-network provider, which means I don\'t bill insurance directly. However, many clients are able to receive partial reimbursement through their insurance plans. I can provide you with a superbill (detailed receipt) that you can submit to your insurance for potential out-of-network reimbursement.',
    },
    {
      question: 'How long are therapy sessions?',
      answer: 'Individual therapy sessions are typically 50 minutes long. I also offer extended 80-minute sessions for clients who benefit from more time, particularly during intensive trauma processing work or when deeper exploration is needed.',
    },
    {
      question: 'Do you offer telehealth sessions?',
      answer: 'Yes, I offer secure telehealth sessions for clients located anywhere in California. Many clients appreciate the flexibility and convenience of virtual sessions, especially if they have demanding schedules or prefer therapy from the comfort of their own space.',
    },
    {
      question: 'What can I expect in the first session?',
      answer: 'The first session is an opportunity for us to get to know each other. We\'ll discuss what brings you to therapy, your goals, and your history. I\'ll also explain my approach and answer any questions you have. This is a chance to see if we\'re a good fit before committing to ongoing work.',
    },
    {
      question: 'How often will we meet?',
      answer: 'Most clients find weekly sessions most effective, especially when beginning therapy or working through active challenges. As progress is made, some clients transition to biweekly sessions. We\'ll work together to determine the frequency that best supports your goals and needs.',
    },
    {
      question: 'What if I\'m not sure therapy is right for me?',
      answer: 'It\'s completely normal to feel uncertain. Many of my clients initially wondered if their struggles were "serious enough" for therapy. If you\'re experiencing distress, feeling stuck, or sensing that something needs to change, therapy can help. We can discuss your concerns in a free consultation call before you commit to anything.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about starting therapy with Dr. Maya Reynolds
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--primary)] transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: 'var(--primary)' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Have more questions?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full text-white font-medium transition-all hover:shadow-lg"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
