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
    "powder-coating": [
      { id: "pc1", name: "Epoxy Polyster", grade: "EP-100", brand: "Huntsman", location: "Mumbai", price: 285, unit: "KG", change: -2.1, updatedAgo: "23 min ago", categoryId: "powder-coating" },
      { id: "pc2", name: "Pure Polyster", grade: "PP-200", brand: "Huntsman", location: "Delhi", price: 290, unit: "KG", change: -1.8, updatedAgo: "23 min ago", categoryId: "powder-coating" },
      { id: "pc3", name: "Pure Epoxy", grade: "PE-150", brand: "Atul Ltd", location: "Ahmedabad", price: 320, unit: "KG", change: 1.5, updatedAgo: "45 min ago", categoryId: "powder-coating" },
      { id: "pc4", name: "Anti-Microbial", grade: "AM-50", brand: "Kukdo Chemical", location: "Chennai", price: 265, unit: "KG", change: -0.8, updatedAgo: "1 hr ago", categoryId: "powder-coating" },
      { id: "pc5", name: "Heat Resistant", grade: "HR-300", brand: "Hexion", location: "Bangalore", price: 310, unit: "KG", change: 2.3, updatedAgo: "2 hrs ago", categoryId: "powder-coating" },
      { id: "pc6", name: "Fast Cure", grade: "FC-75", brand: "BASF", location: "Pune", price: 340, unit: "KG", change: 0.5, updatedAgo: "3 hrs ago", categoryId: "powder-coating" },
      { id: "pc7", name: "Fusion Bonded", grade: "FB-250", brand: "Kukdo", location: "Kolkata", price: 275, unit: "KG", change: 1.2, updatedAgo: "15 min ago", categoryId: "powder-coating" },
      { id: "pc8", name: "Super Durable", grade: "SD-400", brand: "Allnex", location: "Mumbai", price: 355, unit: "KG", change: 0.9, updatedAgo: "1 hr ago", categoryId: "powder-coating" },
    ],
    "liquid-paints": [
      { id: "lp1", name: "STOVING", grade: "STV-100", brand: "Sherwin Williams", location: "Mumbai", price: 230, unit: "KG", change: 1.2, updatedAgo: "15 min ago", categoryId: "liquid-paints" },
      { id: "lp2", name: "TSA", grade: "TSA-200", brand: "Kansai Nerolac", location: "Delhi", price: 245, unit: "KG", change: 1.5, updatedAgo: "15 min ago", categoryId: "liquid-paints" },
      { id: "lp3", name: "PU", grade: "PU-150", brand: "Berger", location: "Ahmedabad", price: 255, unit: "KG", change: -0.5, updatedAgo: "30 min ago", categoryId: "liquid-paints" },
      { id: "lp4", name: "ENAMEL", grade: "EN-300", brand: "Asian Paints", location: "Chennai", price: 275, unit: "KG", change: 3.1, updatedAgo: "1 hr ago", categoryId: "liquid-paints" },
      { id: "lp5", name: "QUICK DRYING (QD)", grade: "QD-80", brand: "ICI", location: "Bangalore", price: 240, unit: "KG", change: -1.2, updatedAgo: "2 hrs ago", categoryId: "liquid-paints" },
      { id: "lp6", name: "THINNERS", grade: "THN-50", brand: "Godrej", location: "Pune", price: 95, unit: "LTR", change: 0.8, updatedAgo: "1 hr ago", categoryId: "liquid-paints" },
      { id: "lp7", name: "Epoxy Coatings", grade: "EC-180", brand: "Jotun", location: "Kolkata", price: 320, unit: "KG", change: 2.1, updatedAgo: "45 min ago", categoryId: "liquid-paints" },
      { id: "lp8", name: "MONO COAT (DTM)", grade: "MC-160", brand: "Hempel", location: "Mumbai", price: 285, unit: "KG", change: -0.3, updatedAgo: "1 hr ago", categoryId: "liquid-paints" },
      { id: "lp9", name: "Protective Coatings", grade: "PC-200", brand: "PPG", location: "Delhi", price: 310, unit: "KG", change: 1.7, updatedAgo: "2 hrs ago", categoryId: "liquid-paints" },
      { id: "lp10", name: "zinc rich primers", grade: "ZP-120", brand: "Tnemec", location: "Chennai", price: 265, unit: "KG", change: -0.9, updatedAgo: "3 hrs ago", categoryId: "liquid-paints" },
      { id: "lp11", name: "zinc chromate primers", grade: "ZC-150", brand: "Rust-Oleum", location: "Bangalore", price: 280, unit: "KG", change: 1.4, updatedAgo: "1 hr ago", categoryId: "liquid-paints" },
      { id: "lp12", name: "Red oxide", grade: "RO-100", brand: "Lakhanpal", location: "Pune", price: 180, unit: "KG", change: 0.6, updatedAgo: "45 min ago", categoryId: "liquid-paints" },
      { id: "lp13", name: "alkyd", grade: "AK-180", brand: "Sikkens", location: "Kolkata", price: 225, unit: "KG", change: -1.1, updatedAgo: "2 hrs ago", categoryId: "liquid-paints" },
      { id: "lp14", name: "ANTI BACTERIAL", grade: "AB-90", brand: "Nippon", location: "Mumbai", price: 295, unit: "KG", change: 2.3, updatedAgo: "1 hr ago", categoryId: "liquid-paints" },
      { id: "lp15", name: "ANTI GRAFFITI", grade: "AG-110", brand: "Sto", location: "Delhi", price: 315, unit: "KG", change: 0.5, updatedAgo: "2 hrs ago", categoryId: "liquid-paints" },
      { id: "lp16", name: "BARREL COATING", grade: "BC-200", brand: "Kop-Coat", location: "Ahmedabad", price: 240, unit: "KG", change: -0.7, updatedAgo: "3 hrs ago", categoryId: "liquid-paints" },
      { id: "lp17", name: "ELECTRO PHORETIC", grade: "EP-160", brand: "Axalta", location: "Chennai", price: 350, unit: "KG", change: 1.8, updatedAgo: "1 hr ago", categoryId: "liquid-paints" },
      { id: "lp18", name: "NC", grade: "NC-140", brand: "Allnex", location: "Bangalore", price: 210, unit: "KG", change: -1.3, updatedAgo: "2 hrs ago", categoryId: "liquid-paints" },
      { id: "lp19", name: "POLYURETHANES (1K)", grade: "PU1K-180", brand: "Bayer", location: "Pune", price: 380, unit: "KG", change: 2.1, updatedAgo: "1 hr ago", categoryId: "liquid-paints" },
      { id: "lp20", name: "POLYURETHANES (2K)", grade: "PU2K-220", brand: "Basf", location: "Kolkata", price: 420, unit: "KG", change: 0.9, updatedAgo: "2 hrs ago", categoryId: "liquid-paints" },
      { id: "lp21", name: "SILICONE", grade: "SIL-150", brand: "Dowcorning", location: "Mumbai", price: 395, unit: "KG", change: 1.2, updatedAgo: "1 hr ago", categoryId: "liquid-paints" },
      { id: "lp22", name: "SOFTFEEL", grade: "SF-120", brand: "Akzo Nobel", location: "Delhi", price: 275, unit: "KG", change: -0.4, updatedAgo: "2 hrs ago", categoryId: "liquid-paints" },
      { id: "lp23", name: "TPA (THERMOPLASTIC ACRYLIC)", grade: "TPA-200", brand: "Eastman", location: "Ahmedabad", price: 285, unit: "KG", change: 1.5, updatedAgo: "1 hr ago", categoryId: "liquid-paints" },
      { id: "lp24", name: "TSA (THERMOSETTING ACRYLIC)", grade: "TSA-250", brand: "Huntsman", location: "Chennai", price: 310, unit: "KG", change: 0.8, updatedAgo: "2 hrs ago", categoryId: "liquid-paints" },
      { id: "lp25", name: "UV CURABLE", grade: "UVC-180", brand: "Radtech", location: "Bangalore", price: 340, unit: "KG", change: 2.2, updatedAgo: "1 hr ago", categoryId: "liquid-paints" },
      { id: "lp26", name: "ZINK FLAKE COATING", grade: "ZFC-160", brand: "Kop-Coat", location: "Pune", price: 325, unit: "KG", change: 0.7, updatedAgo: "2 hrs ago", categoryId: "liquid-paints" },
    ],
  };
  return data;
};

export const productsByCategory = generateProducts();
