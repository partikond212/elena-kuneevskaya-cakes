import { mkdirSync, writeFileSync, copyFileSync } from "node:fs";
import { extname } from "node:path";
import { cakes, fillings } from "../data/data";

// "/cakes/ptichye_molochko.jpeg" → "ptichye-molochko"
const slugFromImage = (path: string) =>
  path.split("/").pop()!.replace(/\.\w+$/, "").replace(/_/g, "-");

// копирует /cakes/x.jpeg → public/cakes/<slug>/image.jpeg и возвращает новый путь для YAML
const moveImage = (oldPath: string, folder: "cakes" | "fillings", slug: string) => {
  const ext = extname(oldPath);
  mkdirSync(`public/${folder}/${slug}`, { recursive: true });
  copyFileSync(`public${oldPath}`, `public/${folder}/${slug}/image${ext}`);
  return `/${folder}/${slug}/image${ext}`;
};

mkdirSync("content/cakes", { recursive: true });
for (const c of cakes) {
  const slug = slugFromImage(c.image);
  const image = moveImage(c.image, "cakes", slug);
  const yaml = [
    `title: ${JSON.stringify(c.title)}`,
    `price: ${c.price}`,
    `unitValue: ${c.unitValue}`,
    `image: ${JSON.stringify(image)}`,
    `categories:`,
    ...c.categories.map((cat) => `  - ${cat}`),
  ].join("\n");
  writeFileSync(`content/cakes/${slug}.yaml`, yaml + "\n");
}

mkdirSync("content/fillings", { recursive: true });
for (const f of fillings) {
  const slug = slugFromImage(f.image);
  const image = moveImage(f.image, "fillings", slug);
  const yaml = [
    `name: ${JSON.stringify(f.name)}`,
    `desc: ${JSON.stringify(f.desc)}`,
    `image: ${JSON.stringify(image)}`,
  ].join("\n");
  writeFileSync(`content/fillings/${slug}.yaml`, yaml + "\n");
}

