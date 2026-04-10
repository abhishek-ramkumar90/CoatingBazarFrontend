import { useQuery } from "@tanstack/react-query";
import { fetchCategories, ApiCategory } from "@/services/api";
import { Beaker, Palette, Zap, Layers, Sparkles, Box, Eye, Cog, LucideIcon, HelpCircle } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "epoxy-resins": Beaker,
  "polyester-resins": Layers,
  "pigments-dyes": Palette,
  "hardeners": Zap,
  "additives": Sparkles,
  "fillers": Box,
  "matting-agents": Eye,
  "processing-equipment": Cog,
};

export interface CategoryWithIcon extends ApiCategory {
  icon: LucideIcon;
}

export const useCategories = () => {
  return useQuery<CategoryWithIcon[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await fetchCategories();
      return data.map((cat) => ({
        ...cat,
        icon: iconMap[cat.id] || HelpCircle,
      }));
    },
  });
};
