import { useEffect } from "react";
import { removeJsonLd, setJsonLd, setSeoMetadata } from "@/lib/seo";

interface SeoJsonLdEntry {
  id: string;
  data: unknown;
}

interface UseSeoOptions {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string[];
  noIndex?: boolean;
  jsonLd?: SeoJsonLdEntry[];
}

export const useSeo = ({
  title,
  description,
  canonicalPath,
  keywords,
  noIndex,
  jsonLd,
}: UseSeoOptions) => {
  const keywordsKey = keywords?.join("|") ?? "";
  const jsonLdKey = JSON.stringify(jsonLd ?? []);

  useEffect(() => {
    setSeoMetadata({
      title,
      description,
      canonicalPath,
      keywords,
      noIndex,
    });

    jsonLd?.forEach((entry) => setJsonLd(entry.id, entry.data));

    return () => {
      jsonLd?.forEach((entry) => removeJsonLd(entry.id));
    };
  }, [canonicalPath, description, jsonLdKey, keywordsKey, noIndex, title]);
};

