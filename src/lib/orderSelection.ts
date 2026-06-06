export interface OrderSelection {
  categoryId?: string;
  categoryName?: string;
  productName?: string;
  industryId?: string;
  industryName?: string;
  colorSystem?: "RAL Classic" | "Pantone" | "Color Search";
  colorCode?: string;
  colorName?: string;
  colorHex?: string;
}

const KEY = "order_selection";

export const getSelection = (): OrderSelection => {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
};

export const setSelection = (patch: Partial<OrderSelection>) => {
  const next = { ...getSelection(), ...patch };
  sessionStorage.setItem(KEY, JSON.stringify(next));
};

export const clearSelection = () => sessionStorage.removeItem(KEY);
