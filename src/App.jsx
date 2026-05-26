import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Strip from './components/Strip';
import ServicesSection from './components/ServicesSection';
import About from './components/About';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import SocialMedia from './components/SocialMedia';
import ExportBanner from './components/ExportBanner';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Floaters from './components/Floaters';

export default function App() {
  return (
    <div className="bg-[#050c1a] text-white font-['DM_Sans',sans-serif] overflow-x-hidden min-h-screen">
      {/* Decorative Matrix Grid overlay background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />
      
      <Navbar />
      <Hero />
      <Strip />
      <ServicesSection />
      <About />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <Clients />
      <SocialMedia />
      <ExportBanner />
      <CTA />
      <Footer />
      <Floaters />
    </div>
  );
}