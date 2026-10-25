import React, { useState } from 'react';
import { 
  Cpu, 
  Settings, 
  Flame, 
  Layers, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  ShieldCheck, 
  FileText,
  Boxes,
  Compass
} from 'lucide-react';
import { 
  MACHINERY_DATA, 
  PRODUCTION_ZONES, 
  TECHNICAL_SCALING_ROADMAP, 
  COMPANY_DETAILS,
  MachineLine
} from '../data/companyData';

interface CapabilitiesPageProps {
  setCurrentPage: (page: string) => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ setCurrentPage }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredMachines = MACHINERY_DATA.filter(m => {
    if (activeFilter === 'all') return true;
    return m.category === activeFilter;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-sky-400 uppercase tracking-widest">
            <span>SHOP FLOOR INFRASTRUCTURE · SECTION 4, 5 &amp; 7</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Manufacturing Capabilities &amp; Plant Capacity
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            The manufacturing shop floor houses an aggressive array of 101 heavy turn-mill units, automated cold bar feeding lines, mechanical stamping presses up to 250 Tons, and high-frequency induction brazing stations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-3xl text-xs font-mono-tech">
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xs">
              <span className="text-slate-400 text-[10px] block">TOTAL SHOP FLOOR ASSETS</span>
              <span className="text-xl font-bold text-white">101 Units</span>
            </div>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xs">
              <span className="text-slate-400 text-[10px] block">CNC TURNING FLEET</span>
              <span className="text-xl font-bold text-sky-400">14 Centers</span>
            </div>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xs">
              <span className="text-slate-400 text-[10px] block">AUTOMAT BAR FEEDING</span>
              <span className="text-xl font-bold text-amber-400">34 Lines</span>
            </div>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xs">
              <span className="text-slate-400 text-[10px] block">POWER BACKUP</span>
              <span className="text-xl font-bold text-emerald-400">185 KVT DG</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Integrated Dual Capability: Raw Forging + CNC Machining */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-xs p-8 lg:p-10 border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-sky-400 font-bold block">
              Core Metallurgical Advantage
            </span>
            <h2 className="text-2xl font-extrabold text-white tracking-tight mt-1">
              Integrated Dual Capability: Raw Forging &amp; Precision Machining
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mt-2 leading-relaxed">
              By combining on-site hot forging capabilities directly with secondary multi-axis CNC turn-mill execution, Sai Engineering Works manages grain-flow orientation throughout the raw structure. This guarantees exceptional structural resilience, eliminating internal stresses and material defects — a critical factor when anchoring companion hardware to heavy cast structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xs space-y-2">
              <div className="w-8 h-8 rounded-xs bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Flame className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">Hot Forging Operations</h3>
              <p className="text-slate-400 leading-relaxed">
                Mechanical press array from 30 Tons up to 250 Tons for precision blank forming, forging grain flow along load vectors, and eliminating internal voids.
              </p>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xs space-y-2">
              <div className="w-8 h-8 rounded-xs bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">Multi-Axis CNC Turn-Mill</h3>
              <p className="text-slate-400 leading-relaxed">
                14 CNC centers holding tight 10-micron tolerance thresholds for sealing surfaces, complex threads, chamfers, and precise bore concentricity.
              </p>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xs space-y-2">
              <div className="w-8 h-8 rounded-xs bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">High-Frequency Induction Brazing</h3>
              <p className="text-slate-400 leading-relaxed">
                10 KVT high-frequency induction brazing unit processing assemblies from 2mm to 50mm with zero oxide scaling and high burst pressure resistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Complete Machinery & Infrastructure Table (12 Asset Lines) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono-tech uppercase tracking-wider text-blue-900 font-bold block">
              Machine Asset Inventory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Machinery &amp; Infrastructure Capacity (101 Units)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Equipped for sudden volume scale-up, dedicated cellular lines, and 24/7 continuous production runs.
            </p>
          </div>

          {/* Machine Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Assets (12)' },
              { id: 'cnc', label: 'CNC & Turn-Mill' },
              { id: 'automat', label: 'Automat Lines' },
              { id: 'press', label: 'Presses' },
              { id: 'drilling', label: 'Drilling Blocks' },
              { id: 'specialized', label: 'Specialized & Power' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-blue-950 text-white font-bold'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Data Table */}
        <div className="bg-white border border-slate-200 rounded-xs shadow-xs overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900 text-white font-mono-tech border-b border-slate-800">
                <th className="py-3 px-4 font-bold w-16">SR.</th>
                <th className="py-3 px-4 font-bold">MACHINE / ASSET LINE</th>
                <th className="py-3 px-4 font-bold">TECHNICAL PROCESSING CAPACITY / ACCURACY RANGE</th>
                <th className="py-3 px-4 font-bold text-right w-28">QTY.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono-tech">
              {filteredMachines.map((m) => (
                <tr key={m.sr} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 text-slate-500 font-bold">{m.sr < 10 ? `0${m.sr}` : m.sr}</td>
                  <td className="py-3 px-4 font-bold text-slate-900 font-sans">{m.name}</td>
                  <td className="py-3 px-4 text-slate-700">{m.capacity}</td>
                  <td className="py-3 px-4 text-right font-bold text-blue-900 whitespace-nowrap">{m.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Plant Infrastructure Footnote directly from PDF */}
        <div className="p-4 bg-slate-50 border-l-4 border-blue-900 text-slate-700 text-xs rounded-r-xs leading-relaxed">
          <span className="font-bold text-slate-900 font-mono-tech uppercase">Plant Infrastructure Note: </span>
          The factory incorporates an independent 600 sq. ft. modern administrative block and engineering design desk, with surrounding floor space preserved to construct customer-specific cellular manufacturing rows for upcoming OEM production requirements.
        </div>
      </section>

      {/* 4. Traceability & 7-Stage Production Zoning Workflow */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-blue-900 font-bold block">
              Plant Discipline &amp; Mistake-Proofing Flow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Traceability &amp; Production Zoning Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              The plant layout operates under strict structural segregation to secure mistake-proof material flow lines, total heat traceability, and stop material cross-contamination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
            {PRODUCTION_ZONES.map((zone, idx) => (
              <div
                key={zone.step}
                className="bg-white p-4 border border-slate-200 rounded-xs shadow-2xs space-y-2 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-sky-600 font-mono-tech text-xs font-bold mb-1">
                    <span>STAGE {zone.step}</span>
                    {idx < PRODUCTION_ZONES.length - 1 && (
                      <span className="hidden lg:inline text-slate-300">&rarr;</span>
                    )}
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 leading-snug">
                    {zone.name}
                  </h3>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    {zone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technical Scaling Roadmap (2026–27) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-mono-tech uppercase tracking-wider text-blue-900 font-bold block">
            Capital Expenditure Plan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Technical Scaling Roadmap (2026–27)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
            To match projected program off-takes for immediate precision machining within automotive component structures, Sai Engineering Works has formally budgeted capital expenditure loops for the following machinery onboarding:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNICAL_SCALING_ROADMAP.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-slate-200 p-6 rounded-xs shadow-xs space-y-3 relative hover:border-blue-900 transition-colors"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400">
                  ASSET ONBOARDING #{idx + 1}
                </span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-900 text-xs font-mono-tech font-bold rounded-xs">
                  {item.targetAllocation}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {item.assetPipeline}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.targetObjective}
              </p>
            </div>
          ))}
        </div>

        {/* MD Statement on Co-Investment */}
        <div className="bg-slate-900 text-white p-6 rounded-xs border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono-tech text-sky-400 uppercase tracking-widest block">
              OEM PARTNERSHIP MANDATE
            </span>
            <p className="text-xs text-slate-200 italic max-w-2xl leading-relaxed">
              &ldquo;We are structurally prepared to co-invest, construct tailored jig work-holding setups, design custom robotic inspection fixtures, and deploy dedicated quality cells matching the Customer Specific Requirements (CSR) mandated by our OEM partners.&rdquo;
            </p>
            <div className="text-xs font-bold text-white font-mono-tech">
              — Mr. Pradyumna Prashant Bhegade, Managing Director
            </div>
          </div>

          <button
            onClick={() => {
              setCurrentPage('contact');
              window.location.hash = 'contact';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0 cursor-pointer"
          >
            Discuss Manufacturing Program
          </button>
        </div>
      </section>
    </div>
  );
};
