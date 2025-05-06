
import React, { useRef, useEffect } from 'react';

const TrustedBy = () => {
  const logoContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const logos = entry.target.querySelectorAll('.logo-item');
            logos.forEach((logo, index) => {
              setTimeout(() => {
                logo.classList.add('opacity-100', 'transform-none');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (logoContainerRef.current) {
      observer.observe(logoContainerRef.current);
    }

    return () => {
      if (logoContainerRef.current) {
        observer.unobserve(logoContainerRef.current);
      }
    };
  }, []);

  // This would normally be populated with actual client logos
  const logos = [
    "Fortune 500 Co.",
    "Global Services",
    "Enterprise Inc.",
    "AP Solutions",
    "Global Finance",
    "Industry Leader"
  ];

  return (
    <section className="py-14 bg-gray-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xl md:text-2xl text-center font-semibold text-gray-700 mb-8">
          Trusted by AP, Audit, and Shared Services teams across North America
        </h3>
        
        {/* Logo Marquee */}
        <div className="relative">
          <div 
            ref={logoContainerRef} 
            className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12"
          >
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="logo-item bg-white rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-all duration-300 transform opacity-0 translate-y-4 hover:scale-110"
              >
                <span className="text-gray-600 font-medium whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
