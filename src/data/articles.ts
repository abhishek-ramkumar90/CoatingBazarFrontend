export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  seoDescription: string;
  category: "Industrial Coatings" | "Decorative Paints" | "Surface Prep" | "Compliance";
  readTime: string;
  publishedOn: string;
  keywords: string[];
  sections: ArticleSection[];
  faq?: ArticleFaq[];
}

export const knowledgeHubArticles: Article[] = [
  {
    slug: "how-to-select-industrial-coating-system",
    title: "How to Select the Right Industrial Coating System",
    summary:
      "A practical framework to choose primers, intermediate coats, and top coats based on environment, substrate, and life-cycle cost.",
    seoDescription:
      "Learn how to choose the right industrial coating system using substrate type, corrosion class, exposure conditions, and maintenance cycles.",
    category: "Industrial Coatings",
    readTime: "8 min read",
    publishedOn: "2026-06-20",
    keywords: ["industrial coating system", "corrosion protection", "primer selection", "top coat"],
    sections: [
      {
        heading: "Start with service conditions, not just product type",
        paragraphs: [
          "Most coating failures happen when teams start by shortlisting products before understanding real exposure conditions. Build your specification around where and how the part will perform.",
          "Document temperature swings, humidity, chemical splash risk, UV exposure, and expected cleaning methods before choosing chemistry."
        ],
        bullets: [
          "Indoor dry zones: lower corrosion pressure, easier maintenance",
          "Outdoor urban zones: moderate UV and moisture stress",
          "Coastal and chemical zones: high chloride and chemical attack risk"
        ]
      },
      {
        heading: "Match primer chemistry to substrate and corrosion risk",
        paragraphs: [
          "For mild steel, zinc-rich or epoxy primers usually provide stronger corrosion resistance than generic red oxide systems in aggressive environments.",
          "For galvanized steel and aluminum, check adhesion on non-ferrous substrates and validate with cross-hatch tests before production approval."
        ]
      },
      {
        heading: "Choose top coats for durability and appearance retention",
        paragraphs: [
          "Epoxy top coats perform well for chemical and abrasion resistance but may chalk under UV. Polyurethane and super-durable polyester systems retain gloss and color better outdoors.",
          "Always test complete systems, not individual paint layers, because intercoat compatibility decides long-term performance."
        ]
      },
      {
        heading: "Use life-cycle cost as your final decision filter",
        paragraphs: [
          "A lower upfront coating cost can become expensive when rework, downtime, and repainting frequency are included. Calculate total cost over expected service years.",
          "A robust specification often reduces claims, improves consistency, and protects brand perception in industrial applications."
        ]
      }
    ],
    faq: [
      {
        question: "Is a thicker film always better?",
        answer:
          "Not always. Excess film thickness can trap solvent, reduce flexibility, and cause cracking. Follow the dry film thickness range recommended for the full system."
      },
      {
        question: "Can I skip a primer to save cost?",
        answer:
          "Skipping primer is risky for metal substrates because primer chemistry drives adhesion and corrosion resistance. Validate with testing before considering any reduction."
      }
    ]
  },
  {
    slug: "water-based-vs-solvent-based-paint-guide",
    title: "Water-Based vs Solvent-Based Paints: A Buyer-Friendly Guide",
    summary:
      "Understand performance, drying behavior, VOC profile, and application fit before selecting water-based or solvent-based paint systems.",
    seoDescription:
      "Compare water-based and solvent-based paints for drying time, durability, VOC compliance, and suitable applications in Indian conditions.",
    category: "Compliance",
    readTime: "7 min read",
    publishedOn: "2026-06-16",
    keywords: ["water based paint", "solvent based paint", "VOC", "paint buying guide"],
    sections: [
      {
        heading: "Drying profile and handling",
        paragraphs: [
          "Water-based paints generally have lower odor and easier cleanup, making them practical for occupied spaces. Solvent-based systems can still offer stronger edge coverage in certain industrial jobs.",
          "Actual dry-to-recoat windows depend on humidity, substrate temperature, and ventilation, so always validate on-site before final scheduling."
        ]
      },
      {
        heading: "Durability and exposure suitability",
        paragraphs: [
          "Modern water-based technologies have improved significantly, but high-solvent systems can still perform better in select chemical and heavy-duty applications.",
          "Selection should be based on exposure profile and test evidence, not old assumptions about one technology being universally superior."
        ]
      },
      {
        heading: "VOC and regulatory angle",
        paragraphs: [
          "When sustainability goals and indoor air quality matter, low-VOC and low-odor systems are usually preferred. This is increasingly relevant for commercial interiors, schools, and hospitals.",
          "Check technical data sheets for VOC values and comply with local or project-specific specifications before procurement."
        ]
      }
    ]
  },
  {
    slug: "powder-coating-for-indian-weather",
    title: "Powder Coating for Indian Weather: What Actually Lasts",
    summary:
      "A field-focused look at polyester, epoxy-polyester, and super-durable grades for heat, humidity, and UV-heavy regions.",
    seoDescription:
      "Explore powder coating grades for Indian climate, including polyester, epoxy-polyester, and super-durable systems for better outdoor retention.",
    category: "Industrial Coatings",
    readTime: "6 min read",
    publishedOn: "2026-06-11",
    keywords: ["powder coating India", "super durable polyester", "outdoor coating", "UV resistance"],
    sections: [
      {
        heading: "Pick chemistry based on sunlight and moisture",
        paragraphs: [
          "Epoxy-polyester hybrids can be cost-effective indoors, while pure polyester systems are often better for exterior applications because of UV stability.",
          "In high UV zones, super-durable polyester grades usually provide stronger gloss and color retention over time."
        ]
      },
      {
        heading: "Pretreatment quality is non-negotiable",
        paragraphs: [
          "Even premium powders fail early when pretreatment is weak. Surface cleaning, conversion coating, and controlled rinse quality directly affect corrosion resistance.",
          "Track pretreatment parameters and run salt spray and humidity tests for critical applications."
        ]
      },
      {
        heading: "Control film build and curing discipline",
        paragraphs: [
          "Uneven film build can create weak points at edges and weld zones. Maintain application consistency and verify cured film using temperature profiling.",
          "Avoid both under-cure and over-bake. Both reduce long-term coating integrity."
        ]
      }
    ]
  },
  {
    slug: "primer-selection-checklist-for-metal-surfaces",
    title: "Primer Selection Checklist for Metal Surfaces",
    summary:
      "A concise checklist to reduce adhesion failures, rust creep, and early repaint cycles on fabricated and structural metal.",
    seoDescription:
      "Use this primer selection checklist for metal surfaces to improve adhesion, corrosion resistance, and total coating life.",
    category: "Surface Prep",
    readTime: "5 min read",
    publishedOn: "2026-06-08",
    keywords: ["metal primer selection", "surface preparation", "adhesion failure", "rust prevention"],
    sections: [
      {
        heading: "Verify substrate condition before painting",
        paragraphs: [
          "Inspect for mill scale, oil contamination, flash rust, and weld spatter. Primer performance depends on the condition beneath the film.",
          "Use a documented cleaning standard and check surface profile where abrasive blasting is used."
        ]
      },
      {
        heading: "Align primer type with end-use environment",
        paragraphs: [
          "For aggressive zones, epoxy and zinc-rich primers are common choices. For moderate conditions, carefully selected alkyd or modified systems may be acceptable.",
          "Do not carry over primer choices from old projects without re-checking new exposure requirements."
        ]
      },
      {
        heading: "Confirm overcoating window and compatibility",
        paragraphs: [
          "Top coat adhesion can drop when primers are overcoated too late or too early. Follow recoat windows in the technical data sheet.",
          "If changes are needed on site, perform a quick compatibility panel test before bulk application."
        ]
      }
    ]
  },
  {
    slug: "exterior-painting-mistakes-and-how-to-avoid-them",
    title: "7 Exterior Painting Mistakes and How to Avoid Them",
    summary:
      "Common planning and application errors that reduce durability in exterior projects, plus practical fixes for better finish life.",
    seoDescription:
      "Avoid common exterior painting mistakes with better surface preparation, weather planning, and coating system selection.",
    category: "Decorative Paints",
    readTime: "6 min read",
    publishedOn: "2026-06-04",
    keywords: ["exterior painting mistakes", "weatherproof paint", "paint durability", "wall repainting"],
    sections: [
      {
        heading: "Mistake 1 to 3: poor substrate prep, wrong season, weak primer",
        paragraphs: [
          "Exterior coatings fail quickly when applied on damp, chalky, or dirty surfaces. Moisture meters and adhesion checks help prevent avoidable failures.",
          "Painting during heavy humidity or peak rain periods can delay curing and cause film defects."
        ]
      },
      {
        heading: "Mistake 4 to 5: incorrect dilution and low film thickness",
        paragraphs: [
          "Over-dilution may improve spread rate but often reduces hiding and film build. Follow manufacturer guidelines for dilution limits.",
          "Measure wet film thickness during application to reach target dry film performance."
        ]
      },
      {
        heading: "Mistake 6 to 7: no maintenance plan and mismatched top coat",
        paragraphs: [
          "Even strong systems need periodic cleaning and inspection. Maintenance planning extends appearance and protective life.",
          "Choose top coats that match climate, sunlight intensity, and wash cycles for your city or industrial area."
        ]
      }
    ]
  },
  {
    slug: "low-voc-coatings-for-sustainable-projects",
    title: "Low-VOC Coatings for Sustainable Projects",
    summary:
      "How to choose low-VOC coating systems without compromising practical durability for commercial and industrial sites.",
    seoDescription:
      "A practical guide to low-VOC coatings for sustainable projects, with tips on specification, compliance, and performance validation.",
    category: "Compliance",
    readTime: "7 min read",
    publishedOn: "2026-06-01",
    keywords: ["low VOC coatings", "sustainable paints", "green building", "eco friendly coating"],
    sections: [
      {
        heading: "What low-VOC really means in procurement",
        paragraphs: [
          "Low-VOC claims should be validated through technical documentation, not just marketing labels. Ask suppliers for test-backed product declarations.",
          "Evaluate complete system VOC impact, including primers, putties, and top coats."
        ]
      },
      {
        heading: "Balance sustainability with service life",
        paragraphs: [
          "A sustainable coating strategy must include durability. Frequent repainting can increase total environmental load despite lower VOC per coat.",
          "Use pilot panels and site trials to confirm that the selected system meets both durability and sustainability goals."
        ]
      },
      {
        heading: "Specification tips for project teams",
        paragraphs: [
          "Define VOC limits, approved test methods, and acceptable substitutions in tender documents to avoid confusion during execution.",
          "Plan quality checkpoints at pre-application, application, and post-cure stages for better project outcomes."
        ]
      }
    ]
  }
];

export const articleCategories = [
  "All",
  "Industrial Coatings",
  "Decorative Paints",
  "Surface Prep",
  "Compliance"
] as const;

export type ArticleCategoryFilter = (typeof articleCategories)[number];

