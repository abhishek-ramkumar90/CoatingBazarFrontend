interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  noIndex?: boolean;
}

const upsertMeta = (selector: string, attrs: Record<string, string>, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attrs).forEach(([key, value]) => tag?.setAttribute(key, value));
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

export const setSeoMetadata = ({ title, description, keywords, canonicalPath, noIndex }: SeoMetadata) => {
  document.title = title;

  upsertMeta('meta[name="description"]', { name: "description" }, description);
  upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
  upsertMeta('meta[property="og:description"]', { property: "og:description" }, description);
  upsertMeta('meta[property="og:type"]', { property: "og:type" }, "website");
  upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
  upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);

  if (keywords?.length) {
    upsertMeta('meta[name="keywords"]', { name: "keywords" }, keywords.join(", "));
  }

  if (canonicalPath) {
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }

    link.setAttribute("href", `${window.location.origin}${canonicalPath}`);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, `${window.location.origin}${canonicalPath}`);
  }

  if (noIndex) {
    upsertMeta('meta[name="robots"]', { name: "robots" }, "noindex, nofollow");
  } else {
    upsertMeta('meta[name="robots"]', { name: "robots" }, "index, follow");
  }
};

export const setJsonLd = (id: string, data: unknown) => {
  let scriptTag = document.head.querySelector<HTMLScriptElement>(`script[data-ld-id="${id}"]`);

  if (!scriptTag) {
    scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.setAttribute("data-ld-id", id);
    document.head.appendChild(scriptTag);
  }

  scriptTag.textContent = JSON.stringify(data);
};

export const removeJsonLd = (id: string) => {
  const scriptTag = document.head.querySelector<HTMLScriptElement>(`script[data-ld-id="${id}"]`);
  scriptTag?.remove();
};

