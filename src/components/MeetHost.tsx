
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const MeetHost = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Meet Your Host
        </h2>
        
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-0">
          <CardContent className="p-0">
            <div className={`grid ${isMobile ? '' : 'md:grid-cols-2'} gap-6 items-center`}>
              <div className="p-6 md:p-8">
                <div className="space-y-4">
                  <p className="text-xl text-gray-700 italic">
                    "I've worked with top AP teams across 100+ enterprises — and I'm sharing our best AI workflows with you."
                  </p>
                  
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold text-navy">
                      Subu Rao
                    </h3>
                    <p className="text-gray-600">
                      CEO, Discover Dollar
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`${isMobile ? 'h-60' : 'h-full'} flex items-center justify-center`}>
                {/* Optimized image display for mobile and desktop */}
                <div className={`${isMobile ? 'h-full w-60 mx-auto rounded-full overflow-hidden' : 'h-full min-h-[300px] w-full'} bg-navy-50 relative`}>
                  <img 
                    src="/lovable-uploads/81262a85-6b0a-447b-ba73-d8acec79da4d.png"
                    alt="Subu Rao, CEO of Discover Dollar" 
                    className={`w-full h-full ${isMobile ? 'object-cover object-top' : 'object-cover'}`}
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.src = "https://via.placeholder.com/600x400?text=Subu+Rao";
                    }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MeetHost;
