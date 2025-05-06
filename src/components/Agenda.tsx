
import React, { useRef, useEffect } from 'react';

const agendaItems = [
  {
    icon: "📊",
    title: "Use AI to automate 1 hour/day of vendor query management",
    description: "Discover how modern AI can handle repetitive vendor requests, freeing up your team for higher-value tasks."
  },
  {
    icon: "📈",
    title: "Build stunning dashboards & reports in seconds",
    description: "Learn how to create professional, executive-ready visualizations without any design skills."
  },
  {
    icon: "💰",
    title: "Identify $20K+ of duplicate payments & anomalies — live",
    description: "See a live demonstration of how AI can spot payment errors that most audits miss completely."
  }
];

const Agenda = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.agenda-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What You'll Learn</h2>
          <p className="text-lg text-gray-600">
            Practical insights you can implement immediately in your AP workflows
          </p>
        </div>

        <div ref={timelineRef} className="space-y-6">
          {agendaItems.map((item, index) => (
            <div 
              key={index} 
              className="agenda-item bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-4 opacity-0 translate-y-8 transition-all duration-500 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
