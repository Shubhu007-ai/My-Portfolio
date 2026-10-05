import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Button } from '../ui/Button';

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#E4E1D9] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <NavLink 
            to="/" 
            className="group flex items-center text-xl font-bold font-heading tracking-tight text-[#171717] focus:outline-none"
            aria-label="Shubham Patel Portfolio Home"
          >
            <span>SP</span>
            <span className="text-[#4F46E5] group-hover:scale-125 transition-transform duration-200">.</span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive
                      ? 'text-[#4F46E5] font-semibold'
                      : 'text-[#171717] hover:text-[#4F46E5]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.name}</span>
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#4F46E5] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#4F46E5]/60 rounded-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-250 ease-out" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Let's Talk CTA Button */}
          <div className="hidden md:block">
            <Button to="/contact" variant="primary" size="sm" icon={ArrowUpRight}>
              Let's Talk
            </Button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-white border border-[#E4E1D9] text-[#171717] 
                         hover:text-[#4F46E5] hover:border-[#4F46E5] focus:outline-none shadow-sm"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[60px] bg-[#F7F5F0]/98 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between p-6 border-b border-[#E4E1D9] animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col space-y-3 mt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? 'bg-[#EEF2FF] text-[#4F46E5] font-semibold border border-[#4F46E5]/30'
                      : 'text-[#171717] hover:bg-[#EFEDE7] hover:text-[#4F46E5]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#E4E1D9] mb-8">
            <Button to="/contact" variant="primary" size="lg" className="w-full" icon={ArrowUpRight}>
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
