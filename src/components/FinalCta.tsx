
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from 'lucide-react';

const FinalCta = () => {
  const [days, setDays] = useState(2);
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(37);
  const [seconds, setSeconds] = useState(45);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: ''
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    company: false,
    jobTitle: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(59);
        if (minutes > 0) {
          setMinutes(minutes - 1);
        } else {
          setMinutes(59);
          if (hours > 0) {
            setHours(hours - 1);
          } else {
            setHours(23);
            if (days > 0) {
              setDays(days - 1);
            } else {
              clearInterval(timer);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [days, hours, minutes, seconds]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: false
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      email: !formData.email || !formData.email.includes('@'),
      company: !formData.company,
      jobTitle: !formData.jobTitle
    };
    
    setFormErrors(newErrors);
    
    if (!Object.values(newErrors).some(Boolean)) {
      // Form is valid, submit logic here
      console.log('Form submitted!', formData);
      // Could add a success message or redirect
    }
  };

  return (
    <section id="registration-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See What You've Been Missing?</h2>
        
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Secure your spot in our next workshop and receive a complimentary AP leakage review after attending. No integration or commitment required.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-navy-800 rounded-lg p-4 shadow-inner">
              <div className="text-3xl font-bold">{days}</div>
              <div className="text-gray-300 text-sm">Days</div>
            </div>
            <div className="bg-navy-800 rounded-lg p-4 shadow-inner">
              <div className="text-3xl font-bold">{hours}</div>
              <div className="text-gray-300 text-sm">Hours</div>
            </div>
            <div className="bg-navy-800 rounded-lg p-4 shadow-inner">
              <div className="text-3xl font-bold">{minutes}</div>
              <div className="text-gray-300 text-sm">Minutes</div>
            </div>
            <div className="bg-navy-800 rounded-lg p-4 shadow-inner">
              <div className="text-3xl font-bold">{seconds}</div>
              <div className="text-gray-300 text-sm">Seconds</div>
            </div>
          </div>
          
          <form className="space-y-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="first-name" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name*" 
                    className={`w-full px-4 py-3 rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-dd-green border ${
                      formErrors.firstName ? 'border-red-500 ring-red-200' : 'border-gray-200'
                    }`}
                    required
                  />
                  {formErrors.firstName && (
                    <p className="absolute -bottom-5 left-0 text-red-300 text-xs">First name is required</p>
                  )}
                </div>
              </div>
              <div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="last-name" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name*" 
                    className={`w-full px-4 py-3 rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-dd-green border ${
                      formErrors.lastName ? 'border-red-500 ring-red-200' : 'border-gray-200'
                    }`}
                    required
                  />
                  {formErrors.lastName && (
                    <p className="absolute -bottom-5 left-0 text-red-300 text-xs">Last name is required</p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Work Email*" 
                className={`w-full px-4 py-3 rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-dd-green border ${
                  formErrors.email ? 'border-red-500 ring-red-200' : 'border-gray-200'
                }`}
                required
              />
              {formErrors.email && (
                <p className="absolute -bottom-5 left-0 text-red-300 text-xs">Valid email is required</p>
              )}
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name*" 
                className={`w-full px-4 py-3 rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-dd-green border ${
                  formErrors.company ? 'border-red-500 ring-red-200' : 'border-gray-200'
                }`}
                required
              />
              {formErrors.company && (
                <p className="absolute -bottom-5 left-0 text-red-300 text-xs">Company name is required</p>
              )}
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                id="job-title" 
                name="jobTitle" 
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title*" 
                className={`w-full px-4 py-3 rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-dd-green border ${
                  formErrors.jobTitle ? 'border-red-500 ring-red-200' : 'border-gray-200'
                }`}
                required
              />
              {formErrors.jobTitle && (
                <p className="absolute -bottom-5 left-0 text-red-300 text-xs">Job title is required</p>
              )}
            </div>
            
            <div className="pt-4">
              <Button 
                className="w-full bg-gradient-to-r from-dd-green to-[#00a8a8] hover:from-[#00a8a8] hover:to-dd-green text-white font-medium py-6 rounded-lg hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-lg flex items-center justify-center gap-2"
                type="submit"
              >
                Reserve My Free Seat <ArrowRight size={18} />
              </Button>
              
              <p className="flex items-center justify-center mt-4 text-sm text-gray-300">
                <Lock size={14} className="mr-1" /> 
                <span>Your information is secure. Limited to 200 seats per session.</span>
              </p>
            </div>
          </form>
        </div>
        
        {/* Testimonial quote callout */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-inner">
            <div className="flex items-center mb-4">
              <div className="text-4xl text-gray-300">"</div>
            </div>
            <p className="text-lg text-gray-200 italic mb-4">
              The workshop was eye-opening. We discovered $270K in recoverable overpayments within our first month using the insights we learned.
            </p>
            <div className="flex items-center justify-end">
              <div className="text-right">
                <p className="font-bold text-white">Sarah Johnson</p>
                <p className="text-gray-300 text-sm">AP Director, Fortune 500 Retail Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
