export interface Product {
  id: string;
  name: string;
  grade: string;
  brand: string;
  location: string;
  price: number;
  unit: string;
  change: number;
  updatedAgo: string;
  categoryId: string;
}

const generateProducts = (): Record<string, Product[]> => {
  const data: Record<string, Product[]> = {
    "epoxy-resins": [
      { id: "ep1", name: "Bisphenol A Epoxy Resin", grade: "E-12", brand: "Huntsman", location: "Mumbai", price: 285, unit: "KG", change: -2.1, updatedAgo: "23 min ago", categoryId: "epoxy-resins" },
      { id: "ep2", name: "Bisphenol A Epoxy Resin", grade: "E-12", brand: "Huntsman", location: "Delhi", price: 290, unit: "KG", change: -1.8, updatedAgo: "23 min ago", categoryId: "epoxy-resins" },
      { id: "ep3", name: "Novolac Epoxy Resin", grade: "N-740", brand: "Atul Ltd", location: "Ahmedabad", price: 320, unit: "KG", change: 1.5, updatedAgo: "45 min ago", categoryId: "epoxy-resins" },
      { id: "ep4", name: "Hybrid Epoxy Resin", grade: "HY-50", brand: "Kukdo Chemical", location: "Chennai", price: 265, unit: "KG", change: -0.8, updatedAgo: "1 hr ago", categoryId: "epoxy-resins" },
      { id: "ep5", name: "Low-Cure Epoxy Resin", grade: "LC-200", brand: "Hexion", location: "Bangalore", price: 310, unit: "KG", change: 2.3, updatedAgo: "2 hrs ago", categoryId: "epoxy-resins" },
      { id: "ep6", name: "Anti-Corrosion Epoxy", grade: "AC-100", brand: "BASF", location: "Pune", price: 340, unit: "KG", change: 0.5, updatedAgo: "3 hrs ago", categoryId: "epoxy-resins" },
    ],
    "polyester-resins": [
      { id: "po1", name: "TGIC Polyester Resin", grade: "T-90", brand: "Allnex", location: "Mumbai", price: 230, unit: "KG", change: 1.2, updatedAgo: "15 min ago", categoryId: "polyester-resins" },
      { id: "po2", name: "TGIC Polyester Resin", grade: "T-90", brand: "Allnex", location: "Kolkata", price: 235, unit: "KG", change: 1.5, updatedAgo: "15 min ago", categoryId: "polyester-resins" },
      { id: "po3", name: "Primid Polyester Resin", grade: "P-60", brand: "DSM", location: "Delhi", price: 245, unit: "KG", change: -0.5, updatedAgo: "30 min ago", categoryId: "polyester-resins" },
      { id: "po4", name: "Super Durable Polyester", grade: "SD-800", brand: "Eternis", location: "Chennai", price: 275, unit: "KG", change: 3.1, updatedAgo: "1 hr ago", categoryId: "polyester-resins" },
      { id: "po5", name: "HAA Polyester Resin", grade: "H-45", brand: "Cytec", location: "Ahmedabad", price: 255, unit: "KG", change: -1.2, updatedAgo: "2 hrs ago", categoryId: "polyester-resins" },
    ],
    "pigments-dyes": [
      { id: "pg1", name: "Titanium Dioxide", grade: "R-902+", brand: "Chemours", location: "Mumbai", price: 310, unit: "KG", change: -3.2, updatedAgo: "10 min ago", categoryId: "pigments-dyes" },
      { id: "pg2", name: "Titanium Dioxide", grade: "R-706", brand: "Chemours", location: "Delhi", price: 305, unit: "KG", change: -2.8, updatedAgo: "10 min ago", categoryId: "pigments-dyes" },
      { id: "pg3", name: "Iron Oxide Red", grade: "130M", brand: "Lanxess", location: "Chennai", price: 85, unit: "KG", change: 0.8, updatedAgo: "25 min ago", categoryId: "pigments-dyes" },
      { id: "pg4", name: "Carbon Black", grade: "N330", brand: "Birla Carbon", location: "Kolkata", price: 120, unit: "KG", change: 1.5, updatedAgo: "40 min ago", categoryId: "pigments-dyes" },
      { id: "pg5", name: "Organic Yellow Pigment", grade: "PY-83", brand: "Heubach", location: "Ahmedabad", price: 450, unit: "KG", change: -1.0, updatedAgo: "1 hr ago", categoryId: "pigments-dyes" },
      { id: "pg6", name: "Metallic Silver Pigment", grade: "MS-200", brand: "Eckart", location: "Bangalore", price: 890, unit: "KG", change: 0.3, updatedAgo: "2 hrs ago", categoryId: "pigments-dyes" },
    ],
    "hardeners": [
      { id: "hd1", name: "TGIC Hardener", grade: "PT-810", brand: "Huntsman", location: "Mumbai", price: 520, unit: "KG", change: 2.5, updatedAgo: "20 min ago", categoryId: "hardeners" },
      { id: "hd2", name: "Primid XL-552", grade: "XL-552", brand: "EMS-Chemie", location: "Delhi", price: 680, unit: "KG", change: -1.0, updatedAgo: "35 min ago", categoryId: "hardeners" },
      { id: "hd3", name: "DICY Hardener", grade: "D-100", brand: "Evonik", location: "Chennai", price: 380, unit: "KG", change: 0.7, updatedAgo: "1 hr ago", categoryId: "hardeners" },
      { id: "hd4", name: "Phenolic Hardener", grade: "PH-300", brand: "Hexion", location: "Pune", price: 420, unit: "KG", change: -2.1, updatedAgo: "2 hrs ago", categoryId: "hardeners" },
    ],
    "additives": [
      { id: "ad1", name: "Flow Agent", grade: "Resiflow PV-88", brand: "Estron", location: "Mumbai", price: 950, unit: "KG", change: 0.5, updatedAgo: "18 min ago", categoryId: "additives" },
      { id: "ad2", name: "Degassing Agent", grade: "Benzoin", brand: "Estron", location: "Delhi", price: 780, unit: "KG", change: -0.3, updatedAgo: "30 min ago", categoryId: "additives" },
      { id: "ad3", name: "Texturing Agent", grade: "TX-500", brand: "Troy", location: "Ahmedabad", price: 1100, unit: "KG", change: 1.8, updatedAgo: "45 min ago", categoryId: "additives" },
      { id: "ad4", name: "Anti-Cratering Agent", grade: "AC-300", brand: "BYK", location: "Chennai", price: 1250, unit: "KG", change: 0.2, updatedAgo: "1 hr ago", categoryId: "additives" },
      { id: "ad5", name: "Wax Additive", grade: "Ceraflour 950", brand: "BYK", location: "Bangalore", price: 860, unit: "KG", change: -1.5, updatedAgo: "2 hrs ago", categoryId: "additives" },
    ],
    "fillers": [
      { id: "fl1", name: "Calcium Carbonate", grade: "10 Micron", brand: "Omya", location: "Rajasthan", price: 12, unit: "KG", change: 0.0, updatedAgo: "30 min ago", categoryId: "fillers" },
      { id: "fl2", name: "Barium Sulfate", grade: "B-100", brand: "Solvay", location: "Mumbai", price: 45, unit: "KG", change: -0.5, updatedAgo: "1 hr ago", categoryId: "fillers" },
      { id: "fl3", name: "Precipitated Silica", grade: "S-200", brand: "Evonik", location: "Delhi", price: 120, unit: "KG", change: 1.0, updatedAgo: "2 hrs ago", categoryId: "fillers" },
      { id: "fl4", name: "Talc Powder", grade: "T-Micro", brand: "Imerys", location: "Udaipur", price: 18, unit: "KG", change: 0.2, updatedAgo: "3 hrs ago", categoryId: "fillers" },
    ],
    "matting-agents": [
      { id: "ma1", name: "Silica Matting Agent", grade: "OK-412", brand: "Evonik", location: "Mumbai", price: 680, unit: "KG", change: -1.2, updatedAgo: "25 min ago", categoryId: "matting-agents" },
      { id: "ma2", name: "Wax-Based Matting", grade: "Ceraflour 988", brand: "BYK", location: "Delhi", price: 920, unit: "KG", change: 0.8, updatedAgo: "45 min ago", categoryId: "matting-agents" },
      { id: "ma3", name: "PTFE Matting Agent", grade: "MP-1000", brand: "Shamrock", location: "Chennai", price: 1450, unit: "KG", change: 2.0, updatedAgo: "1 hr ago", categoryId: "matting-agents" },
    ],
    "processing-equipment": [
      { id: "eq1", name: "Twin Screw Extruder", grade: "TSE-30", brand: "Coperion", location: "Mumbai", price: 850000, unit: "Unit", change: 0.0, updatedAgo: "1 day ago", categoryId: "processing-equipment" },
      { id: "eq2", name: "ACM Grinding Mill", grade: "ACM-20", brand: "Hosokawa", location: "Delhi", price: 620000, unit: "Unit", change: 0.0, updatedAgo: "1 day ago", categoryId: "processing-equipment" },
      { id: "eq3", name: "Electrostatic Spray Gun", grade: "OptiFlex F", brand: "Gema", location: "Bangalore", price: 45000, unit: "Unit", change: -2.0, updatedAgo: "3 hrs ago", categoryId: "processing-equipment" },
      { id: "eq4", name: "Powder Curing Oven", grade: "PCO-500", brand: "Thermax", location: "Pune", price: 380000, unit: "Unit", change: 1.5, updatedAgo: "1 day ago", categoryId: "processing-equipment" },
    ],
  };
  return data;
};

export const productsByCategory = generateProducts();
