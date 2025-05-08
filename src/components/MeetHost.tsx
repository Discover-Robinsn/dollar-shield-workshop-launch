
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
              <div className="p-6 md:p-8 order-2 md:order-1">
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
              
              <div className={`relative ${isMobile ? 'order-1 md:order-2' : 'order-2'} md:h-full`}>
                {/* Circular image for mobile view */}
                {isMobile ? (
                  <div className="mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src="/lovable-uploads/b42b640a-4f05-4e3a-b1ab-c61ed8184594.png"
                      alt="Subu Rao, CEO of Discover Dollar" 
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/400x400?text=Subu+Rao";
                      }}
                    />
                  </div>
                ) : (
                  // Regular image for desktop view
                  <div className="h-full min-h-[300px] w-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/b42b640a-4f05-4e3a-b1ab-c61ed8184594.png"
                      alt="Subu Rao, CEO of Discover Dollar" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/600x400?text=Subu+Rao";
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MeetHost;
