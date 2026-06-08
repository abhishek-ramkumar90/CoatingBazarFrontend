import {
  Sprout, Building2, Home, Factory, Hammer, Car, Sofa, Zap,
  LucideIcon,
} from "lucide-react";

export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  { id: "general-industry", name: "General Industry", icon: Factory },
  { id: "agriculture", name: "Agriculture", icon: Sprout },
  { id: "home-appliance", name: "Home Appliance", icon: Home },
  { id: "industrial", name: "Industrial", icon: Hammer },
  { id: "architectural", name: "Architectural", icon: Building2 },
  { id: "automotive", name: "Automotive", icon: Car },
  { id: "furniture", name: "Furniture", icon: Sofa },
  { id: "genset", name: "Genset", icon: Zap }

];
