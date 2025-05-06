
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, Bell, Clock } from 'lucide-react';

const ExitIntent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only trigger on desktop
    if (window.innerWidth > 768) {
      const handleMouseLeave = (e: MouseEvent) => {
        // Only trigger when cursor goes to the top of the page
        if (e.clientY <= 0) {
          setIsVisible(true);
          // Remove the event listener after triggering once
          document.removeEventListener('mouseleave', handleMouseLeave);
        }
      };

      // Set timeout to not trigger immediately on page load
      const timer = setTimeout(() => {
        document.addEventListener('mouseleave', handleMouseLeave);
      }, 5000);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 md:p-8 animate-fade-in-up">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 bg-navy-50 rounded-full flex items-center justify-center mb-6">
            <Bell size={28} className="text-navy" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">
            Still thinking? Don't miss your free seat — Only 50 available!
          </h3>
          
          <p className="text-gray-600 mb-6">
            Don't miss this opportunity to learn how AI can transform your AP processes and recover millions in overpayments.
          </p>
          
          <div className="flex items-center justify-center mb-6 gap-4">
            <Clock size={20} className="text-dd-green" />
            <p className="font-medium">June 11 | 11:00 AM EST / 8:30 PM IST</p>
          </div>
          
          <Button 
            className="w-full bg-dd-green hover:bg-dd-green-600 text-white font-medium py-6 rounded-lg hover-rise text-lg shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => {
              document.getElementById('registration-form')?.scrollIntoView({behavior: 'smooth'});
              setIsVisible(false);
            }}
          >
            Save My Seat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntent;
