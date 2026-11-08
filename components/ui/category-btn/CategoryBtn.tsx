import React, { FC } from "react";
import styles from "./CategoryBtn.module.css";
//Кнопка для изменения категории торта или деесерта в каталоге изделий
type CategoryBtnProps = {
  value: string;
  title: string;
  onClick?: () => void;
  isActive: boolean;
};
const CategoryBtn: FC<CategoryBtnProps> = ({
  value,
  title,
  onClick,
  isActive,
}) => {
  return (
    <button
      data-value={value}
      onClick={onClick}
      className={`${styles.categoryBtn} ${isActive ? styles.active : ""}`}
    >
      {title}
    </button>
  );
};

export default CategoryBtn;
