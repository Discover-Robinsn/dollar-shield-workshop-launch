
import React, { useState, useEffect, useRef } from 'react';

const steps = [
  {
    title: "Upload AP Data",
    description: "Securely upload your AP data from any major ERP system",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
      </svg>
    )
  },
  {
    title: "AI Flags Hidden Leakages",
    description: "Our AI detects 40+ error types missed by manual audits",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    )
  },
  {
    title: "Get Dashboard Insights",
    description: "View detailed reports and analytics on potential recoveries",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    )
  },
  {
    title: "Recover & Track Claims",
    description: "Auto-generate recovery documents and track claim status",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  }
];

const ProductDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);

  // Auto-rotate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  
  // Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => {
      if (stepsRef.current) {
        observer.unobserve(stepsRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How Discover Shield Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform seamlessly integrates with your existing AP workflows
          </p>
        </div>

        <div 
          ref={stepsRef}
          className="grid md:grid-cols-4 gap-4 opacity-0"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg transition-all duration-300 ${
                activeStep === index 
                  ? 'bg-navy text-white shadow-lg transform scale-105 z-10' 
                  : 'bg-white text-navy-800 shadow-sm'
              }`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className={`mb-4 ${activeStep === index ? 'text-white' : 'text-navy-600'}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className={activeStep === index ? 'text-gray-200' : 'text-gray-600'}>
                {step.description}
              </p>
              
              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                <div 
                  className="h-1 bg-dd-green transition-all duration-300"
                  style={{ 
                    width: activeStep === index ? '100%' : '0%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-md mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <p className="italic text-gray-700 mb-4">
              "$180K recovered in 14 days — with just one data upload."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center text-navy font-bold">
                CT
              </div>
              <div className="ml-3">
                <p className="font-medium text-navy-800">Controller</p>
                <p className="text-gray-500 text-sm">$500M Manufacturing Company</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className="inline-flex items-center px-3 py-1 bg-navy-50 text-navy-700 rounded-full text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Works with Oracle, SAP, QuickBooks, Ariba, and more
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
