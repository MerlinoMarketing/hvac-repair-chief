import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  services: [
    { label: 'AC Repair', href: '/services/ac-repair' },
    { label: 'AC Installation', href: '/services/ac-installation' },
    { label: 'Emergency HVAC', href: '/services/emergency-hvac-service' },
    { label: 'Inspections', href: '/services/hvac-maintenance' },
    { label: 'Duct Cleaning', href: '/services/duct-cleaning' },
    { label: 'Commercial HVAC', href: '/services/commercial-hvac' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Service Areas', href: '/contact#service-area' },
    { label: 'Careers', href: '/careers' },
  ],
  resources: [
    { label: 'Services', href: '/services' },
    { label: 'Knowledge Center', href: '/articles' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Warranty Info', href: '/warranty' },
    { label: 'Reviews', href: '/reviews' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Accessibility', href: '/accessibility' },
  ]
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              <span className="text-slate-900">Pompano Beach</span>
              <span className="text-cyan-600"> AC Repair</span>
            </h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Your trusted HVAC partner for over 25 years. We provide expert HVAC services
              with a commitment to quality, integrity, and customer satisfaction.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+19542896718"
                className="flex items-center gap-3 text-slate-600 hover:text-cyan-600 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(954) 289-6718</span>
              </a>
              <a
                href="mailto:info@pompanobeachhouseacrepair.com"
                className="flex items-center gap-3 text-slate-600 hover:text-cyan-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>info@pompanobeachhouseacrepair.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-600">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>
                  123 Main Street<br />
                  Pompano Beach, FL 33432
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 hover:bg-cyan-600 p-3 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-slate-900" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 hover:bg-cyan-600 p-3 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-slate-900" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 hover:bg-cyan-600 p-3 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-slate-900" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 hover:bg-cyan-600 p-3 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-slate-900" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-cyan-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-cyan-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-cyan-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* License & Certifications */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-100/80 rounded-lg p-4">
              <div className="text-sm text-slate-500 mb-1">Licensed & Insured</div>
              <div className="font-semibold text-slate-900">License #334326</div>
            </div>
            <div className="bg-slate-100/80 rounded-lg p-4">
              <div className="text-sm text-slate-500 mb-1">BBB Accredited</div>
              <div className="font-semibold text-slate-900">A+ Rating</div>
            </div>
            <div className="bg-slate-100/80 rounded-lg p-4">
              <div className="text-sm text-slate-500 mb-1">Comfort Guarantee</div>
              <div className="font-semibold text-slate-900">NATE Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Pompano Beach House AC Repair. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-slate-500 hover:text-cyan-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
