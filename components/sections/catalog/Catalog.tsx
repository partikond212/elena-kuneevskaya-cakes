"use client";
import { useState, type FC } from "react";
import styles from "./Catalog.module.css";
import { AnimatePresence, motion } from "motion/react";
import { cakes, categories } from "@/data/data";
import CategoryBtn from "@/components/ui/category-btn/CategoryBtn";

import { CategoryValue } from "@/types";
import CakeCard from "./cake-card/CakeCard";

const Catalog: FC = () => {
  const [currentCategory, setCurrentCategory] = useState<CategoryValue>("all");
  const visibleCakes =
    currentCategory == "all"
      ? cakes
      : cakes.filter((c) => c.category === currentCategory);

  return (
    <section id="catalog">
      <div className="container">
        <h2 className="section-title">Наши торты</h2>
        <p className="section-sub">
          Каждый торт собираем под ваш праздник: меняем начинку, размер и
          оформление.<em>Количество слоёв</em> также можно изменить
        </p>
        {/*Категории десертов*/}
        <div className={styles.categories}>
          {categories.map((cat) => (
            <CategoryBtn
              key={cat.value}
              value={cat.value}
              title={cat.title}
              onClick={() => setCurrentCategory(cat.value)}
              isActive={currentCategory === cat.value ? true : false}
            />
          ))}
        </div>
        {/*Сами торты отсортированные по категориям*/}
        <motion.div className={styles.filteredCakes}>
          <AnimatePresence mode="popLayout">
            {visibleCakes.map((cake) => (
              <motion.div
                key={cake.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 22 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <CakeCard cake={cake} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Catalog;
