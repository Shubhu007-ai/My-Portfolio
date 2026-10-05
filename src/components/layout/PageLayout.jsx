import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackToTop } from '../ui/BackToTop';
import { ScrollProgress } from '../ui/ScrollProgress';

export function PageLayout({ children, className = '' }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#171717] relative overflow-hidden">
      
      {/* Scroll Progress Bar at top edge */}
      <ScrollProgress />

      {/* Background System: subtle grid pattern & soft ambient light */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EEF2FF] blur-[100px] rounded-full opacity-70" />
      </div>

      <Navbar />

      <main className={`flex-grow pt-24 z-10 ${className}`}>
        {children}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

