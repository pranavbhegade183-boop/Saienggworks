import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { DatasheetModal } from './components/DatasheetModal';
import { RFQModal } from './components/RFQModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { QualityPage } from './pages/QualityPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ContactPage } from './pages/ContactPage';

import { Product, PRODUCTS } from './data/companyData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedDatasheetProduct, setSelectedDatasheetProduct] = useState<Product | null>(null);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState<boolean>(false);
  const [rfqItems, setRfqItems] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('sew_rfq_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [notification, setNotification] = useState<string | null>(null);

  // Sync RFQ items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sew_rfq_items', JSON.stringify(rfqItems));
    } catch (e) {
      console.error('Storage error', e);
    }
  }, [rfqItems]);

  // Handle URL hash changes for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'products', 'capabilities', 'quality', 'industries', 'contact', 'quote'].includes(hash)) {
        if (hash === 'quote') {
          setCurrentPage('contact');
        } else {
          setCurrentPage(hash);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update Page Title based on active page
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: 'Sai Engineering Works – Precision Forging & CNC Machining | Pune, India',
      about: 'About Us & Leadership – Sai Engineering Works | 16 Yrs Track Record',
      products: 'Precision Component Range – Banjo Fittings, Flanges & Brackets | SEW',
      capabilities: 'Manufacturing Capabilities – 101 Machines, 14 CNC Centers | SEW',
      quality: 'Quality Assurance & Metrology Lab – ISO 9001:2008 & 349 Gauges | SEW',
      industries: 'Industries Served & 19 Tier-1 OEM Partners – Sai Engineering Works',
      contact: 'Contact & Request a Quote (RFQ) – Sai Engineering Works | Pune Plant',
    };

    document.title = pageTitles[currentPage] || pageTitles.home;
  }, [currentPage]);

  // RFQ handlers
  const handleAddToRfq = (product: Product) => {
    if (!rfqItems.some((item) => item.id === product.id)) {
      setRfqItems([...rfqItems, product]);
      triggerToast(`Added ${product.name} to RFQ basket`);
    } else {
      triggerToast(`${product.name} is already in your RFQ basket`);
    }
  };

  const handleRemoveFromRfq = (productId: string) => {
    setRfqItems(rfqItems.filter((item) => item.id !== productId));
  };

  const handleClearAllRfq = () => {
    setRfqItems([]);
  };

  const triggerToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleOpenDatasheet = (product: Product) => {
    setSelectedDatasheetProduct(product);
  };

  const handleCloseDatasheet = () => {
    setSelectedDatasheetProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-900 selection:text-white">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 bg-slate-900 text-white text-xs font-mono-tech px-4 py-2.5 rounded-xs shadow-xl border border-sky-400/40 flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{notification}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rfqItems={rfqItems}
        setIsRfqModalOpen={setIsRfqModalOpen}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            onOpenDatasheet={handleOpenDatasheet}
            onAddToRfq={handleAddToRfq}
            rfqItems={rfqItems}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage setCurrentPage={setCurrentPage} />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onOpenDatasheet={handleOpenDatasheet}
            onAddToRfq={handleAddToRfq}
            rfqItems={rfqItems}
            setIsRfqModalOpen={setIsRfqModalOpen}
          />
        )}

        {currentPage === 'capabilities' && (
          <CapabilitiesPage setCurrentPage={setCurrentPage} />
        )}

        {currentPage === 'quality' && (
          <QualityPage setCurrentPage={setCurrentPage} />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage setCurrentPage={setCurrentPage} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating Widgets (WhatsApp, RFQ Counter, Scroll-to-Top) */}
      <FloatingWidgets
        rfqItems={rfqItems}
        setIsRfqModalOpen={setIsRfqModalOpen}
      />

      {/* Datasheet Modal */}
      <DatasheetModal
        product={selectedDatasheetProduct}
        onClose={handleCloseDatasheet}
        onAddToRfq={handleAddToRfq}
        isInRfq={
          selectedDatasheetProduct
            ? rfqItems.some((i) => i.id === selectedDatasheetProduct.id)
            : false
        }
      />

      {/* RFQ Modal / Cart Drawer */}
      <RFQModal
        isOpen={isRfqModalOpen}
        onClose={() => setIsRfqModalOpen(false)}
        rfqItems={rfqItems}
        onRemoveItem={handleRemoveFromRfq}
        onClearAll={handleClearAllRfq}
      />
    </div>
  );
}
