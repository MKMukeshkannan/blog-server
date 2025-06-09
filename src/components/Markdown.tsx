import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { KatexOptions } from "katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeMathjax from "rehype-mathjax";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeKatex from "rehype-katex";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

type MarkdownRendererProps = {
  children: string;
};

export function MarkdownRenderer({
  children: markdown,
}: MarkdownRendererProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkMath, remarkRehype, remarkParse]}
      rehypePlugins={[
        rehypeRaw,
        [
          rehypeKatex,
          {
            displayMode: true,
            output: "mathml",
          },
        ],
        rehypeStringify,
      ]}
      components={{
        code({
          node,
          inline,
          className,
          children: codeChildren,
          ...props
        }: any) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <SyntaxHighlighter
              showLineNumbers
              style={oneLight}
              PreTag="div"
              language={match[1]}
              {...props}
            >
              {String(codeChildren).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code
              className={`${className} bg-amber-200 text-pink-500 p-[2px] px-[5px] rounded-sm`}
              {...props}
            >
              {codeChildren}
            </code>
          );
        },

        p({ node, children, ...props }) {
          return (
            <p
              style={{ marginBottom: "0.5rem", whiteSpace: "pre-line" }}
              {...props}
            >
              {children}
            </p>
          );
        },
      }}
    >
      {String(markdown)}
    </Markdown>
  );
}
