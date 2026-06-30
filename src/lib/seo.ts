interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
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

export const setSeoMetadata = ({ title, description, keywords, canonicalPath }: SeoMetadata) => {
  document.title = title;

  upsertMeta('meta[name="description"]', { name: "description" }, description);
  upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
  upsertMeta('meta[property="og:description"]', { property: "og:description" }, description);

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

