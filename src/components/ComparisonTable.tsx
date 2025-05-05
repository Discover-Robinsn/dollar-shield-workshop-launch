
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, Info, X } from 'lucide-react';

const ComparisonTable = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const checkmarksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate checkmarks with bounce effect
            const checkmarks = entry.target.querySelectorAll('.table-checkmark');
            checkmarks.forEach((check, index) => {
              setTimeout(() => {
                check.classList.add('animate-bounce');
                setTimeout(() => {
                  check.classList.remove('animate-bounce');
                }, 500);
              }, index * 150);
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (tableRef.current) {
      observer.observe(tableRef.current);
    }

    return () => {
      if (tableRef.current) {
        observer.unobserve(tableRef.current);
      }
    };
  }, []);

  // Add hover effect for rows
  const handleRowMouseEnter = (index: number) => {
    if (checkmarksRef.current[index]) {
      checkmarksRef.current[index].classList.add('animate-pulse');
    }
  };

  const handleRowMouseLeave = (index: number) => {
    if (checkmarksRef.current[index]) {
      checkmarksRef.current[index].classList.remove('animate-pulse');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why AI Beats Manual Review</h2>
          <p className="text-lg text-gray-600">
            See how Discover Shield outperforms traditional manual audit processes
          </p>
        </div>

        <div ref={tableRef} className="overflow-x-auto opacity-0">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border-b border-gray-200 rounded-xl shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="sticky top-0 bg-navy text-white rounded-t-xl">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider rounded-tl-xl"
                    >
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider"
                    >
                      Manual Review
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider bg-navy-700 rounded-tr-xl"
                    >
                      Discover Shield
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      feature: "Overpayment Detection",
                      manual: "~35%",
                      shield: "99.4%",
                      tooltip: "Percentage of actual overpayment errors detected"
                    },
                    {
                      feature: "Time to Insights",
                      manual: "2–4 weeks",
                      shield: "<1 Minute",
                      tooltip: "Time from data submission to receiving actionable insights"
                    },
                    {
                      feature: "Number of Risk Scenarios",
                      manual: "10–15",
                      shield: "40+",
                      tooltip: "Types of invoice anomalies and error patterns that can be detected"
                    },
                    {
                      feature: "Data Required",
                      manual: "Selective",
                      shield: "Full (secure)",
                      tooltip: "Amount of AP data required for comprehensive analysis"
                    },
                    {
                      feature: "Consistency",
                      manual: "Variable",
                      shield: "100% consistent",
                      tooltip: "Reliability of the review process across all data points"
                    }
                  ].map((row, index) => (
                    <tr 
                      key={index} 
                      className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      onMouseEnter={() => handleRowMouseEnter(index)}
                      onMouseLeave={() => handleRowMouseLeave(index)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="flex items-center text-sm font-medium text-gray-900">
                              {row.feature}
                              <Info className="ml-1 w-4 h-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-sm">{row.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 flex items-center">
                        <X size={16} className="text-red-500 mr-2" />
                        {row.manual}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dd-green-700 bg-dd-green-50 flex items-center">
                        <div 
                          ref={el => { if (el) checkmarksRef.current[index] = el; }} 
                          className="table-checkmark mr-2"
                        >
                          <Check size={16} className="text-dd-green" />
                        </div>
                        {row.shield}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            className="bg-dd-green hover:bg-dd-green-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => document.getElementById('registration-form')?.scrollIntoView({behavior: 'smooth'})}
          >
            See It In Action
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
