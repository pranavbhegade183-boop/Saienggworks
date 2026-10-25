import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  FileText, 
  ShoppingCart, 
  CheckCircle2, 
  Download, 
  Layers, 
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS, Product, COMPANY_DETAILS } from '../data/companyData';

interface ProductsPageProps {
  onOpenDatasheet: (product: Product) => void;
  onAddToRfq: (product: Product) => void;
  rfqItems: Product[];
  setIsRfqModalOpen: (open: boolean) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenDatasheet,
  onAddToRfq,
  rfqItems,
  setIsRfqModalOpen,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Products (9 Lines)' },
    { id: 'fluid_pressure', label: 'Fluid & Pressure Systems' },
    { id: 'structural_hardware', label: 'Structural Hardware & Companions' },
    { id: 'mounting_brackets', label: 'Mounting & Bracket Systems' },
    { id: 'control_linkages', label: 'Control Linkages & Safety Blocks' },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesQuery = 
      p.name.toLowerCase().includes(query) ||
      p.shortDesc.toLowerCase().includes(query) ||
      p.specifications.toLowerCase().includes(query) ||
      p.materials.some(m => m.toLowerCase().includes(query));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-sky-400 uppercase tracking-widest">
            <span>MANUFACTURING SCOPE · SECTION 3 &amp; 8</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Precision Component Portfolio
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            High-durability hydraulic fittings, heavy structural couplings, and exact-tolerance hardware components engineered to operate reliably under intensive cyclic stress, mechanical loads, and extreme fluid pressures.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={COMPANY_DETAILS.corporateProfilePdfUrl}
              download="Sai_Engineering_Works_Corporate_Profile.pdf"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono-tech rounded-xs transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Download Official 10-Page Catalog (PDF)</span>
            </a>

            <button
              onClick={() => setIsRfqModalOpen(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono-tech font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Open RFQ Cart ({rfqItems.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Filters & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 p-4 rounded-xs shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search specs, materials (EN1A, Banjo, OD)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-xs bg-slate-50 focus:bg-white focus:outline-hidden focus:border-blue-900"
              />
            </div>

            {/* Total Results Counter */}
            <div className="text-xs font-mono-tech text-slate-500 self-end md:self-auto">
              Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> of {PRODUCTS.length} Component Categories
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-950 text-white font-bold'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Product Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center bg-white border border-slate-200 rounded-xs space-y-3">
            <SlidersHorizontal className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No matching components found</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Try adjusting your search criteria, or contact our engineering desk directly with your custom drawing or STEP file.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xs mt-2 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isInRfq = rfqItems.some((item) => item.id === product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white border border-slate-200 rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative h-56 bg-slate-100 p-4 flex items-center justify-center border-b border-slate-200 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 px-2.5 py-0.5 bg-slate-900/90 text-white text-[10px] font-mono-tech uppercase rounded-xs">
                        {product.categoryLabel}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 space-y-3">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {product.fullDesc}
                      </p>

                      {/* Specifications Summary */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs font-mono-tech">
                        <div>
                          <span className="text-slate-400 text-[10px] block uppercase">Standard / Dimension Span</span>
                          <span className="text-slate-800 font-semibold">{product.dimensions}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[10px] block uppercase">Port / Thread Spec</span>
                          <span className="text-slate-800">{product.specifications}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[10px] block uppercase">Tightest Tolerance</span>
                          <span className="text-emerald-700 font-semibold">{product.tolerances}</span>
                        </div>
                      </div>

                      {/* Materials List */}
                      <div className="pt-2">
                        <span className="text-slate-400 text-[10px] font-mono-tech uppercase block mb-1">
                          Approved Materials
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {product.materials.slice(0, 3).map((mat, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] rounded-xs font-mono-tech"
                            >
                              {mat}
                            </span>
                          ))}
                          {product.materials.length > 3 && (
                            <span className="text-[10px] text-slate-400 font-mono-tech">
                              +{product.materials.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onOpenDatasheet(product)}
                      className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-500" />
                      <span>View Datasheet</span>
                    </button>

                    <button
                      onClick={() => onAddToRfq(product)}
                      className={`py-2 px-4 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                        isInRfq
                          ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                          : 'bg-blue-950 hover:bg-blue-900 text-white'
                      }`}
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>{isInRfq ? 'In RFQ' : '+ RFQ'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. Custom Component Engineering Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white p-8 rounded-xs border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono-tech text-sky-400 uppercase tracking-widest block">
              Tailored Tooling &amp; Custom Turn-Mill Geometry
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Require a Custom Banjo Fitting, Flange, or Stamped Bracket?
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              We engineer custom multi-axis tooling, forged blank dies, and SPM fixtures to match customer specific requirements (CSR). Upload your 2D/3D CAD drawing to receive a DFM feedback report.
            </p>
          </div>
          <button
            onClick={() => setIsRfqModalOpen(true)}
            className="px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0 cursor-pointer"
          >
            Submit Custom CAD Drawing
          </button>
        </div>
      </section>
    </div>
  );
};
