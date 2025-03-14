import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Action } from "../dialogue/Action";
import { Text } from "./Text";

// Custom components to be used in MDX
const mdxComponents = {
  Action, // Add other custom components here
  Text,
  h1: (props: React.ComponentProps<"h1">) => (
    <h1 className="text-2xl font-bold mb-4" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => <p className="mb-3" {...props} />,
};

interface MdxArticleProps {
  content: React.ComponentType<any>;
  frontmatter?: Record<string, any>;
}

export const MdxArticle: React.FC<MdxArticleProps> = ({
  content: Content,
  frontmatter,
}) => {
  return (
    <article className="mdx-article p-4 max-w-prose mx-auto">
      {frontmatter && (
        <div className="article-metadata mb-6">
          {frontmatter && (
            <pre className="metadata-pre mb-4">
              {JSON.stringify(frontmatter, null, 2)}
            </pre>
          )}
        </div>
      )}

      <MDXProvider components={mdxComponents}>
        <Content />
      </MDXProvider>
    </article>
  );
};
