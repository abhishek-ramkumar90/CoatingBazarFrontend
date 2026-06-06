import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { colornames } from "color-name-list";
import { Input } from "@/components/ui/input";
import { setSelection } from "@/lib/orderSelection";

type NamedColor = { name: string; hex: string };
const ALL: NamedColor[] = colornames as NamedColor[];

const isLight = (hex: string) => {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;
};

const ColorSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const pick = (c: NamedColor) => {
    setSelection({ colorSystem: "Color Search", colorCode: undefined, colorName: c.name, colorHex: c.hex });
    navigate("/checkout");
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const tokens = q.split(/\s+/).filter(Boolean);
    const matches = ALL.filter((c) => {
      const n = c.name.toLowerCase();
      return tokens.every((t) => n.includes(t));
    });
    return matches.slice(0, 120);
  }, [query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center text-center gap-3 py-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
          Find The Color You Love
        </h2>
        <p className="text-sm text-muted-foreground">
          Search thousands of colors by name (e.g. "aqua blue", "crimson red").
        </p>
        <div className="relative w-full max-w-xl mt-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Color name e.g. aqua blue"
            className="pl-9 h-11 rounded-full"
          />
        </div>
        {query.trim() && (
          <p className="text-sm text-primary">
            Found {results.length} color{results.length === 1 ? "" : "s"} for "{query.trim()}".
          </p>
        )}
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {results.map((c) => {
            const light = isLight(c.hex);
            return (
              <div
                key={c.name + c.hex}
                className="rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow bg-card"
              >
                <div
                  className="h-32 flex items-end p-2"
                  style={{ backgroundColor: c.hex, color: light ? "#000" : "#fff" }}
                >
                  <span className="text-xs font-medium opacity-80">
                    {c.hex.toUpperCase()}
                  </span>
                </div>
                <div className="p-3">
                  <div className="text-sm font-semibold text-foreground truncate">
                    {c.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : query.trim() ? (
        <p className="text-center text-sm text-muted-foreground py-8">
          No colors match your search. Try another name.
        </p>
      ) : null}
    </div>
  );
};

export default ColorSearch;
