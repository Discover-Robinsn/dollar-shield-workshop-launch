
import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Is this workshop really free?",
    answer: "Yes, the workshop is completely free to attend. We believe in providing value first and helping finance professionals understand the potential of AI in AP processes.",
    icon: (
      <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    question: "Will my data be safe?",
    answer: "Absolutely. Discover Dollar is SOC 2 Type II certified. Your data is encrypted in transit and at rest, and we never share your information with third parties. We can also sign NDAs before data processing if required.",
    icon: (
      <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
      </svg>
    )
  },
  {
    question: "How soon will I see results?",
    answer: "If you choose to upload your data after the workshop, you can expect initial results within minutes. Our AI immediately begins detecting patterns and anomalies, and a full report is typically available within 24 hours depending on data volume.",
    icon: (
      <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    question: "Can I invite my AP team?",
    answer: "Yes! We encourage you to invite relevant team members from your AP, finance, or audit departments. Just have them register separately so we can prepare accordingly for the number of attendees.",
    icon: (
      <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    )
  },
  {
    question: "What ERP systems are compatible with Discover Shield?",
    answer: "Discover Shield works with all major ERP systems including SAP, Oracle, Microsoft Dynamics, Netsuite, QuickBooks, Sage, and many others. If you can export AP data to CSV or Excel, we can work with it.",
    icon: (
      <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
      </svg>
    )
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about the workshop
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-gray-900 flex">
                <div className="flex items-center">
                  <span className="mr-3 flex-shrink-0 text-navy-600">
                    {item.icon}
                  </span>
                  <span>{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
