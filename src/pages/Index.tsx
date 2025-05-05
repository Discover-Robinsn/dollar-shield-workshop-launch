
import React, { useEffect } from 'react';
import { Metadata } from '../components/Metadata';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyAttend from '../components/WhyAttend';
import Agenda from '../components/Agenda';
import ProductDemo from '../components/ProductDemo';
import KpiSection from '../components/KpiSection';
import ComparisonTable from '../components/ComparisonTable';
import FinalCta from '../components/FinalCta';
import FaqSection from '../components/Faq';
import StickyBar from '../components/StickyBar';
import Footer from '../components/Footer';

const Index = () => {
  // Set title and meta tags
  useEffect(() => {
    document.title = "AP AI Workshop | Discover Dollar Shield";
  }, []);

  return (
    <div className="min-h-screen">
      <Metadata />
      <Navbar />
      <main>
        <Hero />
        <WhyAttend />
        <Agenda />
        <ProductDemo />
        <KpiSection />
        <ComparisonTable />
        <FinalCta />
        <FaqSection />
        <StickyBar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
