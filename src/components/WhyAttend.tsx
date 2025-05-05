
import React, { useRef, useEffect } from 'react';
import { CircleDollarSign, CheckCircle, Timer, Users, Check } from 'lucide-react';

const benefits = [
  {
    icon: <CheckCircle size={40} className="feature-icon" />,
    title: "Advanced Error Detection",
    description: "AI uncovers 40+ types of overpayments missed by manual audits and traditional tools."
  },
  {
    icon: <CircleDollarSign size={40} className="feature-icon" />,
    title: "Average Savings: 2–5% of AP spend",
    description: "Discover hidden leakages that directly impact your bottom line without any process change."
  },
  {
    icon: <Timer size={40} className="feature-icon" />,
    title: "Free Recovery Report",
    description: "Upload your data after the workshop to get a complimentary AP leakage analysis."
  },
  {
    icon: <Users size={40} className="feature-icon" />,
    title: "Enterprise-Proven Solution",
    description: "Trusted by Fortune 500 companies like AB InBev, Target, and many more."
  }
];

const WhyAttend = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);
  const checksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const benefitElements = benefitsRef.current?.querySelectorAll('.benefit-item');
    benefitElements?.forEach((el) => {
      observer.observe(el);
    });
    
    // For animated checkmarks
    const checkObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const checkmarks = entry.target.querySelectorAll('.check-item');
            checkmarks.forEach((check, index) => {
              setTimeout(() => {
                check.classList.add('animate-fade-in');
                check.classList.remove('opacity-0');
              }, index * 300);
            });
            checkObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    if (checksRef.current) {
      checkObserver.observe(checksRef.current);
    }

    return () => {
      benefitElements?.forEach((el) => {
        observer.unobserve(el);
      });
      if (checksRef.current) {
        checkObserver.unobserve(checksRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Attend This Workshop?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn directly from industry experts how AI is transforming accounts payable and helping finance teams recover millions.
          </p>
        </div>

        <div ref={benefitsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-item feature-card opacity-0 rounded-xl hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-dd-green">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Animated checkmarks section */}
        <div ref={checksRef} className="mt-16 p-6 bg-white rounded-2xl shadow-sm border border-gray-50 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12">
            {[
              "Reduce manual review time by 80%",
              "Detect overpayments in real-time",
              "Seamless integration with your ERP",
              "AI-driven anomaly detection",
              "No IT involvement required",
              "Immediate insights within minutes",
              "Secure, GDPR-compliant platform",
              "Ongoing support from AP experts"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center">
                <div className="mr-3 bg-[#00a8a8]/10 rounded-full p-1 check-item opacity-0">
                  <Check size={18} className="text-[#00a8a8]" />
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="inline-block px-4 py-2 bg-navy-50 text-navy-700 rounded-full text-sm font-medium shadow-sm">
            As seen on CNBC, ET Now, and Bloomberg
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
