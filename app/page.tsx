import Header from "@/components/header/Header";
import Catalog from "@/components/sections/catalog/Catalog";
import Hero from "@/components/sections/hero/Hero";

//TODO:Нужно будет не забыть про эффект скрытия предыдущего контента на странице при скролле
export default function Home() {
  return (
    <>
      <Header /> {/*Шапка сайта*/}
      <main className="mainPageContent">
        {/*Весь контент*/}
        <Hero /> {/*Главный экран*/}
        <Catalog /> {/*Каталог тортов*/}
      </main>
    </>
  );
}
