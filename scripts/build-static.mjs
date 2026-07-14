import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });

const paths = [
  "index.html",
  "styles.css",
  "assets",
  "solucoes",
  "sob-medida",
  "locacao",
  "contato",
  "politica-de-privacidade",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "manifest.webmanifest",
];

for (const path of paths) {
  await cp(path, `dist/${path}`, { recursive: true });
}

await mkdir("dist/scripts", { recursive: true });
await cp("scripts/site.js", "dist/scripts/site.js");
