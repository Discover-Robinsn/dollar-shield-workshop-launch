
import React, { useRef, useEffect } from 'react';

const agendaItems = [
  {
    title: "AI for AP: Beyond automation, into anomaly detection",
    description: "Discover how modern AI goes beyond basic automation to detect complex patterns and anomalies in your AP data."
  },
  {
    title: "Overpayment scenarios with real-world impact",
    description: "Learn about the most common (and costly) overpayment scenarios we've discovered across industries."
  },
  {
    title: "How Discover Shield plugs into your workflow",
    description: "See how our solution integrates seamlessly with your existing AP systems without disrupting workflows."
  },
  {
    title: "Live walkthrough: Upload. Detect. Recover.",
    description: "Watch a live demonstration of how the platform works using real (anonymized) AP data from a Fortune 500 company."
  }
];

const Agenda = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            setTimeout(() => {
              el.classList.add('animate-fade-in-up');
            }, parseInt(el.dataset.delay || '0'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      timelineItems?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What You'll Learn</h2>
          <p className="text-lg text-gray-600">
            Our workshop is packed with actionable insights you can implement immediately
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-navy-200 z-0"></div>

          {agendaItems.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item relative z-10 mb-12 flex flex-col md:flex-row opacity-0`}
              data-delay={index * 150}
            >
              <div className={`md:w-1/2 md:pr-8 ${index % 2 === 0 ? 'md:text-right' : 'md:order-last md:pl-8 md:text-left'}`}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className={`h-8 w-8 flex items-center justify-center rounded-full bg-navy text-white font-bold mr-2 ${index % 2 === 0 ? 'md:order-last md:ml-2 md:mr-0' : ''}`}>
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-navy-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>

              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-dd-green border-4 border-white shadow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
