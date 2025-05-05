
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-navy py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-navy' : 'text-white'}`}>
                Discover<span className="text-dd-green">Dollar</span>
              </span>
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className={`text-sm font-medium hover:text-dd-green transition-colors ${
                isScrolled ? 'text-navy-700' : 'text-white'
              }`}
            >
              About
            </a>
            <a 
              href="#" 
              className={`text-sm font-medium hover:text-dd-green transition-colors ${
                isScrolled ? 'text-navy-700' : 'text-white'
              }`}
            >
              Solutions
            </a>
            <a 
              href="#" 
              className={`text-sm font-medium hover:text-dd-green transition-colors ${
                isScrolled ? 'text-navy-700' : 'text-white'
              }`}
            >
              Resources
            </a>
            <a 
              href="#" 
              className={`text-sm font-medium hover:text-dd-green transition-colors ${
                isScrolled ? 'text-navy-700' : 'text-white'
              }`}
            >
              Contact
            </a>
          </div>

          <div className="flex items-center">
            <Button 
              className={`hidden md:inline-flex bg-dd-green hover:bg-dd-green-600 text-white rounded-lg`}
              onClick={() => document.getElementById('registration-form')?.scrollIntoView({behavior: 'smooth'})}
            >
              Register Now
            </Button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg 
                className={`w-6 h-6 ${isScrolled ? 'text-navy' : 'text-white'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200 mt-3">
            <div className="space-y-1">
              <a 
                href="#" 
                className={`block py-2 text-base font-medium ${
                  isScrolled ? 'text-navy-700' : 'text-white'
                }`}
              >
                About
              </a>
              <a 
                href="#" 
                className={`block py-2 text-base font-medium ${
                  isScrolled ? 'text-navy-700' : 'text-white'
                }`}
              >
                Solutions
              </a>
              <a 
                href="#" 
                className={`block py-2 text-base font-medium ${
                  isScrolled ? 'text-navy-700' : 'text-white'
                }`}
              >
                Resources
              </a>
              <a 
                href="#" 
                className={`block py-2 text-base font-medium ${
                  isScrolled ? 'text-navy-700' : 'text-white'
                }`}
              >
                Contact
              </a>
              <div className="pt-4">
                <Button 
                  className="w-full bg-dd-green hover:bg-dd-green-600 text-white rounded-lg"
                  onClick={() => {
                    document.getElementById('registration-form')?.scrollIntoView({behavior: 'smooth'});
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
