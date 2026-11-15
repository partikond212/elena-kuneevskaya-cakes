"use client";
import { useState, type FC } from "react";
import styles from "./Catalog.module.css";
import { AnimatePresence, motion } from "motion/react";
import { categories } from "@/data/data";
import CategoryBtn from "@/components/ui/category-btn/CategoryBtn";

import { Cake, CategoryValue } from "@/types";
import CakeCard from "./cake-card/CakeCard";
import Reveal from "@/components/ui/reveal/Reveal";

type CatalogProps = { cakes: Cake[] };
const Catalog: FC<CatalogProps> = ({ cakes }) => {
  const [currentCategory, setCurrentCategory] = useState<CategoryValue>("all");

  const visibleCakes =
    currentCategory == "all"
      ? cakes
      : cakes.filter((c) => c.categories.includes(currentCategory));

  return (
    <section id="catalog" className="section">
      <div className="container">
        <Reveal className="section-title" delay={0.2} direction="x" offset={60}>
          <h2>Наши торты</h2>
        </Reveal>
        <Reveal className="section-sub" delay={0.5} direction="x" offset={45}>
          <p>
            Каждый торт собираем под ваш праздник: меняем начинку, размер и
            оформление.<em>Количество слоёв</em> также можно изменить
          </p>
        </Reveal>
        {/*Категории десертов*/}
        <Reveal offset={60} direction="y">
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
        </Reveal>
        {/*Сами торты отсортированные по категориям*/}
        <motion.div className={styles.filteredCakes}>
          <AnimatePresence mode="popLayout">
            {visibleCakes.length > 0 ? (
              visibleCakes.map((cake) => (
                <motion.div
                  key={cake.id}
                  layout
                  className={styles.cakeItem}
                  initial={{ opacity: 0, scale: 0.9, y: 22 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <CakeCard cake={cake} />
                </motion.div>
              ))
            ) : (
              <motion.p
                key="empty"
                className={styles.empty}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Пока нет тортов в этой категории — напишите нам, сделаем под
                заказ!
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Catalog;
