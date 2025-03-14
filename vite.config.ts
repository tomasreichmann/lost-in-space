import path from "path";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkUnwrapImages from "remark-unwrap-images";
import remarkImages from "remark-images";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  define: {
    // Create a global variable with the absolute path to the app folder
    __APP_ABSOLUTE_PATH__: JSON.stringify(path.resolve(__dirname, "app")),
  },
  plugins: [
    tailwindcss(),
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkImages,
        remarkUnwrapImages,
      ],
      providerImportSource: "@mdx-js/react",
    }),
    reactRouter(),
    tsconfigPaths(),
  ],
});
