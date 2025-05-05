
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 40% of viewport height
      const scrollThreshold = window.innerHeight * 0.4;
      
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-navy shadow-lg transform transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-white mb-3 sm:mb-0">
          <p className="font-medium">Limited workshop seats available</p>
          <p className="text-sm text-gray-300">Includes complimentary AP leakage analysis</p>
        </div>
        <Button 
          className="bg-dd-green hover:bg-dd-green-600 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 hover-rise"
          onClick={() => document.getElementById('registration-form')?.scrollIntoView({behavior: 'smooth'})}
        >
          Reserve Your Spot Now <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default StickyBar;
