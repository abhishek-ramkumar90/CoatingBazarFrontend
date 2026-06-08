import { Layers, Paintbrush } from "lucide-react";

export const categories = [
  {
    id: "powder-coating",
    name: "Powder Coating",
    icon: Layers,
    description: "Premium powder coating materials for industrial applications",
    productCount: 8,
    subcategories: ["Epoxy Polyster", "Pure Polyster", "Pure Epoxy", "Anti-Microbial", "Heat Resistant", "Fast Cure", "Fusion Bonded", "Super Durable"],
  },
  {
    id: "liquid-paints",
    name: "Liquid Paints",
    icon: Paintbrush,
    description: "High-quality liquid paints and coatings for diverse industries",
    productCount: 26,
    subcategories: ["STOVING", "TSA", "PU", "ENAMEL", "QUICK DRYING (QD)", "THINNERS", "Epoxy Coatings", "MONO COAT (DTM)", "Protective Coatings", "zinc rich primers", "zinc chromate primers", "Red oxide", "alkyd", "ANTI BACTERIAL", "ANTI GRAFFITI", "BARREL COATING", "ELECTRO PHORETIC", "NC", "POLYURETHANES (1K)", "POLYURETHANES (2K)", "SILICONE", "SOFTFEEL", "TPA (THERMOPLASTIC ACRYLIC)", "TSA (THERMOSETTING ACRYLIC)", "UV CURABLE", "ZINK FLAKE COATING"],
  },
];

export type Category = typeof categories[number];
