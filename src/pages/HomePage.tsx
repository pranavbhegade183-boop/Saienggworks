import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Settings, 
  FileText, 
  Compass, 
  CheckCircle2, 
  ChevronRight, 
  TrendingUp, 
  Building2, 
  Layers, 
  Crosshair,
  ExternalLink
} from 'lucide-react';
import { 
  COMPANY_DETAILS, 
  PRODUCTS, 
  TIER1_OEM_PARTNERS, 
  Product 
} from '../data/companyData';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  onOpenDatasheet: (product: Product) => void;
  onAddToRfq: (product: Product) => void;
  rfqItems: Product[];
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  onOpenDatasheet,
  onAddToRfq,
  rfqItems,
}) => {
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800 pt-12 pb-20 lg:py-24">
        {/* Engineering blueprint grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none"></div>

        {/* Ambient radial lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 7 Cols: Headline & Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Technical Kicker */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-slate-900 border border-slate-700/80 rounded-xs text-xs font-mono-tech text-sky-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>PUNE MANUFACTURING CLUSTER · EST. 2010</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-300">ISO 9001:2008 CERTIFIED</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                High-Precision Forging &amp; CNC Machining for Global <span className="text-sky-400">Tier-1 &amp; OEM</span> Programs
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Sai Engineering Works manufactures safety-critical hydraulic fittings, high-pressure banjo connectors, structural flanges, and precision turned components engineered to 10-micron tolerances in Pune, India.
              </p>

              {/* Key Competence Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono-tech text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Integrated Raw Forging + CNC Turn-Mill</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>14 CNC Centers &amp; 34 Automat Lines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>349 Calibrated Gauges &amp; Mitutoyo Optics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Proven KAN-BAN &amp; JIT Delivery Framework</span>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => navigateTo('contact')}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer"
                >
                  <span>Request an OEM Quote (RFQ)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigateTo('products')}
                  className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold rounded-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore 9 Component Lines</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <a
                  href={COMPANY_DETAILS.corporateProfilePdfUrl}
                  download="Sai_Engineering_Works_Corporate_Profile.pdf"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 underline underline-offset-4 font-mono-tech transition-colors py-2"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download Corporate Profile (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right 5 Cols: Mechanical Technical Specification Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-slate-900/90 border-2 border-slate-700/80 rounded-xs p-6 shadow-2xl backdrop-blur-md">
                {/* Engineering corner drafting markers */}
                <div className="absolute top-2 left-2 text-[10px] font-mono-tech text-slate-600">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono-tech text-slate-600">+</div>
                <div className="absolute bottom-2 left-2 text-[10px] font-mono-tech text-slate-600">+</div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono-tech text-slate-600">+</div>

                <div className="border-b border-slate-800 pb-4 mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase text-sky-400 block tracking-widest">
                      PLANT METRICS &amp; CAPABILITY PROFILE
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      M/S. Sai Engineering Works
                    </h3>
                  </div>
                  <div className="px-2 py-1 bg-blue-950 border border-sky-400/30 text-sky-400 text-[10px] font-mono-tech rounded-xs">
                    ACTIVE 2026
                  </div>
                </div>

                {/* Tech Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-xs font-mono-tech">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xs">
                    <span className="text-slate-400 text-[10px] block">OPERATING TRACK RECORD</span>
                    <span className="text-xl font-bold text-white">16 Yrs</span>
                    <span className="text-[10px] text-slate-500 block">Established 2010</span>
                  </div>

                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xs">
                    <span className="text-slate-400 text-[10px] block">ANNUAL TURNOVER</span>
                    <span className="text-xl font-bold text-amber-400">₹8.50 Cr</span>
                    <span className="text-[10px] text-slate-500 block">FY 2025–26 Baseline</span>
                  </div>

                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xs">
                    <span className="text-slate-400 text-[10px] block">CNC TURNING FLEET</span>
                    <span className="text-xl font-bold text-sky-400">14 Units</span>
                    <span className="text-[10px] text-slate-500 block">Multi-axis centers</span>
                  </div>

                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xs">
                    <span className="text-slate-400 text-[10px] block">TIGHTEST TOLERANCE</span>
                    <span className="text-xl font-bold text-emerald-400">10-Micron</span>
                    <span className="text-[10px] text-slate-500 block">±0.010 mm verifiable</span>
                  </div>
                </div>

                {/* Machinery & Team Row */}
                <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xs space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Total Machinery &amp; Lines on Floor:</span>
                    <span className="font-bold font-mono-tech text-white">101 Units</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Calibrated Inspection Gauges:</span>
                    <span className="font-bold font-mono-tech text-white">349 Gauges</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Technical Engineering Workforce:</span>
                    <span className="font-bold font-mono-tech text-white">60 Professionals</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Anchor Supply Relationships:</span>
                    <span className="font-bold font-mono-tech text-sky-400">19 Tier-1 / OEMs</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
                  <span>FACILITY: CHIKHALI, PUNE, MH</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    CAPACITY READY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDENTIALS & METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 bg-white p-4 sm:p-6 border border-slate-200 rounded-xs shadow-md">
          <div className="p-3 border-r border-slate-100 last:border-none">
            <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">Operating Track Record</span>
            <div className="text-2xl font-black text-slate-900 mt-1">16 Yrs</div>
            <span className="text-[11px] text-slate-500">Established 2010</span>
          </div>

          <div className="p-3 border-r border-slate-100 last:border-none">
            <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">Engineering Workforce</span>
            <div className="text-2xl font-black text-slate-900 mt-1">60</div>
            <span className="text-[11px] text-slate-500">Skilled operators</span>
          </div>

          <div className="p-3 border-r border-slate-100 last:border-none">
            <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">CNC Turning Centers</span>
            <div className="text-2xl font-black text-blue-900 mt-1">14</div>
            <span className="text-[11px] text-slate-500">Multi-axis lines</span>
          </div>

          <div className="p-3 border-r border-slate-100 last:border-none">
            <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">Shop Floor Assets</span>
            <div className="text-2xl font-black text-slate-900 mt-1">101</div>
            <span className="text-[11px] text-slate-500">Machines on floor</span>
          </div>

          <div className="p-3 border-r border-slate-100 last:border-none">
            <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">Calibrated Gauges</span>
            <div className="text-2xl font-black text-emerald-700 mt-1">349</div>
            <span className="text-[11px] text-slate-500">Metrology clean-lab</span>
          </div>

          <div className="p-3">
            <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">FY 25–26 Turnover</span>
            <div className="text-2xl font-black text-amber-600 mt-1">₹8.5 Cr</div>
            <span className="text-[11px] text-slate-500">2.7× Growth</span>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATED DUAL CAPABILITY SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 rounded-xs text-white p-8 lg:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-grid-pattern-dark opacity-20 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-sky-400 uppercase tracking-widest">
                <Crosshair className="w-4 h-4 text-sky-400" />
                <span>Proprietary Manufacturing Metallurgy</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Integrated Dual Capability: Raw Hot Forging &amp; Precision CNC Machining
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Unlike job shops that turn off-the-shelf bars or rely on sub-contracted forging, Sai Engineering Works unites on-site hot forging capabilities directly with secondary multi-axis CNC turn-mill execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xs space-y-1">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    Continuous Grain-Flow Orientation
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Internal mechanical grain flow follows the component contour, giving Banjo fittings and high-stress flanges unmatched fatigue resistance.
                  </p>
                </div>

                <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xs space-y-1">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Zero Internal Stresses &amp; Voids
                  </h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Eliminates micro-porosity and internal casting defects — a non-negotiable benchmark when anchoring companion hardware to heavy cast structures.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-xs space-y-3">
                <span className="text-[10px] font-mono-tech text-sky-400 uppercase tracking-wider block">
                  LEAN EXECUTION HIGHLIGHT
                </span>
                <h4 className="text-sm font-bold text-white">
                  KAN-BAN &amp; JIT Delivery Setup
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fully operational pull pipelines deployed across long-term supply schedules with Norma Group India, guaranteeing buffer stock security and zero production stoppages.
                </p>
                <button
                  onClick={() => navigateTo('capabilities')}
                  className="text-xs font-mono-tech text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors pt-1 cursor-pointer"
                >
                  <span>View Full Machinery Inventory (12 lines)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono-tech uppercase tracking-wider text-blue-900 font-bold block">
              Precision Manufactured Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Components &amp; Fluid Dynamics
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              Engineered to operate reliably under intensive cyclic stress, mechanical shock loads, and high fluid pressure regimes.
            </p>
          </div>

          <button
            onClick={() => navigateTo('products')}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-blue-950 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => {
            const isInRfq = rfqItems.some((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="bg-white border border-slate-200 rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-52 bg-slate-100 p-4 flex items-center justify-center border-b border-slate-200 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-slate-900/80 text-white text-[10px] font-mono-tech uppercase rounded-xs">
                      {product.categoryLabel.split(' ')[0]}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px] font-mono-tech text-slate-600">
                      <div>
                        <span className="text-slate-400">SPECS: </span>
                        <span className="text-slate-800">{product.specifications}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">TOLERANCE: </span>
                        <span className="text-emerald-700 font-semibold">{product.tolerances}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 pt-0 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenDatasheet(product)}
                    className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xs transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    <span>Datasheet</span>
                  </button>

                  <button
                    onClick={() => onAddToRfq(product)}
                    className={`py-2 px-3 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-1 ${
                      isInRfq
                        ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                        : 'bg-blue-950 hover:bg-blue-900 text-white'
                    }`}
                  >
                    <span>{isInRfq ? 'In RFQ' : '+ Add RFQ'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. PRODUCTION ZONING & TRACEABILITY */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-blue-900 font-bold block">
              Plant Discipline &amp; Mistake-Proofing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              7-Stage Production Zoning &amp; Heat Traceability
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              The plant layout operates under strict structural segregation to secure mistake-proof material flow lines, total heat traceability, and stop material cross-contamination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xs space-y-2 shadow-2xs">
              <span className="text-xs font-mono-tech font-bold text-sky-600 block">01 / RECEIVING</span>
              <h4 className="text-sm font-bold text-slate-900">Raw Material Grade Quarantine</h4>
              <p className="text-xs text-slate-600">
                Spectrometer grade check, chemical validation, heat number logging, and segregated storage bins.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xs space-y-2 shadow-2xs">
              <span className="text-xs font-mono-tech font-bold text-sky-600 block">02 / TURNING</span>
              <h4 className="text-sm font-bold text-slate-900">Multi-Axis CNC Turning Lines</h4>
              <p className="text-xs text-slate-600">
                14 precision CNC centers executing complex geometries holding 10-micron tolerance thresholds.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xs space-y-2 shadow-2xs">
              <span className="text-xs font-mono-tech font-bold text-sky-600 block">03 / FORMING</span>
              <h4 className="text-sm font-bold text-slate-900">Automat &amp; Induction Brazing</h4>
              <p className="text-xs text-slate-600">
                Automated bar feed up to 60mm diameter and 10 KVT high-frequency induction brazing with zero slag.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xs space-y-2 shadow-2xs">
              <span className="text-xs font-mono-tech font-bold text-sky-600 block">04 / METROLOGY</span>
              <h4 className="text-sm font-bold text-slate-900">Climate-Controlled Clean-Lab</h4>
              <p className="text-xs text-slate-600">
                349 calibrated gauges, Mitutoyo profile projectors, Unimet 1-micron air gauging, and export VCI packing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUSTED OEM & TIER-1 ANCHORS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono-tech uppercase tracking-widest text-blue-900 font-bold block">
            Tier-1 &amp; OEM Supply Relationships
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Foremost Automotive Anchors
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Production processes and zero-defect quality thresholds are trusted under continuous delivery frameworks across India and export programs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {TIER1_OEM_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-white border border-slate-200 rounded-xs shadow-2xs flex flex-col justify-between hover:border-blue-900 transition-colors"
            >
              <div>
                <span className="text-[9px] font-mono-tech text-slate-400 uppercase tracking-widest block">
                  PARTNER #{idx + 1}
                </span>
                <h4 className="text-xs font-bold text-slate-900 mt-1">
                  {partner.name}
                </h4>
              </div>
              <span className="text-[10px] text-blue-900 font-medium mt-2 pt-2 border-t border-slate-100">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MANAGING DIRECTOR STATEMENT & CAPEX ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xs p-8 lg:p-12 text-white relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-sky-400 font-bold block">
              Executive Leadership &amp; Co-Investment Commitment
            </span>

            <blockquote className="text-lg sm:text-xl font-medium text-slate-200 italic leading-relaxed border-l-2 border-sky-400 pl-4 py-1">
              &ldquo;{COMPANY_DETAILS.logistics.managingDirector.quote}&rdquo;
            </blockquote>

            <div className="pt-2">
              <div className="text-base font-bold text-white">
                {COMPANY_DETAILS.logistics.managingDirector.name}
              </div>
              <div className="text-xs font-mono-tech text-slate-400 uppercase">
                {COMPANY_DETAILS.logistics.managingDirector.title} · M/S. Sai Engineering Works
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
