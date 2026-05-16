import {
  Car, Building2, Pill, Paintbrush, Wrench, Shirt, Package, Sprout,
  Cpu, Sparkles, UtensilsCrossed, Fuel, Plane, Ship, Hammer, Factory,
  LucideIcon,
} from "lucide-react";

export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  { id: "automotive", name: "Automotive", icon: Car },
  { id: "construction", name: "Construction", icon: Building2 },
  { id: "pharmaceutical", name: "Pharmaceutical", icon: Pill },
  { id: "paints-coatings", name: "Paints & Coatings", icon: Paintbrush },
  { id: "adhesives", name: "Adhesives & Sealants", icon: Wrench },
  { id: "textile", name: "Textile", icon: Shirt },
  { id: "packaging", name: "Packaging", icon: Package },
  { id: "agriculture", name: "Agriculture", icon: Sprout },
  { id: "electronics", name: "Electronics", icon: Cpu },
  { id: "cosmetics", name: "Cosmetics & Personal Care", icon: Sparkles },
  { id: "food-beverage", name: "Food & Beverage", icon: UtensilsCrossed },
  { id: "oil-gas", name: "Oil & Gas", icon: Fuel },
  { id: "aerospace", name: "Aerospace", icon: Plane },
  { id: "marine", name: "Marine", icon: Ship },
  { id: "manufacturing", name: "Manufacturing", icon: Hammer },
  { id: "industrial", name: "Industrial", icon: Factory },
];
