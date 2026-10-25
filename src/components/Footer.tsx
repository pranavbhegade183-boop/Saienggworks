import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowUpRight, 
  Award,
  Clock,
  Layers,
  Globe
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const navigateTo = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Engineering CTA Banner */}
      <div className="bg-linear-to-r from-blue-950 via-slate-900 to-slate-950 border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech tracking-wider text-sky-400 uppercase">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>International OEM &amp; Tier-1 Sourcing</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Looking for a Precision Manufacturing Partner in India?
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              Equipped with 14 CNC turning centers, hot forging, 349 calibrated gauges, and proven KAN-BAN &amp; JIT delivery schedules.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigateTo('contact')}
              className="px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold tracking-wider uppercase rounded-xs transition-colors flex items-center gap-2 shadow-lg shadow-sky-500/10 cursor-pointer"
            >
              <span>Request Technical Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={COMPANY_DETAILS.corporateProfilePdfUrl}
              download="Sai_Engineering_Works_Corporate_Profile.pdf"
              className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xs border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Download Profile (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Company Bio & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-900 border border-sky-500/40 rounded-xs flex items-center justify-center font-mono-tech font-bold text-sky-400 text-sm">
                SEW
              </div>
              <div>
                <h4 className="text-lg font-extrabold tracking-tight text-white">
                  SAI ENGINEERING WORKS
                </h4>
                <p className="text-[10px] tracking-widest text-slate-400 uppercase font-mono-tech">
                  M/S. Sai Engineering Works · Est. 2010
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              Precision forging, CNC turn-mill machining, and automotive fluid dynamics component manufacturer based in the industrial manufacturing corridor of Chikhali, Pune, Maharashtra. Serving international OEMs and domestic Tier-1 anchors with zero-defect quality thresholds.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>ISO 9001:2008 Quality Management System (Certified by AITF)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Layers className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-mono-tech">GSTIN: {COMPANY_DETAILS.logistics.gstNo}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Factory Operating Shifts: 2 Shifts (Mon – Sat) · Admin Desk: 08:30 – 18:30 IST</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Website Directory
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-sky-400 transition-colors cursor-pointer">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-sky-400 transition-colors cursor-pointer">
                  About Us &amp; Leadership
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('products')} className="hover:text-sky-400 transition-colors cursor-pointer">
                  Product Catalog &amp; Specs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('capabilities')} className="hover:text-sky-400 transition-colors cursor-pointer">
                  Manufacturing Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('quality')} className="hover:text-sky-400 transition-colors cursor-pointer">
                  Quality &amp; Metrology Lab
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('industries')} className="hover:text-sky-400 transition-colors cursor-pointer">
                  Industries Served
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-sky-400 transition-colors cursor-pointer">
                  Contact / Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Featured Product Scope */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Key Components
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-slate-200">Hydraulic &amp; Pneumatic Banjo Fittings (6–80mm)</li>
              <li className="hover:text-slate-200">High-Pressure End Fittings &amp; Ferrules</li>
              <li className="hover:text-slate-200">DKO Swivel Fittings &amp; T-Connectors</li>
              <li className="hover:text-slate-200">Engine Companion Flanges &amp; Link Pins</li>
              <li className="hover:text-slate-200">Fuel Filter &amp; Priming Pump Brackets</li>
              <li className="hover:text-slate-200">Heavy Duty Bearing Covers &amp; Gemi Bands</li>
              <li className="hover:text-slate-200">Safety Locking Clips &amp; Brake Levers</li>
            </ul>
          </div>

          {/* Col 5: Factory Logistics & Contacts */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Factory Logistics
            </h5>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  GAT No. 1410, Opp. Trimurti Weigh Bridge, Falcon Fourtech Rd, Sonawanewasti, Chikhali, Haveli, Pune – 411062, MH, India
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-1 border-t border-slate-800">
                <a 
                  href={`mailto:${COMPANY_DETAILS.logistics.salesEmail}`} 
                  className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors font-mono-tech"
                  title="Sales & RFQ Desk"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{COMPANY_DETAILS.logistics.salesEmail}</span>
                </a>
                <a 
                  href={`mailto:${COMPANY_DETAILS.logistics.plantEmail}`} 
                  className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors font-mono-tech text-[11px]"
                  title="Plant Administration & Quality"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{COMPANY_DETAILS.logistics.plantEmail}</span>
                </a>
                <a 
                  href={COMPANY_DETAILS.logistics.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors font-mono-tech"
                >
                  <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{COMPANY_DETAILS.logistics.website}</span>
                </a>
                <a 
                  href={`tel:${COMPANY_DETAILS.logistics.phones[0].raw}`} 
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors font-mono-tech"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{COMPANY_DETAILS.logistics.phones[0].name}: {COMPANY_DETAILS.logistics.phones[0].number}</span>
                </a>
                <a 
                  href={`tel:${COMPANY_DETAILS.logistics.phones[1].raw}`} 
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors font-mono-tech"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{COMPANY_DETAILS.logistics.phones[1].name}: {COMPANY_DETAILS.logistics.phones[1].number}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono-tech">
          <div>
            &copy; {new Date().getFullYear()} M/S. Sai Engineering Works. All rights reserved. Registered in Pune, Maharashtra, India.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span>ISO 9001:2008 Registered</span>
            <span>·</span>
            <span>Export &amp; Tier-1 Supply</span>
            <span>·</span>
            <span>Designed for Custom Domain Deployment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
