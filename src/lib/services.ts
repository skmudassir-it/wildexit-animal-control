export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  icon: string;
  image: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    slug: "raccoon-removal",
    name: "Raccoon Removal",
    tagline: "Humane removal and exclusion for attic invaders.",
    description:
      "Safe, humane raccoon removal from attics, chimneys and crawl spaces — with full entry-point sealing so they never come back.",
    longDescription: [
      "Raccoons are clever, strong and surprisingly determined. Once a female finds your attic warm and dry, she will tear through soffits, ridge vents and roof returns to get back in. We trap and relocate humanely, then find and seal every entry point on the property.",
      "Our technicians are licensed and trained in species-specific handling. We remove mothers and babies together, decontaminate the affected area, and finish with a written exclusion report plus a 5-year guarantee on our sealing work.",
    ],
    features: [
      "Licensed, humane live trapping and relocation",
      "Mother-and-kit reunification protocol",
      "Chimney caps and vent guards installed",
      "Full roof-line entry-point sealing",
      "Attic decontamination and odor control",
      "5-year exclusion guarantee",
    ],
    icon: "PawPrint",
    image: "/images/service-raccoon.jpg",
    priceFrom: "$295",
  },
  {
    slug: "squirrel-exclusion-prevention",
    name: "Squirrel Exclusion & Prevention",
    tagline: "Stop squirrels from chewing their way back in.",
    description:
      "Complete squirrel exclusion for homes and businesses — entry sealing, gnaw-point reinforcement and prevention that lasts.",
    longDescription: [
      "Squirrels can squeeze through a gap the size of a golf ball and will gnaw through wood, vinyl and even aluminum to enlarge it. They nest in soffits, wall cavities and attics, chew wiring, and cause thousands of dollars in damage before you notice.",
      "We bait-and-seal in stages so no animal is trapped inside, reinforce every gnaw point with galvanized hardware cloth and steel flashing, and trim back the branches that give them a runway to your roofline.",
    ],
    features: [
      "Stage-by-stage baiting and sealing",
      "Galvanized hardware cloth reinforcement",
      "Steel flashing on vulnerable rooflines",
      "Branch and vegetation clearance",
      "Attic inspection and nest removal",
      "Prevention plan that lasts 5+ years",
    ],
    icon: "Squirrel",
    image: "/images/service-squirrel.jpg",
    priceFrom: "$425",
  },
  {
    slug: "bat-removal-exclusion",
    name: "Bat Removal & Exclusion",
    tagline: "Legal, humane bat exclusion — never extermination.",
    description:
      "Professional bat exclusion using one-way devices and complete sealing, scheduled to protect maternity colonies and comply with state law.",
    longDescription: [
      "Bats are protected in most states, and extermination is both illegal and counterproductive. The right approach is exclusion: one-way devices let bats leave but never return, then we seal every possible entry point. Work is timed around maternity season so flightless pups are never trapped inside.",
      "After the colony is gone, we decontaminate droppings and urine-soaked insulation, restore the attic, and install permanent exclusion screening on ridge vents, gable vents and chimney caps.",
    ],
    features: [
      "One-way exclusion devices — no harm to bats",
      "Maternity-season scheduling that protects pups",
      "Full ridge, gable and chimney sealing",
      "Guano cleanup and attic decontamination",
      "Insulation removal and replacement",
      "Post-exclusion monitoring inspections",
    ],
    icon: "Moon",
    image: "/images/service-bat.jpg",
    priceFrom: "$550",
  },
  {
    slug: "bird-control-deterrents",
    name: "Bird Control & Deterrents",
    tagline: "Keep birds off your roof, ledges and business.",
    description:
      "Humane bird deterrent systems — spikes, netting, wire and falconry-style hazing — for homes, storefronts, warehouses and solar arrays.",
    longDescription: [
      "Pigeons, starlings and gulls turn ledges, rooflines and HVAC units into roosts — leaving corrosive droppings, nesting debris and health hazards behind. We install discreet, humane deterrents matched to the species and the surface, so birds move on without being harmed.",
      "For commercial properties we design full bird-management plans: exclusion netting over loading docks and solar arrays, shock-track systems on ledges, and scheduled maintenance that keeps systems effective year after year.",
    ],
    features: [
      "Stainless steel spike and wire systems",
      "Bird netting for docks, solar and eaves",
      "Ledge and sign deterrent tracks",
      "Humane — no poisons, no glue traps",
      "Commercial bird-management plans",
      "Annual system maintenance programs",
    ],
    icon: "Bird",
    image: "/images/service-bird.jpg",
    priceFrom: "$350",
  },
  {
    slug: "rodent-proofing-sealing",
    name: "Rodent Proofing & Sealing",
    tagline: "Seal your home against mice, rats and more.",
    description:
      "Comprehensive rodent proofing — foundation sealing, door sweeps, vent screens and bait-free prevention for homes and businesses.",
    longDescription: [
      "A mouse can fit through a hole the diameter of a pencil. Rats gnaw through drywall, plastic and lead pipe. Poison-only treatments thin the population briefly, but the colony keeps coming back through the same gaps — and dead rodents in wall cavities create odor and fly problems.",
      "We inspect the full exterior and interior perimeter, seal every gap with copper mesh and expanding foam rated for rodent gnawing, install door sweeps and vent screens, and set up a monitoring program so you can see activity before it becomes an infestation.",
    ],
    features: [
      "Full exterior and interior gap audit",
      "Copper mesh and rodent-rated foam sealing",
      "Door sweeps, vent and pipe collars",
      "Garage and crawl space reinforcement",
      "Bait-free, pet-safe prevention approach",
      "Quarterly monitoring and re-inspection",
    ],
    icon: "Mouse",
    image: "/images/service-rodent.jpg",
    priceFrom: "$475",
  },
  {
    slug: "attic-restoration-sanitization",
    name: "Attic Restoration & Sanitization",
    tagline: "Turn a contaminated attic back into clean storage.",
    description:
      "Full attic cleanup after wildlife — droppings, urine, nests and damaged insulation removed, treated and replaced to a safe, clean finish.",
    longDescription: [
      "After raccoons, squirrels, bats or rodents are gone, the mess they leave behind remains: urine-soaked insulation, droppings, nesting material and odors that attract insects and pose real health risks. Wildlife waste can carry histoplasmosis, leptospirosis and other pathogens.",
      "We remove and dispose of contaminated insulation, disinfect and treat every surface with EPA-approved antimicrobials, seal the attic floor with a vapor barrier, and blow in fresh, R-38 fiberglass insulation — leaving your attic clean, safe and ready to use again.",
    ],
    features: [
      "Contaminated insulation removal and disposal",
      "EPA-approved antimicrobial treatment",
      "Vapor barrier floor sealing",
      "New R-38 insulation installation",
      "Duct and HVAC system inspection",
      "Odor elimination and prevention",
    ],
    icon: "Hammer",
    image: "/images/service-attic.jpg",
    priceFrom: "$650",
  },
  {
    slug: "emergency-wildlife-response",
    name: "Emergency Wildlife Response",
    tagline: "Animal in the house? We answer 24/7.",
    description:
      "Rapid-response crews for wildlife inside living spaces, trapped animals, and overnight emergencies — on site in as little as 60 minutes.",
    longDescription: [
      "A raccoon in the kitchen, a bat in the bedroom, or a squirrel trapped in the wall — these are emergencies in any language. Our on-call crews answer around the clock, 365 days a year, and carry live traps, exclusion materials and decontamination supplies on the truck.",
      "We respond fast, secure the animal safely and humanely, identify how it got in, and give you a same-day plan to keep it out. Emergency call-out includes a written report and a credit toward the full exclusion if you book within 30 days.",
    ],
    features: [
      "24/7/365 on-call response crews",
      "Typical arrival in 60–90 minutes",
      "Safe removal of animals from living spaces",
      "Emergency repairs to secure openings",
      "Written incident report for insurance",
      "Credit toward full exclusion package",
    ],
    icon: "Siren",
    image: "/images/service-emergency.jpg",
    priceFrom: "$199",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  summary: string;
  details: string[];
  image: string;
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "maple-grove-raccoon-exclusion",
    title: "Maple Grove Home — Raccoon Attic Exclusion",
    location: "Maple Grove Subdivision",
    category: "Raccoons",
    summary:
      "A family of raccoons had claimed the attic of a 1980s home through a torn roof return. We removed all four, sealed 12 entry points and restored the attic in five days.",
    details: [
      "Live-trapped and relocated the mother and three kits — reunited and released together.",
      "Sealed 12 entry points including soffits, ridge vent and the original roof return.",
      "Removed 14 bags of contaminated insulation and re-insulated to R-38.",
      "Installed a permanent chimney cap and vent guards as part of the exclusion.",
    ],
    image: "/images/project-raccoon.jpg",
    stats: [
      { label: "Animals", value: "4" },
      { label: "Entry points", value: "12" },
      { label: "Guarantee", value: "5 yrs" },
    ],
  },
  {
    slug: "lakeside-bat-colony",
    title: "Lakeside Colonial — 1,200-Bat Exclusion",
    location: "Lakeside District",
    category: "Bats",
    summary:
      "A historic 1920s colonial hosted a maternity colony of roughly 1,200 little brown bats. We excluded the colony humanely over three weeks and restored the third-floor attic.",
    details: [
      "Installed 14 one-way exclusion devices timed after maternity season.",
      "Sealed the 19-entry-point roofline with custom copper flashing.",
      "Decontaminated the third-floor attic and replaced 600 sq ft of insulation.",
      "Post-exclusion monitoring confirmed zero bats re-entering after 60 days.",
    ],
    image: "/images/project-bats.jpg",
    stats: [
      { label: "Bats excluded", value: "1,200" },
      { label: "Entry points", value: "19" },
      { label: "Timeline", value: "3 wks" },
    ],
  },
  {
    slug: "hillcrest-attic-restoration",
    title: "Hillcrest Rentals — Full Rodent Proofing",
    location: "Hillcrest Avenue",
    category: "Rodents",
    summary:
      "A 12-unit rental building had an ongoing rat problem that poison alone could not fix. We proofed all 12 units, sealed the foundation and built a maintenance program.",
    details: [
      "Audited all 12 units plus shared crawl spaces for entry points.",
      "Sealed 48 gaps with copper mesh and rodent-rated foam.",
      "Installed door sweeps and utility collars across the building.",
      "Set up quarterly monitoring; tenant reports dropped to zero within 60 days.",
    ],
    image: "/images/project-rodents.jpg",
    stats: [
      { label: "Units", value: "12" },
      { label: "Gaps sealed", value: "48" },
      { label: "Reports", value: "0" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We heard scratching in the attic for weeks before we called. WildExit found the raccoon, reunited her with her babies, and sealed every gap. Five years later — nothing has come back.",
    name: "Dana M.",
    role: "Homeowner, Maple Grove",
    rating: 5,
  },
  {
    quote:
      "A bat got into our bedroom at midnight. Their emergency crew arrived in under an hour, removed it safely, and had an exclusion plan for us before they left. Incredible response.",
    name: "Tom & Rita K.",
    role: "Homeowners, Lakeside",
    rating: 5,
  },
  {
    quote:
      "Three other companies wanted to poison the rats in our rental building. WildExit proofed the whole property instead — humane, thorough, and it actually worked. Tenants noticed immediately.",
    name: "Priya N.",
    role: "Property Manager, Hillcrest Rentals",
    rating: 5,
  },
  {
    quote:
      "The attic restoration was immaculate. They hauled out years of squirrel mess, disinfected everything, and the insulation looks brand new. You cannot tell anything was ever up there.",
    name: "George W.",
    role: "Homeowner, Oakfield",
    rating: 5,
  },
  {
    quote:
      "They handled a stubborn squirrel problem at our storefront with netting and sealing — no poisons anywhere near customers. Professional, on time, and the birds and squirrels are gone for good.",
    name: "Rebecca S.",
    role: "Owner, Ridgeway Bakery",
    rating: 5,
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Do you really remove animals humanely?",
    answer:
      "Yes — every removal uses live traps, one-way exclusion devices and species-specific handling. We never use poison for raccoons, squirrels, bats or birds, and we always reunite mothers with their young before sealing an entry point.",
  },
  {
    question: "How much does wildlife removal cost?",
    answer:
      "Most residential removals start between $295 and $650 depending on the species and how many entry points need sealing. Every job begins with an inspection and a firm written quote — no hourly surprises.",
  },
  {
    question: "Will the animals come back?",
    answer:
      "Not if we do our job. Removal is only half the work — we find and seal every entry point, reinforce gnaw areas, and back the sealing with a 5-year guarantee. If wildlife gets back in through a sealed point, we return and fix it free.",
  },
  {
    question: "How fast can you get here in an emergency?",
    answer:
      "Our emergency crews answer 24/7/365 and typically arrive within 60–90 minutes anywhere in our service area. Call the emergency line and a live person answers — no call centers.",
  },
  {
    question: "Is wildlife waste really dangerous?",
    answer:
      "It can be. Raccoon and bat droppings can carry roundworm and histoplasmosis spores, and urine-soaked insulation breeds bacteria and odors. That is why we always recommend professional attic decontamination after any infestation.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Every technician is state-licensed for wildlife control, and we carry full liability and workers compensation coverage. We are also members of the National Wildlife Control Operators Association and follow its code of ethics.",
  },
];
