
import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Metadata } from '../components/Metadata';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyAttend from '../components/WhyAttend';
import Agenda from '../components/Agenda';
import VideoSection from '../components/VideoSection';
import ProductDemo from '../components/ProductDemo';
import KpiSection from '../components/KpiSection';
import ComparisonTable from '../components/ComparisonTable';
import FinalCta from '../components/FinalCta';
import FaqSection from '../components/Faq';
import StickyBar from '../components/StickyBar';
import Footer from '../components/Footer';
import ExitIntent from '../components/ExitIntent';
import FloatingCta from '../components/FloatingCta';

const Index = () => {
  // Set title and meta tags
  useEffect(() => {
    document.title = "AP AI Workshop | Discover Dollar Shield";
  }, []);

  return (
    <div className="min-h-screen">
      <HelmetProvider>
        <Metadata />
      </HelmetProvider>
      <Navbar />
      <main>
        <Hero />
        <WhyAttend />
        <VideoSection />
        <Agenda />
        <ProductDemo />
        <KpiSection />
        <ComparisonTable />
        <FinalCta />
        <FaqSection />
        <FloatingCta />
        <StickyBar />
        <ExitIntent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
