
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Metadata = () => {
  return (
    <Helmet>
      <title>AP AI Workshop | Discover Dollar Shield</title>
      <meta name="description" content="Join our expert-led workshop to learn how AI is transforming accounts payable and helping finance teams recover millions in overpayments." />
      <meta name="keywords" content="Accounts Payable AI workshop, Discover Dollar, Recover overpayments, Finance AI tools, AP automation, revenue leakage" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://discoverdollar.com/workshop" />
      <meta property="og:title" content="AP AI Workshop | Discover Dollar Shield" />
      <meta property="og:description" content="Join our expert-led workshop to learn how AI is transforming accounts payable and helping finance teams recover millions in overpayments." />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://discoverdollar.com/workshop" />
      <meta property="twitter:title" content="AP AI Workshop | Discover Dollar Shield" />
      <meta property="twitter:description" content="Join our expert-led workshop to learn how AI is transforming accounts payable and helping finance teams recover millions in overpayments." />
      
      {/* Custom font preload */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Helmet>
  );
};
