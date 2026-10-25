import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Microscope, 
  FileCheck2, 
  FileText, 
  Layers, 
  Compass, 
  ArrowRight,
  Gauge
} from 'lucide-react';
import { 
  METROLOGY_INSTRUMENTS, 
  CALIBRATED_GAUGES, 
  COMPANY_DETAILS 
} from '../data/companyData';

interface QualityPageProps {
  setCurrentPage: (page: string) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState<'instruments' | 'gauges'>('instruments');

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-amber-400 uppercase tracking-widest">
            <Award className="w-4 h-4 text-amber-400" />
            <span>FINAL INSPECTION FACILITY · SECTION 6</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Quality Assurance &amp; Metrology Laboratory
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            To comply with absolute automotive warranty rules, our final inspection facility operates in a strict temperature-monitored layout equipped with 349 calibrated gauges, optical profile projectors, and 1-micron air gauging systems.
          </p>

          {/* Key Stat Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl text-xs font-mono-tech">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xs">
              <span className="text-slate-400 text-[10px] block uppercase">CALIBRATED GAUGES ON FLOOR</span>
              <span className="text-2xl font-black text-amber-400">349</span>
              <span className="text-[10px] text-slate-500 block">Thread, plug &amp; boundary</span>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xs">
              <span className="text-slate-400 text-[10px] block uppercase">TIGHTEST TOLERANCE HELD</span>
              <span className="text-2xl font-black text-emerald-400">10-Micron</span>
              <span className="text-[10px] text-slate-500 block">±0.010 mm on critical faces</span>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xs">
              <span className="text-slate-400 text-[10px] block uppercase">INSTRUMENT CLASSES</span>
              <span className="text-2xl font-black text-sky-400">21</span>
              <span className="text-[10px] text-slate-500 block">Master inspection standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ISO 9001:2008 & Quality Framework */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-blue-900 font-bold block">
              Certified Management System
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Rigorous Quality System Compliance
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Structured operations rigorously managed under robust QMS metrics, with continuous validation tracking and calibration routines mapped to strict automotive parameters. Certified ISO 9001:2008 Quality Management System, audited and certified by AITF.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>First-Off &amp; In-Process Audits</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Every production batch mandates full dimensional approval on first-piece components before CNC lines run continuously. Hourly SPC samples logged at each workstation.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Thread &amp; Sealing Inspection</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Critical threads on Banjo fittings and high-pressure end fittings are checked 100% using certified Go/No-Go plug and ring gauges matching Metric, UNF, BSP, and NPT specs.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full Heat Number Traceability</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Raw steel coils and billets are segregated with heat batch identifiers mapped back to raw mill test certificates (MTC 3.1) and chemical spectrometry audits.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero-Defect Packaging Protocol</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Export and domestic Tier-1 components are packed in VCI rust-inhibitor bags, corrugated boxes, and barcoded cartons matching customer KAN-BAN lot numbers.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-slate-900 text-white p-6 rounded-xs border-2 border-amber-500/30 space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-10 h-10 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] font-mono-tech text-amber-400 uppercase tracking-widest">
                    CERTIFIED STANDARD
                  </div>
                  <h3 className="text-lg font-bold text-white">ISO 9001:2008</h3>
                  <div className="text-xs text-slate-400">Certified by AITF</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                <div className="text-slate-300">
                  <span className="text-slate-500 block text-[10px] font-mono-tech">SCOPE:</span>
                  Precision Forging, Machining &amp; Engineering Components
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500 block text-[10px] font-mono-tech">AUDIT REGISTRATION:</span>
                  Maharashtra State Directorate / AITF Registrars
                </div>
              </div>

              <a
                href={COMPANY_DETAILS.corporateProfilePdfUrl}
                download="Sai_Engineering_Works_Corporate_Profile.pdf"
                className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xs text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Quality Profile (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Metrology Equipment & Calibrated Gauges Data Tables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono-tech uppercase tracking-wider text-blue-900 font-bold block">
              Inspection Infrastructure Inventory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Metrology Laboratory Equipment Schedule
            </h2>
          </div>

          {/* Table Selector Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xs border border-slate-200 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('instruments')}
              className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                activeTab === 'instruments'
                  ? 'bg-white text-blue-950 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Linear, Angle &amp; Profile (10 Lines)
            </button>
            <button
              onClick={() => setActiveTab('gauges')}
              className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                activeTab === 'gauges'
                  ? 'bg-white text-blue-950 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Calibrated Thread &amp; Plug Gauges (349 Gauges)
            </button>
          </div>
        </div>

        {activeTab === 'instruments' ? (
          /* Table 1: Metrology Instruments */
          <div className="bg-white border border-slate-200 rounded-xs shadow-xs overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white font-mono-tech border-b border-slate-800">
                  <th className="py-3 px-4 font-bold w-16">SR.</th>
                  <th className="py-3 px-4 font-bold">EQUIPMENT</th>
                  <th className="py-3 px-4 font-bold">LEAST COUNT</th>
                  <th className="py-3 px-4 font-bold">OPERATIONAL RANGE / BASELINE</th>
                  <th className="py-3 px-4 font-bold text-right w-24">QTY.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono-tech">
                {METROLOGY_INSTRUMENTS.map((inst) => (
                  <tr key={inst.sr} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 text-slate-500 font-bold">{inst.sr < 10 ? `0${inst.sr}` : inst.sr}</td>
                    <td className="py-3 px-4 font-bold text-slate-900 font-sans">{inst.name}</td>
                    <td className="py-3 px-4 text-blue-900 font-semibold">{inst.leastCount}</td>
                    <td className="py-3 px-4 text-slate-700">{inst.rangeBaseline}</td>
                    <td className="py-3 px-4 text-right font-bold text-slate-900 whitespace-nowrap">{inst.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Table 2: Calibrated Gauges */
          <div className="bg-white border border-slate-200 rounded-xs shadow-xs overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white font-mono-tech border-b border-slate-800">
                  <th className="py-3 px-4 font-bold w-16">SR.</th>
                  <th className="py-3 px-4 font-bold">GAUGE CLASSIFICATION &amp; STANDARD TYPE</th>
                  <th className="py-3 px-4 font-bold">DIMENSIONAL / THREAD SPECTRUM</th>
                  <th className="py-3 px-4 font-bold text-right w-28">QTY.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono-tech">
                {CALIBRATED_GAUGES.map((gauge) => (
                  <tr key={gauge.sr} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 text-slate-500 font-bold">{gauge.sr}</td>
                    <td className="py-3 px-4 font-bold text-slate-900 font-sans">{gauge.classification}</td>
                    <td className="py-3 px-4 text-slate-700">{gauge.threadSpectrum}</td>
                    <td className="py-3 px-4 text-right font-bold text-blue-900 whitespace-nowrap">{gauge.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* 4. Quality Audit Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white p-8 rounded-xs border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold">
              Require PPAP Level 3, FMEA, or Gauge R&amp;R Reports?
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Our quality assurance desk provides complete PPAP Level 3 packages, Control Plans, Process Capability studies (Cp/Cpk &gt; 1.67), and raw material test certificates for OEM component qualification.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.location.hash = 'contact';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0 cursor-pointer"
          >
            Request Quality Documentation
          </button>
        </div>
      </section>
    </div>
  );
};
