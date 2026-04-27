import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Accordion, Accordions } from "@/components/ui/accordion";

import { createGenerator } from "fumadocs-typescript";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import * as TabsComponents from "fumadocs-ui/components/tabs";

import { ImageZoom } from "fumadocs-ui/components/image-zoom";
const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    ...TabsComponents,
    Accordion,
    Accordions,
    a: (props) => {
      const href = props.href ?? "";
      const isExternal = href.startsWith("http") || href.startsWith("mailto:");
      if (isExternal) {
        return (
          <a
            {...props}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline decoration-blue-600 dark:decoration-blue-400"
          >
            {props.children}
          </a>
        );
      }
      return (
        <a
          {...props}
          className="text-blue-600 dark:text-blue-400 hover:underline decoration-blue-600 dark:decoration-blue-400"
        >
          {props.children}
        </a>
      );
    },
    img: (props) => <ImageZoom {...(props as any)} loading="lazy" />,
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock keepBackground {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    ...components,
  };
}
