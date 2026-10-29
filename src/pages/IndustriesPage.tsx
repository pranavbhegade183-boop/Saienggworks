import React from 'react';
import { 
  Truck, 
  Droplet, 
  Tractor, 
  Factory, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Globe2, 
  Building2 
} from 'lucide-react';
import { 
  INDUSTRIES_SERVED, 
  TIER1_OEM_PARTNERS, 
  COMPANY_DETAILS 
} from '../data/companyData';

interface IndustriesPageProps {
  setCurrentPage: (page: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ setCurrentPage }) => {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'automotive':
        return <Truck className="w-6 h-6 text-sky-400" />;
      case 'hydraulics':
        return <Droplet className="w-6 h-6 text-sky-400" />;
      case 'off-highway':
        return <Tractor className="w-6 h-6 text-sky-400" />;
      case 'industrial-machinery':
        return <Factory className="w-6 h-6 text-sky-400" />;
      default:
        return <Factory className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-sky-400 uppercase tracking-widest">
            <span>MARKET VERTICALS · SECTION 2</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Industries Served &amp; Global OEM Supply
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Delivering high-reliability precision forgings, multi-axis turned assemblies, and fluid dynamics fittings to international OEMs, automotive Tier-1 anchors, hydraulic equipment builders, and heavy industrial machinery fabricators.
          </p>
        </div>
      </section>

      {/* 2. Key Industry Verticals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-mono-tech uppercase tracking-wider text-blue-900 font-bold block">
            Application Segments
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Target Industry Domains
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES_SERVED.map((ind) => (
            <div
              key={ind.id}
              className="bg-white border border-slate-200 rounded-xs p-6 sm:p-8 shadow-xs space-y-5 flex flex-col justify-between hover:border-blue-900 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-slate-900 rounded-xs border border-slate-800">
                    {getIndustryIcon(ind.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {ind.title}
                    </h3>
                    <span className="text-xs font-mono-tech text-blue-900 block">
                      {ind.tagline}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-mono-tech uppercase text-slate-400 block font-bold">
                    Key Supplied Components:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                    {ind.keyComponents.map((comp, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono-tech text-slate-500">
                <span className="text-blue-950 font-semibold">{ind.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Engineering Applications & Precision Component Solutions */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 font-bold block">
              ENGINEERING APPLICATIONS &amp; APPLICATION EXPERTISE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Precision Component Solutions Across Industry Sectors
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Production processes and zero-defect quality thresholds engineered under continuous delivery frameworks for global powertrain, hydraulic, and structural assemblies:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIER1_OEM_PARTNERS.map((app, idx) => (
              <div
                key={idx}
                className="bg-slate-950 p-5 border border-slate-800 rounded-xs space-y-3 hover:border-cyan-500/50 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono-tech text-cyan-400">
                    <span>APPLICATION #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                    <span className="text-slate-500">{app.category}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {app.title || app.name}
                  </h3>
                  {app.description && (
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {app.description}
                    </p>
                  )}
                </div>
                {app.keyComponents && (
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono-tech text-slate-500 uppercase block mb-1">
                      Key Manufactured Parts:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {app.keyComponents.map((part, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-mono-tech rounded-xs"
                        >
                          {part}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Sourcing & Export Logistics Readiness */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-slate-900 text-white rounded-xs p-8 lg:p-12 border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-sky-400 uppercase tracking-widest">
              <Globe2 className="w-4 h-4 text-sky-400" />
              <span>International Export Readiness</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight mt-1">
              Built for International OEM Sourcing &amp; Global Supply Chains
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mt-2 leading-relaxed">
              Situated in the Chikhali, Pune manufacturing cluster, Sai Engineering Works provides seamless multimodal logistics for global purchasers in Europe, North America, Japan, and the Middle East.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono-tech">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xs space-y-2">
              <span className="text-sky-400 font-bold block text-sm">Port &amp; Freight Arteries</span>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                Direct expressway corridor to Nhava Sheva (JNPT) container port, Mumbai, ensuring fast vessel dispatch for FCL / LCL shipments.
              </p>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xs space-y-2">
              <span className="text-sky-400 font-bold block text-sm">International Thread Standards</span>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                Full tooling and calibrated ring gauges for Metric (ISO), UNF / UNC (American), BSPP / BSPT (British), and NPT pipe threads.
              </p>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xs space-y-2">
              <span className="text-sky-400 font-bold block text-sm">Export Protective Packaging</span>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                VCI film wrapping, desiccants, heavy corrugated boxes, and ISPM-15 heat-treated fumigated wooden pallets for transoceanic transit.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-mono-tech">
              Looking for a dependable Indian manufacturing partner?
            </span>
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.location.hash = 'contact';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              Request International RFQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
