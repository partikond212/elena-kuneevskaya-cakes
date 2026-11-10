import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Catalog from "@/components/sections/catalog/Catalog";
import Fillings from "@/components/sections/fillings/Fillings";
import Hero from "@/components/sections/hero/Hero";

//TODO:Нужно будет не забыть про эффект скрытия предыдущего контента на странице при скролле ,а также анимацию появления
export default function Home() {
  return (
    <>
      <Header /> {/*Шапка сайта*/}
      <main className="mainPageContent">
        {/*Весь контент*/}
        <Hero /> {/*Главный экран*/}
        <Catalog /> {/*Каталог тортов*/}
        <Fillings /> {/*начинки*/}
        {/*Надпсиь "Хотите убедиться сами? Зайдите к нам на яндекс Карты (и вставить ссылку)" для секции с отзывами*/}
        {/*Надпсиь "как к вам можно обратитться" для инпута с именем клиента для секции с формой заказа*/}
        {/*Также если не нашли  желаемого варианта торта,то можно сделать инпут для фотографий со своим вариантом торта*/}
        <Footer />
      </main>
    </>
  );
}
