
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const MeetHost = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Meet Your Host
        </h2>
        
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-0">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-6 items-center">
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
              
              <div className="h-full">
                {/* Replace with actual image of Subu Rao */}
                <div className="h-full min-h-[300px] bg-navy-50 relative overflow-hidden">
                  <img 
                    src="/subu-rao-full.jpg"
                    alt="Subu Rao, CEO of Discover Dollar" 
                    className="w-full h-full object-cover"
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
