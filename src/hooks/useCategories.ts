import { categories, Category } from "@/data/categories";

export const useCategories = () => {
  const categoriesData: Category[] = categories;

  return {
    data: categoriesData,
    isLoading: false,
    error: null,
  };
};
