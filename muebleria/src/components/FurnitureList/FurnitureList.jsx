import React, { useState, useEffect } from "react";
import images, { categoriesImg } from "../../assets/index.js";
import s from "./FurnitureList.module.css";

const FurnitureList = () => {
  const [categories, setCategories] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
    // console.log(categories._id);
    
  useEffect(() => {
    fetch("https://furniture-store-v2.b.goit.study/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://furniture-store-v2.b.goit.study/api/furnitures?page=1&limit=10&category=${activeCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setFurniture(data);
      });
  }, [activeCategory]);
// console.log(activeCategory);
  return (
    <div className="container">
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
            <button
              onClick={() => setActiveCategory("all")}
              className={s.categoryBtn}
            >
              <img
                className={`${s.categoryImg} ${
                  activeCategory === "all" ? s.activeImg : s.categoryImg
                }`}
                src={images.ALLcat}
                alt="Всі товари"
              />
              <p className={s.categoryName}>Всі товари</p>
            </button>
          </li>
          {/* {categories.map((category) => (
            <li key={category._id} className={s.categoryItem}>
              <button
                onClick={() => setActiveCategory(category._id)}
                className={s.categoryBtn}
              >
                <img
                  className={`${s.categoryImg} ${
                    activeCategory === category._id ? s.activeImg : s.categoryImg
                  }`}
                  src={categoriesImg[category._id]}
                  alt={category.name}
                />
                <p className={s.categoryName}>{category.name}</p>
              </button>
            </li>
          ))} */}
          {categories.map((category) => (
            <li key={category._id} className={s.categoryItem}>
              <button
                onClick={() => setActiveCategory(category._id)}
                className={s.categoryBtn}
              >
                <img
                  className={`${s.categoryImg} ${
                    activeCategory === category._id ? s.activeImg : s.categoryImg
                  }`}
                  src={categoriesImg[category._id]}
                  alt={category.name}
                />
                <p className={s.categoryName}>{category.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.furnitureList}>
        <ul>
          {/* {furniture.map((furnitures) => (
            <li key={furnitures._id}>{furnitures.name}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default FurnitureList;
