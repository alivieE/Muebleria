import React from "react";
import s from "./Hero.module.css";
import images from "../../assets/index.js";

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className="container">
        <div className={s.heroDescription}>
          <div className={s.heroDesktop}>
            <p className={s.heroTitle}>Створіть свій ідеальний дім</p>
            <p className={s.heroSubtitle}>
              Відкрийте для себе колекцію стильних та комфортних меблів, які
              перетворять ваш простір. Наша продукція поєднує в собі
              елегантність та функціональність.
            </p>
            <a href="#feedbacks">
              <button  className={s.heroButton}>
              Що про нас думають
            </button>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
