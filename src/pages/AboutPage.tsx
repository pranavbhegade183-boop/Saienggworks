import React from 'react';
import { 
  Building, 
  TrendingUp, 
  Award, 
  ShieldCheck, 
  FileText, 
  Users, 
  MapPin, 
  Clock, 
  Zap,
  CheckCircle2,
  ArrowRight,
  BarChart3
} from 'lucide-react';
import { 
  COMPANY_DETAILS, 
  TURNOVER_HISTORY, 
  TIER1_OEM_PARTNERS 
} from '../data/companyData';

interface AboutPageProps {
  setCurrentPage: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  const maxTurnover = Math.max(...TURNOVER_HISTORY.map(t => t.amount));

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-sky-400 uppercase tracking-widest">
            <span>COMPANY OVERVIEW · SECTION A</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Sai Engineering Works
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Established in 2010 in Pune, Maharashtra, M/S. Sai Engineering Works is a premier high-precision manufacturing unit specialising in defect-free raw forging and CNC machining components for Tier-1 and global OEM automotive anchors.
          </p>
        </div>
      </section>

      {/* 2. Executive Leadership & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-blue-900 font-bold block">
              Leadership &amp; Operating Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sixteen Years of Relentless Precision &amp; Continuous Growth
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Operating with advanced toolings for multi-axis CNC turning and robust vertical machining (VMC), Sai Engineering Works delivers exact-tolerance components critical for automotive fluid dynamics, structural sub-assemblies, and high-stress powertrain applications.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              The plant layout in Chikhali, Pune is specifically structured to match the rigid vendor metrics requested by leading Tier-1 global manufacturers. We integrate raw forging directly with secondary turn-mill operations to guarantee uncompromised metallurgical structural resilience.
            </p>

            <div className="p-5 bg-slate-900 text-white rounded-xs border border-slate-800 space-y-3">
              <blockquote className="text-sm italic text-slate-300 leading-relaxed border-l-2 border-sky-400 pl-3">
                &ldquo;{COMPANY_DETAILS.logistics.managingDirector.quote}&rdquo;
              </blockquote>
              <div className="pt-1">
                <div className="text-xs font-bold text-white">
                  {COMPANY_DETAILS.logistics.managingDirector.name}
                </div>
                <div className="text-[11px] font-mono-tech text-slate-400 uppercase">
                  {COMPANY_DETAILS.logistics.managingDirector.title} · M/S. Sai Engineering Works
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xs space-y-4 shadow-xs">
              <h3 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
                Executive &amp; Operational Highlights
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">ISO 9001:2008 Certified Quality System</span>
                    <span className="text-slate-600">Certified by AITF with structured validation tracking and continuous calibration routines.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">KAN-BAN &amp; JIT Delivery Setup</span>
                    <span className="text-slate-600">Proven lean performance execution utilizing functional KAN-BAN loops deployed with Norma Group India.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">60 Skilled Professionals</span>
                    <span className="text-slate-600">Seasoned machinists, toolmakers, CNC programmers, and metrology technicians.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">100% Plant Uptime Guarantee</span>
                    <span className="text-slate-600">Heavy capacity 185 KVT diesel generator loop protecting all continuous production cycles.</span>
                  </div>
                </div>
              </div>

              <a
                href={COMPANY_DETAILS.corporateProfilePdfUrl}
                download="Sai_Engineering_Works_Corporate_Profile.pdf"
                className="w-full py-2.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider rounded-xs text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Corporate Profile (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Financial Track Record & Growth Trajectory */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-blue-900 font-bold block">
              Financial Track Record · Performance Metrics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Turnover Trajectory: FY 2012–13 to FY 2025–26
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sai Engineering Works exhibits a steady year-on-year growth path, reaching a record annual turnover baseline of ₹8.50 Crores for the 2025–26 fiscal frame. This upward trend highlights the company's steady capital capacity to absorb new major product lines, configure specialized tooling arrays, and deploy dedicated manufacturing cells for upcoming OEM programs.
            </p>
          </div>

          {/* Key Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 border border-slate-200 rounded-xs text-center shadow-xs space-y-1">
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">FY 2025–26 Baseline</span>
              <div className="text-3xl font-black text-amber-600">₹8.50 Cr</div>
              <span className="text-xs text-slate-600 font-medium">Annual Turnover</span>
            </div>

            <div className="bg-white p-6 border border-slate-200 rounded-xs text-center shadow-xs space-y-1">
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">Growth Since FY 2015–16</span>
              <div className="text-3xl font-black text-blue-900">2.7×</div>
              <span className="text-xs text-slate-600 font-medium">Capital Capacity Multiplier</span>
            </div>

            <div className="bg-white p-6 border border-slate-200 rounded-xs text-center shadow-xs space-y-1">
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">Manufacturing Experience</span>
              <div className="text-3xl font-black text-emerald-700">16 Yrs</div>
              <span className="text-xs text-slate-600 font-medium">Operating Track Record</span>
            </div>
          </div>

          {/* Interactive Visual Bar Chart */}
          <div className="bg-white p-6 sm:p-8 border border-slate-200 rounded-xs shadow-xs max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-900" />
                <h3 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-900">
                  Turnover, FY 2012–13 to FY 2025–26 (₹ in Crores)
                </h3>
              </div>
              <span className="text-[11px] font-mono-tech text-slate-500">
                Data Source: Audited Financial Statements
              </span>
            </div>

            {/* Bars */}
            <div className="space-y-3 pt-2">
              {TURNOVER_HISTORY.map((item, index) => {
                const percentage = (item.amount / maxTurnover) * 100;
                const isLatest = index === TURNOVER_HISTORY.length - 1;

                return (
                  <div key={item.period} className="flex items-center gap-3 text-xs font-mono-tech">
                    <span className="w-28 text-slate-600 text-right shrink-0">
                      {item.period}
                    </span>
                    <div className="flex-1 bg-slate-100 h-6 rounded-xs overflow-hidden flex items-center relative">
                      <div
                        className={`h-full transition-all duration-500 flex items-center justify-end pr-2 text-white font-bold text-[11px] ${
                          isLatest ? 'bg-amber-600' : 'bg-blue-900'
                        }`}
                        style={{ width: `${percentage}%` }}
                      >
                        {item.amount >= 3.5 ? `₹${item.amount.toFixed(2)} Cr` : ''}
                      </div>
                      {item.amount < 3.5 && (
                        <span className="pl-2 font-bold text-slate-700 text-[11px]">
                          ₹{item.amount.toFixed(2)} Cr
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Plant Infrastructure & Logistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-mono-tech uppercase tracking-wider text-blue-900 font-bold block">
            Factory Logistics &amp; Strategic Location
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Chikhali, Haveli, Pune Plant Infrastructure
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Situated right in Maharashtra's primary automobile hub with direct arterial connectivity to major Tier-1 supply chains and Mumbai JNPT international sea port.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-900" />
              <span>Plant Details &amp; Engineering Desks</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-700">
              {COMPANY_DETAILS.logistics.facilityHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 border border-slate-200 rounded-xs">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-900" />
              <span>Registered Office &amp; Verified Identifiers</span>
            </h3>

            <div className="bg-slate-900 text-white p-6 rounded-xs space-y-3 font-mono-tech text-xs">
              <div className="border-b border-slate-800 pb-2">
                <span className="text-[10px] text-slate-400 block uppercase">PHYSICAL ADDRESS</span>
                <span className="text-slate-200">{COMPANY_DETAILS.logistics.address}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 border-b border-slate-800 pb-2">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">GST IDENTIFIER</span>
                  <span className="text-sky-400 font-bold">{COMPANY_DETAILS.logistics.gstNo}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">QUALITY AUDITOR</span>
                  <span className="text-amber-400 font-bold">AITF / ISO 9001:2008</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 block uppercase">COMMUNICATION &amp; WEB PORTAL</span>
                <div className="text-slate-300">Sales RFQ: <a href={`mailto:${COMPANY_DETAILS.logistics.salesEmail}`} className="text-sky-400 hover:underline">{COMPANY_DETAILS.logistics.salesEmail}</a></div>
                <div className="text-slate-300">Plant Admin: <a href={`mailto:${COMPANY_DETAILS.logistics.plantEmail}`} className="text-slate-300 hover:underline">{COMPANY_DETAILS.logistics.plantEmail}</a></div>
                <div className="text-slate-300">Official Web: <a href={COMPANY_DETAILS.logistics.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">{COMPANY_DETAILS.logistics.website}</a></div>
                <div className="text-slate-300 pt-1">Mr. Prashant: {COMPANY_DETAILS.logistics.phones[0].number}</div>
                <div className="text-slate-300">Mr. Pradyumna: {COMPANY_DETAILS.logistics.phones[1].number}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white p-8 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold">Require a Plant Audit or Vendor Questionnaire?</h3>
            <p className="text-xs text-slate-300">
              Our engineering leadership is available to conduct technical review calls and share NDA documentation.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.location.hash = 'contact';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0 cursor-pointer"
          >
            Connect With Leadership
          </button>
        </div>
      </section>
    </div>
  );
};
