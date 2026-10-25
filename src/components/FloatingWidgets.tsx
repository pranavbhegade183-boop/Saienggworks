import React, { useState, useEffect } from 'react';
import { MessageCircle, ShoppingCart, ArrowUp, X } from 'lucide-react';
import { COMPANY_DETAILS, Product } from '../data/companyData';

interface FloatingWidgetsProps {
  rfqItems: Product[];
  setIsRfqModalOpen: (open: boolean) => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({
  rfqItems,
  setIsRfqModalOpen,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsAppHint, setShowWhatsAppHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Sai Engineering Works, I am looking for a precision engineering & automotive manufacturing partner in India. I would like to request an RFQ / discuss components."
  );
  const whatsappUrl = `https://wa.me/919637929911?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 bg-slate-900/90 hover:bg-slate-900 text-white rounded-full shadow-lg border border-slate-700 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* RFQ Basket Quick Button (if items selected) */}
      {rfqItems.length > 0 && (
        <button
          onClick={() => setIsRfqModalOpen(true)}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-full shadow-xl border border-sky-400/40 transition-all transform hover:scale-105 cursor-pointer font-mono-tech text-xs font-semibold"
          title="Review RFQ Basket"
        >
          <ShoppingCart className="w-4 h-4 text-sky-400" />
          <span>RFQ Basket</span>
          <span className="w-5 h-5 rounded-full bg-sky-400 text-slate-950 text-[11px] font-bold flex items-center justify-center">
            {rfqItems.length}
          </span>
        </button>
      )}

      {/* WhatsApp Floating Contact */}
      <div className="pointer-events-auto relative flex items-center">
        {showWhatsAppHint && (
          <div className="hidden sm:flex items-center gap-2 mr-3 px-3 py-1.5 bg-white text-slate-800 rounded-lg shadow-md border border-slate-200 text-xs font-medium animate-fade-in">
            <span>Direct WhatsApp Inquiry</span>
            <button
              onClick={() => setShowWhatsAppHint(false)}
              className="text-slate-400 hover:text-slate-600 cursor-pointer"
              aria-label="Close message"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl flex items-center justify-center transition-all transform hover:scale-110 border-2 border-white focus:outline-hidden"
          title="Chat on WhatsApp with Sai Engineering Works"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>
      </div>
    </div>
  );
};
