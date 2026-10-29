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
  Layers, 
  Crosshair,
  Flame,
  Zap,
  Microscope,
  ArrowUpRight,
  Boxes
} from 'lucide-react';
import { 
  COMPANY_DETAILS, 
  PRODUCTS, 
  ENGINEERING_APPLICATIONS, 
  Product 
} from '../data/companyData';
import { MechanicalVisual } from '../components/MechanicalVisual';
import { RevealSection } from '../components/RevealSection';

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
    <div className="space-y-24 pb-20 bg-slate-950 text-slate-100">
      {/* ============================================================== */}
      {/* SECTION A: CINEMATIC HERO                                      */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/80 bg-machined-slate">
        {/* Subtle engineering grid & blueprint lines */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />
        
        {/* Soft radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Focused, Punchy Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Technical Precision Kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/90 border border-cyan-500/30 rounded-xs text-xs font-mono-tech text-cyan-400 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="tracking-widest uppercase">PRECISION ENGINEERING · EST. 2010</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-300">PUNE, INDIA</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight font-sans">
                Engineered for Precision. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-white">
                  Built for Performance.
                </span>
              </h1>

              {/* Concise Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Precision-forged and CNC-machined components for hydraulic, pneumatic, automotive, and industrial applications.
              </p>

              {/* Key Technical Badges (Unboxed & Clean) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono-tech text-slate-400 pt-1">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  10-Micron Tolerances
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  14 CNC Turning Centers
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Integrated Hot Forging
                </span>
              </div>

              {/* Two Prominent CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => navigateTo('capabilities')}
                  className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xs transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigateTo('contact')}
                  className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-400/60 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Request a Quote</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>

                <a
                  href={COMPANY_DETAILS.corporateProfilePdfUrl}
                  download="Sai_Engineering_Works_Corporate_Profile.pdf"
                  className="w-full sm:w-auto text-center text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1.5 font-mono-tech transition-colors py-2"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download Profile (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual with Animated Mechanical Engine */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-slate-900/60 border border-slate-800 rounded-xs p-2 sm:p-4 backdrop-blur-md shadow-2xl">
                <MechanicalVisual />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION B: ANIMATED ENGINEERING VISUAL & DUAL CAPABILITY      */}
      {/* ============================================================== */}
      <RevealSection as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-xs p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 font-bold block">
                INTEGRATED METALLURGICAL CAPABILITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Raw Hot Forging &amp; Multi-Axis CNC Machining Under One Roof
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                By uniting on-site hot forging presses with secondary multi-axis CNC turn-mill lines, Sai Engineering Works controls grain-flow orientation throughout the raw component matrix, eliminating internal micro-voids and maximizing fatigue resistance.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xs space-y-1">
                <span className="text-[10px] font-mono-tech text-cyan-400 uppercase block">GRAIN ORIENTATION</span>
                <span className="text-xs font-bold text-white block">Structural Integrity Guaranteed</span>
                <p className="text-[11px] text-slate-400">Eliminates micro-cracks under severe hydraulic cycling.</p>
              </div>

              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xs space-y-1">
                <span className="text-[10px] font-mono-tech text-emerald-400 uppercase block">LEAN PRODUCTION</span>
                <span className="text-xs font-bold text-white block">KAN-BAN &amp; JIT Pull Loops</span>
                <p className="text-[11px] text-slate-400">Continuous buffer stock management for zero downtime.</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ============================================================== */}
      {/* SECTION C: MANUFACTURING IN MOTION                             */}
      {/* ============================================================== */}
      <RevealSection as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 font-bold block">
              MANUFACTURING IN MOTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Shop Floor Process Disciplines
            </h2>
          </div>
          <button
            onClick={() => navigateTo('capabilities')}
            className="text-xs font-mono-tech text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>View Full 101-Unit Machine Schedule</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Image-Led Capability Cards with authentic photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-xs overflow-hidden group hover:border-cyan-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="relative h-48 bg-slate-950 p-4 flex items-center justify-center border-b border-slate-800/80 overflow-hidden">
                <img
                  src="/assets/products/banjo_fittings_6_80mm.png"
                  alt="CNC Turning and Precision Machining"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-slate-900/90 text-cyan-400 text-[10px] font-mono-tech uppercase rounded-xs border border-slate-800">
                  14 CNC CENTERS
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  CNC Turning &amp; Precision Machining
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Multi-axis precision turning holding tight 10-micron tolerance thresholds for critical sealing faces.
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 pt-0">
              <span className="text-[10px] font-mono-tech text-slate-500">ACCURACY: ±0.010 MM</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-xs overflow-hidden group hover:border-cyan-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="relative h-48 bg-slate-950 p-4 flex items-center justify-center border-b border-slate-800/80 overflow-hidden">
                <img
                  src="/assets/products/bearing_cover_tail_lamp.png"
                  alt="VMC Machining"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-slate-900/90 text-cyan-400 text-[10px] font-mono-tech uppercase rounded-xs border border-slate-800">
                  FACE PROFILING
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  VMC Machining
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Vertical machining centre dedicated to close-tolerance face profiling, boring, and pocket milling.
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 pt-0">
              <span className="text-[10px] font-mono-tech text-slate-500">PLANAR: &lt; 0.05 MM</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-xs overflow-hidden group hover:border-cyan-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="relative h-48 bg-slate-950 p-4 flex items-center justify-center border-b border-slate-800/80 overflow-hidden">
                <img
                  src="/assets/products/flanges_clamps_pins.png"
                  alt="Hot Forging and Press Operations"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-slate-900/90 text-cyan-400 text-[10px] font-mono-tech uppercase rounded-xs border border-slate-800">
                  30T TO 250T
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Hot Forging &amp; Press Operations
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Six mechanical presses managing heavy blanking, stamping, and grain-aligned hot forging blanks.
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 pt-0">
              <span className="text-[10px] font-mono-tech text-slate-500">PRESS FLEET: 6 LINES</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-900 border border-slate-800 rounded-xs overflow-hidden group hover:border-cyan-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="relative h-48 bg-slate-950 p-4 flex items-center justify-center border-b border-slate-800/80 overflow-hidden">
                <img
                  src="/assets/products/t_connectors_dko.png"
                  alt="Induction Brazing and Component Processing"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-slate-900/90 text-cyan-400 text-[10px] font-mono-tech uppercase rounded-xs border border-slate-800">
                  10 KVT INDUCTION
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Induction Brazing &amp; Component Processing
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  High-frequency induction brazing processing fluid couplers from 2mm to 50mm with zero oxide slag.
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 pt-0">
              <span className="text-[10px] font-mono-tech text-slate-500">SPAN: 2MM TO 50MM</span>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ============================================================== */}
      {/* SECTION D: PRODUCT SHOWCASE                                    */}
      {/* ============================================================== */}
      <RevealSection as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 font-bold block">
              PRECISION COMPONENT SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Engineered Component Portfolio
            </h2>
          </div>

          <button
            onClick={() => navigateTo('products')}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
          >
            <span>View Full 9-Line Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Compact Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => {
            const isInRfq = rfqItems.some((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="bg-slate-900 border border-slate-800 rounded-xs overflow-hidden shadow-md hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 bg-slate-950 p-4 flex items-center justify-center border-b border-slate-800/80 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-slate-900/90 text-slate-300 border border-slate-800 text-[10px] font-mono-tech uppercase rounded-xs">
                      {product.categoryLabel.split(' ')[0]}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    <div className="pt-2 text-[11px] font-mono-tech text-slate-400 space-y-1">
                      <div>
                        <span className="text-slate-500">SPECS: </span>
                        <span className="text-slate-300">{product.dimensions}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">TOLERANCE: </span>
                        <span className="text-cyan-400 font-semibold">{product.tolerances}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => onOpenDatasheet(product)}
                    className="flex-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xs transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Datasheet</span>
                  </button>

                  <button
                    onClick={() => onAddToRfq(product)}
                    className={`py-2 px-3 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-1 ${
                      isInRfq
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                        : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold'
                    }`}
                  >
                    <span>{isInRfq ? 'In RFQ' : '+ RFQ'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </RevealSection>

      {/* ============================================================== */}
      {/* SECTION E: ENGINEERING APPLICATIONS (Strictly Anonymous)       */}
      {/* ============================================================== */}
      <RevealSection as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 font-bold block">
            ENGINEERING APPLICATIONS &amp; APPLICATION EXPERTISE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Precision Component Solutions Across Demanding Sectors
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Supplying safety-critical fluid dynamic, structural, and mechanical powertrain components under strict zero-defect thresholds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ENGINEERING_APPLICATIONS.slice(0, 6).map((app, idx) => (
            <div
              key={app.id || idx}
              className="bg-slate-900 border border-slate-800 rounded-xs p-5 space-y-3 hover:border-cyan-500/50 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-cyan-400">
                  <span>APPLICATION #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  <span className="text-slate-500">{app.category}</span>
                </div>
                <h3 className="text-sm font-bold text-white">
                  {app.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {app.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <div className="flex flex-wrap gap-1">
                  {app.keyComponents.slice(0, 3).map((comp, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-1.5 py-0.5 bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-mono-tech rounded-xs"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* ============================================================== */}
      {/* SECTION F: CAPABILITIES AT A GLANCE (Verified Facts Only)      */}
      {/* ============================================================== */}
      <RevealSection as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xs p-6 sm:p-8">
          <div className="border-b border-slate-800 pb-3 mb-6">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 font-bold block">
              CAPABILITIES AT A GLANCE
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Verified Production &amp; Facility Metrics
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xs">
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">Established</span>
              <div className="text-2xl font-black text-white mt-0.5">2010</div>
              <span className="text-[11px] text-slate-400">16-Year Track Record</span>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xs">
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">CNC Turning Centers</span>
              <div className="text-2xl font-black text-cyan-400 mt-0.5">14</div>
              <span className="text-[11px] text-slate-400">Multi-axis lines</span>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xs">
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">Mechanical Presses</span>
              <div className="text-2xl font-black text-white mt-0.5">6</div>
              <span className="text-[11px] text-slate-400">30T to 250T array</span>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xs">
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">Workforce</span>
              <div className="text-2xl font-black text-white mt-0.5">~60</div>
              <span className="text-[11px] text-slate-400">Skilled specialists</span>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xs">
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">Calibrated Gauges</span>
              <div className="text-2xl font-black text-cyan-400 mt-0.5">349</div>
              <span className="text-[11px] text-slate-400">Metrology clean-lab</span>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xs">
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase block">FY 25–26 Turnover</span>
              <div className="text-2xl font-black text-amber-400 mt-0.5">₹8.50 Cr</div>
              <span className="text-[11px] text-slate-400">Audited baseline</span>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ============================================================== */}
      {/* SECTION G: QUALITY & FINAL CALL TO ACTION                      */}
      {/* ============================================================== */}
      <RevealSection as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-2 border-cyan-500/30 rounded-xs p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-cyan-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>CLIMATE-CONTROLLED METROLOGY &amp; VALIDATION</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                LOOKING FOR A RELIABLE PRECISION MANUFACTURING PARTNER?
              </h2>

              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Operating a temperature-controlled metrology laboratory with Mitutoyo optical profile projection, Unimet 1-micron air gauging, and 349 calibrated thread and plug gauges. Full heat-number traceability with MTC 3.1 certification.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono-tech text-slate-400">
                <span>· 10-Micron Repeatability</span>
                <span>· Mitutoyo Optical Projector</span>
                <span>· 1-Micron Air Gauging</span>
                <span>· 100% Thread Gauging</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 items-center lg:items-end">
              <button
                onClick={() => navigateTo('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-extrabold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xl shadow-cyan-400/20 cursor-pointer"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href={COMPANY_DETAILS.corporateProfilePdfUrl}
                download="Sai_Engineering_Works_Corporate_Profile.pdf"
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 font-mono-tech transition-colors py-1 underline underline-offset-4"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Corporate Profile (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
};
