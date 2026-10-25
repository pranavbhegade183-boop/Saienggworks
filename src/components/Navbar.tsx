import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  FileText, 
  ShoppingCart, 
  ShieldCheck, 
  Compass, 
  ChevronRight,
  Globe
} from 'lucide-react';
import { COMPANY_DETAILS, Product } from '../data/companyData';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  rfqItems: Product[];
  setIsRfqModalOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  rfqItems,
  setIsRfqModalOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'quality', label: 'Quality Assurance' },
    { id: 'industries', label: 'Industries Served' },
    { id: 'contact', label: 'Contact / RFQ' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Industrial Header Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5" />
              ISO 9001:2008 CERTIFIED
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-300 font-mono-tech">EST. 2010 · TIER-1 & OEM SUPPLIER</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Chikhali, Pune, MH, India
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono-tech">
            <a 
              href={`mailto:${COMPANY_DETAILS.logistics.salesEmail}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              title="Official Sales & RFQ Desk"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_DETAILS.logistics.salesEmail}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a 
              href={`tel:${COMPANY_DETAILS.logistics.phones[0].raw}`} 
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 9922968270</span>
            </a>
            <span className="hidden lg:inline text-slate-600">|</span>
            <a 
              href={COMPANY_DETAILS.logistics.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-sky-400 transition-colors"
              title="Official Website"
            >
              <Globe className="w-3 h-3 text-sky-400" />
              <span>{COMPANY_DETAILS.logistics.website}</span>
            </a>
            <a
              href={COMPANY_DETAILS.corporateProfilePdfUrl}
              download="Sai_Engineering_Works_Corporate_Profile.pdf"
              className="hidden md:flex items-center gap-1 px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded transition-colors text-[11px]"
              title="Download Corporate Profile PDF"
            >
              <FileText className="w-3 h-3 text-amber-400" />
              <span>Profile (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Engineering Emblem */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="w-12 h-12 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 border-2 border-slate-700 rounded-sm flex items-center justify-center shadow-inner group-hover:border-sky-500 transition-colors relative overflow-hidden">
              {/* Mechanical drafting grid marks inside emblem */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
              <div className="relative flex flex-col items-center justify-center font-bold text-white leading-none">
                <span className="text-lg tracking-tighter text-sky-400 font-mono-tech">SEW</span>
                <span className="text-[8px] text-slate-400 tracking-widest mt-0.5">PUNE</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-950 transition-colors">
                  SAI ENGINEERING WORKS
                </span>
              </div>
              <p className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">
                Precision Forging, Machining &amp; Components
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-semibold tracking-tight transition-all rounded cursor-pointer ${
                    isActive
                      ? 'text-blue-900 bg-blue-50/80 border-b-2 border-blue-900'
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Area: RFQ Drawer Trigger & Request Quote CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsRfqModalOpen(true)}
              className="relative p-2.5 text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer border border-slate-200"
              title="View RFQ Quote Basket"
            >
              <ShoppingCart className="w-5 h-5 text-slate-700" />
              {rfqItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-blue-700 text-white font-mono-tech text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {rfqItems.length}
                </span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold tracking-wider uppercase rounded-xs transition-colors flex items-center gap-2 shadow-xs cursor-pointer border border-blue-900"
            >
              <span>Request a Quote</span>
              <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsRfqModalOpen(true)}
              className="relative p-2 text-slate-700 border border-slate-200 rounded"
              aria-label="View RFQ Basket"
            >
              <ShoppingCart className="w-5 h-5" />
              {rfqItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-blue-700 text-white font-mono-tech text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {rfqItems.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-md focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 text-sm font-semibold rounded flex items-center justify-between ${
                  isActive
                    ? 'bg-blue-50 text-blue-900 font-bold border-l-4 border-blue-900'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsRfqModalOpen(true);
              }}
              className="w-full py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold rounded flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4 text-blue-900" />
              <span>Review RFQ Quote Basket ({rfqItems.length} items)</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 bg-blue-950 text-white text-xs font-bold uppercase tracking-wider rounded text-center"
            >
              Submit Technical RFQ
            </button>
            <a
              href={COMPANY_DETAILS.corporateProfilePdfUrl}
              download="Sai_Engineering_Works_Corporate_Profile.pdf"
              className="w-full py-2 text-center text-xs text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>Download Corporate Profile (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
