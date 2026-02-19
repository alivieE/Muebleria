import React, { useState, useEffect } from "react";
import images, { categoriesImg } from "../../assets/index.js";
import s from "./FurnitureList.module.css";
import ModalFurniture from "../FurnitureList/ModalFurniture/ModalFurniture.jsx";

const FurnitureList = () => {
  const [categories, setCategories] = useState([]);
  const [furnitures, setFurnitures] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState(false);

  useEffect(() => {
    fetch("https://furniture-store-v2.b.goit.study/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    const url =
      activeCategory === "all"
        ? `https://furniture-store-v2.b.goit.study/api/furnitures?page=1&limit=10`
        : `https://furniture-store-v2.b.goit.study/api/furnitures?page=1&limit=10&category=${activeCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFurnitures(data.furnitures); // ось тут — беремо поле furnitures
      });
  }, [activeCategory]);
  console.log(furnitures);

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
                    activeCategory === category._id
                      ? s.activeImg
                      : s.categoryImg
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
        <ul className={s.furnitureItems}>
          {furnitures.map((furniture) => (
            <li key={furniture._id} className={s.furnitureItem}>
              <img
                className={s.furnitureImg}
                src={furniture.images[0]}
                alt={furniture.name}
              />
              <div className={s.furnitureInfo}>
                <p className={s.furnitureName}>{furniture.name}</p>
                <div className={s.colorContainer}>
                  {furniture.color.map((color, index) => (
                    <div
                      key={index}
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: color,
                        border: "1px solid #ccc",
                      }}
                    />
                  ))}
                </div>
                <p className={s.furnitureName}>{furniture.price} грн</p>
                <button
                  className={s.furnitureDetailsBtn}
                  onClick={() => {
                    document.body.style.overflow = "hidden";
                    setId(furniture._id);
                    setModalOpen(!modalOpen);
                  }}
                >
                  Детальніше
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button href="#" className={s.showMoreBtn}>
          Показати ще
        </button>
      </div>
      {modalOpen && (
        
        <ModalFurniture id={id} setModalOpen={setModalOpen}></ModalFurniture>
      )}
    </div>
  );
};

export default FurnitureList;
