import React from "react";
import images from "../../assets/index.js";
import s from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={s.section}>
      <div className="container">
        <div className={s.containerWrap}>
          <div className={s.descWrap}>
            <p className={s.title}>Про Меблерію</p>
            <p className={s.description}>
              У Меблерії ми прагнемо створювати затишок та функціональність у
              кожному домі. Наша місія - пропонувати високоякісні меблі, що
              поєднують у собі сучасний дизайн, довговічність та доступність. Ми
              віримо, що ідеальний інтер'єр починається з правильних меблів.
            </p>
          </div>
          <div className={s.imageWrap}>
            <img className={s.image} src={images.aboutUs} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
