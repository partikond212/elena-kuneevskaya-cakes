import Catalog from "@/components/sections/catalog/Catalog";
import Fillings from "@/components/sections/fillings/Fillings";
import Hero from "@/components/sections/hero/Hero";
import Order from "@/components/sections/order/Order";
import Reviews from "@/components/sections/reviews/Reviews";
import BakeryJsonLd from "@/components/seo/BakeryJsonLd";
import { getCakes, getFillings } from "@/lib/content";
import type { Metadata } from "next";

// canonical — только у конкретной страницы, а не в корневом layout:
// там относительный "/" заставляет Next вычислять адрес для каждого маршрута,
// и динамическая /keystatic/[[...params]] ломает сборку
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function Home() {
  const cakes = await getCakes();
  const fillings = await getFillings();
  return (
    <>
      {/*Весь контент*/}
      <BakeryJsonLd />
      <Hero /> {/*Главный экран*/}
      <Catalog cakes={cakes} /> {/*Каталог тортов*/}
      <Fillings fillings={fillings} /> {/*начинки*/}
      <Reviews />
      {/*Отзывы*/}
      <Order cakes={cakes} fillings={fillings} />
      {/*Форма заказа тортов*/}
    </>
  );
}
