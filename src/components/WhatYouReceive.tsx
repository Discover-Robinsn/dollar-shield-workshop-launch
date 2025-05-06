
import React, { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';

const benefits = [
  {
    icon: "🏷️",
    title: "Apple Airtag",
    description: "For live attendees only"
  },
  {
    icon: "🤖",
    title: "AI Prompt Pack for AP Use Cases",
    description: "Ready-to-use prompts for your daily AP workflows"
  },
  {
    icon: "📋",
    title: "40+ Leakages Checklist",
    description: "Comprehensive guide to spot and prevent payment errors"
  },
  {
    icon: "📊",
    title: "CFO-Ready Dashboard Templates",
    description: "Professional templates to visualize your AP metrics"
  }
];

const WhatYouReceive = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.benefit-card').forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
                card.classList.remove('opacity-0');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => {
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
          What You'll Receive
        </h2>

        <div 
          ref={benefitsRef} 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 opacity-0 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="mb-4 text-3xl">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-navy-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="flex items-center text-dd-green">
                <Check size={18} className="mr-2" />
                <span className="text-sm font-medium">Included in workshop</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouReceive;
