import React, { type FC } from "react";
import styles from "./Header.module.css";
import HeaderNavLink from "../ui/header-nav-button/HeaderNavLink";
import ClickSpark from "../ui/click-spak/ClickSpark";
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <a href="#" className={styles.logo}>
            Мастерская Елены
          </a>

          <nav className={styles.headerNav}>
            <ClickSpark
              sparkColor={["#b8414f", "#e8a0a0"]}
              shape="star"
              sparkCount={10}
              sparkRadius={40}
              duration={700}
              className={`orderLink `}
              style={{ width: "auto", height: "auto" }}
            >
              <HeaderNavLink text={"Торты"} goTo={"catalog"} />
            </ClickSpark>
            <ClickSpark
              sparkColor={["#b8414f", "#e8a0a0"]}
              shape="star"
              sparkCount={10}
              sparkRadius={40}
              duration={700}
              className={`orderLink `}
              style={{ width: "auto", height: "auto" }}
            >
              <HeaderNavLink text={"Начинки"} goTo={"fillings"} />
            </ClickSpark>
            <ClickSpark
              sparkColor={["#b8414f", "#e8a0a0"]}
              shape="star"
              sparkCount={10}
              sparkRadius={40}
              duration={700}
              className={`orderLink `}
              style={{ width: "auto", height: "auto" }}
            >
              <HeaderNavLink text={"Отзывы"} goTo={"reviews"} />
            </ClickSpark>
            <ClickSpark
              sparkColor={["#b8414f", "#e8a0a0"]}
              shape="star"
              sparkCount={10}
              sparkRadius={40}
              duration={700}
              className={`orderLink `}
              style={{ width: "auto", height: "auto" }}
            >
              <HeaderNavLink text={"Заказать"} goTo={"order"} />
            </ClickSpark>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
