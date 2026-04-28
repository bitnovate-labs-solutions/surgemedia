"use client";

import { useEffect, useRef, useState } from "react";

const ICONIFY_CDN = "https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js";
const PAGE_SOURCE = "/social-media-10.html";

function ensureScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.src = src;
  script.id = id;
  script.defer = true;
  document.head.appendChild(script);
}

export default function HomePage() {
  const [content, setContent] = useState("");
  const [inlineScripts, setInlineScripts] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      const response = await fetch(PAGE_SOURCE);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      ensureScript(ICONIFY_CDN, "iconify-cdn-loader");

      const customStyles = Array.from(doc.head.querySelectorAll("style"));
      customStyles.forEach((styleElement, index) => {
        const id = `converted-inline-style-${index}`;
        if (document.getElementById(id)) return;
        const styleTag = document.createElement("style");
        styleTag.id = id;
        styleTag.textContent = styleElement.textContent;
        document.head.appendChild(styleTag);
      });

      const fontLinks = Array.from(
        doc.head.querySelectorAll<HTMLLinkElement>('link[rel="preconnect"], link[rel="stylesheet"]')
      );
      fontLinks.forEach((link, index) => {
        const href = link.getAttribute("href");
        if (!href) return;
        const id = `converted-link-${index}`;
        if (document.getElementById(id)) return;
        const linkTag = document.createElement("link");
        linkTag.id = id;
        linkTag.rel = link.rel;
        linkTag.href = href;
        if (link.crossOrigin) linkTag.crossOrigin = link.crossOrigin;
        document.head.appendChild(linkTag);
      });

      const scripts = Array.from(doc.body.querySelectorAll("script")).map((script) =>
        script.textContent ? script.textContent.trim() : ""
      );
      const bodyWithoutScripts = doc.body.cloneNode(true) as HTMLBodyElement;
      bodyWithoutScripts.querySelectorAll("script").forEach((script) => script.remove());

      if (!isMounted) return;
      setContent(bodyWithoutScripts.innerHTML);
      setInlineScripts(scripts);
    };

    load().catch((error) => {
      console.error("Failed to load converted page:", error);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!content || !containerRef.current) return;

    // Execute extracted inline scripts only after injected markup is mounted.
    inlineScripts.forEach((scriptContent, index) => {
      if (!scriptContent) return;
      const id = `converted-inline-script-${index}`;
      const existing = document.getElementById(id);
      if (existing) existing.remove();
      const scriptTag = document.createElement("script");
      scriptTag.id = id;
      scriptTag.text = scriptContent;
      document.body.appendChild(scriptTag);
    });
  }, [content, inlineScripts]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: content }} />;
}
