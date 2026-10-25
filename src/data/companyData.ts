export interface Product {
  id: string;
  name: string;
  category: 'fluid_pressure' | 'structural_hardware' | 'mounting_brackets' | 'control_linkages';
  categoryLabel: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  specifications: string;
  dimensions: string;
  materials: string[];
  tolerances: string;
  surfaceFinish: string[];
  applications: string[];
  features: string[];
}

export interface MachineLine {
  sr: number;
  name: string;
  capacity: string;
  quantity: string;
  category: 'cnc' | 'automat' | 'press' | 'drilling' | 'specialized';
}

export interface MetrologyEquipment {
  sr: number;
  name: string;
  leastCount: string;
  rangeBaseline: string;
  quantity: string;
}

export interface GaugeClassification {
  sr: number;
  classification: string;
  threadSpectrum: string;
  quantity: string;
}

export const COMPANY_DETAILS = {
  name: "Sai Engineering Works",
  legalName: "M/S. Sai Engineering Works",
  established: 2010,
  yearsActive: 16,
  workforce: "60 Skilled Engineering Professionals & Operators",
  workforceCount: 60,
  annualTurnover: "₹8.50 Crores",
  turnoverBaseline: 8.5,
  turnoverFY: "FY 2025–26",
  growthMultiplier: "2.7× Growth Since FY 2015–16",
  cncCount: 14,
  totalMachines: 101,
  metrologyGauges: 349,
  tightestTolerance: "10-Micron (±0.010 mm)",
  instrumentClasses: 21,
  certifications: [
    {
      title: "ISO 9001:2008 Certified",
      body: "Certified by AITF (Quality Management System)",
      badge: "ISO 9001:2008",
      scope: "Precision Forging, Machining & Engineering Components"
    }
  ],
  logistics: {
    address: "Sai Engineering Works, GAT No. 1410, Opposite to Trimurti Weigh Bridge, Falcon Fourtech Road, Sonawanewasti, Chikhali, Haveli, Pune – 411 062, Maharashtra, India",
    area: "Chikhali Industrial Cluster, Pune",
    state: "Maharashtra, India",
    pincode: "411 062",
    gstNo: "27AQZPB2283M1Z6",
    website: "saienggworks.com",
    websiteUrl: "https://saienggworks.com",
    email: "sales@saienggworks.com",
    salesEmail: "sales@saienggworks.com",
    plantEmail: "saienggworks2010@gmail.com",
    emails: [
      { label: "Sales & Technical RFQ Desk", email: "sales@saienggworks.com" },
      { label: "Plant Administration & Quality", email: "saienggworks2010@gmail.com" }
    ],
    phones: [
      { name: "Mr. Prashant", number: "+91 9922968270", raw: "+919922968270" },
      { name: "Mr. Pradyumna", number: "+91 9637929911", raw: "+919637929911" }
    ],
    managingDirector: {
      name: "Mr. Pradyumna Prashant Bhegade",
      title: "Managing Director",
      quote: "We are structurally prepared to co-invest, construct tailored jig work-holding setups, design custom robotic inspection fixtures, and deploy dedicated quality cells matching the Customer Specific Requirements (CSR) mandated by our OEM partners."
    },
    facilityHighlights: [
      "Dedicated 600 sq. ft. modern administrative block and engineering CAD/CAM design desk",
      "Surrounding floor space preserved to construct customer-specific cellular manufacturing rows",
      "Full 185 KVT diesel generator loop ensuring 100% plant uptime during all production shifts",
      "Strategic location in Pune's automotive belt with seamless access to JNPT seaport and Mumbai-Pune expressway"
    ]
  },
  corporateProfilePdfUrl: "/assets/aistudio/Sai_Engineering_Works_-_Corporate_Profile_2026__3___1__834039db.pdf"
};

export const TURNOVER_HISTORY = [
  { period: "2012-15 AVG", amount: 2.33 },
  { period: "2015-16", amount: 3.20 },
  { period: "2016-17", amount: 3.35 },
  { period: "2017-18", amount: 5.08 },
  { period: "2018-19", amount: 5.85 },
  { period: "2019-20", amount: 5.41 },
  { period: "2020-21", amount: 5.61 },
  { period: "2021-22", amount: 6.61 },
  { period: "2022-23", amount: 6.80 },
  { period: "2023-24", amount: 7.30 },
  { period: "2024-25", amount: 8.00 },
  { period: "2025-26", amount: 8.50 },
];

export const TIER1_OEM_PARTNERS = [
  { name: "Endurance Technologies Ltd.", category: "Tier-1 Auto Anchor" },
  { name: "Motherson Sumi Systems (P) Ltd.", category: "Global Wiring & Auto" },
  { name: "Minda Sai Ltd. (Pune & Murbad)", category: "Auto Systems & Switches" },
  { name: "Norma Group Products India Pvt. Ltd.", category: "Fluid Handling & Clamps (KAN-BAN Partner)" },
  { name: "Ognibene India Pvt. Ltd.", category: "Hydraulic Steering Systems" },
  { name: "Polyhose India Pvt. Ltd.", category: "High-Pressure Fluid Lines" },
  { name: "Imperial Auto Industries Ltd.", category: "Fluid Transmission Tubes" },
  { name: "Nelson Global Products India Pvt. Ltd.", category: "Exhaust & Thermal Systems" },
  { name: "Reflex Allen India Pvt. Ltd.", category: "Brake & Fluid Systems" },
  { name: "Jayshree Tubestech Component Pvt. Ltd.", category: "Precision Tubular Parts" },
  { name: "Jayashree Polymers Pvt. Ltd.", category: "Vibration Control Systems" },
  { name: "Imperial Martor Engine Tubes Pvt. Ltd.", category: "Powertrain Conduit Lines" },
  { name: "Asean Rubber Products Pvt. Ltd.", category: "Automotive Seals & Rings" },
  { name: "Capco Industries Ltd. (MP)", category: "Heavy Equipment Castings" },
  { name: "Tulsi Hydraulics", category: "Hydraulic Power Units" },
  { name: "Hansa Flex India", category: "Fluid Dynamics & Hose Lines" },
  { name: "ADM Joinflex India", category: "Flexible Couplings" },
  { name: "Meena Elastomers Pvt. Ltd.", category: "Precision Seals" },
  { name: "Polyrub Extrusion Pvt. Ltd.", category: "Engine Sub-assemblies" }
];

export const PRODUCTS: Product[] = [
  {
    id: "banjo-fittings-6-80mm",
    name: "Hydraulic & Pneumatic Banjo Fittings (6–80mm)",
    category: "fluid_pressure",
    categoryLabel: "Fluid & Pressure Systems",
    image: "/assets/products/banjo_fittings_6_80mm.png",
    shortDesc: "Full operational configurations from 6mm up to 80mm outer diameter for critical fluid transfer and pressure lines.",
    fullDesc: "Manufactured through precision hot forging followed by multi-axis CNC turning. Engineered to withstand high burst pressures, thermal fluctuations, and intensive cyclic mechanical stress in automotive braking, fuel, and hydraulic circuits.",
    specifications: "OD: 6mm – 80mm; Ports: Single/Double Banjo, Metric (M8–M33), BSP, UNF",
    dimensions: "6mm to 80mm outer diameter span, stem lengths tailored to OEM drawings",
    materials: ["Low Carbon Steel (11SMnPb30 / EN1A)", "Medium Carbon Steel (EN8 / EN9)", "Forged SAE 1018", "Brass / Bronze Alloy"],
    tolerances: "10-Micron threshold (±0.010 mm) on critical sealing faces & bore diameters",
    surfaceFinish: ["Trivalent Zinc Plating (Cr3+) with Yellow / Clear Passivation (Min 96 hrs to 480 hrs SST)", "Geomet Coating", "Black Oxide / Phosphating"],
    applications: ["Automotive Hydraulic Brake Circuits", "Diesel Fuel Injection & Return Lines", "Turbocharger Oil Feed Conduits", "Hydraulic Cylinder Piping"],
    features: ["Zero-leakage precision machined sealing serrations", "Managed grain-flow orientation via internal hot-forging", "100% thread ring gauge verified before dispatch", "Burr-free fluid passages for unrestricted volumetric flow"]
  },
  {
    id: "banjo-fittings-assorted",
    name: "Banjo Fittings – Assorted Multi-Port Range",
    category: "fluid_pressure",
    categoryLabel: "Fluid & Pressure Systems",
    image: "/assets/products/banjo_fittings_assorted.png",
    shortDesc: "Custom angled, multi-port, and extended neck banjo fittings designed for tight engine bay packaging.",
    fullDesc: "Designed for compact automotive engine compartments where straight couplers cannot fit. Incorporates precise cross-drilled fluid galleries, high burst ratings, and customized offset angles matching customer CAD/CSR specifications.",
    specifications: "Configuration: 45°, 90°, straight stem, dual outlet; Thread: M10 to M30, 1/8\" to 1\" BSP",
    dimensions: "Compact footprint with custom neck reach from 15mm up to 120mm",
    materials: ["High Tensile Carbon Steel", "Alloy Steel (20MnCr5)", "Stainless Steel SS304 / SS316", "Forged Steel"],
    tolerances: "±0.015 mm concentricity; ±0.010 mm sealing flange flatness",
    surfaceFinish: ["Zinc-Nickel (ZnNi) Alloy Plating (720 hrs SST)", "Trivalent Zinc Blue Passivation", "E-Coating"],
    applications: ["Commercial Vehicle Air Brake Systems", "Power Steering Return Lines", "Tractor & Heavy Machinery Hydraulics", "Pneumatic Suspension Units"],
    features: ["Eliminates hose twisting during installation", "Tested against continuous cyclic impulse pressures", "Precision thread chamfer for automated assembly lines", "Custom brazed or single-piece forged constructions"]
  },
  {
    id: "high-pressure-end-fittings",
    name: "High-Pressure Hydraulic & Pneumatic End Fittings",
    category: "fluid_pressure",
    categoryLabel: "Fluid & Pressure Systems",
    image: "/assets/products/end_fittings.png",
    shortDesc: "Specialised high-pressure crimp and threaded end fittings for hydraulic hose and metallic tube connections.",
    fullDesc: "Precision-turned on multi-axis CNC machines with automated bar feeding. Features calibrated crimping ridges, standardized DIN/SAE connection tapers, and rigid dimensional repeatability for high-volume automotive Tier-1 hose assemblers.",
    specifications: "Standards: DIN 2353, SAE J514, ISO 8434-1; Pressure rating up to 450 bar",
    dimensions: "Tube OD 6mm to 42mm; Thread sizes M12x1.5 through M52x2",
    materials: ["Automotive Grade Free-Cutting Steel (EN1APb)", "C35 / C45 Carbon Steel", "Forged Hexagonal Stock"],
    tolerances: "Class 6g / 6H thread precision; 10-micron critical seal seat angle",
    surfaceFinish: ["Zinc Trivalent Plating with Topcoat Sealant", "Zinc Phosphate", "Electroless Nickel Plating"],
    applications: ["High-Pressure Hydraulic Hose Lines", "Earthmoving Excavator Piping", "Automotive Power Pack Assemblies", "Industrial Manifold Couplers"],
    features: ["Deep barbed / ribbed collar profile for robust crimp retention", "24° cone seat and O-ring sealing grooves", "Total heat traceability mapped to raw steel coils", "Defect-free surface under Mitutoyo profile projection"]
  },
  {
    id: "t-connectors-dko",
    name: "Heavy-Duty T-Connectors & Standard DKO Fittings",
    category: "fluid_pressure",
    categoryLabel: "Fluid & Pressure Systems",
    image: "/assets/products/t_connectors_dko.png",
    shortDesc: "Precision forged and machined 3-way fluid splitters and DKO metric swivel nuts for fluid distribution.",
    fullDesc: "Manufactured from hot-forged blanks to prevent seam fatigue under hydraulic shock loads. Machined on precision CNC machining lines with concentric thread alignment across all three branch axes.",
    specifications: "Series: Light (L) & Heavy (S); Port: Male/Female T-junctions, DKO swivel O-ring connections",
    dimensions: "Thread spectrum M12 to M42, DIN 3861 / DIN 3865 standards",
    materials: ["Forged Structural Steel (1020 / 1045)", "Alloy Steel", "Forged Brass"],
    tolerances: "Axial perpendicularity within 0.02 mm; 10-micron thread tolerances",
    surfaceFinish: ["Trivalent Zinc with Cr6-Free Topcoat", "Geomet 321 / 500", "Phosphate Dip"],
    applications: ["Agricultural Equipment Hydraulics", "Truck Hydraulic Tipping Mechanisms", "Mobile Crane Fluid Manifolds", "Industrial Plant Compressors"],
    features: ["Forged grain orientation eliminates internal porosity", "Vibration-proof DKO captive elastomeric sealing", "Pressure tested up to 630 bar static burst threshold", "Fully compatible with automated torquing tools"]
  },
  {
    id: "flanges-clamps-pins",
    name: "High-Tensile Flanges, Industrial Clamps & Link Pins",
    category: "structural_hardware",
    categoryLabel: "Structural Hardware & Companions",
    image: "/assets/products/flanges_clamps_pins.png",
    shortDesc: "High-tensile engine companion flanges, heavy-duty industrial clamps, and hardened link pins.",
    fullDesc: "Combines hot forging and secondary CNC turn-mill execution to produce structurally resilient hardware. Built to anchor auxiliary automotive aggregates to engine cast blocks without fatigue failure.",
    specifications: "Tensile Grade: 8.8, 10.9; Pin Hardness: HRC 52–58 induction hardened on request",
    dimensions: "Pin diameters 10mm to 60mm; Flange pitch circle up to 180mm",
    materials: ["Alloy Steel 4140 (42CrMo4)", "EN8 / EN9 / EN19", "Case Hardening Steel 16MnCr5 / 20MnCr5"],
    tolerances: "Pin OD ground to h6/g6 tolerance (within 8 to 12 microns); Hole pitch ±0.03 mm",
    surfaceFinish: ["Manganese Phosphating", "Hard Chrome Plating", "Trivalent Zinc Plating (Min 120 hrs SST)"],
    applications: ["Automotive Suspension & Steering Linkages", "Heavy Commercial Vehicle Engine Mounts", "Construction Equipment Articulation Joints", "Exhaust Flange Connections"],
    features: ["Micro-crack free raw grain flow structure", "Fine surface finish (Ra ≤ 0.4 µm) on bearing journal pins", "Chamfered lead-ins for easy robotic assembly", "Dynamic load tested under cyclic endurance benchmarks"]
  },
  {
    id: "spacers-rod-eyes-caps",
    name: "Precision Metal Spacers, Rod Eyes & End Caps",
    category: "structural_hardware",
    categoryLabel: "Structural Hardware & Companions",
    image: "/assets/products/spacers_rod_eyes_caps.png",
    shortDesc: "Accurately sized spacers, hydraulic cylinder rod eyes, and protective end cap hardware blocks.",
    fullDesc: "Formed on automated cold bar feeding lines and heavy automats up to 60mm diameter, then face-profiled on CNC turning centers for exact axial thickness and bore concentricity.",
    specifications: "Spherical bore / Plain eye; Threaded shank: M12 to M36 male/female; Spacer ID: 8mm to 50mm",
    dimensions: "Thickness held to within ±0.015 mm; Lengths up to 200mm",
    materials: ["Cold Drawn Seamless Tube Stock", "Forged C45", "Stainless Steel", "Aluminum 6061-T6"],
    tolerances: "Parallelism of spacer faces within 0.010 mm; Bore tolerance H7/H8",
    surfaceFinish: ["Zinc Trivalent with Passivation", "Blackening / Phosphating", "Clear Anodized (Aluminum)"],
    applications: ["Hydraulic Actuator Rod Ends", "Automotive Axle & Drivetrain Spacing", "Shock Absorber Linkages", "Industrial Cylinder End Plugs"],
    features: ["Strict face perpendicularity ensures even load distribution", "Burr-free edge radiusing on all automat lines", "Heat-treated for increased fatigue life", "100% Go/No-Go calibrated plug gauge checked"]
  },
  {
    id: "brackets-pump-filter-hinges",
    name: "Fuel Filter Brackets, Priming Pumps & Hood Hinges",
    category: "mounting_brackets",
    categoryLabel: "Mounting & Bracket Systems",
    image: "/assets/products/brackets_pump_filter_hinges.png",
    shortDesc: "Automotive fuel filter mounting brackets, priming pump mountings, and reinforced LH/RH hood hinges.",
    fullDesc: "Manufactured using our mechanical press array (30 to 250 Tons) combined with induction brazing and precision drilling. Engineered to withstand high vibration resonance in heavy commercial vehicles and passenger cars.",
    specifications: "Gauge Thickness: 1.5mm to 6.0mm sheet metal combined with forged bosses",
    dimensions: "Custom geometries matching OEM chassis mounting bolt patterns",
    materials: ["High-Strength Low-Alloy (HSLA) Steel", "Deep Drawing Cold Rolled (CR4/EDD)", "Forged Carbon Steel Inserts"],
    tolerances: "Hole coordinate pitch within ±0.05 mm; Hinge pivot alignment within 0.03 mm",
    surfaceFinish: ["Cathodic Electrodeposition (CED Coating)", "High-Gloss Black Powder Coating", "Zinc Plated with Cr3+"],
    applications: ["Diesel Fuel Filter Mounting Modules", "Cabin Hood & Bonnet Hinges (LH/RH)", "Priming Hand Pump Brackets", "Powertrain Fuel Line Guides"],
    features: ["Rigid structural ribs stamped to prevent vibration fatigue", "High-frequency 10 KVT induction brazed joints with zero weld splatter", "Tested to 1,000+ hours salt spray corrosion resistance", "Zero play hinge pivot mechanism with self-lubricating bushings"]
  },
  {
    id: "bearing-cover-tail-lamp",
    name: "Heavy Duty Bearing Covers & Tail Lamp Mountings",
    category: "mounting_brackets",
    categoryLabel: "Mounting & Bracket Systems",
    image: "/assets/products/bearing_cover_tail_lamp.png",
    shortDesc: "Sturdy automotive bearing covers, Gemi bands, W-brackets, and tail lamp structural brackets.",
    fullDesc: "Engineered for robust mechanical protection and vibration dampening. Combines multi-stage stamping with precision VMC pocket milling and face profiling to ensure strict gasket sealing plane tolerances.",
    specifications: "Formed geometry with multiple mounting lugs; Gasket face flatness < 0.05 mm",
    dimensions: "Diameter / span up to 250mm; Sheet thickness up to 4.5mm",
    materials: ["Press Stamping Steel DD13 / HR4", "Cast Steel Blanks", "Cold Rolled Strip"],
    tolerances: "Bolt pitch PCD ±0.04 mm; Concentric seal lip diameter ±0.02 mm",
    surfaceFinish: ["Cataphoretic E-Coat (Black)", "Zinc Flake Coating", "Hot Dip Galvanized / Trivalent Zinc"],
    applications: ["Automotive Wheel Hub & Transmission Bearing Enclosures", "Heavy Truck Chassis Tail Lamp Assemblies", "Fluid Hose Clamping Bands (Gemi Bands)", "W-Bracket Structural Reinforcements"],
    features: ["Oil-tight sealing face eliminates lubricant leakage", "High structural rigidity against road debris impact", "Multi-point ground studs and captive nuts where specified", "Supplied in functional KAN-BAN delivery bins"]
  },
  {
    id: "locking-clips-brake-lever",
    name: "Automotive Locking Clips & Custom Brake Levers",
    category: "control_linkages",
    categoryLabel: "Control Linkages & Safety Blocks",
    image: "/assets/products/locking_clips_brake_lever.png",
    shortDesc: "Safety-critical automotive locking clips and custom engineered brake lever assemblies.",
    fullDesc: "Manufactured under rigorous zero-defect quality thresholds. Combines high-tonnage stamping, precision CNC boring, induction hardening, and verified pin assembly to satisfy the strict safety mandates of Tier-1 braking partners.",
    specifications: "Safety Critical Component; High tensile strength and fatigue life ratings",
    dimensions: "Tailored to automotive chassis and pedal/handbrake spatial footprints",
    materials: ["Spring Steel (EN42J / 65Mn)", "High-Yield Forged Steel", "High-Carbon Strip"],
    tolerances: "Pivot hole diameter within ±0.012 mm; Cam profile within 0.02 mm",
    surfaceFinish: ["Black Geomet Coating", "Trivalent Zinc with Hydrogen De-embrittlement Baking", "E-Coated"],
    applications: ["Commercial Vehicle Parking Brake Levers", "Automotive Hose Retaining Locking Clips", "Cable Release Control Assemblies", "Safety Interlock Linkages"],
    features: ["100% proof-load tested for mechanical integrity", "Undergoes hydrogen de-embrittlement heat treatment", "Laser-calibrated pivot holes for smooth lever actuation", "Total heat batch traceability engraved or tagged"]
  }
];

export const MACHINERY_DATA: MachineLine[] = [
  { sr: 1, name: "CNC Turning Centers", capacity: "Multi-axis precision turning centers holding 10-micron tolerance thresholds", quantity: "14 Nos.", category: "cnc" },
  { sr: 2, name: "Automat Processing Setup", capacity: "Automated raw bar feeding setup managing stock lines up to 42mm outer diameter", quantity: "30 Nos.", category: "automat" },
  { sr: 3, name: "Heavy Automat Lines", capacity: "Heavy-duty bar feeding automated lines configured up to 60mm diameter", quantity: "4 Nos.", category: "automat" },
  { sr: 4, name: "Mechanical Press Array", capacity: "Automotive stamping, blanking, and forming lines from 30 Tons to 250 Tons", quantity: "6 Nos.", category: "press" },
  { sr: 5, name: "Induction Brazing Unit", capacity: "High-frequency 10 KVT induction setup processing parts from 2mm up to 50mm", quantity: "1 No.", category: "specialized" },
  { sr: 6, name: "Precision Lathe Lines", capacity: "Conventional lathe lines utilised for sizing setups; features versatile 4-Feet bed size", quantity: "20 Nos.", category: "cnc" },
  { sr: 7, name: "Heavy Duty Drilling Blocks", capacity: "High-torque vertical processing blocks with drilling capacities up to 1 Inch", quantity: "10 Nos.", category: "drilling" },
  { sr: 8, name: "Medium Drilling Lines", capacity: "Dedicated processing stations handling drill configurations up to 0.75 Inch", quantity: "10 Nos.", category: "drilling" },
  { sr: 9, name: "Radial Drill Units", capacity: "Heavy structural boring and radial drill configurations up to 1 Inch capacity", quantity: "2 Nos.", category: "drilling" },
  { sr: 10, name: "Automated Bandsaw Cutting", capacity: "High-speed raw material sizing bandsaws managing bar stock up to 200mm diameter", quantity: "2 Nos.", category: "specialized" },
  { sr: 11, name: "VMC (Vertical Machining Centre)", capacity: "Vertical machining centre for close-tolerance face profiling and pocket milling", quantity: "1 No.", category: "cnc" },
  { sr: 12, name: "Industrial Power DG Set", capacity: "Heavy capacity 185 KVT diesel generator loop ensuring 100% plant uptime protection", quantity: "1 No.", category: "specialized" }
];

export const METROLOGY_INSTRUMENTS: MetrologyEquipment[] = [
  { sr: 1, name: "Mitutoyo Profile Projector", leastCount: "Optical Verification", rangeBaseline: "Model M200 Target Array", quantity: "01 No." },
  { sr: 2, name: "Air Gauging Systems", leastCount: "0.001mm (1 Micron)", rangeBaseline: "0.1mm Range Calibration (Unimet)", quantity: "02 Nos." },
  { sr: 3, name: "Micro-Plunger Dial Gauge", leastCount: "1 Micron", rangeBaseline: "1mm Total Span (Mitutoyo)", quantity: "01 No." },
  { sr: 4, name: "Digital Height Gauges", leastCount: "0.02mm", rangeBaseline: "0 to 300mm Scale (Mitutoyo)", quantity: "02 Nos." },
  { sr: 5, name: "Outside Micrometers Cluster", leastCount: "0.01mm", rangeBaseline: "0 to 25mm Processing Span (Mitutoyo)", quantity: "03 Nos." },
  { sr: 6, name: "Dial Vernier Calipers", leastCount: "0.02mm", rangeBaseline: "0 to 150mm Capacity (Mitutoyo)", quantity: "05 Nos." },
  { sr: 7, name: "Precision Surface Plates", leastCount: "Metrology Grade", rangeBaseline: "650 x 650mm Planar Standard (Luthra)", quantity: "02 Nos." },
  { sr: 8, name: "Bore Dial Gauges Cluster", leastCount: "Standard LC", rangeBaseline: "10 to 150mm Diameter Checking Range", quantity: "01 No." },
  { sr: 9, name: "Standard Between Centres", leastCount: "Alignment Check", rangeBaseline: "0 to 525mm Concentricity Baseline (Luthra)", quantity: "02 Nos." },
  { sr: 10, name: "Industrial Impact Machine", leastCount: "Mechanical Strength", rangeBaseline: "Hammer Knock Block 1/2\" Setup", quantity: "01 No." }
];

export const CALIBRATED_GAUGES: GaugeClassification[] = [
  { sr: 11, classification: "Thread Ring Gauges (Metric Standard Type)", threadSpectrum: "M5 x 0.8 up to M33 x 2", quantity: "30 Nos." },
  { sr: 12, classification: "Thread Ring Gauges (UNF Standard Type)", threadSpectrum: "8mm to 32mm spectrum range", quantity: "20 Nos." },
  { sr: 13, classification: "Thread Ring Gauges (BSP Standard Type)", threadSpectrum: "8mm to 25mm spectrum range", quantity: "15 Nos." },
  { sr: 14, classification: "Thread Ring Gauges (NPT Standard Type)", threadSpectrum: "8mm to 25mm spectrum range", quantity: "10 Nos." },
  { sr: 15, classification: "Thread Plug Gauges (Metric Standard Type)", threadSpectrum: "M5 x 0.8 up to M33 x 2", quantity: "24 Nos." },
  { sr: 16, classification: "Thread Plug Gauges (UNF Standard Type)", threadSpectrum: "8mm to 34mm spectrum range", quantity: "16 Nos." },
  { sr: 17, classification: "Thread Plug Gauges (BSP Standard Type)", threadSpectrum: "8mm to 20mm spectrum range", quantity: "15 Nos." },
  { sr: 18, classification: "Thread Plug Gauges (NPT Standard Type)", threadSpectrum: "8mm to 15mm spectrum range", quantity: "4 Nos." },
  { sr: 19, classification: "Plain Dimension Plug Gauges (Drawing Custom)", threadSpectrum: "3mm to 28mm explicit pass lines", quantity: "50 Nos." },
  { sr: 20, classification: "Plain Dimension Ring Gauges (Drawing Custom)", threadSpectrum: "3mm to 28mm explicit pass lines", quantity: "15 Nos." },
  { sr: 21, classification: "Snap Gauges Block Array (Batch Inspection)", threadSpectrum: "3mm to 44mm Go/No-Go limits", quantity: "150 Nos." }
];

export const PRODUCTION_ZONES = [
  { step: "01", name: "Raw Material Grade Quarantine", desc: "Chemical composition & spectrometer check, heat number verification, visual flaw quarantine." },
  { step: "02", name: "Multi-Axis CNC Turning Lines", desc: "High-precision turning holding 10-micron thresholds with continuous tool wear monitoring." },
  { step: "03", name: "Conventional Automat Cluster", desc: "Automated high-speed cold bar processing up to 60mm diameter for repetitive volumetric throughput." },
  { step: "04", name: "Induction Brazing Station", desc: "Controlled high-frequency 10 KVT brazing loop ensuring strong metallurgical joints with zero slag." },
  { step: "05", name: "First-Off & In-Process Inspection", desc: "Strict first-piece signoff, Statistical Process Control (SPC) charting, and hourly dimensional audits." },
  { step: "06", name: "Climate-Controlled Metrology Clean-Lab", desc: "Temperature-monitored master verification with Mitutoyo optics, air gauging, and 349 calibrated gauges." },
  { step: "07", name: "Finished Goods Packing & Dispatch", desc: "VCI corrosion-inhibitor packaging, barcode/KAN-BAN labeling, export-ready palleted containers." }
];

export const TECHNICAL_SCALING_ROADMAP = [
  {
    assetPipeline: "High-Speed VMC Units",
    targetAllocation: "02 New Production Lines",
    targetObjective: "Configured for complex face profiling, close-tolerance vertical boring sequences, and precise pocket milling on cast components."
  },
  {
    assetPipeline: "Special Purpose Machines (SPM)",
    targetAllocation: "02 New Production Lines",
    targetObjective: "Dedicated automated SPMs for accelerated processing of multi-port fluid couplings and multi-angle custom Banjo units."
  }
];

export const INDUSTRIES_SERVED = [
  {
    id: "automotive",
    title: "Automotive & Commercial Vehicles",
    tagline: "Tier-1 Powertrain, Braking & Chassis Sub-Assemblies",
    desc: "Long-standing manufacturing partner to India's foremost automotive anchors including Endurance Technologies, Motherson Sumi, and Norma Group. Delivering safety-critical brake lever assemblies, fuel lines, priming pump brackets, and heavy engine flanges.",
    keyComponents: ["Banjo fittings for brake fluid lines", "Engine companion flanges", "Priming pump & fuel filter brackets", "Locking clips & handbrake levers", "Reinforced bonnet/hood hinges (LH/RH)"],
    stats: "Over 2.5M+ automotive precision components delivered annually"
  },
  {
    id: "hydraulics",
    title: "Hydraulics & Fluid Power Systems",
    tagline: "High-Pressure Conduits, Manifolds & Adapters",
    desc: "Manufactured to DIN 2353, SAE J514 and ISO 8434-1 standards. Handling extreme cyclic impulse pressures up to 450+ bar with leak-free sealing integrity for fluid power manufacturers and hose fabricators.",
    keyComponents: ["Hydraulic Banjo fittings (6mm to 80mm OD)", "DKO swivel connectors & T-junctions", "High-pressure hose crimp end fittings", "Hydraulic manifold blocks", "Threaded cylinder end plugs"],
    stats: "100% thread ring gauge checked to metric, BSP, UNF, and NPT specs"
  },
  {
    id: "off-highway",
    title: "Heavy Earthmoving & Off-Highway Equipment",
    tagline: "High-Cyclic Stress Structural Hardware & Articulation Pins",
    desc: "Supplying rugged components engineered to withstand high vibration, shock loads, and abrasive industrial environments. Combining raw hot forging with CNC turning for maximum structural fatigue endurance.",
    keyComponents: ["Induction-hardened link pins", "Hydraulic cylinder rod eyes", "Heavy-duty structural clamps & flanges", "Vibration-dampened mounting brackets", "High-strength spacers & bushings"],
    stats: "Grain-flow orientation controlled to eliminate micro-voids"
  },
  {
    id: "industrial-machinery",
    title: "Industrial Automation & Compressor Systems",
    tagline: "Precision Turn-Mill Spacers, Housings & Couplings",
    desc: "Supplying machine builders and pneumatic automation systems with high-repeatability turned parts, precision bearing covers, and custom brazed multi-port couplings holding 10-micron tolerances.",
    keyComponents: ["Heavy-duty bearing covers", "Gemi bands and clamping rings", "Air compressor pneumatic banjo adapters", "Precision face-ground metal spacers", "Custom CNC machined sleeves"],
    stats: "10-micron tolerance capability with Mitutoyo optical verification"
  }
];
