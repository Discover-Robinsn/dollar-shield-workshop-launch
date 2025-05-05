
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Ticket } from 'lucide-react';

const FloatingCta = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past 30% of viewport height
      const scrollThreshold = window.innerHeight * 0.3;
      
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
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <Button 
        className="bg-dd-green hover:bg-dd-green-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 px-6 py-6"
        onClick={() => document.getElementById('registration-form')?.scrollIntoView({behavior: 'smooth'})}
      >
        <Ticket size={18} />
        <span>🎟️ Free – Limited Spots</span>
      </Button>
    </div>
  );
};

export default FloatingCta;
