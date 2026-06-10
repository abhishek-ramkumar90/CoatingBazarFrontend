import Alkyd from "@/assets/images/Alkyd.png";
import AntiBacterial from "@/assets/images/Anti_Bacterial.png";
import AntiGraffiti from "@/assets/images/Anti_Graffiti.png";
import AntiMicrobial from "@/assets/images/Anti_Microbial.png";
import BarrelCoating from "@/assets/images/Barrel_Coating.png";
import ElectroPhoretic from "@/assets/images/Electro_Phoretic.png";
import Enamel from "@/assets/images/Enamel.png";
import EpoxyCoatings from "@/assets/images/Epoxy_Coatings.png";
import EpoxyPolyester from "@/assets/images/Epoxy_Polyester.png";
import FastCure from "@/assets/images/Fast_Cure.png";
import FusionBonded from "@/assets/images/Fusion_Bonded.png";
import HeatResistant from "@/assets/images/Heat_Resistant.png";
import MonoCoatDTM from "@/assets/images/Mono_Coat_DTM.png";
import NC from "@/assets/images/NC.png";
import Polyurethanes1K from "@/assets/images/Polyurethanes_1K.png";
import Polyurethanes2K from "@/assets/images/Polyurethanes_2K.png";
import ProtectiveCoatings from "@/assets/images/Protective_Coatings.png";
import PU from "@/assets/images/PU.png";
import PureEpoxy from "@/assets/images/Pure_Epoxy.png";
import PurePolyester from "@/assets/images/Pure_Polyester.png";
import QuickDrying from "@/assets/images/Quick_Drying_QD.png";
import RedOxide from "@/assets/images/Red_Oxide.png";
import Silicone from "@/assets/images/Silicone.png";
import Softfeel from "@/assets/images/Softfeel.png";
import Stoving from "@/assets/images/Stoving.png";
import SuperDurable from "@/assets/images/Super_Durable.png";
import Thinners from "@/assets/images/Thinners.png";
import TPAThermoplastic from "@/assets/images/TPA_Thermoplastic.png";
import TSA from "@/assets/images/TSA.png";
import TSAThermosetting from "@/assets/images/TSA_Thermosetting.png";
import UVCurable from "@/assets/images/UV_Curable.png";
import ZincChromatePrimers from "@/assets/images/Zinc_Chromate_Primers.png";
import ZincFlakeCoating from "@/assets/images/Zinc_Flake_Coating.png";
import ZincRichPrimers from "@/assets/images/Zinc_Rich_Primers.png";

/** Exact product name (lowercase) → local image */
const PRODUCT_IMAGE_MAP: Record<string, string> = {
  "epoxy polyster": EpoxyPolyester,
  "pure polyster": PurePolyester,
  "pure epoxy": PureEpoxy,
  "anti-microbial": AntiMicrobial,
  "heat resistant": HeatResistant,
  "fast cure": FastCure,
  "fusion bonded": FusionBonded,
  "super durable": SuperDurable,
  "stoving": Stoving,
  "tsa": TSA,
  "pu": PU,
  "enamel": Enamel,
  "quick drying (qd)": QuickDrying,
  "thinners": Thinners,
  "epoxy coatings": EpoxyCoatings,
  "mono coat (dtm)": MonoCoatDTM,
  "protective coatings": ProtectiveCoatings,
  "zinc rich primers": ZincRichPrimers,
  "zinc chromate primers": ZincChromatePrimers,
  "red oxide": RedOxide,
  "alkyd": Alkyd,
  "anti bacterial": AntiBacterial,
  "anti graffiti": AntiGraffiti,
  "barrel coating": BarrelCoating,
  "electro phoretic": ElectroPhoretic,
  "nc": NC,
  "polyurethanes (1k)": Polyurethanes1K,
  "polyurethanes (2k)": Polyurethanes2K,
  "silicone": Silicone,
  "softfeel": Softfeel,
  "tpa (thermoplastic acrylic)": TPAThermoplastic,
  "tsa (thermosetting acrylic)": TSAThermosetting,
  "uv curable": UVCurable,
  "zink flake coating": ZincFlakeCoating,
};

export const getProductTileImage = (productName: string): string => {
  const key = productName.toLowerCase().trim();
  return PRODUCT_IMAGE_MAP[key] ?? EpoxyPolyester;
};
