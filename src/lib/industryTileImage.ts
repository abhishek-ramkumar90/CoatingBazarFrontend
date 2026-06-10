import Agriculture from "@/assets/images/industry/Agriculture.png";
import Architectural from "@/assets/images/industry/Architectural.png";
import Automotive from "@/assets/images/industry/Automotive.png";
import Furniture from "@/assets/images/industry/Furniture.png";
import GeneralIndustry from "@/assets/images/industry/General_Industry.png";
import Genset from "@/assets/images/industry/Genset.png";
import HomeAppliance from "@/assets/images/industry/Home_Appliance.png";
import Industrial from "@/assets/images/industry/Industrial.png";

/** Industry id → local image */
const INDUSTRY_IMAGE_MAP: Record<string, string> = {
  "general-industry": GeneralIndustry,
  "agriculture": Agriculture,
  "home-appliance": HomeAppliance,
  "industrial": Industrial,
  "architectural": Architectural,
  "automotive": Automotive,
  "furniture": Furniture,
  "genset": Genset,
};

export const getIndustryTileImage = (industryId: string): string => {
  return INDUSTRY_IMAGE_MAP[industryId] ?? GeneralIndustry;
};

