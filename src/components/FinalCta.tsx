
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const FinalCta = () => {
  const [days, setDays] = useState(2);
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(37);
  const [seconds, setSeconds] = useState(45);

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

  return (
    <section id="registration-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See What You've Been Missing?</h2>
        
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Secure your spot in our next workshop and receive a complimentary AP leakage review after attending. No integration or commitment required.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-navy-800 rounded-lg p-3">
              <div className="text-3xl font-bold">{days}</div>
              <div className="text-gray-300 text-sm">Days</div>
            </div>
            <div className="bg-navy-800 rounded-lg p-3">
              <div className="text-3xl font-bold">{hours}</div>
              <div className="text-gray-300 text-sm">Hours</div>
            </div>
            <div className="bg-navy-800 rounded-lg p-3">
              <div className="text-3xl font-bold">{minutes}</div>
              <div className="text-gray-300 text-sm">Minutes</div>
            </div>
            <div className="bg-navy-800 rounded-lg p-3">
              <div className="text-3xl font-bold">{seconds}</div>
              <div className="text-gray-300 text-sm">Seconds</div>
            </div>
          </div>
          
          <form className="space-y-4 max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="sr-only">First Name</label>
                <input 
                  type="text" 
                  id="first-name" 
                  name="first-name" 
                  placeholder="First Name*" 
                  className="w-full px-4 py-3 rounded-md bg-white text-navy focus:outline-none focus:ring-2 focus:ring-dd-green"
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name" className="sr-only">Last Name</label>
                <input 
                  type="text" 
                  id="last-name" 
                  name="last-name" 
                  placeholder="Last Name*" 
                  className="w-full px-4 py-3 rounded-md bg-white text-navy focus:outline-none focus:ring-2 focus:ring-dd-green"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="sr-only">Work Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Work Email*" 
                className="w-full px-4 py-3 rounded-md bg-white text-navy focus:outline-none focus:ring-2 focus:ring-dd-green"
                required
              />
            </div>
            
            <div>
              <label htmlFor="company" className="sr-only">Company Name</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                placeholder="Company Name*" 
                className="w-full px-4 py-3 rounded-md bg-white text-navy focus:outline-none focus:ring-2 focus:ring-dd-green"
                required
              />
            </div>
            
            <div>
              <label htmlFor="job-title" className="sr-only">Job Title</label>
              <input 
                type="text" 
                id="job-title" 
                name="job-title" 
                placeholder="Job Title*" 
                className="w-full px-4 py-3 rounded-md bg-white text-navy focus:outline-none focus:ring-2 focus:ring-dd-green"
                required
              />
            </div>

            <Button 
              className="w-full bg-dd-green hover:bg-dd-green-600 text-white font-medium py-6 rounded-lg hover-rise text-lg flex items-center justify-center gap-2"
              type="submit"
            >
              Join the Free Workshop <ArrowRight size={18} />
            </Button>
            
            <p className="text-sm text-gray-300 mt-2">
              Limited to 30 seats per session. Your information is secure.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
