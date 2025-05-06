
import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Metadata } from '../components/Metadata';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import WhyAttend from '../components/WhyAttend';
import Agenda from '../components/Agenda';
import VideoSection from '../components/VideoSection';
import MeetHost from '../components/MeetHost';
import WhatYouReceive from '../components/WhatYouReceive';
import ProductDemo from '../components/ProductDemo';
import KpiSection from '../components/KpiSection';
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
        <TrustedBy />
        <WhyAttend />
        <VideoSection />
        <Agenda />
        <MeetHost />
        <WhatYouReceive />
        <ProductDemo />
        <KpiSection />
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
