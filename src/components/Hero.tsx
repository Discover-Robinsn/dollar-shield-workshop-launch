
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from 'lucide-react';

// Workshop date: June 11, 2025 at 11:00 AM EST
const WORKSHOP_DATE = new Date('2025-06-11T11:00:00-04:00');

const Hero = () => {
  const ctaButtonRef = useRef<HTMLButtonElement>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Calculate time left until workshop
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = WORKSHOP_DATE.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    calculateTimeLeft(); // Calculate immediately
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Add pulse effect to CTA button
  useEffect(() => {
    const interval = setInterval(() => {
      if (ctaButtonRef.current) {
        ctaButtonRef.current.classList.add('animate-pulse-glow');
        setTimeout(() => {
          if (ctaButtonRef.current) {
            ctaButtonRef.current.classList.remove('animate-pulse-glow');
          }
        }, 2000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-navy pb-16 pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with animated data visualization (simplified version) */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white h-px"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: 'rotate(45deg)',
                opacity: Math.random() * 0.5 + 0.3,
                animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Countdown timer */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2 text-white animate-fade-in">
            <Clock size={18} className="text-dd-green" />
            <span className="font-medium">Starts in:</span>
            <div className="grid grid-flow-col gap-1 text-center auto-cols-max">
              <div className="flex flex-col p-1 bg-navy-800 rounded-md">
                <span className="font-mono text-xl">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-xs text-gray-300">days</span>
              </div>
              <span className="text-xl">:</span>
              <div className="flex flex-col p-1 bg-navy-800 rounded-md">
                <span className="font-mono text-xl">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-xs text-gray-300">hrs</span>
              </div>
              <span className="text-xl">:</span>
              <div className="flex flex-col p-1 bg-navy-800 rounded-md">
                <span className="font-mono text-xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-xs text-gray-300">min</span>
              </div>
              <span className="text-xl">:</span>
              <div className="flex flex-col p-1 bg-navy-800 rounded-md">
                <span className="font-mono text-xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-xs text-gray-300">sec</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            {/* Animation: Fade in from left */}
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl opacity-0 animate-fade-in">
              Save 1 Hour a Day. Find $20K Hidden in Payments. In Just 1 Workshop.
            </h1>
            
            {/* Animation: Fade in with delay */}
            <p className="text-lg md:text-xl opacity-0 animate-fade-in animate-delay-200 text-gray-200">
              Join a live 60-minute AI workshop for AP leaders. Learn how to automate vendor queries, create stunning dashboards, and spot duplicates before recovery auditors do.
            </p>
            
            <div className="mt-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in animate-delay-200">
              <div className="flex items-center">
                <div className="bg-navy-800/60 backdrop-blur-sm rounded-lg p-2 flex items-center animate-float">
                  <span className="text-dd-green text-xl mr-2">📅</span>
                  <span>June 11 | 11:00 AM EST / 8:30 PM IST</span>
                </div>
              </div>
            </div>
            
            {/* Gift box animation */}
            <div className="pt-2 opacity-0 animate-fade-in animate-delay-300">
              <div className="inline-flex items-center bg-navy-800/60 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-xl mr-2 animate-bounce">🎁</span>
                <span>Live attendees get an Apple Airtag + the AP Power Pack (Prompt Pack + Templates + Checklist)</span>
              </div>
            </div>
            
            {/* Animation: Slide up with delay */}
            <div className="pt-4 opacity-0 animate-fade-in-up animate-delay-300">
              <Button 
                ref={ctaButtonRef}
                className="bg-gradient-to-r from-dd-green to-[#00a8a8] hover:from-[#00a8a8] hover:to-dd-green text-white font-medium px-6 py-6 rounded-lg hover-rise text-lg flex items-center gap-2 shadow-md hover:shadow-lg"
                onClick={() => document.getElementById('registration-form')?.scrollIntoView({behavior: 'smooth'})}
              >
                Reserve My Free Seat <ArrowRight className="ml-2" size={18} />
              </Button>
              
              {/* Progress bar */}
              <div className="mt-6 w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
                <div className="bg-dd-green h-3 rounded-full animate-pulse" style={{ width: '40%' }}></div>
              </div>
              <p className="mt-2 text-red-300 text-sm flex items-center animate-pulse">
                <span className="mr-1">🚨</span> 40% of Seats Filled – Reserve Fast
              </p>
            </div>
            
            {/* Target audience label */}
            <div className="pt-2 opacity-0 animate-fade-in animate-delay-500">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
                Limited to just 50 spots - Reserve yours now!
              </div>
            </div>
          </div>

          <div className="hidden lg:block opacity-0 animate-fade-in animate-delay-400">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl">
              <div className="flex items-center justify-center mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                  {/* Placeholder for Subu Rao's headshot - replace with actual image */}
                  <img 
                    src="/subu-rao-headshot.jpg" 
                    alt="Subu Rao, CEO of Discover Dollar" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.src = "https://via.placeholder.com/128?text=Subu+Rao";
                    }}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-navy-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">Automate Vendor Queries</p>
                    <div className="bg-gray-300 h-1 w-20 mt-1">
                      <div className="bg-dd-green h-1 w-20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-navy-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">Build Stunning Dashboards</p>
                    <div className="bg-gray-300 h-1 w-20 mt-1">
                      <div className="bg-dd-gold h-1 w-16 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-navy-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">Identify $20K+ in Duplicates</p>
                    <div className="bg-gray-300 h-1 w-20 mt-1">
                      <div className="bg-dd-green h-1 w-12 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
