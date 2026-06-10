import LiquidPaintsTile from "@/assets/images/Category/liquid_paints_tile.png";
import PowderCoatingTile from "@/assets/images/Category/powder_coating_tile.png";

/** Category id -> local image */
const CATEGORY_IMAGE_MAP: Record<string, string> = {
  "powder-coating": PowderCoatingTile,
  "liquid-paints": LiquidPaintsTile,
};

export const getCategoryTileImage = (categoryId: string): string => {
  return CATEGORY_IMAGE_MAP[categoryId] ?? PowderCoatingTile;
};

