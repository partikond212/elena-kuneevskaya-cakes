import Header from "@/components/header/Header";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <>
      <Header /> {/*Шапка сайта*/}
      <main className="MainPageContent">
        {/*Весь контент*/}
        <Hero /> {/*Главный экран*/}
      </main>
    </>
  );
}
