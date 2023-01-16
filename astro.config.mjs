import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://i-am-zach.github.io",
  markdown: {
    rehypePlugins: [
      "rehype-slug",
      ["rehype-autolink-headings", { behavior: "append" }],
      ["rehype-toc", { headings: ["h1", "h2"] }],
    ],
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
