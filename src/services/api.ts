const API_BASE_URL = "http://localhost:8081/api";

export interface ApiCategory {
  id: string;
  name: string;
  description: string;
  productCount: number;
  subcategories: string[];
}

export const fetchCategories = async (): Promise<ApiCategory[]> => {
  const response = await fetch(`${API_BASE_URL}/categories`);
  if (!response.ok) throw new Error("Failed to fetch categories");
  return response.json();
};
