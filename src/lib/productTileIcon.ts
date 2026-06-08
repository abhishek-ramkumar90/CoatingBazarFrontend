import {
  FlaskConical,
  Layers,
  Paintbrush,
  Palette,
  Droplets,
  Sparkles,
  Package,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const PRODUCT_ICON_RULES: Array<{ pattern: RegExp; icon: LucideIcon }> = [
  { pattern: /(quick|fast|electro|uv|heat)/i, icon: Zap },
  { pattern: /(fusion|bonded|polyester|polyureth|mono coat|dtm)/i, icon: Layers },
  { pattern: /(paint|coat|coating|enamel|oxide|alkyd|stoving|tpa|tsa|zink|zinc)/i, icon: Paintbrush },
  { pattern: /(silicone|softfeel|metallic|galaxy|antique)/i, icon: Palette },
  { pattern: /(thinner|epoxy|nc)/i, icon: FlaskConical },
  { pattern: /(anti|protective|durable|primer)/i, icon: Sparkles },
  { pattern: /(barrel)/i, icon: Package },
  { pattern: /(pu|transparent|liquid)/i, icon: Droplets },
  { pattern: /(texture|structure|crinkle|smooth|gloss)/i, icon: Wrench },
];

export const getProductTileIcon = (productName: string): LucideIcon => {
  const rule = PRODUCT_ICON_RULES.find(({ pattern }) => pattern.test(productName));
  return rule?.icon ?? FlaskConical;
};

