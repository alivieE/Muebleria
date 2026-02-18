import React, { useState, useEffect } from "react";
import images, { categoriesImg } from "../../../assets/index.js";
import s from "./Categories.module.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://furniture-store-v2.b.goit.study/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <div className={s.description}>
        <p className={s.title}>Наші меблі</p>
        <p className={s.subtitle}>
          Знайдіть ідеальні рішення для вашого інтер'єру
        </p>
      </div>

      <ul className={s.categoriesList}>
        <li key="all" className={s.categoryItem}>
          <p className={s.categoryName}>Всі товари</p>
          <img className={s.categoryImg} src={images.ALLcat} alt="Всі товари" />
        </li>
        {categories.map((category) => (
          <li key={category._id} className={s.categoryItem}>
            <img
              className={s.categoryImg}
              src={categoriesImg[category._id]}
              alt={category.name}
            />
            <p className={s.categoryName}>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
