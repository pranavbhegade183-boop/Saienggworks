import React from 'react';
import { X, FileText, CheckCircle2, ShieldCheck, Printer, ShoppingCart } from 'lucide-react';
import { Product, COMPANY_DETAILS } from '../data/companyData';

interface DatasheetModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToRfq: (product: Product) => void;
  isInRfq: boolean;
}

export const DatasheetModal: React.FC<DatasheetModalProps> = ({
  product,
  onClose,
  onAddToRfq,
  isInRfq,
}) => {
  if (!product) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-sm shadow-2xl border border-slate-300 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Engineering Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-950 border border-sky-400/30 rounded-xs">
              <FileText className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-sky-400">
                  Engineering Component Datasheet
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-[10px] font-mono-tech text-slate-400">
                  REF: SEW-{product.id.substring(0, 8).toUpperCase()}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {product.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Top overview & preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-slate-50 p-4 border border-slate-200 rounded-xs">
            <div className="md:col-span-1 bg-white p-2 border border-slate-200 rounded-xs flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-48 w-full object-contain rounded-xs"
              />
            </div>
            <div className="md:col-span-2 space-y-3">
              <div className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-900 text-[11px] font-mono-tech font-bold uppercase rounded-xs">
                {product.categoryLabel}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {product.fullDesc}
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech pt-2 border-t border-slate-200">
                <div>
                  <span className="text-slate-400 block text-[10px]">TIGHTEST TOLERANCE</span>
                  <span className="font-semibold text-slate-800">{product.tolerances}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">QUALITY CERTIFICATION</span>
                  <span className="font-semibold text-emerald-700">ISO 9001:2008 / AITF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 flex items-center gap-2">
              <span>Technical Dimensions &amp; Operational Spectrum</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs">
                <span className="text-slate-500 font-mono-tech text-[10px] uppercase block">Dimensional Span</span>
                <span className="font-semibold text-slate-800">{product.dimensions}</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs">
                <span className="text-slate-500 font-mono-tech text-[10px] uppercase block">Thread / Port Standard</span>
                <span className="font-semibold text-slate-800">{product.specifications}</span>
              </div>
            </div>
          </div>

          {/* Material & Surface Chemistry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Approved Raw Material Grades
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {product.materials.map((mat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0"></div>
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Protective Surface Treatments
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {product.surfaceFinish.map((finish, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full shrink-0"></div>
                    <span>{finish}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Manufacturing &amp; Validation Disciplines
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 p-2 bg-slate-50 border border-slate-100 rounded-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Application Areas */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Typical Tier-1 &amp; OEM Applications
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs rounded-xs font-mono-tech"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Plant & Quality Validation Note */}
          <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-xs text-xs flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-[11px] leading-relaxed">
              <span className="font-bold">OEM Customization Guarantee:</span> Sai Engineering Works constructs tailored jig work-holding setups and dedicated cellular manufacturing rows for custom customer specifications. MTC 3.1 chemical &amp; physical certificates accompanied with every batch.
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="bg-slate-100 px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200">
          <div className="text-[11px] font-mono-tech text-slate-500">
            Plant: Chikhali, Pune, MH, India · GSTIN: {COMPANY_DETAILS.logistics.gstNo}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xs text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print Specification</span>
            </button>

            <button
              onClick={() => onAddToRfq(product)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs ${
                isInRfq
                  ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                  : 'bg-blue-950 hover:bg-blue-900 text-white'
              }`}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>{isInRfq ? 'In RFQ Basket (Added)' : 'Add to RFQ Quote'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
