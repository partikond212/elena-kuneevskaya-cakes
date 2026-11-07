import React, { type FC } from "react";
import styles from "./Header.module.css";
import HeaderNavLink from "../ui/header-nav-button/HeaderNavLink";
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <a href="#" className={styles.logo}>
            Мастерская Елены
          </a>
          <nav className={styles.headerNav}>
            <HeaderNavLink text={"Торты"} goTo={"catalog"} />
            <HeaderNavLink text={"Начинки"} goTo={"fillings"} />
            <HeaderNavLink text={"Отзывы"} goTo={"reviews"} />
            <HeaderNavLink
              text={"Заказать"}
              goTo={"order"}
              className="orderLink"
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
