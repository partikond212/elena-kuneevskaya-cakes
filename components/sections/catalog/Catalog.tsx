import React, { type FC } from "react";
import styles from "./Catalog.module.css";
import { categories } from "@/data/data";
import CategoryBtn from "@/components/ui/category-btn/CategoryBtn";

const Catalog: FC = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Наши торты</h2>
        <p className="section-sub">
          Каждый торт собираем под ваш праздник: меняем начинку, размер и
          оформление.<em>Количество слоёв</em> также можно изменить
        </p>
        <div className={styles.categories}>
          {categories.map((cat) => (
            <CategoryBtn key={cat.value} value={cat.value} title={cat.title} />
          ))}
        </div>
        {/*Категории десертов*/}
      </div>
    </section>
  );
};

export default Catalog;
