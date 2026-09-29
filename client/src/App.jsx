import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F5F5F7] selection:bg-[#6366F1]/30 selection:text-white relative">
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Services />
        <Work />
        <About />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}