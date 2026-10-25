import React, { useState } from 'react';
import { 
  X, 
  ShoppingCart, 
  Trash2, 
  Send, 
  CheckCircle2, 
  FileUp, 
  AlertCircle, 
  Phone, 
  Mail, 
  ShieldCheck,
  Building,
  Globe,
  User,
  Hash
} from 'lucide-react';
import { Product, COMPANY_DETAILS } from '../data/companyData';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  rfqItems: Product[];
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
}

const INDUSTRIAL_COUNTRIES = [
  "India",
  "Germany",
  "United States",
  "United Kingdom",
  "Italy",
  "Japan",
  "France",
  "Mexico",
  "Canada",
  "South Korea",
  "Brazil",
  "Spain",
  "Sweden",
  "Netherlands",
  "Poland",
  "Turkey",
  "United Arab Emirates",
  "Australia",
  "Czech Republic",
  "Singapore",
  "Other International"
];

export const RFQModal: React.FC<RFQModalProps> = ({
  isOpen,
  onClose,
  rfqItems,
  onRemoveItem,
  onClearAll,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    country: 'Germany',
    businessEmail: '',
    phone: '',
    orderQuantity: '10,000 to 50,000 pcs / Year (KAN-BAN)',
    materialGrade: 'As per OEM Drawing standard',
    targetTolerance: '10-Micron (±0.010 mm)',
    notes: '',
  });

  const [quantities, setQuantities] = useState<Record<string, string>>({});
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfqRef, setSubmittedRfqRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleQuantityChange = (productId: string, val: string) => {
    setQuantities(prev => ({ ...prev, [productId]: val }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate RFQ reference ID
    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const rfqId = `SEW-RFQ-2026-${randomSuffix}`;
      setSubmittedRfqRef(rfqId);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedRfqRef(null);
    onClearAll();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-xs shadow-2xl border border-slate-300 overflow-hidden my-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-950 border border-sky-400/40 rounded-xs">
              <ShoppingCart className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="text-[10px] font-mono-tech uppercase tracking-widest text-sky-400">
                Official OEM Procurement Gateway
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Request For Quotation (RFQ)
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submittedRfqRef ? (
          /* Submission Success State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-700 font-bold block">
                RFQ Successfully Transmitted
              </span>
              <h2 className="text-2xl font-black text-slate-900">
                Thank you, {formData.fullName || "Partner"}
              </h2>
              <p className="text-xs text-slate-600 max-w-lg mx-auto">
                Your request has been logged into our engineering dispatch desk at Chikhali, Pune. Our technical costing team will evaluate your tolerances, drawings, and annual batch quantities within 24 business hours.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xs max-w-md mx-auto text-left space-y-2 text-xs font-mono-tech">
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">RFQ REFERENCE NUMBER:</span>
                <span className="font-bold text-blue-900">{submittedRfqRef}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">BUYER COMPANY:</span>
                <span className="font-semibold text-slate-800">{formData.companyName || "OEM Partner"}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">TARGET COUNTRY:</span>
                <span className="font-semibold text-slate-800">{formData.country}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">COMPONENTS INCLUDED:</span>
                <span className="font-semibold text-slate-800">
                  {rfqItems.length > 0 ? `${rfqItems.length} Part Lines` : "Custom Engineering Program"}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/919637929911?text=${encodeURIComponent(`Hello Sai Engineering Works, I submitted RFQ #${submittedRfqRef} from ${formData.companyName || 'our company'}. Looking forward to discussing technical feasibility.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xs text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Follow Up on WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xs text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close &amp; Return to Catalog
              </button>
            </div>
          </div>
        ) : (
          /* Form & Basket Items */
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row">
            {/* Left: Selected Parts List */}
            <div className="w-full lg:w-5/12 bg-slate-50 p-6 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-4 max-h-[75vh] overflow-y-auto">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <span>Selected Components</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-900 text-[10px] rounded-full">
                    {rfqItems.length}
                  </span>
                </h4>
                {rfqItems.length > 0 && (
                  <button
                    type="button"
                    onClick={onClearAll}
                    className="text-[11px] text-red-600 hover:text-red-700 cursor-pointer"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {rfqItems.length === 0 ? (
                <div className="p-6 text-center border-2 border-dashed border-slate-300 rounded-xs space-y-2">
                  <ShoppingCart className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-xs text-slate-600 font-medium">
                    No components selected from catalog yet.
                  </p>
                  <p className="text-[11px] text-slate-500">
                    You can still submit your custom drawings, STEP files, or Banjo / CNC requirements using this form.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {rfqItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="p-3 bg-white border border-slate-200 rounded-xs shadow-2xs space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-contain bg-slate-100 rounded-xs border border-slate-200 p-1"
                          />
                          <div>
                            <h5 className="text-xs font-bold text-slate-900 leading-tight">
                              {item.name}
                            </h5>
                            <span className="text-[10px] text-slate-500 font-mono-tech block">
                              {item.categoryLabel}
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-400 hover:text-red-600 p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono-tech">
                        <span className="text-slate-500 text-[11px]">Est. Monthly Batch:</span>
                        <input
                          type="text"
                          placeholder="e.g. 5,000 pcs"
                          value={quantities[item.id] || ''}
                          onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                          className="w-32 px-2 py-1 text-xs border border-slate-300 rounded bg-slate-50 focus:bg-white focus:outline-hidden focus:border-blue-900"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Manufacturing standard badge */}
              <div className="p-3 bg-blue-900 text-white rounded-xs space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 font-bold font-mono-tech text-sky-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sai Engineering Quality Commitment</span>
                </div>
                <p className="text-[11px] text-slate-200 leading-relaxed">
                  Every RFQ includes complete DFM (Design For Manufacturability) review, tool array planning, and CMM / profile projector inspection routing.
                </p>
              </div>
            </div>

            {/* Right: Buyer Profile & RFQ Form */}
            <div className="w-full lg:w-7/12 p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div className="border-b border-slate-200 pb-2">
                <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-900">
                  Buyer Information &amp; Technical Parameters
                </h4>
                <p className="text-xs text-slate-500">
                  Please provide your business coordinates so our technical director can reply with formal commercial and tooling estimates.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Contact Person Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Engineering Head"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Company / Organization <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. OEM Automotive Corp"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="purchasing@company.com"
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp (with Country Code) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+49 151 23456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Country / Target Delivery Destination <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                    >
                      {INDUSTRIAL_COUNTRIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Target Annual Quantity / Delivery Type
                  </label>
                  <select
                    value={formData.orderQuantity}
                    onChange={(e) => setFormData({ ...formData, orderQuantity: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                  >
                    <option value="Prototyping / First-Article Inspection">Prototyping / First-Article Inspection</option>
                    <option value="1,000 to 10,000 pcs / Year">1,000 to 10,000 pcs / Year</option>
                    <option value="10,000 to 50,000 pcs / Year (KAN-BAN)">10,000 to 50,000 pcs / Year (KAN-BAN)</option>
                    <option value="50,000+ pcs / Year (Dedicated Cellular Line)">50,000+ pcs / Year (Dedicated Cellular Line)</option>
                  </select>
                </div>
              </div>

              {/* Technical Drawing Upload */}
              <div className="text-xs">
                <label className="block font-semibold text-slate-700 mb-1">
                  Upload 2D / 3D CAD Drawing (PDF, STEP, IGES, DXF)
                </label>
                <div className="border border-dashed border-slate-300 rounded p-3 bg-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileUp className="w-5 h-5 text-blue-900" />
                    <div>
                      <p className="text-xs font-semibold text-slate-800">
                        {uploadedFileName ? uploadedFileName : "Attach Engineering Drawings or Specs"}
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Accepts .pdf, .step, .stp, .iges, .dwg, .dxf (up to 25MB)
                      </p>
                    </div>
                  </div>
                  <label className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded text-xs font-semibold cursor-pointer">
                    Browse
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      accept=".pdf,.step,.stp,.iges,.igs,.dwg,.dxf,.png,.jpg,.jpeg"
                    />
                  </label>
                </div>
              </div>

              {/* Scope Notes */}
              <div className="text-xs">
                <label className="block font-semibold text-slate-700 mb-1">
                  Technical Specifications, Raw Material Grades &amp; Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Specify material (e.g. EN1A, 20MnCr5, SS316), surface plating (Zn-Ni, Trivalent Zinc), thread specs, or testing criteria..."
                  className="w-full px-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Protected by Non-Disclosure (NDA) Protocol</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white rounded-xs text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-sky-400" />
                        <span>Transmit RFQ to Engineering Desk</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
