import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  FileUp, 
  ShieldCheck, 
  FileText, 
  Globe2, 
  Building, 
  MessageCircle, 
  Download,
  AlertCircle
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

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

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    country: 'Germany',
    businessEmail: '',
    phone: '',
    productCategory: 'Hydraulic & Pneumatic Banjo Fittings (6–80mm)',
    estimatedQuantity: '10,000 to 50,000 pcs / Year (KAN-BAN)',
    materialGrade: 'Low Carbon / Alloy Steel (EN1A / 20MnCr5)',
    targetTolerance: '10-Micron (±0.010 mm)',
    notes: '',
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfqRef, setSubmittedRfqRef] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const rfqId = `SEW-RFQ-2026-${randomSuffix}`;
      setSubmittedRfqRef(rfqId);
      setIsSubmitting(false);
    }, 700);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sai Engineering Works, I am contacting you regarding an RFQ for ${formData.productCategory}. My company is ${formData.companyName || 'our engineering firm'}.`
  );

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-sky-400 uppercase tracking-widest">
            <span>TECHNICAL SALES &amp; RFQ DESK · PUNE, INDIA</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Contact &amp; Request a Quotation (RFQ)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Connect with our engineering estimation desk in Chikhali, Pune. Submit your component specifications, annual volumes, or 2D/3D CAD drawings for prompt technical evaluation and commercial quotation within 24 business hours.
          </p>
        </div>
      </section>

      {/* 2. Main Two-Column Layout: Form & Coordinates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Coordinates & Factory Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-mono-tech uppercase tracking-wider text-blue-900 font-bold block">
                Factory Logistics &amp; Plant Administration
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Direct Contact Coordinates
              </h2>
            </div>

            {/* Address Card */}
            <div className="bg-white border border-slate-200 rounded-xs p-6 shadow-xs space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block text-sm">
                    Manufacturing Plant &amp; Registered Office
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {COMPANY_DETAILS.logistics.address}
                  </p>
                  <span className="text-[11px] font-mono-tech text-slate-500 block pt-1">
                    GSTIN: {COMPANY_DETAILS.logistics.gstNo} · ISO 9001:2008 Certified
                  </span>
                </div>
              </div>

              {/* Emails */}
              <div className="pt-3 border-t border-slate-100 flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div className="space-y-1.5 w-full">
                  <div>
                    <span className="font-bold text-slate-900 block">Sales &amp; Technical RFQ Desk</span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.logistics.salesEmail}`}
                      className="text-blue-900 hover:underline font-mono-tech font-bold block mt-0.5 text-xs"
                    >
                      {COMPANY_DETAILS.logistics.salesEmail}
                    </a>
                  </div>
                  <div className="pt-1 border-t border-slate-100">
                    <span className="font-bold text-slate-700 block text-[11px]">Plant Administration &amp; Quality</span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.logistics.plantEmail}`}
                      className="text-slate-600 hover:text-blue-900 font-mono-tech block mt-0.5 text-xs"
                    >
                      {COMPANY_DETAILS.logistics.plantEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="pt-3 border-t border-slate-100 flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Official Business Website</span>
                  <a
                    href={COMPANY_DETAILS.logistics.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:underline font-mono-tech font-semibold block mt-0.5 text-xs"
                  >
                    {COMPANY_DETAILS.logistics.website}
                  </a>
                  <span className="text-[11px] text-slate-500">Corporate portal &amp; technical catalog</span>
                </div>
              </div>

              {/* Telephone */}
              <div className="pt-3 border-t border-slate-100 flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">Telephone &amp; Direct Line</span>
                  <div className="space-y-1 font-mono-tech">
                    <a
                      href={`tel:${COMPANY_DETAILS.logistics.phones[0].raw}`}
                      className="text-slate-800 hover:text-blue-900 block"
                    >
                      {COMPANY_DETAILS.logistics.phones[0].name}: <span className="font-bold">{COMPANY_DETAILS.logistics.phones[0].number}</span>
                    </a>
                    <a
                      href={`tel:${COMPANY_DETAILS.logistics.phones[1].raw}`}
                      className="text-slate-800 hover:text-blue-900 block"
                    >
                      {COMPANY_DETAILS.logistics.phones[1].name}: <span className="font-bold">{COMPANY_DETAILS.logistics.phones[1].number}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-3 border-t border-slate-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Working Hours &amp; Shifts</span>
                  <p className="text-slate-600 leading-relaxed font-mono-tech text-[11px]">
                    Technical Desk: Mon – Sat, 08:30 – 18:30 IST<br />
                    Production Shop Floor: 2 Continuous Shifts
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Connect Banner */}
            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Instant OEM WhatsApp Channel</span>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Connect directly with our engineering director on WhatsApp for instant technical discussions, drawing dispatch, or plant visits.
              </p>
              <a
                href={`https://wa.me/919637929911?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xs text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Chat on WhatsApp (+91 9637929911)</span>
              </a>
            </div>

            {/* Download Profile Card */}
            <div className="bg-slate-900 text-white p-5 rounded-xs border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-mono-tech text-xs font-bold uppercase">
                <Download className="w-4 h-4 text-amber-400" />
                <span>Official Documentation</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Download the complete 10-page Corporate Profile FY 2025–26 including financial growth, 101 machines, metrology schedule, and product photographs.
              </p>
              <a
                href={COMPANY_DETAILS.corporateProfilePdfUrl}
                download="Sai_Engineering_Works_Corporate_Profile.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xs text-xs font-semibold transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Corporate Profile (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: RFQ Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-slate-200 rounded-xs p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-blue-900 font-bold block">
                  Procurement Gateway
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Request for Quotation (RFQ)
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Fill in your technical requirements below. All project inquiries are protected under mutual Non-Disclosure Agreement (NDA).
                </p>
              </div>

              {submittedRfqRef ? (
                /* Success Message */
                <div className="p-8 text-center space-y-6 bg-slate-50 border border-slate-200 rounded-xs">
                  <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-700 font-bold block">
                      Transmission Confirmed
                    </span>
                    <h4 className="text-2xl font-black text-slate-900">
                      RFQ Transmitted Successfully!
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span> ({formData.companyName}). Your quotation ticket has been assigned to our senior tooling engineer.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-4 rounded-xs max-w-sm mx-auto text-left space-y-2 text-xs font-mono-tech shadow-2xs">
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">RFQ TICKET REF:</span>
                      <span className="font-bold text-blue-900">{submittedRfqRef}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">CATEGORY:</span>
                      <span className="font-semibold text-slate-800">{formData.productCategory.split(' ')[0]}...</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">TARGET REGION:</span>
                      <span className="font-semibold text-slate-800">{formData.country}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => setSubmittedRfqRef(null)}
                      className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white rounded-xs text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Submit Another RFQ
                    </button>
                    <a
                      href={`https://wa.me/919637929911?text=${encodeURIComponent(`Hello Sai Engineering Works, I submitted RFQ #${submittedRfqRef} via the website. Looking forward to discussing details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xs text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Follow-up on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Contact Person Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Klaus Weber / Purchasing Lead"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Continental Auto Systems"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Business Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="buyer@oem-company.com"
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp (with Country Code) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+49 89 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Country / Territory <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                      >
                        {INDUSTRIAL_COUNTRIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Component Category
                      </label>
                      <select
                        value={formData.productCategory}
                        onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                      >
                        <option value="Hydraulic & Pneumatic Banjo Fittings (6–80mm)">Hydraulic &amp; Pneumatic Banjo Fittings (6–80mm)</option>
                        <option value="High-Pressure End Fittings & T-Connectors">High-Pressure End Fittings &amp; T-Connectors</option>
                        <option value="DKO Swivel Couplers & Splitters">DKO Swivel Couplers &amp; Splitters</option>
                        <option value="High-Tensile Flanges, Clamps & Pins">High-Tensile Flanges, Clamps &amp; Pins</option>
                        <option value="Precision Spacers, Rod Eyes & End Caps">Precision Spacers, Rod Eyes &amp; End Caps</option>
                        <option value="Fuel Filter Mounts, Priming Pumps & Hood Hinges">Fuel Filter Mounts, Priming Pumps &amp; Hood Hinges</option>
                        <option value="Bearing Covers, Gemi Bands & W-Brackets">Bearing Covers, Gemi Bands &amp; W-Brackets</option>
                        <option value="Locking Clips & Custom Brake Levers">Locking Clips &amp; Custom Brake Levers</option>
                        <option value="Custom CNC Machined & Forged Parts">Custom CNC Machined &amp; Forged Parts</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Estimated Batch / Annual Demand
                      </label>
                      <select
                        value={formData.estimatedQuantity}
                        onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                      >
                        <option value="Prototyping / First-Article Inspection">Prototyping / First-Article Inspection</option>
                        <option value="1,000 to 10,000 pcs / Year">1,000 to 10,000 pcs / Year</option>
                        <option value="10,000 to 50,000 pcs / Year (KAN-BAN)">10,000 to 50,000 pcs / Year (KAN-BAN)</option>
                        <option value="50,000+ pcs / Year (Dedicated Cellular Line)">50,000+ pcs / Year (Dedicated Cellular Line)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Material Grade / Specification
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. EN1A, 20MnCr5, SS304, Forged Steel"
                        value={formData.materialGrade}
                        onChange={(e) => setFormData({ ...formData, materialGrade: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                      />
                    </div>
                  </div>

                  {/* 2D/3D File Attachment Simulator */}
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Attach Technical Drawing or 3D CAD (Optional)
                    </label>
                    <div className="border border-dashed border-slate-300 rounded p-3 bg-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileUp className="w-5 h-5 text-blue-900" />
                        <div>
                          <p className="text-xs font-semibold text-slate-800">
                            {uploadedFile ? uploadedFile.name : "Attach 2D PDF Drawing / STEP 3D Model"}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            Accepts .step, .stp, .iges, .dwg, .dxf, .pdf (up to 25MB)
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

                  {/* Additional Notes */}
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Target Tolerances, Plating Requirements &amp; Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify critical tolerance requirements, surface treatment (Zn-Ni, Trivalent Yellow, Geomet), salt-spray test hours, or specific packaging..."
                      className="w-full px-3 py-2 border border-slate-300 rounded bg-white text-xs focus:outline-hidden focus:border-blue-900"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Confidentiality guaranteed · NDA standard</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 bg-blue-950 hover:bg-blue-900 text-white rounded-xs text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting RFQ...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-sky-400" />
                          <span>Transmit RFQ to Engineering Desk</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pune Industrial Zone Map Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xs p-6 text-white space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <h3 className="text-sm font-bold tracking-tight">
                Chikhali Industrial Zone, Haveli, Pune
              </h3>
            </div>
            <span className="text-xs font-mono-tech text-slate-400">
              Co-ordinates: 18.6750° N, 73.8120° E · Pune Auto Corridor
            </span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xs p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono-tech">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">LOCAL LANDMARK</span>
              <span className="text-slate-200">Opposite Trimurti Weigh Bridge, Falcon Fourtech Road</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">CONTAINER PORT DISTANCE</span>
              <span className="text-slate-200">JNPT Nhava Sheva (~135 km via Expressway)</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">AIRPORT CONNECTIVITY</span>
              <span className="text-slate-200">Pune International Airport PNQ (~22 km)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
