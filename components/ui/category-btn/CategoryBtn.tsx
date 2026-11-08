import React, { FC } from "react";
{
  /*Кнопка для изменения категории торта или деесерта в каталоге изделий*/
}
type CategoryBtnProps = {
  value: string;
  title: string;
  onClick?: () => void;
};
const CategoryBtn: FC<CategoryBtnProps> = ({ value, title, onClick }) => {
  return (
    <button data-value={value} onClick={onClick}>
      {title}
    </button>
  );
};

export default CategoryBtn;
