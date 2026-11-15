import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Catalog from "@/components/sections/catalog/Catalog";
import Fillings from "@/components/sections/fillings/Fillings";
import Hero from "@/components/sections/hero/Hero";
import Order from "@/components/sections/order/Order";
import Reviews from "@/components/sections/reviews/Reviews";
import { getCakes, getFillings } from "@/lib/content";

export default async function Home() {
  const cakes = await getCakes();
  const fillings = await getFillings();
  return (
    <>
      <Header /> {/*Шапка сайта*/}
      <main className="mainPageContent">
        {/*Весь контент*/}
        <Hero /> {/*Главный экран*/}
        <Catalog cakes={cakes} /> {/*Каталог тортов*/}
        <Fillings fillings={fillings} /> {/*начинки*/}
        <Reviews />
        {/*Отзывы*/}
        <Order />
        {/*Форма заказа тортов*/}
        {/*Надпсиь "Хотите убедиться сами? Зайдите к нам на яндекс Карты (и вставить ссылку)" для секции с отзывами*/}
        {/*Надпсиь "как к вам можно обратитться" для инпута с именем клиента для секции с формой заказа*/}
        {/*Также если не нашли  желаемого варианта торта,то можно сделать инпут для фотографий со своим вариантом торта*/}
        <Footer /> {/*Подвал сайта и доп инфа*/}
      </main>
    </>
  );
}
