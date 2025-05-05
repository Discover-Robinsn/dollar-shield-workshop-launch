
import React, { useRef, useEffect } from 'react';
import { FileText, Clock, Calendar, Users } from 'lucide-react';

const agendaItems = [
  {
    icon: <FileText className="text-navy-600" size={24} />,
    title: "AI for AP: Beyond automation, into anomaly detection",
    description: "Discover how modern AI goes beyond basic automation to detect complex patterns and anomalies in your AP data."
  },
  {
    icon: <Clock className="text-navy-600" size={24} />,
    title: "Overpayment scenarios with real-world impact",
    description: "Learn about the most common (and costly) overpayment scenarios we've discovered across industries."
  },
  {
    icon: <Calendar className="text-navy-600" size={24} />,
    title: "How Discover Shield plugs into your workflow",
    description: "See how our solution integrates seamlessly with your existing AP systems without disrupting workflows."
  },
  {
    icon: <Users className="text-navy-600" size={24} />,
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
            Our workshop is packed with actionable insights you can implement immediately
          </p>
        </div>

        <div ref={timelineRef} className="space-y-6">
          {agendaItems.map((item, index) => (
            <div 
              key={index} 
              className="agenda-item bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-4 opacity-0 translate-y-8 transition-all duration-500 hover:shadow-md hover:bg-gray-50"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="h-6 w-6 rounded-full bg-navy text-white font-semibold flex items-center justify-center text-sm mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-navy-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 ml-9">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
