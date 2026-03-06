"use client";

import MarkdownIt from "markdown-it";
import { useMemo } from "react";

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true
});

export default function MarkdownRenderer({ content }: { content: string }) {

  const rendered = useMemo(() => {
    return md.render(content || "");
  }, [content]);

  return (
    <div
      className="prose prose-sm max-w-none"
      dangerouslySetInnerHTML={{ __html: rendered }}
    />
  );
}
