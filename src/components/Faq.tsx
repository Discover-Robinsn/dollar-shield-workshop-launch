
import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { DollarSign, Lock, Clock, Users, Database } from 'lucide-react';

const faqItems = [
  {
    question: "Is this workshop really free?",
    answer: "Yes, the workshop is completely free to attend. We believe in providing value first and helping finance professionals understand the potential of AI in AP processes.",
    icon: <DollarSign size={18} className="text-navy-600" />
  },
  {
    question: "Will my data be safe?",
    answer: "Absolutely. Discover Dollar is SOC 2 Type II certified. Your data is encrypted in transit and at rest, and we never share your information with third parties. We can also sign NDAs before data processing if required.",
    icon: <Lock size={18} className="text-navy-600" />
  },
  {
    question: "How soon will I see results?",
    answer: "If you choose to upload your data after the workshop, you can expect initial results within minutes. Our AI immediately begins detecting patterns and anomalies, and a full report is typically available within 24 hours depending on data volume.",
    icon: <Clock size={18} className="text-navy-600" />
  },
  {
    question: "Can I invite my AP team?",
    answer: "Yes! We encourage you to invite relevant team members from your AP, finance, or audit departments. Just have them register separately so we can prepare accordingly for the number of attendees.",
    icon: <Users size={18} className="text-navy-600" />
  },
  {
    question: "What ERP systems are compatible with Discover Shield?",
    answer: "Discover Shield works with all major ERP systems including SAP, Oracle, Microsoft Dynamics, Netsuite, QuickBooks, Sage, and many others. If you can export AP data to CSV or Excel, we can work with it.",
    icon: <Database size={18} className="text-navy-600" />
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
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-navy flex items-center">
                <div className="flex items-center w-full">
                  <div className="h-8 w-8 rounded-full bg-navy-50 flex items-center justify-center mr-3">
                    {item.icon}
                  </div>
                  <span className="text-lg">{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-1 text-gray-600 bg-gray-50">
                <div className="pl-11">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
