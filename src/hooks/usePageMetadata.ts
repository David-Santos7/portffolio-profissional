import { useEffect } from "react";

interface PageMetadata {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

const siteUrl = "https://davidss.com.br";

function setMetaContent(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
}

export function usePageMetadata({ title, description, path, noIndex = false }: PageMetadata) {
  useEffect(() => {
    const canonicalUrl = new URL(path, siteUrl).toString();

    document.title = title;
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[name="robots"]', noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
  }, [description, noIndex, path, title]);
}
