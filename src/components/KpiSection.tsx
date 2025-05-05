
import React, { useRef, useEffect, useState } from 'react';

const kpis = [
  {
    value: 99.4,
    suffix: "%",
    label: "Accuracy in error detection",
    icon: (
      <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    value: 400,
    suffix: "M+",
    prefix: "$",
    label: "Overpayments recovered",
    icon: (
      <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    value: 1,
    suffix: " minute",
    prefix: "<",
    label: "Onboarding time",
    icon: (
      <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    value: 12,
    suffix: "+",
    label: "Countries using our solution",
    icon: (
      <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  }
];

const clientLogos = [
  "AB InBev", "Target", "Unilever", "Johnson & Johnson", 
  "Pfizer", "Microsoft", "Walmart", "Coca-Cola"
];

const KpiSection = () => {
  const [counting, setCounting] = useState(false);
  const [counts, setCounts] = useState<number[]>(kpis.map(() => 0));
  const kpiRef = useRef<HTMLDivElement>(null);

  // Counter animation
  useEffect(() => {
    if (!counting) return;

    const intervals = kpis.map((kpi, i) => {
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[i] < kpi.value) {
            const increment = Math.max(1, kpi.value / 20);
            newCounts[i] = Math.min(kpi.value, newCounts[i] + increment);
          }
          return newCounts;
        });
      }, 50);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [counting]);

  // Trigger counting on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCounting(true);
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (kpiRef.current) {
      observer.observe(kpiRef.current);
    }

    return () => {
      if (kpiRef.current) {
        observer.unobserve(kpiRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={kpiRef} className="opacity-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-navy-50 mb-4">
                  {kpi.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-navy mb-2 flex items-center justify-center">
                  {kpi.prefix && <span>{kpi.prefix}</span>}
                  <span>
                    {counts[index] % 1 === 0 
                      ? Math.floor(counts[index]) 
                      : counts[index].toFixed(1)}
                  </span>
                  {kpi.suffix && <span>{kpi.suffix}</span>}
                </div>
                <p className="text-gray-600">{kpi.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-center text-lg font-medium text-gray-700 mb-6">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {clientLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="text-gray-400 font-semibold text-lg opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KpiSection;
