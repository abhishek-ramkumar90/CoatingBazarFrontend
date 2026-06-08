import { categories, Category } from "@/data/categories";
import { LucideIcon } from "lucide-react";

export interface CategoryWithIcon extends Category {
  icon: LucideIcon;
}

export const useCategories = () => {
  const categoriesWithIcons: CategoryWithIcon[] = categories.map((cat) => ({
    ...cat,
    icon: cat.icon,
  }));

  return {
    data: categoriesWithIcons,
    isLoading: false,
    error: null,
  };
};
