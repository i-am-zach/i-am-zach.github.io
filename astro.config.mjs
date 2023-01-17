import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeSlug from "rehype-slug"
import rehypeToc from "rehype-toc"


// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://i-am-zach.github.io",
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeToc, { headings: ["h1", "h2"] }],
    ],
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
