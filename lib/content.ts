'use cache'
import { createReader } from "@keystatic/core/reader";
import config from "@/keystatic.config";
import type { Cake, Filling } from "@/types";


const reader = createReader(process.cwd(), config);

export async function getCakes(): Promise<Cake[]> {
  const entries = await reader.collections.cakes.all();
  return entries.map(({ slug, entry }) => ({
    id: slug,
    title: entry.title,
    price: entry.price,
    unitValue: entry.unitValue,
    image: entry.image,
    categories: [...entry.categories],
  }));
}

export async function getFillings(): Promise<Filling[]> {
  const entries = await reader.collections.fillings.all();
  return entries.map(({ slug, entry }) => ({
    slug,
    name: entry.name,
    desc: entry.desc,
    image: entry.image,
  }));
}
