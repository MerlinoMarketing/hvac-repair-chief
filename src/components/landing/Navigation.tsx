'use client';

import { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { SITE, SERVICES } from '@/lib/constants';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isServicesOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg shadow-slate-200/50'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="text-xl lg:text-2xl font-bold leading-tight">
              <span className="text-[#1B6B93]">Pompano Beach</span>
              <span className="text-[#FF8C42]"> AC Repair</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <div key={index} className="relative" ref={link.hasDropdown ? dropdownRef : undefined}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="text-slate-700 hover:text-[#1B6B93] font-medium transition-colors flex items-center gap-1"
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-3 w-72 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 py-2 z-50">
                        <Link
                          href="/services"
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-5 py-3 text-[#1B6B93] font-semibold hover:bg-slate-50 transition-colors border-b border-slate-100 mb-1"
                        >
                          All Services
                        </Link>
                        {SERVICES.map((service, idx) => (
                          <Link
                            key={idx}
                            href={`/services/${service.slug}`}
                            onClick={() => setIsServicesOpen(false)}
                            className="block px-5 py-2.5 text-slate-600 hover:text-[#1B6B93] hover:bg-slate-50 transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-slate-700 hover:text-[#1B6B93] font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Phone & CTA */}
          <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 text-slate-800 hover:text-[#1B6B93] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold text-sm">{SITE.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-[#FF8C42] hover:bg-[#E67A35] text-white font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-200/50 text-sm"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden text-slate-800 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-slate-700 hover:text-[#1B6B93] font-medium py-3 transition-colors flex items-center gap-2 w-full"
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 mt-1 mb-2 space-y-1 border-l-2 border-[#1B6B93]/20">
                          {SERVICES.map((service, idx) => (
                            <Link
                              key={idx}
                              href={`/services/${service.slug}`}
                              onClick={() => { setIsMobileMenuOpen(false); setIsServicesOpen(false); }}
                              className="text-slate-500 hover:text-[#1B6B93] py-2 text-sm transition-colors block"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-slate-700 hover:text-[#1B6B93] font-medium py-3 transition-colors block"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <hr className="border-slate-100 my-3" />

              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 text-slate-800 hover:text-[#1B6B93] py-3 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">{SITE.phone}</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#FF8C42] hover:bg-[#E67A35] text-white font-bold px-6 py-3 rounded-lg text-center transition-all mt-2"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
