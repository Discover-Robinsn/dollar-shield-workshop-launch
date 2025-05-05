
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ComparisonTable = () => {
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
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
            <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-navy text-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider"
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
                      className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider bg-navy-700"
                    >
                      Discover Shield
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <TableRow
                    feature="Overpayment Detection"
                    manual="~35%"
                    shield="99.4%"
                    tooltip="Percentage of actual overpayment errors detected"
                  />
                  <TableRow
                    feature="Time to Insights"
                    manual="2–4 weeks"
                    shield="<1 Minute"
                    tooltip="Time from data submission to receiving actionable insights"
                  />
                  <TableRow
                    feature="Number of Risk Scenarios"
                    manual="10–15"
                    shield="40+"
                    tooltip="Types of invoice anomalies and error patterns that can be detected"
                  />
                  <TableRow
                    feature="Data Required"
                    manual="Selective"
                    shield="Full (secure)"
                    tooltip="Amount of AP data required for comprehensive analysis"
                  />
                  <TableRow
                    feature="Consistency"
                    manual="Variable"
                    shield="100% consistent"
                    tooltip="Reliability of the review process across all data points"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            className="bg-dd-green hover:bg-dd-green-600 text-white px-6 py-3 rounded-lg hover-rise"
            onClick={() => document.getElementById('registration-form')?.scrollIntoView({behavior: 'smooth'})}
          >
            See It In Action
          </Button>
        </div>
      </div>
    </section>
  );
};

const TableRow = ({ feature, manual, shield, tooltip }: { feature: string; manual: string; shield: string; tooltip: string }) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="flex items-center text-sm font-medium text-gray-900">
              {feature}
              <svg className="ml-1 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        {manual}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dd-green-700 bg-dd-green-50">
        {shield}
      </td>
    </tr>
  );
};

export default ComparisonTable;
