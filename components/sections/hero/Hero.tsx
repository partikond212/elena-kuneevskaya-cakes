import React, { type FC } from "react";
import styles from "@/components/sections/hero/Hero.module.css";
import HeaderNavLink from "@/components/ui/header-nav-button/HeaderNavLink";
import OrderCakeLink from "@/components/ui/check-catalog-link/CheckCatalogLink";
import heroCake from "../../../public/mainScreenCake.jpeg";
import Image from "next/image";
const Hero: FC = () => {
  return (
    <div className={styles.heroWrapper}>
      <section className={`container ${styles.heroContainer}`}>
        <div className={styles.leftSide}>
          {" "}
          {/*  левая часть главного экрана для информации и взаимодействия */}
          <div className={styles.hero_badge}>
            <span className={styles.stars}>★★★★★</span>
            5.0 · 226 оценок на Яндекс Картах
          </div>
          <h1 className={styles.heroTitle}>
            Торты,которые <em> хочется </em>
            попробовать первым
          </h1>
          <p className={styles.heroDescr}>
            Торты на заказ в станице Динской: на день рождения, свадьбу, бенто и
            капкейки. Натуральные сливки, свежие ягоды. Наилучший пятизвёздочный
            рейтинг на Яндекс Картах
          </p>
          <div className={styles.navLinks}>
            {/*ссылки на секции сайта*/}
            <HeaderNavLink
              goTo={"order"}
              text={"Заказать торт"}
              className={`orderLink ${styles.orderCake}`}
            />
            <OrderCakeLink
              goTo={"catalog"}
              text={"Смотреть каталог"}
              className={`CheckCatalogLink `}
            />
          </div>
        </div>
        <div className={styles.rightSide}>
          <Image
            src={heroCake}
            alt="Торт Елены Кунеевской для главного экрана странички"
            preload={true}
            className={styles.mainScreenCake}
            fill
          />
          {/*Изображение торта на главный экран */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
