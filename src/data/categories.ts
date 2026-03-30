import { Flask, Palette, Zap, Layers, Sparkles, Box, Eye, Cog } from "lucide-react";

export const categories = [
  {
    id: "epoxy-resins",
    name: "Epoxy Resins",
    icon: Flask,
    description: "High-performance epoxy powder coating resins",
    productCount: 45,
    subcategories: ["Bisphenol A Epoxy", "Novolac Epoxy", "Hybrid Epoxy", "Low-Cure Epoxy", "Anti-Corrosion Epoxy"],
  },
  {
    id: "polyester-resins",
    name: "Polyester Resins",
    icon: Layers,
    description: "Weather-resistant polyester resins for exterior use",
    productCount: 38,
    subcategories: ["TGIC Polyester", "Primid Polyester", "Super Durable Polyester", "HAA Polyester", "Hybrid Polyester"],
  },
  {
    id: "pigments-dyes",
    name: "Pigments & Dyes",
    icon: Palette,
    description: "Color pigments and dyes for powder coatings",
    productCount: 120,
    subcategories: ["Titanium Dioxide", "Iron Oxide", "Carbon Black", "Organic Pigments", "Metallic Pigments"],
  },
  {
    id: "hardeners",
    name: "Hardeners",
    icon: Zap,
    description: "Curing agents and crosslinkers",
    productCount: 28,
    subcategories: ["TGIC Hardener", "Primid Hardener", "DICY Hardener", "Phenolic Hardener", "Anhydride Hardener"],
  },
  {
    id: "additives",
    name: "Additives",
    icon: Sparkles,
    description: "Flow agents, degassing agents, and modifiers",
    productCount: 65,
    subcategories: ["Flow Agents", "Degassing Agents", "Texturing Agents", "Anti-Cratering", "Wax Additives"],
  },
  {
    id: "fillers",
    name: "Fillers",
    icon: Box,
    description: "Calcium carbonate, barium sulfate, and more",
    productCount: 32,
    subcategories: ["Calcium Carbonate", "Barium Sulfate", "Silica", "Talc", "Mica"],
  },
  {
    id: "matting-agents",
    name: "Matting Agents",
    icon: Eye,
    description: "Achieve desired gloss levels in coatings",
    productCount: 18,
    subcategories: ["Silica-Based", "Wax-Based", "Polymer-Based", "PTFE Matting", "Hybrid Matting"],
  },
  {
    id: "processing-equipment",
    name: "Processing Equipment",
    icon: Cog,
    description: "Extruders, mills, and application equipment",
    productCount: 22,
    subcategories: ["Extruders", "Grinding Mills", "Spray Guns", "Curing Ovens", "Sieving Equipment"],
  },
];

export type Category = typeof categories[number];
